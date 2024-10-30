import * as yup from 'yup';
import { documentReferenceSchema } from './utils/firestore';

export const messageSchema = yup.object({
  content: yup.string().nullable().defined(),
  senderProfileId: yup.string(),
  files: yup.array().of(documentReferenceSchema),
  role: yup
    .mixed<'user' | 'assistant'>()
    .oneOf(['assistant', 'user'])
    .required(),
});
export type MessageValue = yup.InferType<typeof messageSchema>;
