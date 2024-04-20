import * as yup from 'yup';
import { questionTacticValueBaseSchema } from './base';

export const questionMultipleChoiceTacticSchema = questionTacticValueBaseSchema(
  'question-multiple-choice'
);
export type QuestionMultipleChoiceTacticValue = yup.InferType<
  typeof questionMultipleChoiceTacticSchema
>;
