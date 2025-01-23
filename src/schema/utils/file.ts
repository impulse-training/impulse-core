import * as yup from 'yup';

export const fileSchema = yup.object({
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
