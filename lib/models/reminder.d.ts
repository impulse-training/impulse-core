import { LocationValue } from '../schema';
import {
  LocationReminderValue,
  ReminderValue,
  TimeReminderValue,
} from '../schema/reminder';
export declare const SHORT_DAYS: {
  [key: number]: string;
};
declare abstract class Reminder {
  abstract get summary(): string | null;
}
export declare class TimeReminder extends Reminder {
  private id;
  private data;
  constructor(id: string, data: TimeReminderValue);
  static DAYS: {
    [key: number]: string;
  };
  get summary(): string | null;
}
export declare class LocationReminder extends Reminder {
  private id;
  private data;
  private location;
  constructor(id: string, data: LocationReminderValue, location: LocationValue);
  get summary(): string;
}
export declare function gameplanToClass(
  id: string,
  reminder: ReminderValue,
  location: LocationValue
): TimeReminder | LocationReminder;
export {};
