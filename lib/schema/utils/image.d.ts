import * as yup from 'yup';
export declare const imageSchema: yup.ObjectSchema<{
    localFilePath: yup.Maybe<string | undefined>;
    storagePath: yup.Maybe<string | undefined>;
    uri: yup.Maybe<string | undefined>;
}, yup.AnyObject, {
    localFilePath: undefined;
    storagePath: undefined;
    uri: undefined;
}, "">;
export type ImageType = yup.InferType<typeof imageSchema>;
