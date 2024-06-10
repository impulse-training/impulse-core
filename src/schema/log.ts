// Logs are records of either impulses (cravings or urges), or applied tactics (actions that we
// take)
import * as yup from 'yup';
import { TimestampLike } from '../utils/firestore/TimestampLike';
import { folderSchema } from './strategy/folder';
import { TacticsById, tacticInfoSchema } from './strategy/tactic';
import { optionalStringArray, requiredStringArray } from './utils/array';
import { objectOf, optionalObjectOf } from './utils/objectOf';
import { optionalTimestampSchema, timestampSchema } from './utils/timestamp';

export const questionSchema = yup.object({
  prompt: yup.string(),
  type: yup
    .mixed<'slider' | 'time' | 'counter'>()
    .oneOf(['slider', 'time', 'counter'])
    .required(),
  response: yup.number(),
});
export type QuestionValue = yup.InferType<typeof questionSchema>;

export const tacticDataSchema = yup.object({
  value: yup.number(),
  unit: yup
    .mixed<'time' | 'custom' | 'impulse'>()
    .oneOf(['time', 'custom', 'impulse'])
    .required(),
  customUnit: yup.string(),
  optionId: yup.string().nullable(),
  optionLabel: yup.string(),
  optionColor: yup.string(),
  optionTextColor: yup.string(),
  isCompleted: yup.boolean(),
  nextStrategiesPath: yup.string(),
  formattedValue: yup.string().required(),
  lowEmoji: yup.string().notRequired(),
  highEmoji: yup.string().notRequired(),
});
export type TacticData = yup.InferType<typeof tacticDataSchema>;

export type BaseLogValue = WithTypes<typeof baseLogSchema>;
const baseLogSchema = yup.object().shape({
  profileId: yup.string().required(),
  createdAt: optionalTimestampSchema,
  updatedAt: optionalTimestampSchema,
  startTime: timestampSchema,
  timezone: yup.string().required(),
  issueId: yup.string().nullable(),
  folders: yup.array().of(folderSchema).required(),
  parentIssueIds: optionalStringArray,

  // TODO: These represent seen tactics, but this may need some clarification
  tacticIds: requiredStringArray,
  tacticsById: tacticInfoSchema,
  tacticLikes: optionalObjectOf(yup.boolean().required()),
  tacticData: objectOf(tacticDataSchema),
});
// This is important to prevent typescript generating a 40k line file :/

type WithTypes<T extends yup.ISchema<unknown>> = Omit<
  yup.InferType<T>,
  'createdAt' | 'updatedAt' | 'startTime' | 'tacticsById'
> & {
  createdAt: TimestampLike;
  updatedAt: TimestampLike;
  startTime: TimestampLike;
  tacticsById: TacticsById;
};

export type ImpulseLogValue = WithTypes<typeof impulseLogSchema>;

export function logIsImpulseLog(log: LogValue): log is ImpulseLogValue {
  return log.type === 'impulse';
}

const impulseLogSchema = baseLogSchema.concat(
  yup.object().shape({
    type: yup.mixed<'impulse'>().oneOf(['impulse']).required(),
    debriefAfter: optionalTimestampSchema,
    debriefReminderSentAt: optionalTimestampSchema,
    debriefedAt: optionalTimestampSchema,
  })
);

export type LocationLogValue = WithTypes<typeof locationLogSchema>;
export function logIsLocationLog(log: LogValue): log is LocationLogValue {
  return log.type === 'location';
}
const locationLogSchema = baseLogSchema.concat(
  yup.object().shape({
    type: yup.mixed<'location'>().oneOf(['location']).required(),
    locationId: yup.string().required(),
    isDisplayable: yup.boolean().oneOf([true]).required(),
    locationName: yup.string().required(),
    locationMode: yup.mixed().oneOf(['enter', 'exit']).required(),
  })
);

export type TimeLogValue = WithTypes<typeof timeLogSchema>;
export function logIsTimeLog(log: LogValue): log is TimeLogValue {
  return log.type === 'time';
}
const timeLogSchema = baseLogSchema.concat(
  yup.object().shape({
    type: yup.mixed<'time'>().oneOf(['time']).required(),
  })
);

export const logSchema = yup.lazy(value => {
  switch (value.type) {
    case 'impulse':
      return impulseLogSchema;
    case 'location':
      return locationLogSchema;
    case 'time':
      return timeLogSchema;
    default:
      throw new yup.ValidationError(`Unknown type: ${value.type}`);
  }
});

export type LogValue = ImpulseLogValue | LocationLogValue | TimeLogValue;
