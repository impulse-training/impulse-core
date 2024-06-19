import * as yup from 'yup';
import { questionValueBaseSchema } from './base';

export const questionTextSchema = questionValueBaseSchema('question-text');

export type QuestionTextValue = yup.InferType<typeof questionTextSchema>;
