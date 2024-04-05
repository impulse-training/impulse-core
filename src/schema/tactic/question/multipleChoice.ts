import * as yup from 'yup';
import { tacticValueBaseSchema } from '../base';

export const questionMultipleChoiceTacticSchema = tacticValueBaseSchema(
  'question-multiple-choice'
);
export type QuestionMultipleChoiceTacticValue = yup.InferType<
  typeof questionMultipleChoiceTacticSchema
>;
