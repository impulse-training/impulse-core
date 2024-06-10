import * as yup from 'yup';
import { questionTacticValueBaseSchema } from './base';

export const questionCounterTacticSchema =
  questionTacticValueBaseSchema('question-counter');
export type QuestionCounterTacticValue = yup.InferType<
  typeof questionCounterTacticSchema
>;
