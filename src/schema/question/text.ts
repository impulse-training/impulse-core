import * as yup from 'yup';
import { questionBaseSchema } from './base';

export const textQuestionSchema = questionBaseSchema('text');

export type TextQuestionValue = yup.InferType<typeof textQuestionSchema>;
