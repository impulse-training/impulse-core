import * as yup from 'yup';
export declare const locationSchema: yup.ObjectSchema<{
    uid: string;
    createdAt: import("..").TimestampLike | yup.Maybe<null>;
    updatedAt: import("..").TimestampLike | yup.Maybe<null>;
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
