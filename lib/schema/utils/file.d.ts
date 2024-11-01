import * as yup from 'yup';
export declare const fileSchema: yup.ObjectSchema<{
    localFilePath: yup.Maybe<string | undefined>;
    storagePath: yup.Maybe<string | undefined>;
    uri: yup.Maybe<string | undefined>;
    waveForm: yup.Maybe<string | undefined>;
}, yup.AnyObject, {
    localFilePath: undefined;
    storagePath: undefined;
    uri: undefined;
    waveForm: undefined;
}, "">;
export type FileValue = yup.InferType<typeof fileSchema>;
