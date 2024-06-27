import * as yup from 'yup';
import { optionSchema } from '../option';
import { questionBaseSchema } from './base';

export const questionMultipleChoiceSchema = questionBaseSchema(
  'multipleChoice'
).shape({
  options: yup.array().of(optionSchema).required(),
  canAddNewOptions: yup.boolean().required().default(false),
});

export type QuestionMultipleChoiceValue = yup.InferType<
  typeof questionMultipleChoiceSchema
>;
