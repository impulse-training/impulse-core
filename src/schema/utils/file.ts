import * as yup from 'yup';

export const fileSchema = yup.object({
  localFilePath: yup.string().notRequired(),
  storagePath: yup.string().notRequired(),
  uri: yup.string().notRequired(),
});

export type FileValue = yup.InferType<typeof fileSchema>;