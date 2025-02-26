import * as yup from 'yup';
import { documentReferenceSchema } from './utils/firestore';
import { optionalTimestampSchema } from './utils/timestamp';

export const experimentSchema = yup.object({
  behaviorDocs: yup.array().of(documentReferenceSchema.required()),
  metricDoc: documentReferenceSchema.required(),
  minimumDays: yup.number().required(),
  hypothesis: yup.string(),
  createdAt: optionalTimestampSchema,
  updatedAt: optionalTimestampSchema,
});

export type ExperimentValue = yup.InferType<typeof experimentSchema>;
