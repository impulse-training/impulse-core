import * as yup from 'yup';
export declare const locationSchema: yup.ObjectSchema<{
    profileId: string;
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
    name: string;
    latitude: number | undefined;
    longitude: number | undefined;
    address: string;
}, yup.AnyObject, {
    profileId: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    name: undefined;
    latitude: undefined;
    longitude: undefined;
    address: undefined;
}, "">;
export type LocationValue = yup.InferType<typeof locationSchema>;
