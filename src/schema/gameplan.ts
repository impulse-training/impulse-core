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
export const strategy = yup.object({
  tacticIds: requiredStringArray,
  suggestedTacticIds: requiredStringArray,
  conditionalTacticIds: optionalObjectOf(
    yup.array().of(conditional).required()
  ),
});
export type Strategy = yup.InferType<typeof strategy>;

export type TimeRoutine = yup.InferType<typeof timeRoutineSchema>;
export const timeRoutineSchema = strategy.shape({
  weekdays: yup
    .array()
    .of(
      yup
        .number()
        .min(0, 'Weekday must be a number between 0 and 6')
        .max(6, 'Weekday must be a number between 0 and 6')
        .required('Weekday is required')
    )
    .required()
    .min(1, 'At least one weekday is required'),
  hour: yup.number().required(),
  minute: yup.number().required(),
  title: yup.string().required(),
});

export type LocationRoutine = yup.InferType<typeof locationRoutineSchema>;
export const locationRoutineSchema = strategy.shape({
  locationKey: yup.string().required(),
  mode: yup.mixed<'enter' | 'exit'>().oneOf(['enter', 'exit']).required(),
  title: yup.string().required(),
});

// This really represents the user's "gameplans"
export type GameplanValue = WithTypes<typeof gameplanSchema>;
export const gameplanSchema = yup.object().shape({
  uid: yup.string().required(),
  createdAt: optionalTimestampSchema,
  updatedAt: optionalTimestampSchema,
  parentIssueIds: optionalStringArray,
  recommendationsCount: yup.number(),
  timezone: yup.string().required(),
  // Strategies - these are the sequences of tactics to try, including conditional tactics
  impulse: objectOf(strategy),
  impulseDebrief: objectOf(strategy),

  dayDebrief: yup.lazy(value => (value ? timeRoutineSchema : yup.mixed())),
  // These are the strategies for scheduled times of day...
  time: optionalObjectOf(timeRoutineSchema.required()),
  // ...Or when arriving at a location
  location: optionalObjectOf(locationRoutineSchema.required()),
  // Data - we keep copies of relevant data on the gameplan document, for performance reasons
  tacticsById: objectOf(tacticSchema) as any,
  patternsById: objectOf(patternSchema),
  scheduledNotificationIds: optionalStringArray,
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
  '',
  'Sundays',
  'Mondays',
  'Tuesdays',
  'Wednesdays',
  'Thursdays',
  'Fridays',
  'Saturdays',
];
