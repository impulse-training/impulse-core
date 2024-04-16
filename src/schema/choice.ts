import * as yup from 'yup';
import { optionalTimestampSchema } from './utils/timestamp';

export const choiceSchema = yup.object({
  text: yup.string().required(),
  strategiesPath: yup.string(),
  ordinal: yup.number().required(),
  createdAt: optionalTimestampSchema,
  updatedAt: optionalTimestampSchema,
});
export type ChoiceValue = yup.InferType<typeof choiceSchema>;
