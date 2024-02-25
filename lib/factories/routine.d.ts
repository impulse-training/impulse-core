import * as Factory from 'factory.ts';
import { TimestampLike } from '../utils/TimestampLike';
export declare const makeLocationRoutineFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<{
    title?: string | null | undefined;
    isTemplate?: boolean | null | undefined;
    timezone?: string | null | undefined;
    locationId?: string | null | undefined;
    navigationTitle?: string | null | undefined;
    uid: string;
    createdAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    type: "location";
    mode: {};
}, "uid" | "createdAt" | "updatedAt" | "type" | "mode" | ("title" | "isTemplate" | "timezone" | "locationId" | "navigationTitle")>;
export declare const makeTimeRoutineFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<{
    title?: string | null | undefined;
    isTemplate?: boolean | null | undefined;
    navigationTitle?: string | null | undefined;
    scheduledNotificationIds?: string[] | null | undefined;
    uid: string;
    createdAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    type: "time";
    timezone: string;
    weekdays: number[];
    hour: number;
    minute: number;
}, "uid" | "createdAt" | "updatedAt" | "type" | "timezone" | "weekdays" | "hour" | "minute" | ("title" | "isTemplate" | "navigationTitle" | "scheduledNotificationIds")>;
export declare const makeDebriefRoutineFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<{
    title?: string | null | undefined;
    isTemplate?: boolean | null | undefined;
    timezone?: string | null | undefined;
    navigationTitle?: string | null | undefined;
    uid: string;
    createdAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    type: "dayDebrief";
}, "uid" | "createdAt" | "updatedAt" | "type" | ("title" | "isTemplate" | "timezone" | "navigationTitle")>;
