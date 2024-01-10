import * as yup from 'yup';

export const imageValueSchema = yup.object({
  localFilePath: yup.string().required(),
  storagePath: yup.string().required(),
});
