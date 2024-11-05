import * as yup from 'yup';
export declare const fileSchema: yup.ObjectSchema<{
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
    storagePath: string;
    uri: string;
    localFilePath: yup.Maybe<string | undefined>;
    isDeleted: boolean | undefined;
    waveForm: yup.Maybe<string | undefined>;
    thumbnailStoragePath: yup.Maybe<string | undefined>;
    thumbnailUri: yup.Maybe<string | undefined>;
}, yup.AnyObject, {
    createdAt: undefined;
    updatedAt: undefined;
    storagePath: undefined;
    uri: undefined;
    localFilePath: undefined;
    isDeleted: undefined;
    waveForm: undefined;
    thumbnailStoragePath: undefined;
    thumbnailUri: undefined;
}, "">;
export type FileValue = yup.InferType<typeof fileSchema>;
