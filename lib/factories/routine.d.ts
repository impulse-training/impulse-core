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
    timezone?: string | null | undefined;
    locationId?: string | null | undefined;
    uid: string;
    type: "location";
    mode: {};
}, "uid" | "type" | "mode" | ("updatedAt" | "createdAt" | "title" | "navigationTitle" | "isTemplate" | "timezone" | "locationId")>;
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
    weekdays: number[];
    hour: number;
    minute: number;
    type: "time";
}, "uid" | "timezone" | "weekdays" | "hour" | "minute" | "type" | ("updatedAt" | "createdAt" | "title" | "navigationTitle" | "isTemplate" | "scheduledNotificationIds")>;
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
    timezone?: string | null | undefined;
    uid: string;
    type: "dayDebrief";
}, "uid" | "type" | ("updatedAt" | "createdAt" | "title" | "navigationTitle" | "isTemplate" | "timezone")>;
