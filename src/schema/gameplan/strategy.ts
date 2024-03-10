import * as yup from 'yup';
import { optionalStringArray, requiredStringArray } from '../utils/array';

// A gameplan is a set of tactics and when they should be used. Of these properties, only tacticIds
// is required.
export const strategySchema = yup.object({
  tacticIds: requiredStringArray,
  suggestedTacticIds: optionalStringArray,
});
export type Strategy = yup.InferType<typeof strategySchema>;
