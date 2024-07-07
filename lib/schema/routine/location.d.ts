import * as yup from 'yup';
export declare const locationRoutineSchema: yup.ObjectSchema<{
    type: "location";
    profileId: string;
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
    profileId: undefined;
    name: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    locationId: undefined;
    mode: undefined;
}, "">;
export type LocationRoutineValue = yup.InferType<typeof locationRoutineSchema>;
