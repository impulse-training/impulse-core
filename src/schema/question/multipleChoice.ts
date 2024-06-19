import * as yup from 'yup';
import { optionalStringArray } from '../utils/array';
import { questionBaseSchema } from './base';

export const questionMultipleChoiceSchema = questionBaseSchema(
  'multipleChoice'
).shape({
  options: optionalStringArray,
});

export type QuestionMultipleChoiceValue = yup.InferType<
  typeof questionMultipleChoiceSchema
>;
