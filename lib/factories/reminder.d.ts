import * as Factory from 'factory.ts';
import { LocationReminderValue, TimeReminderValue } from '../schema/reminder';
import { FakeTimestamp } from '../utils/FakeTimestamp';
export declare const makeLocationReminderFactory: (TimestampKlass: typeof FakeTimestamp) => Factory.Sync.Factory<LocationReminderValue, "type" | "locationId" | keyof import("../schema/reminder").ReminderValueBase | "mode">;
export declare const makeTimeReminderFactory: (TimestampKlass: typeof FakeTimestamp) => Factory.Sync.Factory<TimeReminderValue, "type" | "hour" | "minute" | "timezone" | keyof import("../schema/reminder").ReminderValueBase | "weekdays" | "scheduledNotificationIds">;
