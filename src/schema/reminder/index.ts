import * as yup from 'yup';
import { WithTacticsById } from '../log';
import { locationReminderSchema, LocationReminderValue } from './location';
import { scheduledReminderSchema, ScheduledReminderValue } from './scheduled';

export * from './location';
// export * from './metrics';
export * from './scheduled';

export type ReminderValue = ScheduledReminderValue | LocationReminderValue;

// Utility to dynamically select the correct schema based on the Reminder type
export const ReminderSchemas: Record<
  ReminderValue['type'],
  yup.ObjectSchema<ReminderValue>
> = {
  scheduled: scheduledReminderSchema,
  location: locationReminderSchema,
} as any;

export const reminderSchema = yup.lazy(value => {
  if (typeof value.type === 'string' && value.type in ReminderSchemas) {
    return ReminderSchemas[value.type as ReminderValue['type']];
  }

  return yup.object({
    type: yup
      .mixed<ReminderValue['type']>()
      .oneOf(Object.keys(ReminderSchemas) as ReminderValue['type'][])
      .required(),
  });
}) as yup.Lazy<ReminderTypes[ReminderValue['type']]>;

// / This type represents the union of all possible validated Reminder objects
export type ReminderTypes = {
  [K in ReminderValue['type']]: WithTacticsById<
    yup.InferType<(typeof ReminderSchemas)[K]>
  >;
};
