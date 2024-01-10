import * as yup from 'yup';

export const recordingSchema = yup.object({
  localFilePath: yup.string().required(),
  remoteFilePath: yup.string().required(),
  waveform: yup.string().nullable(),
});

export type Recording = yup.InferType<typeof recordingSchema>;
