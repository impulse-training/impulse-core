import * as Factory from 'factory.ts';
import { TimestampLike } from '../utils/TimestampLike';
export declare const makeLocationRoutineFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<{
    updatedAt?: import("yup").Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    createdAt?: import("yup").Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    isTemplate?: boolean | null | undefined;
    timezone?: string | null | undefined;
    locationId?: string | null | undefined;
    uid: string;
    title: string;
    summary: string;
    type: "location";
    mode: {};
}, "uid" | "title" | "summary" | "type" | "mode" | ("updatedAt" | "createdAt" | "isTemplate" | "timezone" | "locationId")>;
export declare const makeTimeRoutineFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<{
    updatedAt?: import("yup").Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    createdAt?: import("yup").Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    isTemplate?: boolean | null | undefined;
    scheduledNotificationIds?: string[] | null | undefined;
    uid: string;
    title: string;
    summary: string;
    timezone: string;
    type: "time";
    weekdays: number[];
    hour: number;
    minute: number;
}, "uid" | "title" | "summary" | "timezone" | "type" | "weekdays" | "hour" | "minute" | ("updatedAt" | "createdAt" | "isTemplate" | "scheduledNotificationIds")>;
export declare const makeDebriefRoutineFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<{
    updatedAt?: import("yup").Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    createdAt?: import("yup").Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    isTemplate?: boolean | null | undefined;
    scheduledNotificationIds?: string[] | null | undefined;
    uid: string;
    title: string;
    summary: string;
    timezone: string;
    type: "dayDebrief";
    weekdays: number[];
    hour: number;
    minute: number;
}, "uid" | "title" | "summary" | "timezone" | "type" | "weekdays" | "hour" | "minute" | ("updatedAt" | "createdAt" | "isTemplate" | "scheduledNotificationIds")>;
