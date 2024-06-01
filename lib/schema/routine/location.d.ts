import * as yup from 'yup';
export declare const locationRoutineSchema: yup.ObjectSchema<{
    type: "location";
    profileId: string;
    name: string;
    streams: import("../utils/firestore").DocumentReferenceLike<unknown>[];
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
    locationId: string;
    mode: NonNullable<"enter" | "exit" | undefined>;
}, yup.AnyObject, {
    type: undefined;
    profileId: undefined;
    name: undefined;
    streams: "";
    createdAt: undefined;
    updatedAt: undefined;
    locationId: undefined;
    mode: undefined;
}, "">;
export type LocationRoutineValue = yup.InferType<typeof locationRoutineSchema>;
