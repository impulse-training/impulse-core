// Logs are records of either impulses (cravings or urges), or applied tactics (actions that we
// take)
import * as yup from 'yup';
import { TimestampLike } from '../utils/firestore/TimestampLike';
import { commentSchema } from './comment';
import {
  TacticsByIdWithStrategy,
  tacticInfoWithStrategySchema,
} from './tactic';
import { optionalStringArray, requiredStringArray } from './utils/array';
import { documentReferenceSchema } from './utils/firestore';
import { objectOf, optionalObjectOf } from './utils/objectOf';
import { optionalTimestampSchema, timestampSchema } from './utils/timestamp';

export const tacticDataSchema = yup.object({
  value: yup.number(),
  unit: yup.mixed<'time' | 'custom'>().oneOf(['time', 'custom']).required(),
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
  location: yup.object().shape({
    latitude: yup.number(),
    longitude: yup.number(),
    altitude: yup.number(),
    accuracy: yup.number(),
    altitudeAccuracy: yup.number(),
    heading: yup.number(),
    speed: yup.number(),
  }),
  locationIsFetching: yup.boolean().required(),
  locationFormatted: yup.string().notRequired(),
  commentCount: yup.number().notRequired(),
  commentsById: objectOf(commentSchema),
  commentsByTacticId: optionalObjectOf(
    yup.object().shape({
      tacticTitle: yup.string().required(),
      commentsById: objectOf(commentSchema),
    })
  ),
  strategiesPath: yup.string().required(),

  // TODO: These represent seen tactics, but this may need some clarification
  tacticIds: requiredStringArray,
  tacticsById: tacticInfoWithStrategySchema,
  tacticLikes: optionalObjectOf(yup.boolean().required()),
  tacticData: objectOf(tacticDataSchema),
  sharedWithSupportGroupIds: optionalStringArray,
});
// This is important to prevent typescript generating a 40k line file :/

type WithTypes<T extends yup.ISchema<unknown>> = Omit<
  yup.InferType<T>,
  'createdAt' | 'updatedAt' | 'startTime' | 'tacticsById'
> & {
  createdAt: TimestampLike;
  updatedAt: TimestampLike;
  startTime: TimestampLike;
  tacticsById: TacticsByIdWithStrategy;
};

export type ImpulseLogValue = WithTypes<typeof impulseLogSchema>;

export function logIsImpulseLog(log: LogValue): log is ImpulseLogValue {
  return log.type === 'impulse';
}

const impulseLogSchema = baseLogSchema.concat(
  yup.object().shape({
    type: yup.mixed<'impulse'>().oneOf(['impulse']).required(),
    setAsActiveImpulse: yup.boolean().notRequired(),
    isDisplayable: yup.boolean().oneOf([true]).required(),
    debriefTactic: documentReferenceSchema,
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
    isDisplayable: yup.boolean().oneOf([true]).required(),
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
