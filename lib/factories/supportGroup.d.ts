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
    creatorProfileId?: string | undefined;
    lastMessagePreview?: string | undefined;
    lastMessageProfileId?: string | undefined;
    isSharingDisabled?: boolean | undefined;
    tacticPreviewsById?: {
        updatedAt?: {
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        image?: {
            localFilePath?: import("yup").Maybe<string | undefined>;
            storagePath?: import("yup").Maybe<string | undefined>;
            uri?: import("yup").Maybe<string | undefined>;
        } | undefined;
        backgroundColor?: string | undefined;
        title: string;
    }[] | undefined;
    unreadCounts?: {
        [x: string]: number;
    } | null | undefined;
    permissions?: {} | undefined;
    invitationCode: string;
    participantProfileIds: string[];
    groupName: string;
    invitationUrl: string;
}, "invitationCode" | "participantProfileIds" | "groupName" | "invitationUrl" | ("createdAt" | "updatedAt" | "slug" | "templateId" | "everythingPermissions" | "memberTargetCount" | "groupNameAliases" | "groupDescription" | "creatorProfileId" | "lastMessagePreview" | "lastMessageProfileId" | "isSharingDisabled" | "tacticPreviewsById" | "unreadCounts" | "permissions")>;
