import * as yup from 'yup';
import { questionBaseSchema } from './base';

export const questionCounterSchema = questionBaseSchema('counter');
export type QuestionCounterValue = yup.InferType<typeof questionCounterSchema>;
