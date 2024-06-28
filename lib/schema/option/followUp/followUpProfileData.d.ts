import * as yup from 'yup';
export declare const followUpProfileDataSchema: yup.ObjectSchema<{
    type: "profileData";
    profileKey: string;
    profileValue: {};
}, yup.AnyObject, {
    type: undefined;
    profileKey: undefined;
    profileValue: undefined;
}, "">;
export type FollowUpProfileDataValue = yup.InferType<typeof followUpProfileDataSchema>;
