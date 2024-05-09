import * as yup from 'yup';

export const recordingSchema = yup.object({
  localFilePath: yup.string().required("Your message hasn't been recorded!"),
  remoteFilePath: yup
    .string()
    .required("Your message hasn't been uploaded yet!"),
  waveform: yup.string().nullable(),
});

export type Recording = yup.InferType<typeof recordingSchema>;
