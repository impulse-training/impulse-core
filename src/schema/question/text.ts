import * as yup from 'yup';
import { questionBaseSchema } from './base';

export const questionTextSchema = questionBaseSchema('text');

export type QuestionTextValue = yup.InferType<typeof questionTextSchema>;
