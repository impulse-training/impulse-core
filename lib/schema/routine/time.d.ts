import * as yup from 'yup';
export declare const timeRoutineSchema: yup.ObjectSchema<{
    type: "time";
    name: string;
    createdAt: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    updatedAt: {
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
export type TimeRoutineValue = yup.InferType<typeof timeRoutineSchema>;
