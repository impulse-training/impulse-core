import * as yup from 'yup';
export declare const locationSchema: yup.ObjectSchema<{
    uid: string;
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
    name: string;
    latitude: number | undefined;
    longitude: number | undefined;
    address: string;
}, yup.AnyObject, {
    uid: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    name: undefined;
    latitude: undefined;
    longitude: undefined;
    address: undefined;
}, "">;
export type LocationValue = yup.InferType<typeof locationSchema>;
