// Logs are records of either impulses (cravings or urges), or applied tactics (actions that we
// take)
import * as yup from 'yup';
import { TimestampLike } from '../utils/TimestampLike';
import { gameplanSchema, strategy } from './gameplan';
import { patternSchema } from './pattern';
import { tacticSchema } from './tactic';
import { requiredStringArray } from './utils/array';
import { objectOf, optionalObjectOf } from './utils/objectOf';
import { timestampSchema } from './utils/timestamp';

type Outcome = 'success' | 'setback' | 'indeterminate';

export type BaseLogValue = WithTypes<typeof baseLogSchema>;
const baseLogSchema = yup.object().shape({
  uid: yup.string().required(),
  createdAt: timestampSchema.required(),
  updatedAt: timestampSchema.required(),
  startTime: timestampSchema.required(),
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
    yup
      .object()
      .shape({ tacticTitle: yup.string().required(), comments: yup.array() })
  ),
  steps: yup.number().notRequired(),
  // The heart of the log is the strategy - the tactics that should be shown to the user (including
  // conditional tactics). The main property is required, which is the default. However, impulse
  // logs also have a debrief strategy. Additionally, we store tactics by id, so the log always has
  // the data to render the tactics from the strategy, even if those tactics are deleted or modified
  // later.
  strategy: yup.object({
    main: strategy.required(),
    impulseDebrief: strategy.notRequired(),
  }),
  tacticsById: objectOf(tacticSchema),
  seenTacticIds: requiredStringArray,
  completedTacticIds: requiredStringArray,
  tacticLikes: optionalObjectOf(yup.boolean().required()),
  tacticData: optionalObjectOf(
    yup.object({
      value: yup.number().required(),
      unit: yup.string().required(),
      formattedValue: yup.string().required(),
      isTotal: yup.boolean().notRequired(),
    })
  ),
  sharedWithSupportGroupIds: yup
    .array()
    .of(yup.string().required())
    .notRequired(),
});
// This is important to prevent typescript generating a 40k line file :/

type WithTypes<T extends yup.ISchema<unknown>> = yup.InferType<T> & {
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
    // In addition to the strategy field, which is the set of tactics for the currently-selected
    // pattern, we also store the entire "gameplan" on impulse log documents, which is copied from
    // the user's gameplan document at the time.
    gameplan: gameplanSchema,
    outcome: yup
      .mixed<Outcome>()
      .oneOf(['success', 'setback', 'indeterminate']),
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
    gameplanId: yup.string().required(),
  })
);

export type DebriefLogValue = WithTypes<typeof dayDebriefLogSchema>;

export function logIsDebriefLog(log: LogValue): log is DebriefLogValue {
  return log.type === 'dayDebrief';
}
const dayDebriefLogSchema = baseLogSchema.concat(
  yup.object().shape({
    type: yup.mixed<'dayDebrief'>().oneOf(['dayDebrief']).required(),
    patternsById: objectOf(patternSchema),
    isDisplayable: yup.boolean().oneOf([true]).required(),
    gameplanId: yup.string().required(),
    tacticDataEntries: objectOf(yup.mixed()), // Replace with Record<string, Record<string, PatternUsageSchema>> if defined
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

export type ButtonLogValue = WithTypes<typeof buttonLogSchema>;
export function logIsButtonLog(log: LogValue): log is ButtonLogValue {
  return log.type === 'button';
}
const buttonLogSchema = baseLogSchema.concat(
  yup.object().shape({
    type: yup.mixed<'button'>().oneOf(['button']).required(),
    isDisplayable: yup.boolean().oneOf([false]).required(),
    isDeviceConnected: yup.boolean().required(),
    characteristics: yup.object().shape({}).required(),
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
    case 'dayDebrief':
      return dayDebriefLogSchema;
    case 'motion':
      return motionLogSchema;
    case 'button':
      return buttonLogSchema;
    default:
      throw new yup.ValidationError(`Unknown type: ${value.type}`);
  }
});

export type LogValue =
  | ImpulseLogValue
  | LocationLogValue
  | TimeLogValue
  | DebriefLogValue
  | MotionLogValue
  | ButtonLogValue;
