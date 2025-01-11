import * as yup from 'yup';
import { reminderBaseSchema } from './base';

export const scheduledRoutineSchema = reminderBaseSchema('scheduled').shape({
  hour: yup.number().required(),
  minute: yup.number().required(),
  weekdays: yup.array().of(yup.number().min(0).max(6)).required().min(1),
});

export type ScheduledRoutineValue = yup.InferType<
  typeof scheduledRoutineSchema
>;
