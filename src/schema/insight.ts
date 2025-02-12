import * as yup from 'yup';
import { documentReferenceSchema } from './utils/firestore';
import { optionalTimestampSchema } from './utils/timestamp';

export const insightSchema = yup.object().shape({
  createdAt: optionalTimestampSchema,
  updatedAt: optionalTimestampSchema,
  summary: yup.string().required(),
  behaviorDocs: yup.array().of(documentReferenceSchema.required()),
  // We also keep a collection of linked threads, which serve as evidence to support this insight
  threads: yup.array().of(
    yup.object({
      threadDoc: documentReferenceSchema,
      explanation: yup.string().required(),
    })
  ),
});
export type InsightValue = yup.InferType<typeof insightSchema>;
