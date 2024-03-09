import * as yup from 'yup';
import { tacticValueBaseSchema } from './base';

export const questionTacticSchema = tacticValueBaseSchema('question');
export type QuestionTacticValue = yup.InferType<typeof questionTacticSchema>;
