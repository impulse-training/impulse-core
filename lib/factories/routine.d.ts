import * as Factory from 'factory.ts';
import { TimestampLike } from '../utils/TimestampLike';
export declare const makeLocationRoutineFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<{
    createdAt?: import("yup").Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt?: import("yup").Maybe<{} | undefined> | {
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
}, "uid" | "title" | "summary" | "type" | "mode" | ("createdAt" | "updatedAt" | "isTemplate" | "timezone" | "locationId")>;
export declare const makeTimeRoutineFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<{
    createdAt?: import("yup").Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt?: import("yup").Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    isTemplate?: boolean | null | undefined;
    scheduledNotificationIds?: any[] | undefined;
    uid: string;
    title: string;
    summary: string;
    timezone: string;
    type: "time";
    weekdays: any[];
    hour: number;
    minute: number;
}, "uid" | "title" | "summary" | "timezone" | "type" | "weekdays" | "hour" | "minute" | ("createdAt" | "updatedAt" | "isTemplate" | "scheduledNotificationIds")>;
export declare const makeDebriefRoutineFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<{
    createdAt?: import("yup").Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt?: import("yup").Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    isTemplate?: boolean | null | undefined;
    scheduledNotificationIds?: any[] | undefined;
    uid: string;
    title: string;
    summary: string;
    timezone: string;
    type: "dayDebrief";
    weekdays: any[];
    hour: number;
    minute: number;
}, "uid" | "title" | "summary" | "timezone" | "type" | "weekdays" | "hour" | "minute" | ("createdAt" | "updatedAt" | "isTemplate" | "scheduledNotificationIds")>;
