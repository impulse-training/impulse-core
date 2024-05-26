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
    everythingPermissions?: boolean | undefined;
    creatorProfileId?: string | undefined;
    lastMessagePreview?: string | undefined;
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
    permissions?: {} | undefined;
    name: string;
    invitationCode: string;
    participantProfileIds: string[];
    invitationUrl: string;
}, "name" | "invitationCode" | "participantProfileIds" | "invitationUrl" | ("createdAt" | "updatedAt" | "slug" | "everythingPermissions" | "creatorProfileId" | "lastMessagePreview" | "isSharingDisabled" | "tacticPreviewsById" | "permissions")>;
