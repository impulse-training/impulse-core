import * as yup from 'yup';
import { documentReferenceSchema } from '../utils/firestore';
import { optionalTimestampSchema } from '../utils/timestamp';
import { logBaseSchema } from './base';

export const dayReviewLogSchema = logBaseSchema('dayReview').shape({
  dayDoc: documentReferenceSchema.required(),
  confirmedAt: optionalTimestampSchema,
});

export type DayReviewLogValue = yup.InferType<typeof dayReviewLogSchema>;
