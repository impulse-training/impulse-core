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
    contentType: string;
    storagePath: string;
    uri: string;
    localFilePath: yup.Maybe<string | undefined>;
    isDeleted: boolean | undefined;
    metadata: {} | null | undefined;
    thumbnailStoragePath: yup.Maybe<string | undefined>;
    thumbnailUri: yup.Maybe<string | undefined>;
}, yup.AnyObject, {
    createdAt: undefined;
    updatedAt: undefined;
    contentType: undefined;
    storagePath: undefined;
    uri: undefined;
    localFilePath: undefined;
    isDeleted: undefined;
    metadata: {};
    thumbnailStoragePath: undefined;
    thumbnailUri: undefined;
}, "">;
export type FileValue = yup.InferType<typeof fileSchema>;
