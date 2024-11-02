import * as yup from 'yup';

export const fileSchema = yup.object({
  storagePath: yup.string().required(),
  uri: yup.string().required(),
  localFilePath: yup.string().notRequired(),
  // Add an optional field to store audio waveform
  waveForm: yup.string().notRequired(),
});

export type FileValue = yup.InferType<typeof fileSchema>;
