import * as yup from 'yup';
export declare const supportGroupSchema: yup.ObjectSchema<{
    createdAt: yup.Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt: yup.Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    slug: string | undefined;
    templateId: string | undefined;
    everythingPermissions: boolean | undefined;
    participantUids: any[];
    memberTargetCount: number | undefined;
    groupName: string;
    groupNameAliases: {
        [x: string]: string | undefined;
    } | undefined;
    groupDescription: string | undefined;
    creatorName: string;
    creatorUid: string;
    icon: {};
    thumbnailUrl: string;
    lastMessagePreview: string | undefined;
    invitationCode: string | undefined;
    invitationUrl: string | undefined;
    lastMessageUid: string | undefined;
    isSharingDisabled: boolean | undefined;
    isTemplate: boolean | undefined;
    unreadCounts: {
        [x: string]: number;
    };
    permissions: {};
    suggestedTacticIds: {};
}, yup.AnyObject, {
    createdAt: undefined;
    updatedAt: undefined;
    slug: undefined;
    templateId: undefined;
    everythingPermissions: undefined;
    participantUids: "";
    memberTargetCount: undefined;
    groupName: undefined;
    groupNameAliases: undefined;
    groupDescription: undefined;
    creatorName: undefined;
    creatorUid: undefined;
    icon: undefined;
    thumbnailUrl: undefined;
    lastMessagePreview: undefined;
    invitationCode: undefined;
    invitationUrl: undefined;
    lastMessageUid: undefined;
    isSharingDisabled: undefined;
    isTemplate: undefined;
    unreadCounts: undefined;
    permissions: undefined;
    suggestedTacticIds: {};
}, "">;
export type SupportGroupValue = yup.InferType<typeof supportGroupSchema>;
export type PermissionKey = keyof typeof CONVERSATION_PERMISSIONS;
export type SupportGroupPermissions = {
    [uid: string]: Partial<{
        [key in PermissionKey]: boolean;
    }>;
};
export declare const CONVERSATION_PERMISSIONS: {
    logs: string;
    tactics: string;
    editTactics: string;
    insights: string;
};
