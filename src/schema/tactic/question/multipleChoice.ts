import * as yup from 'yup';
import { impulseStrategySchema } from '../../strategy';
import { tacticValueBaseSchema } from '../base';

export const questionMultipleChoiceTacticSchema = tacticValueBaseSchema(
  'question-multiple-choice'
).shape({
  strategies: yup.array().of(impulseStrategySchema),
});

export type QuestionMultipleChoiceTacticValue = yup.InferType<
  typeof questionMultipleChoiceTacticSchema
>;
