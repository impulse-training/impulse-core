import * as yup from 'yup';
import { logSchema } from './log';
import { objectOf } from './utils/objectOf';
import { optionalTimestampSchema } from './utils/timestamp';

export const threadSchema = yup.object({
  dateString: yup.string().required(),
  firstLogId: yup.string(),
  profileId: yup.string().required(),
  isProcessing: yup.boolean(),
  title: yup.string(),
  logsById: objectOf(logSchema),
  createdAt: optionalTimestampSchema,
  updatedAt: optionalTimestampSchema,
});

export type ThreadValue = yup.InferType<typeof threadSchema>;
