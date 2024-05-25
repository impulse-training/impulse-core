import * as yup from 'yup';
import { questionTacticValueBaseSchema } from './base';

export const questionNoResponseSchema =
  questionTacticValueBaseSchema('question');

export type QuestionNoResponseValue = yup.InferType<
  typeof questionNoResponseSchema
>;
