import * as yup from 'yup';
import { optionalTimestampSchema } from '../utils/timestamp';

export function chatBaseSchema<K extends string>(type: K) {
  return yup.object({
    type: yup.mixed<K>().required().oneOf([type]),
    uid: yup.string().required(),
    createdAt: optionalTimestampSchema,
    updatedAt: optionalTimestampSchema,
    filesUpdatedAt: optionalTimestampSchema,
  });
}
