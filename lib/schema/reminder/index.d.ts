import * as yup from 'yup';
import { LocationReminderValue } from './location';
import { TimeReminderValue } from './time';
export * from './location';
export * from './time';
export type ReminderValue = TimeReminderValue | LocationReminderValue;
export declare const reminderSchemas: Record<ReminderValue['type'], yup.ObjectSchema<ReminderValue>>;
export declare const reminderSchema: yup.Lazy<ReminderValue, yup.AnyObject, any>;
