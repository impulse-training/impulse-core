import * as yup from 'yup';
import { optionalTimestampSchema, timestampSchema } from '../utils/timestamp';
import { gptMessageSchema, gptResponseMixin } from './utils/gpt';

export function logBaseSchema<K extends string>(type: K) {
  return yup.object({
    createdAt: optionalTimestampSchema,
    updatedAt: optionalTimestampSchema,
    type: yup.mixed<K>().oneOf([type]).defined(),
    date: timestampSchema,
    senderProfileId: yup.string().nullable(),
    gptPayload: yup.array().of(gptMessageSchema),
    ...gptResponseMixin,
  });
}
