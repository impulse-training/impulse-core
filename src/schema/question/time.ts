import * as yup from 'yup';
import { questionValueBaseSchema } from './base';

export const questionTimeSchema = questionValueBaseSchema('question-time');
export type QuestionTimeValue = yup.InferType<typeof questionTimeSchema>;
