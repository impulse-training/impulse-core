import * as yup from 'yup';
import { requiredStringArray } from './utils/array';
import { objectOf } from './utils/objectOf';
import { optionalTimestampSchema } from './utils/timestamp';

export const conversationSchema = yup.object({
  createdAt: optionalTimestampSchema,
  updatedAt: optionalTimestampSchema,
  name: yup.string(),
  participantUids: requiredStringArray,
  unreadCounts: objectOf(yup.number().required()),
});

export type ConversationValue = yup.InferType<typeof conversationSchema>;
