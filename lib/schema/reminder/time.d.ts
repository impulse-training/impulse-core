import * as yup from 'yup';
export declare const timeReminderSchema: yup.ObjectSchema<{
    type: "time";
    name: string;
    createdAt: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    updatedAt: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    weekdays: number[];
    hour: number;
    minute: number;
}, yup.AnyObject, {
    type: undefined;
    name: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    weekdays: "";
    hour: undefined;
    minute: undefined;
}, "">;
export type TimeReminderValue = yup.InferType<typeof timeReminderSchema>;
