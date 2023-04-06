import { Timestamp } from '../utils/Timestamp';
interface ReminderValueBase {
    uid: string;
    createdAt: Timestamp;
    tacticId: string;
    updatedAt: Timestamp;
    tacticUpdatedAt: Timestamp;
}
export type TimeReminderValue = ReminderValueBase & {
    type: 'time';
    weekdays: Array<number>;
    hour: number;
    minute: number;
    scheduledNotificationIds?: Array<string>;
};
export type LocationReminderValue = ReminderValueBase & {
    type: 'location';
    locationId: string;
    mode: 'enter' | 'exit';
};
export type ReminderValue = TimeReminderValue | LocationReminderValue;
export {};
