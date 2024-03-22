import * as yup from 'yup';
export declare const recoveryCode: yup.ObjectSchema<{
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
    usedAt: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    profileId: string;
    ordinal: number;
    hashedCode: string;
}, yup.AnyObject, {
    createdAt: undefined;
    updatedAt: undefined;
    usedAt: undefined;
    profileId: undefined;
    ordinal: undefined;
    hashedCode: undefined;
}, "">;
