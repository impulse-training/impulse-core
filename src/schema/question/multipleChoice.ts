import * as yup from 'yup';
import { optionalStringArray } from '../utils/array';
import { questionValueBaseSchema } from './base';

export const questionMultipleChoiceSchema = questionValueBaseSchema(
  'question-multiple-choice'
).shape({
  options: optionalStringArray,
});

export type QuestionMultipleChoiceValue = yup.InferType<
  typeof questionMultipleChoiceSchema
>;
