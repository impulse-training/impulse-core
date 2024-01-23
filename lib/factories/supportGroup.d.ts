import * as Factory from 'factory.ts';
import { FakeTimestamp } from '../utils/FakeTimestamp';
export declare const makeSupportGroupFactory: (TimestampKlass: typeof FakeTimestamp) => Factory.Sync.Factory<{
    isTemplate?: boolean | undefined;
    templateId?: string | undefined;
    everythingPermissions?: boolean | undefined;
    groupNameAliases?: {
        [x: string]: string | undefined;
    } | undefined;
    groupDescription?: string | undefined;
    lastMessagePreview?: string | undefined;
    invitationCode?: string | undefined;
    invitationUrl?: string | undefined;
    lastMessageUid?: string | undefined;
    isSharingDisabled?: boolean | undefined;
    createdAt: {
        seconds: number;
        nanoseconds: number;
    };
    updatedAt: {
        seconds: number;
        nanoseconds: number;
    };
    suggestedTacticIds: {};
    thumbnailUrl: string;
    participantUids: (string | undefined)[];
    groupName: string;
    creatorName: string;
    creatorUid: string;
    icon: {};
    unreadCounts: {};
    permissions: {};
}, "createdAt" | "updatedAt" | "suggestedTacticIds" | "thumbnailUrl" | "participantUids" | "groupName" | "creatorName" | "creatorUid" | "icon" | "unreadCounts" | "permissions" | ("isTemplate" | "templateId" | "everythingPermissions" | "groupNameAliases" | "groupDescription" | "lastMessagePreview" | "invitationCode" | "invitationUrl" | "lastMessageUid" | "isSharingDisabled")>;
