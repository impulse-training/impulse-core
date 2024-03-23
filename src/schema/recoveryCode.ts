import * as yup from 'yup';
import { optionalTimestampSchema } from './utils/timestamp';

export const recoveryCode = yup.object().shape({
  createdAt: optionalTimestampSchema,
  updatedAt: optionalTimestampSchema,
  usedAt: optionalTimestampSchema,
  profileId: yup.string().required(),
  hashedCode: yup.string().required(),
});
export type RecoveryCodeValue = yup.InferType<typeof recoveryCode>;
