import * as yup from 'yup';
import { optionalTimestampSchema } from './utils/timestamp';

export const therapistSchema = yup.object({
  createdAt: optionalTimestampSchema,
  updatedAt: optionalTimestampSchema,
  name: yup.string().required(),
  email: yup.string().required(),
  practiceType: yup.string().required(),
  clientCount: yup.string(),
  specialties: yup.string(),
  hearAboutUs: yup.string(),
});

export type TherapistValue = yup.InferType<typeof therapistSchema>;
