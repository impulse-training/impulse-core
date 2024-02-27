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
    title?: string | null | undefined;
    navigationTitle?: string | null | undefined;
    isTemplate?: boolean | null | undefined;
    locationId?: string | null | undefined;
    uid: string;
    timezone: string;
    type: "location";
    mode: {};
}, "uid" | "timezone" | "type" | "mode" | ("updatedAt" | "createdAt" | "title" | "navigationTitle" | "isTemplate" | "locationId")>;
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
    title?: string | null | undefined;
    navigationTitle?: string | null | undefined;
    isTemplate?: boolean | null | undefined;
    scheduledNotificationIds?: string[] | null | undefined;
    uid: string;
    timezone: string;
    type: "time";
    weekdays: number[];
    hour: number;
    minute: number;
}, "uid" | "timezone" | "type" | "weekdays" | "hour" | "minute" | ("updatedAt" | "createdAt" | "title" | "navigationTitle" | "isTemplate" | "scheduledNotificationIds")>;
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
    title?: string | null | undefined;
    navigationTitle?: string | null | undefined;
    isTemplate?: boolean | null | undefined;
    uid: string;
    timezone: string;
    type: "dayDebrief";
}, "uid" | "timezone" | "type" | ("updatedAt" | "createdAt" | "title" | "navigationTitle" | "isTemplate")>;
