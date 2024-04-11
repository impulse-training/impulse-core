import * as yup from 'yup';
import { documentReferenceSchema } from '../../utils/firestore';
import { objectOf, optionalObjectOf } from '../../utils/objectOf';
import { tacticValueBaseSchema } from '../base';

export const choiceSchema = yup.object({
  text: yup.string().required(),
  strategies: objectOf(documentReferenceSchema),
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
