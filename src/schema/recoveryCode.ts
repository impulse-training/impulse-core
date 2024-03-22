import * as yup from 'yup';
import { optionalTimestampSchema } from './utils/timestamp';

export const recoveryCode = yup.object().shape({
  createdAt: optionalTimestampSchema,
  updatedAt: optionalTimestampSchema,
  usedAt: optionalTimestampSchema,
  profileId: yup.string().required(),
  ordinal: yup.number().required(),
  hashedCode: yup.string().required(),
});
