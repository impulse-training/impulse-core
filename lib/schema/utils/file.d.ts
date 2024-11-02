import * as yup from 'yup';
export declare const fileSchema: yup.ObjectSchema<{
    storagePath: string;
    uri: string;
    localFilePath: yup.Maybe<string | undefined>;
    waveForm: yup.Maybe<string | undefined>;
    thumbnailStoragePath: yup.Maybe<string | undefined>;
    thumbnailUri: yup.Maybe<string | undefined>;
}, yup.AnyObject, {
    storagePath: undefined;
    uri: undefined;
    localFilePath: undefined;
    waveForm: undefined;
    thumbnailStoragePath: undefined;
    thumbnailUri: undefined;
}, "">;
export type FileValue = yup.InferType<typeof fileSchema>;
