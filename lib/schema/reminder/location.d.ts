import * as yup from 'yup';
export declare const locationReminderSchema: yup.ObjectSchema<{
    type: "location";
    name: string;
    createdAt: {
        isEqual?: any;
        toMillis?: any;
        toJSON?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    updatedAt: {
        isEqual?: any;
        toMillis?: any;
        toJSON?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    locationId: string;
    mode: NonNullable<"enter" | "exit" | undefined>;
}, yup.AnyObject, {
    type: undefined;
    name: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    locationId: undefined;
    mode: undefined;
}, "">;
export type LocationReminderValue = yup.InferType<typeof locationReminderSchema>;
