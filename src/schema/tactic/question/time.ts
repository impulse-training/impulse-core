import * as yup from 'yup';
import { tacticValueBaseSchema } from '../base';

export const questionTimeTacticSchema = tacticValueBaseSchema('question-time');
export type QuestionTimeTacticValue = yup.InferType<
  typeof questionTimeTacticSchema
>;
