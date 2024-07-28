import * as yup from 'yup';
import { optionalTimestampSchema, timestampSchema } from '../utils/timestamp';
import { gptMessageSchema, gptResponseMixin } from './utils/gpt';

const logViewSchema = yup.object({
  openTime: timestampSchema,
  closeTime: timestampSchema,
});

export function logBaseSchema<K extends string>(type: K) {
  return yup.object({
    createdAt: optionalTimestampSchema,
    updatedAt: optionalTimestampSchema,
    text: yup.string(),
    type: yup.mixed<K>().oneOf([type]).defined(),
    date: timestampSchema,
    senderProfileId: yup.string().nullable(),
    views: yup.array().of(logViewSchema),
    gptPayload: yup.array().of(gptMessageSchema),
    ...gptResponseMixin,
  });
}
