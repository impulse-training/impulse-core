import * as yup from 'yup';
import { documentReferenceSchema } from './utils/firestore';
import { objectOf } from './utils/objectOf';
import { optionalTimestampSchema } from './utils/timestamp';

export const messageSchema = yup.object({
  createdAt: optionalTimestampSchema,
  updatedAt: optionalTimestampSchema,
  content: yup.string().nullable().defined(),
  senderUid: yup.string(),
  emotions: objectOf(yup.number()),
  files: yup.array().of(documentReferenceSchema),
  filesDeleted: yup.boolean(),
  externalId: yup.string(),
  role: yup
    .mixed<'user' | 'assistant' | 'system' | 'tool'>()
    .oneOf(['assistant', 'user', 'system', 'tool'])
    .required(),
});
export type MessageValue = yup.InferType<typeof messageSchema>;

const emotionSchema = yup.object({
  emotion: yup.string().required(),
  intensity: yup.number().required(),
});
