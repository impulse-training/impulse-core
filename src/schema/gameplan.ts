import * as yup from 'yup';
import { TimestampLike } from '../utils/TimestampLike';
import { patternSchema } from './pattern';
import { routineSchema } from './routine';
import { tacticSchema } from './tactic';
import { requiredStringArray } from './utils/array';
import { objectOf, optionalObjectOf } from './utils/objectOf';
import { timestampSchema } from './utils/timestamp';

// Used to conditionally show tactics based on the value of a response. E.g. I watched more than 10
// hours of YouTube: activate rescue mode.
const conditional = yup.object({
  condition: yup
    .mixed<'eq' | 'gt' | 'lt' | 'keyword'>()
    .oneOf(['eq', 'gt', 'lt', 'keyword'])
    .required(),
  value: yup.mixed().required(),
  ids: yup.array().of(yup.string().required()).required(),
});

// A gameplan is a set of tactics and when they should be used. Of these properties, only tacticIds
// is required.
export const strategy = yup.object({
  tacticIds: requiredStringArray,
  suggestedTacticIds: requiredStringArray,
  conditionalTacticIds: optionalObjectOf(yup.array().of(conditional)),
});

export type Strategy = yup.InferType<typeof strategy>;

// This really represents the user's "gameplans"
export type GameplanValue = WithTypes<typeof gameplanSchema>;
export const gameplanSchema = yup.object().shape({
  uid: yup.string().required(),
  createdAt: timestampSchema.required(),
  updatedAt: timestampSchema.required(),
  // Strategies - these are the sequences of tactics to try, including conditional tactics
  impulse: objectOf(strategy),
  impulseDebrief: objectOf(strategy),
  routine: objectOf(strategy),
  // Data - we keep copies of relevant data on the gameplan document, for performance reasons
  tacticsById: objectOf(tacticSchema),
  routinesById: objectOf(routineSchema),
  patternsById: objectOf(patternSchema),
});

type WithTypes<T extends yup.ISchema<unknown>> = yup.InferType<T> & {
  createdAt: TimestampLike;
  updatedAt: TimestampLike;
};
