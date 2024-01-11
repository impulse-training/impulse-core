import * as yup from 'yup';

export const imageValueSchema = yup.object({
  localFilePath: yup.string().notRequired(),
  storagePath: yup.string().notRequired(),
});
