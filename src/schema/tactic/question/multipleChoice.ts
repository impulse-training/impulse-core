import * as yup from 'yup';
import { impulseStrategySchema } from '../../strategy';
import { objectOf, optionalObjectOf } from '../../utils/objectOf';
import { tacticValueBaseSchema } from '../base';

export const choiceSchema = yup.object({
  text: yup.string().required(),
  strategies: objectOf(impulseStrategySchema),
  ordinal: yup.number().required(),
});

export const questionMultipleChoiceTacticSchema = tacticValueBaseSchema(
  'question-multiple-choice'
).shape({
  choices: optionalObjectOf(choiceSchema.required()),
});

export type QuestionMultipleChoiceTacticValue = yup.InferType<
  typeof questionMultipleChoiceTacticSchema
>;
