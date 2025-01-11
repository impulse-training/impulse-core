import * as yup from 'yup';
import { reminderBaseSchema } from './base';

export const locationRoutineSchema = reminderBaseSchema('location').shape({
  name: yup.string().required(),
  type: yup.string().oneOf(['arrival', 'departure', 'both']).required(),
});

export type LocationRoutineValue = yup.InferType<typeof locationRoutineSchema>;