import * as yup from 'yup';
import { optionalStringArray } from '../utils/array';
import { timestampSchema } from '../utils/timestamp';
import { chatBaseSchema } from './base';

export const whatsappChatSchema = chatBaseSchema('whatsapp').shape({
  sessionExpiresAt: timestampSchema,
  issueIds: optionalStringArray,
  // blandPathwayChatId: yup.string().required(),
  phoneNumber: yup.string().required(),
  systemMessage: yup.string().required(),
});

export type WhatsappChatValue = yup.InferType<typeof whatsappChatSchema>;
