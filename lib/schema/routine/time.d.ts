import * as yup from 'yup';
export declare const timeRoutineSchema: yup.ObjectSchema<{
    type: "time";
    profileId: string;
    name: string;
    folders: import("../utils/firestore").DocumentReferenceLike<unknown>[];
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
    profileId: undefined;
    name: undefined;
    folders: "";
    createdAt: undefined;
    updatedAt: undefined;
    weekdays: "";
    hour: undefined;
    minute: undefined;
}, "">;
export type TimeRoutineValue = yup.InferType<typeof timeRoutineSchema>;
