import * as yup from 'yup';
import threadBase from './base';

export const dayReviewThreadSchema = threadBase('dayReview');
export type DayReviewThreadValue = yup.InferType<typeof dayReviewThreadSchema>;
