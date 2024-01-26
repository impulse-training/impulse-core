import * as yup from 'yup';

export const imageSchema = yup.object({
  localFilePath: yup.string().notRequired(),
  storagePath: yup.string().notRequired(),
  uri: yup.string().notRequired(),
});

export type ImageType = yup.InferType<typeof imageSchema>;
