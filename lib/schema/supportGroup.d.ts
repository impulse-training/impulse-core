import * as yup from 'yup';
export declare const tacticPreviewSchema: yup.ObjectSchema<{
    title: string;
    image: {
        localFilePath?: yup.Maybe<string | undefined>;
        storagePath?: yup.Maybe<string | undefined>;
        uri?: yup.Maybe<string | undefined>;
    } | undefined;
    backgroundColor: string | undefined;
    updatedAt: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
}, yup.AnyObject, {
    title: undefined;
    image: {
        localFilePath: undefined;
        storagePath: undefined;
        uri: undefined;
    };
    backgroundColor: undefined;
    updatedAt: undefined;
}, "">;
export type TacticPreviewValue = yup.InferType<typeof tacticPreviewSchema>;
export declare const supportGroupSchema: yup.ObjectSchema<{
    createdAt: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    updatedAt: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    slug: string | undefined;
    everythingPermissions: boolean | undefined;
    participantProfileIds: string[];
    name: string;
    creatorProfileId: string | undefined;
    lastMessagePreview: string | undefined;
    invitationCode: string;
    invitationUrl: string;
    isSharingDisabled: boolean | undefined;
    tacticPreviewsById: {
        updatedAt?: {
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        image?: {
            localFilePath?: yup.Maybe<string | undefined>;
            storagePath?: yup.Maybe<string | undefined>;
            uri?: yup.Maybe<string | undefined>;
        } | undefined;
        backgroundColor?: string | undefined;
        title: string;
    }[] | undefined;
    permissions: {} | undefined;
}, yup.AnyObject, {
    createdAt: undefined;
    updatedAt: undefined;
    slug: undefined;
    everythingPermissions: undefined;
    participantProfileIds: "";
    name: undefined;
    creatorProfileId: undefined;
    lastMessagePreview: undefined;
    invitationCode: undefined;
    invitationUrl: undefined;
    isSharingDisabled: undefined;
    tacticPreviewsById: "";
    permissions: {};
}, "">;
export type SupportGroupValue = yup.InferType<typeof supportGroupSchema>;
export type PermissionKey = keyof typeof CONVERSATION_PERMISSIONS;
export type SupportGroupPermissions = {
    [profileId: string]: Partial<{
        [key in PermissionKey]: boolean;
    }>;
};
export declare const CONVERSATION_PERMISSIONS: {
    logs: string;
    tactics: string;
    editTactics: string;
    insights: string;
};
