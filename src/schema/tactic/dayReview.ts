import * as yup from 'yup';
import { tacticValueBaseSchema } from './base';

export const dayReviewTacticSchema = tacticValueBaseSchema('day-review').shape({
  forDay: yup
    .mixed<'today' | 'yesterday'>()
    .oneOf(['today', 'yesterday'])
    .required(),
});
export type DayReviewTacticValue = yup.InferType<typeof dayReviewTacticSchema>;
