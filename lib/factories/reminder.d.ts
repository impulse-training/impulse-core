import * as Factory from 'factory.ts';
import { TimestampLike } from '../utils';
export declare const makeTimeReminderFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<{
    createdAt?: {
        isEqual?: any;
        toMillis?: any;
        toJSON?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    updatedAt?: {
        isEqual?: any;
        toMillis?: any;
        toJSON?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    type: "time";
    name: string;
    weekdays: number[];
    hour: number;
    minute: number;
}, "type" | "name" | "weekdays" | "hour" | "minute" | ("createdAt" | "updatedAt")>;
