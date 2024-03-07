import * as yup from 'yup';
export declare const mailTemplateSchema: yup.ObjectSchema<{
    html: string;
    subject: string;
    requiredDataKeys: string[];
}, yup.AnyObject, {
    html: undefined;
    subject: undefined;
    requiredDataKeys: "";
}, "">;
