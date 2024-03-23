import * as yup from 'yup';
import { optionalStringArray, requiredStringArray } from './array';

// A strategy is a set of tactics. Suggestions are optional. We export a base strategy schema, which
// consists only of tactics, but also time and location strategies, which include information about
// when they should be used.
export const strategySchema = yup.object({
  tacticIds: requiredStringArray,
  suggestedTacticIds: optionalStringArray,
});
export type Strategy = yup.InferType<typeof strategySchema>;

export const timeStrategySchema = strategySchema.shape({
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
export type TimeStrategy = yup.InferType<typeof timeStrategySchema>;

export const locationStrategySchema = strategySchema.shape({
  locationId: yup.string().required(),
  mode: yup.mixed<'enter' | 'exit'>().oneOf(['enter', 'exit']).required(),
  title: yup.string().required(),
});
export type LocationStrategy = yup.InferType<typeof locationStrategySchema>;
