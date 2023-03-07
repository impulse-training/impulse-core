import { Timestamp } from "@google-cloud/firestore";
import * as Location from "expo-location";
interface ReminderValueBase {
    uid: string;
    createdAt: Timestamp;
    tacticId: string;
}
export type TimeReminderValue = ReminderValueBase & {
    type: "time";
    weekdays: Array<number>;
    hour: number;
    minute: number;
    scheduledNotificationIds?: Array<string>;
};
export type LocationReminderValue = ReminderValueBase & {
    type: "location";
    location: Location.LocationObjectCoords;
    locationName: string;
};
export type ReminderValue = TimeReminderValue;
export {};
