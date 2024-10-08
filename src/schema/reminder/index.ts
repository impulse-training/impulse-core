import * as yup from 'yup';
import { LocationReminderValue, locationReminderSchema } from './location';
import { TimeReminderValue, timeReminderSchema } from './time';

export * from './location';
export * from './time';

export type ReminderValue = TimeReminderValue | LocationReminderValue;

export const reminderSchemas: Record<
  ReminderValue['type'],
  yup.ObjectSchema<ReminderValue>
> = {
  time: timeReminderSchema,
  location: locationReminderSchema,
} as any;

export const reminderSchema = yup.lazy(value => {
  if (typeof value.type === 'string' && value.type in reminderSchemas) {
    return reminderSchemas[value.type as ReminderValue['type']];
  }

  return yup.object({
    type: yup
      .mixed<ReminderValue['type']>()
      .oneOf(Object.keys(reminderSchemas) as ReminderValue['type'][])
      .required(),
  });
}) as yup.Lazy<ReminderValue>;
