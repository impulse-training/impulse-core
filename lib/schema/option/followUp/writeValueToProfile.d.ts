import * as yup from 'yup';
export declare const writeValueToProfileSchema: yup.ObjectSchema<{
    type: "writeValueToProfile";
    message: string | undefined;
    profileKey: string;
    value: {};
}, yup.AnyObject, {
    type: undefined;
    message: undefined;
    profileKey: undefined;
    value: undefined;
}, "">;
export type WriteValueToProfileValue = yup.InferType<typeof writeValueToProfileSchema>;
