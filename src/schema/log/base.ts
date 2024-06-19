import * as yup from 'yup';
import { optionalTimestampSchema, timestampSchema } from '../utils/timestamp';

export function logBaseSchema<K extends string>(type: K) {
  return yup.object({
    createdAt: optionalTimestampSchema,
    updatedAt: optionalTimestampSchema,
    type: yup.mixed<K>().oneOf([type]).defined(),
    systemMessage: yup.string().required(),
    date: timestampSchema,
    profileId: yup.string().required(),
  });
}
