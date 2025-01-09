import * as yup from 'yup';
import { requiredStringArray } from './utils/array';
import { objectOf } from './utils/objectOf';
import { optionalTimestampSchema } from './utils/timestamp';

export const supportGroupSchema = yup.object({
  createdAt: optionalTimestampSchema,
  updatedAt: optionalTimestampSchema,
  name: yup.string(),
  participantUids: requiredStringArray,
  lastMessagePreview: yup.string(),
  lastMessageUid: yup.string(),
  unreadCounts: objectOf(yup.number().required()),
});

export type SupportGroupValue = yup.InferType<typeof supportGroupSchema>;
