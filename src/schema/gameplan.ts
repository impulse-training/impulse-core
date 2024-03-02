import * as yup from 'yup';
import { TimestampLike } from '../utils/TimestampLike';
import { patternSchema } from './pattern';
import { TacticValue, WithTacticsById, tacticSchema } from './tactic';
import {
  optionalStringArray,
  requiredArrayOf,
  requiredStringArray,
} from './utils/array';
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
  conditionalTacticIds: optionalObjectOf(requiredArrayOf(conditional)),
});

export const timeStrategy = yup.object({
  weekdays: requiredArrayOf(yup.number().required()),
  hour: yup.number().required(),
  minute: yup.number().required(),
  title: yup.string().required(),
  strategy,
});

export const locationStrategy = yup.object({
  locationKey: yup.string().required(),
  mode: yup.mixed<'enter' | 'exit'>().oneOf(['enter', 'exit']).required(),
  title: yup.string().required(),
  strategy,
});

export type Strategy = yup.InferType<typeof strategy>;

// This really represents the user's "gameplans"
export type GameplanValue = WithTypes<typeof gameplanSchema>;
export const gameplanSchema = yup.object().shape({
  uid: yup.string().required(),
  createdAt: optionalTimestampSchema,
  updatedAt: optionalTimestampSchema,
  parentIssueIds: optionalStringArray,
  recommendationsCount: yup.number(),
  // Strategies - these are the sequences of tactics to try, including conditional tactics
  impulse: objectOf(strategy),
  impulseDebrief: objectOf(strategy),

  dayDebrief: timeStrategy.optional(),
  // These are the strategies for scheduled times of day...
  time: requiredArrayOf(timeStrategy.required()),
  // ...Or when arriving at a location
  locations: requiredArrayOf(locationStrategy.required()),
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
