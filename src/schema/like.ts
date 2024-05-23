import * as yup from 'yup';
import { optionalTimestampSchema } from './utils/timestamp';

export const likeSchema = yup.object({
  profileId: yup.string().required(),
  isLiked: yup.boolean().required(),
  createdAt: optionalTimestampSchema,
  updatedAt: optionalTimestampSchema,
});
export type LikeValue = yup.InferType<typeof likeSchema>;
