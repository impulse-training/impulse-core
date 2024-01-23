import * as yup from 'yup';
export declare const supportGroupValueSchema: yup.ObjectSchema<{
    createdAt: {
        seconds: number;
        nanoseconds: number;
    };
    updatedAt: {
        seconds: number;
        nanoseconds: number;
    };
    templateId: string | undefined;
    everythingPermissions: boolean | undefined;
    participantUids: (string | undefined)[];
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
    unreadCounts: {};
    permissions: {};
    suggestedTacticIds: {};
}, yup.AnyObject, {
    createdAt: {
        seconds: undefined;
        nanoseconds: undefined;
    };
    updatedAt: {
        seconds: undefined;
        nanoseconds: undefined;
    };
    templateId: undefined;
    everythingPermissions: undefined;
    participantUids: "";
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
    unreadCounts: {};
    permissions: undefined;
    suggestedTacticIds: {};
}, "">;
export type SupportGroupValue = yup.InferType<typeof supportGroupValueSchema>;
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
