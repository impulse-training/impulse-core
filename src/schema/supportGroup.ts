import * as yup from 'yup';
import { optionalTimestampSchema } from './utils/timestamp';

export const supportGroupSchema = yup.object({
  createdAt: optionalTimestampSchema,
  updatedAt: optionalTimestampSchema,
  name: yup.string().required(),
});

export type SupportGroupValue = yup.InferType<typeof supportGroupSchema>;
