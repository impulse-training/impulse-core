import * as yup from 'yup';
import threadBase from './base';

export const suggestionThreadSchema = threadBase('suggestion');
export type SuggestionThreadValue = yup.InferType<
  typeof suggestionThreadSchema
>;
