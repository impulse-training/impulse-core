import * as yup from 'yup';
import { optionalTimestampSchema } from './timestamp';

export const fileSchema = yup.object({
  createdAt: optionalTimestampSchema,
  updatedAt: optionalTimestampSchema,
  storagePath: yup.string().required(),
  url: yup.string().required(),
  localFilePath: yup.string().notRequired(),
  isDeleted: yup.boolean(),
  // Can be anything, in future we could type this better
  metadata: yup.object().notRequired(),
  thumbnailStoragePath: yup.string().notRequired(),
  thumbnailUri: yup.string().notRequired(),
});

export type FileValue = yup.InferType<typeof fileSchema>;
