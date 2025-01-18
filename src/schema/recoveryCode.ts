import * as yup from 'yup';
import { optionalTimestampSchema } from './utils/timestamp';

export const recoveryCodeSchema = yup.object().shape({
  createdAt: optionalTimestampSchema,
  updatedAt: optionalTimestampSchema,
  usedAt: optionalTimestampSchema,
  uid: yup.string().required(),
  hashedCode: yup.string().required(),
  last4: yup.string().required(),
});
export type RecoveryCodeValue = yup.InferType<typeof recoveryCodeSchema>;
