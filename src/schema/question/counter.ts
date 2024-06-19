import * as yup from 'yup';
import { questionValueBaseSchema } from './base';

export const questionCounterSchema =
  questionValueBaseSchema('question-counter');
export type QuestionCounterValue = yup.InferType<typeof questionCounterSchema>;
