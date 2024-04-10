// Logs are records of either impulses (cravings or urges), or applied tactics (actions that we
// take)
import * as yup from 'yup';
import { TimestampLike } from '../utils/firestore/TimestampLike';
import { commentSchema } from './comment';
import { patternSchema } from './pattern';
import { strategySchema } from './strategy';
import { tacticSchema } from './tactic';
import { optionalStringArray, requiredStringArray } from './utils/array';
import { objectOf, optionalObjectOf } from './utils/objectOf';
import { optionalTimestampSchema, timestampSchema } from './utils/timestamp';

type Outcome = 'success' | 'setback';

export const tacticDataSchema = yup.object({
  value: yup.mixed<string | number>().required(),
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
  commentsById: yup.object().notRequired(), // TODO: introduce comment schema
  commentsByTacticId: optionalObjectOf(
    yup.object().shape({
      tacticTitle: yup.string().required(),
      commentsById: objectOf(commentSchema),
    })
  ),
  strategyIds: requiredStringArray,
  seenTacticsById: objectOf(tacticSchema),
  completedTacticIds: requiredStringArray,
  tacticLikes: optionalObjectOf(yup.boolean().required()),
  tacticData: optionalObjectOf(tacticDataSchema),
  sharedWithSupportGroupIds: optionalStringArray,
});
// This is important to prevent typescript generating a 40k line file :/

type WithTypes<T extends yup.ISchema<unknown>> = Omit<
  yup.InferType<T>,
  'createdAt' | 'updatedAt' | 'startTime'
> & {
  createdAt: TimestampLike;
  updatedAt: TimestampLike;
  startTime: TimestampLike;
};

export type ImpulseLogValue = WithTypes<typeof impulseLogSchema>;

export function logIsImpulseLog(log: LogValue): log is ImpulseLogValue {
  return log.type === 'impulse';
}

const impulseLogSchema = baseLogSchema.concat(
  yup.object().shape({
    type: yup.mixed<'impulse'>().oneOf(['impulse']).required(),
    setAsActiveImpulse: yup.boolean().notRequired(),
    pressCount: yup.number().notRequired(),
    isDisplayable: yup.boolean().oneOf([true]).required(),
    buttonPressSecondsSinceEpoch: yup.number().notRequired(),
    // In addition to the tacticIds field, which is the set of tactics for the currently-selected
    // pattern, we also store the entire "gameplan" on impulse log documents, which is copied from
    // the user's gameplan document at the time.
    strategiesByPatternId: objectOf(strategySchema),
    outcome: yup.mixed<Outcome>().oneOf(['success', 'setback']),
    patternId: yup.string().required(),
    patternsById: objectOf(patternSchema),
    debriefNotes: yup.string().notRequired(),
    debriefReminderSentAt: yup.mixed().notRequired(),
    debriefedAt: yup.mixed().notRequired(),
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

export type MotionLogValue = WithTypes<typeof motionLogSchema>;
export function logIsMotionLog(log: LogValue): log is MotionLogValue {
  return log.type === 'motion';
}
const motionLogSchema = baseLogSchema.concat(
  yup.object().shape({
    type: yup.mixed<'motion'>().oneOf(['motion']).required(),
    isDisplayable: yup.boolean().oneOf([false]).required(),
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
    case 'motion':
      return motionLogSchema;
    default:
      throw new yup.ValidationError(`Unknown type: ${value.type}`);
  }
});

export type LogValue =
  | ImpulseLogValue
  | LocationLogValue
  | TimeLogValue
  | MotionLogValue;
