import * as yup from 'yup';
type Inferred<T extends yup.ISchema<unknown>> = yup.InferType<T>;
export type SchedulableRoutineValue = Inferred<typeof schedulableRoutineSchema>;
declare const schedulableRoutineSchema: yup.ObjectSchema<{
    uid: string;
    createdAt: yup.Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt: yup.Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    title: string;
    summary: string;
    isTemplate: boolean | null | undefined;
    timezone: string;
} & {
    type: NonNullable<"time" | "dayDebrief" | undefined>;
    weekdays: any[];
    hour: number;
    minute: number;
    timezone: string;
    scheduledNotificationIds: any[] | undefined;
}, yup.AnyObject, {
    uid: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    title: undefined;
    summary: undefined;
    isTemplate: undefined;
    timezone: undefined;
    type: undefined;
    weekdays: "";
    hour: undefined;
    minute: undefined;
    scheduledNotificationIds: "";
}, "">;
export type TimeRoutineValue = Inferred<typeof timeRoutineSchema>;
declare const timeRoutineSchema: yup.ObjectSchema<{
    uid: string;
    createdAt: yup.Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt: yup.Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    title: string;
    summary: string;
    isTemplate: boolean | null | undefined;
    timezone: string;
    type: "time";
    weekdays: any[];
    hour: number;
    minute: number;
    scheduledNotificationIds: any[] | undefined;
} & {
    type: "time";
}, yup.AnyObject, {
    uid: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    title: undefined;
    summary: undefined;
    isTemplate: undefined;
    timezone: undefined;
    type: undefined;
    weekdays: "";
    hour: undefined;
    minute: undefined;
    scheduledNotificationIds: "";
}, "">;
export type DayDebriefRoutineValue = Inferred<typeof dayDebriefRoutineSchema>;
declare const dayDebriefRoutineSchema: yup.ObjectSchema<{
    uid: string;
    createdAt: yup.Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt: yup.Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    title: string;
    summary: string;
    isTemplate: boolean | null | undefined;
    timezone: string;
    type: "dayDebrief";
    weekdays: any[];
    hour: number;
    minute: number;
    scheduledNotificationIds: any[] | undefined;
} & {
    type: "dayDebrief";
}, yup.AnyObject, {
    uid: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    title: undefined;
    summary: undefined;
    isTemplate: undefined;
    timezone: undefined;
    type: undefined;
    weekdays: "";
    hour: undefined;
    minute: undefined;
    scheduledNotificationIds: "";
}, "">;
export type LocationRoutineValue = Inferred<typeof locationRoutineSchema>;
declare const locationRoutineSchema: yup.ObjectSchema<{
    uid: string;
    createdAt: yup.Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt: yup.Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    title: string;
    summary: string;
    isTemplate: boolean | null | undefined;
    timezone: string | null | undefined;
} & {
    type: "location";
    locationId: string | null | undefined;
    mode: NonNullable<"enter" | "exit" | undefined>;
}, yup.AnyObject, {
    uid: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    title: undefined;
    summary: undefined;
    isTemplate: undefined;
    timezone: undefined;
    type: undefined;
    locationId: undefined;
    mode: undefined;
}, "">;
export type RoutineValue = TimeRoutineValue | DayDebriefRoutineValue | LocationRoutineValue;
export { dayDebriefRoutineSchema, locationRoutineSchema, timeRoutineSchema };
export declare const routineSchema: yup.Lazy<{
    createdAt?: yup.Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt?: yup.Maybe<{} | undefined> | {
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
} | {
    createdAt?: yup.Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt?: yup.Maybe<{} | undefined> | {
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
} | {
    createdAt?: yup.Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt?: yup.Maybe<{} | undefined> | {
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
    mode: NonNullable<"enter" | "exit" | undefined>;
}, yup.AnyObject, any>;
