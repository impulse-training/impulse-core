import * as yup from 'yup';

export const emotionDataSchema = yup.object({
  label: yup.string().required(),
  iconName: yup.string().required(),
  intensity: yup.number().nullable().defined(),
});
