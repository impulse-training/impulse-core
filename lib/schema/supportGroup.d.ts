import { Timestamp } from '../utils/Timestamp';
export interface SupportGroupValue {
    createdAt: Timestamp;
    updatedAt: Timestamp;
    templateId?: string;
    everythingPermissions?: boolean;
    participantUids: Array<string>;
    groupName: string;
    groupNameAliases?: Record<string, string>;
    groupDescription?: string;
    creatorName: string;
    creatorUid: string;
    icon: 'bugs' | 'team' | 'group' | 'tactics';
    thumbnailUrl: string;
    lastMessagePreview?: string;
    invitationCode?: string;
    invitationUrl?: string;
    lastMessageUid?: string;
    isTemplate?: boolean;
    unreadCounts: {
        [uid: string]: number;
    };
    permissions: SupportGroupPermissions;
}
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