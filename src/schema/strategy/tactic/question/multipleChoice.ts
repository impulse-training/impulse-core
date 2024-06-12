import * as yup from 'yup';
import { optionalStringArray } from '../../../utils/array';
import { questionTacticValueBaseSchema } from './base';

export const questionMultipleChoiceTacticSchema = questionTacticValueBaseSchema(
  'question-multiple-choice'
).shape({
  options: optionalStringArray,
});

export type QuestionMultipleChoiceTacticValue = yup.InferType<
  typeof questionMultipleChoiceTacticSchema
>;
