import * as yup from 'yup';
import { logSchema } from './log';
import { documentReferenceSchema } from './utils/firestore';
import { objectOf } from './utils/objectOf';
import { optionalTimestampSchema } from './utils/timestamp';

export const threadSchema = yup.object({
  dateString: yup.string().required(),
  firstLogId: yup.string(),
  profileId: yup.string().required(),
  isProcessing: yup.boolean(),
  isVisible: yup.boolean().required(),
  title: yup.string(),
  logsById: objectOf(logSchema),
  // Optionally, whatsapp threads can be pointed at a folder, and can write tactics into that folder
  whatsappFolderDoc: documentReferenceSchema,
  createdAt: optionalTimestampSchema,
  updatedAt: optionalTimestampSchema,
});

export type ThreadValue = yup.InferType<typeof threadSchema>;
