import * as Factory from 'factory.ts';
import { TimestampLike } from '../utils';
export declare const makeTimeReminderFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<{
    createdAt?: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    updatedAt?: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    name: string;
    type: "time";
    weekdays: number[];
    hour: number;
    minute: number;
}, "name" | "type" | "weekdays" | "hour" | "minute" | ("createdAt" | "updatedAt")>;
