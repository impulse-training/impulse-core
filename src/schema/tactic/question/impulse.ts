import * as yup from 'yup';
import { questionTacticValueBaseSchema } from './base';

export const questionImpulseTacticSchema =
  questionTacticValueBaseSchema('question-impulse');
export type QuestionImpulseTacticValue = yup.InferType<
  typeof questionImpulseTacticSchema
>;
