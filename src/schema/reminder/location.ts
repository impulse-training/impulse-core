import * as yup from 'yup';
import { reminderBaseSchema } from './base';

export const locationReminderSchema = reminderBaseSchema('location').shape({
  name: yup.string().required(),
  type: yup.string().oneOf(['arrival', 'departure', 'both']).required(),
});

export type LocationReminderValue = yup.InferType<
  typeof locationReminderSchema
>;
