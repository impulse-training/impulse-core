import * as yup from 'yup';
import { optionalTimestampSchema } from './utils/timestamp';

export const tacticImpressionSchema = yup.object({
  profileId: yup.string().required(),
  isLiked: yup.boolean().required(),
  createdAt: optionalTimestampSchema,
  updatedAt: optionalTimestampSchema,
});

export type LikeValue = yup.InferType<typeof tacticImpressionSchema>;
