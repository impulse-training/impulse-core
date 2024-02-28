import * as yup from 'yup';
export declare const omitSchemaFields: (originalSchema: yup.ObjectSchema<yup.AnyObject>, fieldsToOmit: Array<string>) => yup.ObjectSchema<{
    [x: string]: unknown;
}, yup.AnyObject, {
    [x: string]: undefined;
}, "">;
