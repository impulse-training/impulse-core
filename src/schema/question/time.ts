import * as yup from 'yup';
import { questionBaseSchema } from './base';

export const questionTimeSchema = questionBaseSchema('time');
export type QuestionTimeValue = yup.InferType<typeof questionTimeSchema>;
