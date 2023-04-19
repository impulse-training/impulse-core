import { FakeTimestamp } from '../utils/FakeTimestamp';

interface ReminderValueBase {
  uid: string;
  createdAt: FakeTimestamp;
  updatedAt: FakeTimestamp;
  tacticId: string;
}

export type TimeReminderValue = ReminderValueBase & {
  type: 'time';
  weekdays: Array<number>; // 1 = sun, 2 = mon, 3 = tue, etc
  hour: number;
  minute: number;
  timezone: string;
  scheduledNotificationIds?: Array<string>;
};

export type LocationReminderValue = ReminderValueBase & {
  type: 'location';
  locationId: string;
  mode: 'enter' | 'exit';
};

export type ReminderValue = TimeReminderValue | LocationReminderValue;
