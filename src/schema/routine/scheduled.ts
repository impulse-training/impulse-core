import * as yup from 'yup';
import { routineBaseSchema } from './base';

export const scheduledRoutineSchema = routineBaseSchema('scheduled').shape({
  hour: yup.number().required(),
  minute: yup.number().required(),
  weekdays: yup.array().of(yup.number().min(0).max(6)).required().min(1),
});

export type ScheduledRoutineValue = yup.InferType<
  typeof scheduledRoutineSchema
>;
