import * as yup from 'yup';
export declare const tourStepSchema: yup.ObjectSchema<{
    elementRefName: string;
    title: string;
    message: string;
    confirmButtonLabel: string;
}, yup.AnyObject, {
    elementRefName: undefined;
    title: undefined;
    message: undefined;
    confirmButtonLabel: "Ok";
}, "">;
