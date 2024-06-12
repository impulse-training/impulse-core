import * as yup from 'yup';
import { questionTacticValueBaseSchema } from './base';

export const questionTextSchema =
  questionTacticValueBaseSchema('question-text');

export type QuestionTextTacticValue = yup.InferType<typeof questionTextSchema>;
