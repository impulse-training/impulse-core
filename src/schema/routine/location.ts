import * as yup from 'yup';
import { routineBaseSchema } from './base';
export const locationRoutineSchema = routineBaseSchema('location').shape({
  locationId: yup.string().required(),
  mode: yup.mixed<'enter' | 'exit'>().oneOf(['enter', 'exit']).required(),
});

export type LocationRoutineValue = yup.InferType<typeof locationRoutineSchema>;
