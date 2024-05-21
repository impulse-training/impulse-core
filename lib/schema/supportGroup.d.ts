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
    templateId: string | undefined;
    everythingPermissions: boolean | undefined;
    participantProfileIds: string[];
    memberTargetCount: number | undefined;
    groupName: string;
    groupNameAliases: {
        [x: string]: string;
        [x: number]: string;
        [x: symbol]: string;
    } | undefined;
    groupDescription: string | undefined;
    creatorProfileId: string | undefined;
    lastMessagePreview: string | undefined;
    invitationCode: string;
    invitationUrl: string;
    lastMessageProfileId: string | undefined;
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
    unreadCounts: {
        [x: string]: number;
    } | null | undefined;
    permissions: {} | undefined;
}, yup.AnyObject, {
    createdAt: undefined;
    updatedAt: undefined;
    slug: undefined;
    templateId: undefined;
    everythingPermissions: undefined;
    participantProfileIds: "";
    memberTargetCount: undefined;
    groupName: undefined;
    groupNameAliases: undefined;
    groupDescription: undefined;
    creatorProfileId: undefined;
    lastMessagePreview: undefined;
    invitationCode: undefined;
    invitationUrl: undefined;
    lastMessageProfileId: undefined;
    isSharingDisabled: undefined;
    tacticPreviewsById: "";
    unreadCounts: undefined;
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
