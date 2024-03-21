import * as yup from 'yup';
import { optionalTimestampSchema } from './utils/timestamp';

export const rsaKeySchema = yup.object().shape({
  createdAt: optionalTimestampSchema,
  updatedAt: optionalTimestampSchema,
  uid: yup.string().required(),
  ordinal: yup.number().required(),
  publicKey: yup.string().required(),
  usedAt: optionalTimestampSchema,
});
