import * as yup from 'yup';
import { WhatsappChatValue, whatsappChatSchema } from './whatsapp';

export * from './whatsapp';

export const chatSchemas: Record<
  ChatValue['type'],
  yup.ObjectSchema<ChatValue>
> = {
  whatsapp: whatsappChatSchema,
} as any;

export const chatSchema = yup.lazy((value: any) => {
  if (!value) return yup.mixed().required();

  if (typeof value.type === 'string' && value.type in chatSchemas) {
    return chatSchemas[value.type as ChatValue['type']];
  }

  return yup.object({
    type: yup
      .mixed<ChatValue['type']>()
      .oneOf(Object.keys(chatSchemas) as ChatValue['type'][])
      .required(),
  });
}) as yup.Lazy<ValidatedChat>;

// / This type represents the union of all possible validated tactic objects
type ValidatedChat = {
  [K in ChatValue['type']]: yup.InferType<(typeof chatSchemas)[K]>;
}[ChatValue['type']];

export type ChatValue = WhatsappChatValue;
