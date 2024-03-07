import * as yup from 'yup';
import { optionalStringArray, requiredStringArray } from '../utils/array';

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
