import * as yup from 'yup';
import { questionTacticValueBaseSchema } from './base';

export const questionTimeTacticSchema =
  questionTacticValueBaseSchema('question-time');
export type QuestionTimeTacticValue = yup.InferType<
  typeof questionTimeTacticSchema
>;
