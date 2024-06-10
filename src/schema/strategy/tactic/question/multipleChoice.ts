import * as yup from 'yup';
import { requiredStringArray } from '../../../utils/array';
import { questionTacticValueBaseSchema } from './base';

export const questionMultipleChoiceTacticSchema = questionTacticValueBaseSchema(
  'question-multiple-choice'
).shape({
  options: requiredStringArray,
});

export type QuestionMultipleChoiceTacticValue = yup.InferType<
  typeof questionMultipleChoiceTacticSchema
>;
