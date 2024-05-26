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
    recommendedForIssueIds?: string[] | undefined;
    recommendedFor?: "time" | "impulse" | null | undefined;
    recommendedForIssueOrdinals?: {
        [x: string]: number;
    } | null | undefined;
    slug?: string | undefined;
    creatorProfileId?: string | undefined;
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
    name: string;
    invitationCode: string;
    invitationUrl: string;
}, "name" | "invitationCode" | "invitationUrl" | ("createdAt" | "updatedAt" | "recommendedForIssueIds" | "recommendedFor" | "recommendedForIssueOrdinals" | "slug" | "creatorProfileId" | "tacticPreviewsById")>;
