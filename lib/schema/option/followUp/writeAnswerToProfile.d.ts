import * as yup from 'yup';
export declare const writeAnswerToProfileSchema: yup.ObjectSchema<{
    type: "writeAnswerToProfile";
    message: string | undefined;
    profileKey: string;
}, yup.AnyObject, {
    type: undefined;
    message: undefined;
    profileKey: undefined;
}, "">;
export type WriteAnswerToProfileValue = yup.InferType<typeof writeAnswerToProfileSchema>;
