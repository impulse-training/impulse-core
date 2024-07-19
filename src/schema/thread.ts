import * as yup from 'yup';
import { logSchema } from './log';
import { optionalTimestampSchema } from './utils/timestamp';

export const threadSchema = yup.object({
  firstLog: logSchema,
  profileId: yup.string().required(),
  createdAt: optionalTimestampSchema,
  updatedAt: optionalTimestampSchema,
});

export type ThreadValue = yup.InferType<typeof threadSchema>;
