import * as yup from 'yup';
import { reminderBaseSchema } from './base';
export const locationReminderSchema = reminderBaseSchema('location').shape({
  locationId: yup.string().required(),
  mode: yup.mixed<'enter' | 'exit'>().oneOf(['enter', 'exit']).required(),
});

export type LocationReminderValue = yup.InferType<
  typeof locationReminderSchema
>;
