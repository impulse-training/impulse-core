import * as yup from 'yup';
export declare const callStatus: yup.ObjectSchema<{
    status: string;
}, yup.AnyObject, {
    status: undefined;
}, "">;
export type CallStatusValue = yup.InferType<typeof callStatus>;
