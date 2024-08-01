import * as yup from 'yup';
import { optionalTimestampSchema, timestampSchema } from '../utils/timestamp';
import { gptResponseMixin } from './utils/gpt';

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
    tacticId: yup.string().nullable(),
    // For now, put this boolean flag here to indicate if the sender is GPT
    isGptSender: yup.boolean(),
    senderProfileId: yup.string().nullable(),
    views: yup.array().of(logViewSchema),
    ...gptResponseMixin,
  });
}
