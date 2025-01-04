import * as yup from 'yup';
import { reminderBaseSchema } from './base';

export const scheduledReminderSchema = reminderBaseSchema('scheduled').shape({
  schedule: yup
    .array()
    .of(
      yup.object({
        hour: yup.number().required(),
        minute: yup.number().required(),
        weekdays: yup.array().of(yup.number().min(0).max(6)).required().min(1),
      })
    )
    .required(),
});

export type ScheduledReminderValue = yup.InferType<
  typeof scheduledReminderSchema
>;
