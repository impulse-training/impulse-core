import * as yup from 'yup';
import { questionSchema } from '../question';
import { tacticValueBaseSchema } from './base';

export const questionTacticSchema = tacticValueBaseSchema('question').shape({
  question: questionSchema,
});

export type QuestionTacticValue = yup.InferType<typeof questionTacticSchema>;
