import { LocationValue } from '../schema';
import { LocationReminderValue, ReminderValue, TimeReminderValue } from '../schema/reminder';
declare abstract class Reminder {
    abstract get summary(): string | null;
}
export declare class TimeReminder extends Reminder {
    private id;
    private data;
    constructor(id: string, data: TimeReminderValue);
    get summary(): string | null;
}
export declare class LocationReminder extends Reminder {
    private id;
    private data;
    private location;
    constructor(id: string, data: LocationReminderValue, location: LocationValue);
    get summary(): string;
}
export declare function reminderToClass(id: string, reminder: ReminderValue, location: LocationValue): TimeReminder | LocationReminder;
export {};
