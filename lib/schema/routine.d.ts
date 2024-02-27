import * as yup from 'yup';
type Inferred<T extends yup.ISchema<unknown>> = yup.InferType<T>;
export type Routine = Inferred<typeof routineBaseSchema>;
declare const routineBaseSchema: yup.ObjectSchema<{
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
    title: string | null | undefined;
    navigationTitle: string | null | undefined;
    isTemplate: boolean | null | undefined;
    timezone: string | null | undefined;
}, yup.AnyObject, {
    uid: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    title: undefined;
    navigationTitle: undefined;
    isTemplate: undefined;
    timezone: undefined;
}, "">;
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
    title: string | null | undefined;
    navigationTitle: string | null | undefined;
    isTemplate: boolean | null | undefined;
    timezone: string;
} & {
    type: NonNullable<"time" | "dayDebrief" | undefined>;
    weekdays: number[];
    hour: number;
    minute: number;
    timezone: string;
    scheduledNotificationIds: string[] | null | undefined;
}, yup.AnyObject, {
    uid: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    title: undefined;
    navigationTitle: undefined;
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
    title: string | null | undefined;
    navigationTitle: string | null | undefined;
    isTemplate: boolean | null | undefined;
    timezone: string;
    type: "time";
    weekdays: number[];
    hour: number;
    minute: number;
    scheduledNotificationIds: string[] | null | undefined;
} & {
    type: "time";
}, yup.AnyObject, {
    uid: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    title: undefined;
    navigationTitle: undefined;
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
    title: string | null | undefined;
    navigationTitle: string | null | undefined;
    isTemplate: boolean | null | undefined;
    timezone: string;
    type: "dayDebrief";
    weekdays: number[];
    hour: number;
    minute: number;
    scheduledNotificationIds: string[] | null | undefined;
} & {
    type: "dayDebrief";
}, yup.AnyObject, {
    uid: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    title: undefined;
    navigationTitle: undefined;
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
    title: string | null | undefined;
    navigationTitle: string | null | undefined;
    isTemplate: boolean | null | undefined;
    timezone: string | null | undefined;
} & {
    type: "location";
    locationId: string | null | undefined;
    mode: {};
}, yup.AnyObject, {
    uid: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    title: undefined;
    navigationTitle: undefined;
    isTemplate: undefined;
    timezone: undefined;
    type: undefined;
    locationId: undefined;
    mode: undefined;
}, "">;
export type RoutineValue = TimeRoutineValue | DayDebriefRoutineValue | LocationRoutineValue;
export { dayDebriefRoutineSchema, locationRoutineSchema, timeRoutineSchema };
export declare const routineSchema: yup.Lazy<{
    updatedAt?: yup.Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    createdAt?: yup.Maybe<{} | undefined> | {
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
} | {
    updatedAt?: yup.Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    createdAt?: yup.Maybe<{} | undefined> | {
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
    type: "dayDebrief";
    weekdays: number[];
    hour: number;
    minute: number;
} | {
    updatedAt?: yup.Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    createdAt?: yup.Maybe<{} | undefined> | {
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
}, yup.AnyObject, any>;
