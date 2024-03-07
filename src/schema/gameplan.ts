import * as yup from 'yup';
import { TimestampLike } from '../utils/TimestampLike';
import { patternSchema } from './pattern';
import { TacticValue, WithTacticsById, tacticSchema } from './tactic';
import { optionalStringArray, requiredStringArray } from './utils/array';
import { objectOf, optionalObjectOf } from './utils/objectOf';
import { optionalTimestampSchema } from './utils/timestamp';

// Used to conditionally show tactics based on the value of a response. E.g. I watched more than 10
// hours of YouTube: activate rescue mode.
const conditional = yup.object({
  condition: yup
    .mixed<'eq' | 'gt' | 'lt' | 'keyword'>()
    .oneOf(['eq', 'gt', 'lt', 'keyword'])
    .required(),
  value: yup.mixed().required(),
  ids: requiredStringArray,
});

// A gameplan is a set of tactics and when they should be used. Of these properties, only tacticIds
// is required.
export const strategySchema = yup.object({
  tacticIds: requiredStringArray,
  suggestedTacticIds: optionalStringArray,
  conditionalTacticIds: yup.array().of(conditional),
});
export type Strategy = yup.InferType<typeof strategySchema>;

export type TimeRoutine = yup.InferType<typeof timeRoutineSchema>;
export const timeRoutineSchema = strategySchema.shape({
  weekdays: yup
    .array()
    .of(
      yup
        .number()
        .integer()
        .min(1, 'Weekday must be a number between 1 and 7')
        .max(7, 'Weekday must be a number between 1 and 7')
        .required('Weekday is required')
    )
    .required()
    .min(1, 'Please select at least one day'),
  hour: yup.number().required(),
  minute: yup.number().required(),
  title: yup.string().required(),
});

export type LocationRoutine = yup.InferType<typeof locationRoutineSchema>;
export const locationRoutineSchema = strategySchema.shape({
  locationId: yup.string().required(),
  mode: yup.mixed<'enter' | 'exit'>().oneOf(['enter', 'exit']).required(),
  title: yup.string().required(),
});

// This really represents the user's "gameplans"
export type GameplanValue = WithTypes<typeof gameplanSchema>;
export const gameplanSchema = yup.object().shape({
  uid: yup.string().required(),
  name: yup.string().notRequired(),
  isFeatured: yup.boolean().notRequired(),
  createdAt: optionalTimestampSchema,
  updatedAt: optionalTimestampSchema,
  parentIssueIds: optionalStringArray,
  recommendationsCount: yup.number(),
  timezone: yup.string().required(),
  // Strategies - these are the sequences of tactics to try, including conditional tactics
  impulse: objectOf(strategySchema),
  impulseDebrief: objectOf(strategySchema),
  // Daily recap
  recap: timeRoutineSchema.optional().default(undefined),
  // These are the strategies for scheduled times of day...
  time: optionalObjectOf(timeRoutineSchema.required()),
  // ...Or when arriving at or leaving a location
  location: optionalObjectOf(locationRoutineSchema.required()),
  // Data - we keep copies of relevant data on the gameplan document, for performance reasons
  tacticsById: objectOf(tacticSchema) as any,
  patternsById: objectOf(patternSchema),
  scheduledNotificationIds: optionalStringArray,
  dontGenerateRecapTacticsForTacticIds: optionalStringArray,
});

type WithTypes<T extends yup.ISchema<unknown>> = WithTacticsById<
  yup.InferType<T>
> & {
  createdAt: TimestampLike;
  updatedAt: TimestampLike;
  tacticsById: Record<string, TacticValue>;
};

export const SHORT_DAYS = {
  1: 'Sun',
  2: 'Mon',
  3: 'Tue',
  4: 'Wed',
  5: 'Thu',
  6: 'Fri',
  7: 'Sat',
};

export const LONG_DAYS = [
  '', // This is intentional, as we don't have a 0-indexed day
  'Sundays',
  'Mondays',
  'Tuesdays',
  'Wednesdays',
  'Thursdays',
  'Fridays',
  'Saturdays',
];
