import * as yup from 'yup';
import { documentReferenceSchema } from './utils/firestore';
import { optionalTimestampSchema } from './utils/timestamp';

export const suggestionSchema = yup.object({
  createdAt: optionalTimestampSchema,
  updatedAt: optionalTimestampSchema,
  title: yup.string().required(),
  gptContext: yup.string().required(),
  strategyDocs: yup.array().of(documentReferenceSchema.required()),
  // This is a bit of a placeholder
  stages: yup.array().of(yup.number().required()),
});

export type SuggestionValue = yup.InferType<typeof suggestionSchema>;
