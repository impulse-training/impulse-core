// Logs are records of either impulses (cravings or urges), or applied tactics (actions that we
// take)
import * as yup from 'yup';
import { TacticsById, tacticInfoSchema } from './strategy/tactic';
import { optionalStringArray, requiredStringArray } from './utils/array';
import { objectOf, optionalObjectOf } from './utils/objectOf';
import { optionalTimestampSchema, timestampSchema } from './utils/timestamp';

export const tacticDataSchema = yup.object({
  value: yup.number(),
  unit: yup
    .mixed<'time' | 'text' | 'custom'>()
    .oneOf(['time', 'text', 'custom'])
    .required(),
  setAt: timestampSchema,
  customUnit: yup.string(),
  optionId: yup.string().nullable(),
  optionLabel: yup.string(),
  optionColor: yup.string(),
  optionTextColor: yup.string(),
  isCompleted: yup.boolean(),
  formattedValue: yup.string().required(),
});
export type TacticData = yup.InferType<typeof tacticDataSchema>;

const messageSchema = yup.object({
  content: yup.string().required(),
  role: yup
    .mixed<'system' | 'user' | 'assistant'>()
    .oneOf(['system', 'user', 'assistant'])
    .required(),
});
export type MessageValue = yup.InferType<typeof messageSchema>;

export type BaseLogValue = WithTypes<typeof baseLogSchema>;
const baseLogSchema = yup.object().shape({
  profileId: yup.string().required(),
  createdAt: optionalTimestampSchema,
  updatedAt: optionalTimestampSchema,
  startTime: timestampSchema,
  timezone: yup.string().required(),
  issueId: yup.string().nullable(),
  parentIssueIds: optionalStringArray,
  encryptedPhoneNumber: yup.string(),
  messages: yup.array().of(messageSchema),

  // TODO: These represent seen tactics, but this may need some clarification
  tacticIds: requiredStringArray,
  tacticsById: tacticInfoSchema,
  tacticLikes: optionalObjectOf(yup.boolean().required()),
  tacticData: objectOf(tacticDataSchema),
});
// This is important to prevent typescript generating a 40k line file :/

type WithTypes<T extends yup.ISchema<unknown>> = Omit<
  yup.InferType<T>,
  'tacticsById'
> & {
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
