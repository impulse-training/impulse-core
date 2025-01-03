import * as yup from 'yup';
import { requiredStringArray } from './utils/array';
import { documentReferenceSchema } from './utils/firestore';
import { optionalTimestampSchema } from './utils/timestamp';

export const experimentSchema = yup.object({
  behaviorIds: requiredStringArray,
  metricDoc: documentReferenceSchema,
  minimumDays: yup.number().required(),
  createdAt: optionalTimestampSchema,
  updatedAt: optionalTimestampSchema,
});
