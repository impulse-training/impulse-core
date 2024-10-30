import * as yup from 'yup';
import { timestampSchema } from '../utils/timestamp';
import { chatBaseSchema } from './base';

export const whatsappChatSchema = chatBaseSchema('whatsapp').shape({
  sessionExpiresAt: timestampSchema,
  // blandPathwayChatId: yup.string().required(),
  phoneNumber: yup.string().required(),
  systemMessage: yup.string().required(),
});

export type WhatsappChatValue = yup.InferType<typeof whatsappChatSchema>;
