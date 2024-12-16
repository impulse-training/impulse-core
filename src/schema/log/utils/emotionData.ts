import * as yup from 'yup';

export const emotionDataSchema = yup.object({
  label: yup.string().required(),
  name: yup.string().required(),
  color: yup.string(),
  key: yup.string().required(),
  intensity: yup.number().nullable().defined(),
});
export type EmotionDataValue = yup.InferType<typeof emotionDataSchema>;
