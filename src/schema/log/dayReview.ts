import * as yup from 'yup';
import { documentReferenceSchema } from '../utils/firestore';
import { logBaseSchema } from './base';

export const dayReviewLogSchema = logBaseSchema('dayReview').shape({
  dayDoc: documentReferenceSchema.required(),
});

export type DayReviewLogValue = yup.InferType<typeof dayReviewLogSchema>;
