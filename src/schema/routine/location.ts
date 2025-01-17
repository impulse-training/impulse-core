import * as yup from 'yup';
import { routineBaseSchema } from './base';

export const locationRoutineSchema = routineBaseSchema('location').shape({
  name: yup.string().required(),
  type: yup.string().oneOf(['arrival', 'departure', 'both']).required(),
});

export type LocationRoutineValue = yup.InferType<typeof locationRoutineSchema>;
