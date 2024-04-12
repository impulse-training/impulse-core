import * as yup from 'yup';
import { choiceSchema } from '../../choice';
import { optionalObjectOf } from '../../utils/objectOf';
import { tacticValueBaseSchema } from '../base';

export const questionMultipleChoiceTacticSchema = tacticValueBaseSchema(
  'question-multiple-choice'
).shape({
  choicesById: optionalObjectOf(choiceSchema.required()),
});

export type QuestionMultipleChoiceTacticValue = yup.InferType<
  typeof questionMultipleChoiceTacticSchema
>;
