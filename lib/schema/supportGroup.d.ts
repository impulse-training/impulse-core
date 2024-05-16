import * as yup from 'yup';
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
    profileNicknames: {
        [x: string]: string;
    } | null | undefined;
    icon: {};
    thumbnailUrl: string;
    lastMessagePreview: string | undefined;
    invitationCode: string;
    invitationUrl: string;
    lastMessageProfileId: string | undefined;
    isSharingDisabled: boolean | undefined;
    isTemplate: boolean | undefined;
    unreadCounts: {
        [x: string]: number;
    };
    permissions: {};
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
    profileNicknames: undefined;
    icon: undefined;
    thumbnailUrl: undefined;
    lastMessagePreview: undefined;
    invitationCode: undefined;
    invitationUrl: undefined;
    lastMessageProfileId: undefined;
    isSharingDisabled: undefined;
    isTemplate: undefined;
    unreadCounts: undefined;
    permissions: undefined;
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
