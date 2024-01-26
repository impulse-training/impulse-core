// Logs are records of either impulses (cravings or urges), or applied tactics (actions that we
// take)
import * as yup from 'yup';
import { TimestampLike } from '../utils/TimestampLike';
import { Gameplan, gameplanBaseSchema } from './gameplan';
import { patternSchema, patternUsageSchema } from './pattern';
import { TacticValue, tacticSchema } from './tactic';
import { timestampSchema } from './utils/timestamp';

export type Outcome = 'success' | 'setback' | 'indeterminate';

export type BaseLogValue = WithTypes<typeof BaseLogSchema>;
const BaseLogSchema = yup.object().shape({
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
  allTacticIds: yup.array().of(yup.string()).required(),
  commentCount: yup.number().notRequired(),
  commentsById: yup.object().notRequired(),
  commentsByTacticId: yup.object().notRequired(),
  steps: yup.number().notRequired(),
  tacticIds: yup.array().of(yup.string()).required(),
  gameplan: yup.object().shape({
    main: gameplanBaseSchema.required(),
    success: gameplanBaseSchema.notRequired(),
    setback: gameplanBaseSchema.notRequired(),
  }),
  tactics: yup
    .object()
    .shape({
      [yup.ref('$placeholderKey') as unknown as string]: tacticSchema,
    })
    .required(),
  suggestedTacticIds: yup.array().of(yup.string()).notRequired(),
  isUpdatingSuggestions: yup.boolean().notRequired(),
  supportGroupSuggestedTacticIds: yup
    .object()
    .shape({
      impulse: yup.object().shape({}).required(), // Replace with Record<string, string> if defined
      success: yup.object().shape({}).required(), // Replace with Record<string, string> if defined
      setback: yup.object().shape({}).required(), // Replace with Record<string, string> if defined
      all: yup.object().shape({}).required(), // Replace with Record<string, string> if defined
    })
    .notRequired(),
  tacticUsage: yup.object().shape({}).notRequired(), // Replace with Record<string, PatternUsageSchema> if defined
  tacticData: yup.object().shape({}).notRequired(),
  sharedWithSupportGroupIds: yup.array().of(yup.string()).notRequired(),
});

type WithTypes<T extends yup.ISchema<unknown>> = Omit<
  yup.InferType<T>,
  'gameplan' | 'tactics'
> & {
  createdAt: TimestampLike;
  updatedAt: TimestampLike;
  startTime: TimestampLike;
  gameplan: {
    main: Gameplan;
    success?: Gameplan;
    setback?: Gameplan;
  };
  tactics: Record<string, TacticValue>;
};

export type ImpulseLogValue = WithTypes<typeof impulseLogSchema>;

export function logIsImpulseLog(log: LogValue): log is ImpulseLogValue {
  return log.type === 'impulse';
}
const impulseLogSchema = BaseLogSchema.concat(
  yup.object().shape({
    type: yup.mixed<'impulse'>().oneOf(['impulse']).required(),
    setAsActiveImpulse: yup.boolean().notRequired(),
    pressCount: yup.number().notRequired(),
    outcome: yup
      .mixed<'success' | 'setback' | 'indeterminate'>()
      .oneOf(['success', 'setback', 'indeterminate'])
      .required(),
    isDisplayable: yup.boolean().oneOf([true]).required(),
    buttonPressSecondsSinceEpoch: yup.number().notRequired(),
    gameplans: yup.object().shape({}).required(), // Replace with ProfileValue['gameplans'] schema if defined
    patterns: yup
      .object()
      .shape({
        [yup.ref('$placeholderKey') as unknown as string]: patternSchema,
      })
      .required(),
    patternId: yup.string().required(),
    patternIds: yup.array().of(yup.string()).required(),
    patternUsage: yup
      .object()
      .shape(
        // Use a placeholder key with yup.lazy to apply the patternSchema to all values
        {
          [yup.ref('$placeholderKey') as unknown as string]: patternUsageSchema,
        }
      )
      .required()
      .noUnknown(),
    debriefNotes: yup.string().notRequired(),
    debriefReminderSentAt: yup.mixed().notRequired(),
    debriefedAt: yup.mixed().notRequired(),
  })
);

export type LocationLogValue = WithTypes<typeof locationLogSchema>;
export function logIsLocationLog(log: LogValue): log is LocationLogValue {
  return log.type === 'location';
}
const locationLogSchema = BaseLogSchema.concat(
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
const timeLogSchema = BaseLogSchema.concat(
  yup.object().shape({
    type: yup.mixed<'time'>().oneOf(['time']).required(),
    isDisplayable: yup.boolean().oneOf([true]).required(),
    gameplanId: yup.string().required(),
  })
);

export type DebriefLogValue = WithTypes<typeof debriefLogSchema>;

type T = DebriefLogValue['patterns'];
export function logIsDebriefLog(log: LogValue): log is DebriefLogValue {
  return log.type === 'debrief';
}
const debriefLogSchema = BaseLogSchema.concat(
  yup.object().shape({
    type: yup.mixed<'debrief'>().oneOf(['debrief']).required(),
    outcome: yup
      .mixed()
      .oneOf(['success', 'setback', 'indeterminate'])
      .required(),
    patterns: yup
      .object()
      .shape({
        [yup.ref('$placeholderKey') as unknown as string]: patternSchema,
      })
      .required(),
    isDisplayable: yup.boolean().oneOf([true]).required(),
    gameplanId: yup.string().required(),
    patternIds: yup.array().of(yup.string()).required(),
    patternUsage: yup.object().shape({}).required(), // Replace with Record<string, PatternUsageSchema> if defined
    patternUsageEntries: yup.object().shape({}).required(), // Replace with Record<string, Record<string, PatternUsageSchema>> if defined
  })
);

export type MotionLogValue = WithTypes<typeof motionLogSchema>;
export function logIsMotionLog(log: LogValue): log is MotionLogValue {
  return log.type === 'motion';
}
const motionLogSchema = BaseLogSchema.concat(
  yup.object().shape({
    type: yup.mixed<'motion'>().oneOf(['motion']).required(),
    isDisplayable: yup.boolean().oneOf([false]).required(),
  })
);

export type ButtonLogValue = WithTypes<typeof buttonLogSchema>;
export function logIsButtonLog(log: LogValue): log is ButtonLogValue {
  return log.type === 'button';
}
const buttonLogSchema = BaseLogSchema.concat(
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
    case 'debrief':
      return debriefLogSchema;
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
