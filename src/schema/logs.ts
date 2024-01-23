// Logs are records of either impulses (cravings or urges), or applied tactics (actions that we
// take)
export type Outcome = 'success' | 'setback' | 'indeterminate';

import * as yup from 'yup';
import { patternUsageSchema, patternValueSchema } from './pattern';

export type BaseLogValue = yup.InferType<typeof BaseLogValueSchema>;
const BaseLogValueSchema = yup.object().shape({
  uid: yup.string().required(),
  createdAt: yup.mixed().required(),
  updatedAt: yup.mixed().required(),
  startTime: yup.mixed().required(),
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
    main: yup.mixed().required(), // Replace with GameplanSchema if defined
    success: yup.mixed().notRequired(), // Replace with GameplanSchema if defined
    setback: yup.mixed().notRequired(), // Replace with GameplanSchema if defined
  }),
  tactics: yup.object().shape({}).required(), // Replace with Record<string, TacticValueSchema> if defined
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

export type ImpulseLogValue = yup.InferType<typeof impulseLogValueSchema>;
export function logIsImpulseLog(log: LogValue): log is ImpulseLogValue {
  return log.type === 'impulse';
}
const impulseLogValueSchema = BaseLogValueSchema.concat(
  yup.object().shape({
    type: yup.mixed().oneOf(['impulse']).required(),
    setAsActiveImpulse: yup.boolean().notRequired(),
    pressCount: yup.number().notRequired(),
    outcome: yup
      .mixed()
      .oneOf(['success', 'setback', 'indeterminate'])
      .required(),
    isDisplayable: yup.boolean().oneOf([true]).required(),
    buttonPressSecondsSinceEpoch: yup.number().notRequired(),
    gameplans: yup.object().shape({}).required(), // Replace with ProfileValue['gameplans'] schema if defined
    patterns: yup
      .object()
      .shape({
        [yup.ref('$placeholderKey') as unknown as string]: patternValueSchema,
      })
      .required(),
    patternId: yup.string().required(),
    patternIds: yup.array().of(yup.string()).required(),
    patternUsage: yup
      .object()
      .shape(
        // Use a placeholder key with yup.lazy to apply the patternValueSchema to all values
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

export type LocationLogValue = yup.InferType<typeof locationLogValueSchema>;
export function logIsLocationLog(log: LogValue): log is LocationLogValue {
  return log.type === 'location';
}
const locationLogValueSchema = BaseLogValueSchema.concat(
  yup.object().shape({
    type: yup.mixed().oneOf(['location']).required(),
    locationId: yup.string().required(),
    isDisplayable: yup.boolean().oneOf([true]).required(),
    locationName: yup.string().required(),
    locationMode: yup.mixed().oneOf(['enter', 'exit']).required(),
  })
);

export type TimeLogValue = yup.InferType<typeof timeLogValueSchema>;
export function logIsTimeLog(log: LogValue): log is TimeLogValue {
  return log.type === 'time';
}
const timeLogValueSchema = BaseLogValueSchema.concat(
  yup.object().shape({
    type: yup.mixed().oneOf(['time']).required(),
    isDisplayable: yup.boolean().oneOf([true]).required(),
    gameplanId: yup.string().required(),
  })
);

export type DebriefLogValue = yup.InferType<typeof debriefLogValueSchema>;
export function logIsDebriefLog(log: LogValue): log is DebriefLogValue {
  return log.type === 'debrief';
}
const debriefLogValueSchema = BaseLogValueSchema.concat(
  yup.object().shape({
    type: yup.mixed().oneOf(['debrief']).required(),
    outcome: yup
      .mixed()
      .oneOf(['success', 'setback', 'indeterminate'])
      .required(),
    patterns: yup
      .object()
      .shape({
        [yup.ref('$placeholderKey') as unknown as string]: patternValueSchema,
      })
      .required(),
    isDisplayable: yup.boolean().oneOf([true]).required(),
    gameplanId: yup.string().required(),
    patternIds: yup.array().of(yup.string()).required(),
    patternUsage: yup.object().shape({}).required(), // Replace with Record<string, PatternUsageSchema> if defined
    patternUsageEntries: yup.object().shape({}).required(), // Replace with Record<string, Record<string, PatternUsageSchema>> if defined
  })
);

export type MotionLogValue = yup.InferType<typeof motionLogValueSchema>;
export function logIsMotionLog(log: LogValue): log is MotionLogValue {
  return log.type === 'motion';
}
const motionLogValueSchema = BaseLogValueSchema.concat(
  yup.object().shape({
    type: yup.mixed().oneOf(['motion']).required(),
    isDisplayable: yup.boolean().oneOf([false]).required(),
  })
);

export type ButtonLogValue = yup.InferType<typeof buttonLogValueSchema>;
export function logIsButtonLog(log: LogValue): log is ButtonLogValue {
  return log.type === 'button';
}
const buttonLogValueSchema = BaseLogValueSchema.concat(
  yup.object().shape({
    type: yup.mixed().oneOf(['button']).required(),
    isDisplayable: yup.boolean().oneOf([false]).required(),
    isDeviceConnected: yup.boolean().required(),
    characteristics: yup.object().shape({}).required(),
  })
);

const LogValueSchema = yup.lazy(value => {
  switch (value.type) {
    case 'impulse':
      return impulseLogValueSchema;
    case 'location':
      return locationLogValueSchema;
    case 'time':
      return timeLogValueSchema;
    case 'debrief':
      return debriefLogValueSchema;
    case 'motion':
      return motionLogValueSchema;
    case 'button':
      return buttonLogValueSchema;
    default:
      throw new yup.ValidationError(`Unknown type: ${value.type}`);
  }
});

export type LogValue = yup.InferType<typeof LogValueSchema>;
