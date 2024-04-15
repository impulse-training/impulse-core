import * as yup from 'yup';
import { tacticValueBaseSchema } from '../base';

export const questionNoResponseSchema = tacticValueBaseSchema('question');

export type QuestionNoResponseValue = yup.InferType<
  typeof questionNoResponseSchema
>;
