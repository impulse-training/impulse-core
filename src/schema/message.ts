import * as yup from 'yup';
import { questionDataSchema } from './log';
import { questionSchema } from './question';
import { documentReferenceSchema } from './utils/firestore';
import { optionalObjectOf } from './utils/objectOf';
import { optionalTimestampSchema, timestampSchema } from './utils/timestamp';

export const messageSchema = yup.object({
  createdAt: optionalTimestampSchema,
  updatedAt: optionalTimestampSchema,
  date: timestampSchema,
  dateString: yup.string().required(),
  content: yup.string().nullable().defined(),
  senderUid: yup.string(),
  isDisplayable: yup.boolean().required(),
  emotions: optionalObjectOf(
    yup.object({
      label: yup.string().required(),
      iconName: yup.string().required(),
      intensity: yup.number().nullable().defined(),
    })
  ),
  questions: optionalObjectOf(
    yup.object({
      question: questionSchema,
      data: questionDataSchema,
    })
  ),
  files: yup.array().of(documentReferenceSchema),
  filesDeleted: yup.boolean(),
  externalId: yup.string(),
  role: yup
    .mixed<'user' | 'assistant' | 'system' | 'tool'>()
    .oneOf(['assistant', 'user', 'system', 'tool'])
    .required(),
});
export type MessageValue = yup.InferType<typeof messageSchema>;
