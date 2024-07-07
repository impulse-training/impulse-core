import * as yup from 'yup';
export declare const recoveryCode: yup.ObjectSchema<{
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
    usedAt: {
        isEqual?: any;
        toMillis?: any;
        toJSON?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    profileId: string;
    hashedCode: string;
    last4: string;
}, yup.AnyObject, {
    createdAt: undefined;
    updatedAt: undefined;
    usedAt: undefined;
    profileId: undefined;
    hashedCode: undefined;
    last4: undefined;
}, "">;
export type RecoveryCodeValue = yup.InferType<typeof recoveryCode>;
