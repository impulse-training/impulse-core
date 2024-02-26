import * as yup from 'yup';
type Inferred<T extends yup.ISchema<unknown>> = yup.InferType<T>;
export type Routine = Inferred<typeof routineBaseSchema>;
declare const routineBaseSchema: yup.ObjectSchema<{
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
    title: string | null | undefined;
    navigationTitle: string | null | undefined;
    isTemplate: boolean | null | undefined;
    timezone: string | null | undefined;
}, yup.AnyObject, {
    uid: undefined;
    createdAt: {
        seconds: undefined;
        nanoseconds: undefined;
        toDate: undefined;
    };
    updatedAt: {
        seconds: undefined;
        nanoseconds: undefined;
        toDate: undefined;
    };
    title: undefined;
    navigationTitle: undefined;
    isTemplate: undefined;
    timezone: undefined;
}, "">;
export type SchedulableRoutineValue = Inferred<typeof schedulableRoutineSchema>;
declare const schedulableRoutineSchema: yup.ObjectSchema<{
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
    title: string | null | undefined;
    navigationTitle: string | null | undefined;
    isTemplate: boolean | null | undefined;
    timezone: string;
} & {
    weekdays: number[];
    hour: number;
    minute: number;
    timezone: string;
    scheduledNotificationIds: string[] | null | undefined;
}, yup.AnyObject, {
    uid: undefined;
    createdAt: {
        seconds: undefined;
        nanoseconds: undefined;
        toDate: undefined;
    };
    updatedAt: {
        seconds: undefined;
        nanoseconds: undefined;
        toDate: undefined;
    };
    title: undefined;
    navigationTitle: undefined;
    isTemplate: undefined;
    timezone: undefined;
    weekdays: "";
    hour: undefined;
    minute: undefined;
    scheduledNotificationIds: "";
}, "">;
export type TimeRoutineValue = Inferred<typeof timeRoutineSchema>;
declare const timeRoutineSchema: yup.ObjectSchema<{
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
    title: string | null | undefined;
    navigationTitle: string | null | undefined;
    isTemplate: boolean | null | undefined;
    timezone: string;
    weekdays: number[];
    hour: number;
    minute: number;
    scheduledNotificationIds: string[] | null | undefined;
} & {
    type: "time";
}, yup.AnyObject, {
    uid: undefined;
    createdAt: {
        seconds: undefined;
        nanoseconds: undefined;
        toDate: undefined;
    };
    updatedAt: {
        seconds: undefined;
        nanoseconds: undefined;
        toDate: undefined;
    };
    title: undefined;
    navigationTitle: undefined;
    isTemplate: undefined;
    timezone: undefined;
    weekdays: "";
    hour: undefined;
    minute: undefined;
    scheduledNotificationIds: "";
    type: undefined;
}, "">;
export type DayDebriefRoutineValue = Inferred<typeof dayDebriefRoutineSchema>;
declare const dayDebriefRoutineSchema: yup.ObjectSchema<{
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
    title: string | null | undefined;
    navigationTitle: string | null | undefined;
    isTemplate: boolean | null | undefined;
    timezone: string | null | undefined;
} & {
    type: "dayDebrief";
}, yup.AnyObject, {
    uid: undefined;
    createdAt: {
        seconds: undefined;
        nanoseconds: undefined;
        toDate: undefined;
    };
    updatedAt: {
        seconds: undefined;
        nanoseconds: undefined;
        toDate: undefined;
    };
    title: undefined;
    navigationTitle: undefined;
    isTemplate: undefined;
    timezone: undefined;
    type: undefined;
}, "">;
export type LocationRoutineValue = Inferred<typeof locationRoutineSchema>;
declare const locationRoutineSchema: yup.ObjectSchema<{
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
    createdAt: {
        seconds: undefined;
        nanoseconds: undefined;
        toDate: undefined;
    };
    updatedAt: {
        seconds: undefined;
        nanoseconds: undefined;
        toDate: undefined;
    };
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
    title?: string | null | undefined;
    navigationTitle?: string | null | undefined;
    isTemplate?: boolean | null | undefined;
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
    timezone: string;
    weekdays: number[];
    hour: number;
    minute: number;
    type: "time";
} | {
    title?: string | null | undefined;
    navigationTitle?: string | null | undefined;
    isTemplate?: boolean | null | undefined;
    timezone?: string | null | undefined;
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
} | {
    title?: string | null | undefined;
    navigationTitle?: string | null | undefined;
    isTemplate?: boolean | null | undefined;
    timezone?: string | null | undefined;
    locationId?: string | null | undefined;
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
}, yup.AnyObject, any>;
