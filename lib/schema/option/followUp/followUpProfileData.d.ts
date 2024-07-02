import * as yup from 'yup';
export declare const followUpProfileDataSchema: yup.ObjectSchema<{
    type: "profileData";
    message: string | undefined;
    profileKey: string;
    profileValue: {};
}, yup.AnyObject, {
    type: undefined;
    message: undefined;
    profileKey: undefined;
    profileValue: undefined;
}, "">;
export type FollowUpProfileDataValue = yup.InferType<typeof followUpProfileDataSchema>;
