import * as yup from 'yup';
export declare const imageValueSchema: yup.ObjectSchema<{
    localFilePath: yup.Maybe<string | undefined>;
    storagePath: yup.Maybe<string | undefined>;
}, yup.AnyObject, {
    localFilePath: undefined;
    storagePath: undefined;
}, "">;
