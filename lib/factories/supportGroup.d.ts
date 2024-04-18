import * as Factory from 'factory.ts';
import { TimestampLike } from '../utils/firestore/TimestampLike';
export declare const makeSupportGroupFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<{
    createdAt?: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    updatedAt?: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    isTemplate?: boolean | undefined;
    invitationCode?: string | undefined;
    slug?: string | undefined;
    templateId?: string | undefined;
    everythingPermissions?: boolean | undefined;
    memberTargetCount?: number | undefined;
    groupNameAliases?: {
        [x: string]: string;
        [x: number]: string;
        [x: symbol]: string;
    } | undefined;
    groupDescription?: string | undefined;
    profileNicknames?: {
        [x: string]: string;
    } | null | undefined;
    lastMessagePreview?: string | undefined;
    invitationUrl?: string | undefined;
    lastMessageProfileId?: string | undefined;
    isSharingDisabled?: boolean | undefined;
    thumbnailUrl: string;
    participantProfileIds: string[];
    groupName: string;
    creatorProfileId: string;
    icon: {};
    unreadCounts: {
        [x: string]: number;
    };
    permissions: {};
    suggestedTacticIds: {};
}, "thumbnailUrl" | "participantProfileIds" | "groupName" | "creatorProfileId" | "icon" | "unreadCounts" | "permissions" | "suggestedTacticIds" | ("createdAt" | "updatedAt" | "isTemplate" | "invitationCode" | "slug" | "templateId" | "everythingPermissions" | "memberTargetCount" | "groupNameAliases" | "groupDescription" | "profileNicknames" | "lastMessagePreview" | "invitationUrl" | "lastMessageProfileId" | "isSharingDisabled")>;
