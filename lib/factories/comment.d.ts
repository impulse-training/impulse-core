import * as Factory from 'factory.ts';
import { TimestampLike } from '../utils/TimestampLike';
export declare const makeCommentFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<{
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
    tacticId?: string | null | undefined;
    tacticName?: string | null | undefined;
    text?: string | undefined;
    recording?: {
        waveform?: string | null | undefined;
        localFilePath: string;
        remoteFilePath: string;
    } | undefined;
    isEdited?: boolean | undefined;
    avatar?: {
        localFilePath?: import("yup").Maybe<string | undefined>;
        storagePath?: import("yup").Maybe<string | undefined>;
        uri?: import("yup").Maybe<string | undefined>;
    } | undefined;
    profileId: string;
    uids: string[];
    authorName: string;
}, "profileId" | "uids" | "authorName" | ("createdAt" | "updatedAt" | "tacticId" | "tacticName" | "text" | "recording" | "isEdited" | "avatar")>;
