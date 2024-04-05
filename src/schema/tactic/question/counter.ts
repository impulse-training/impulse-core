import * as yup from 'yup';
import { tacticValueBaseSchema } from '../base';

export const questionCounterTacticSchema =
  tacticValueBaseSchema('question-counter');
export type QuestionCounterTacticValue = yup.InferType<
  typeof questionCounterTacticSchema
>;
