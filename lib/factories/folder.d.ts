import * as Factory from 'factory.ts';
import { TimestampLike } from '../utils/firestore/TimestampLike';
export declare const makeFolderFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<{
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
    recommendedForIssueOrdinals?: {
        [x: string]: number;
    } | null | undefined;
    slug?: string | undefined;
    creatorProfileId?: string | undefined;
    last3TacticPreviews?: {
        updatedAt?: {
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        image?: {
            localFilePath?: import("yup").Maybe<string | undefined>;
            storagePath?: import("yup").Maybe<string | undefined>;
            uri?: import("yup").Maybe<string | undefined>;
        } | null | undefined;
        backgroundColor?: string | undefined;
        title: string;
        type: NonNullable<"audio" | "breathe" | "contacts" | import("../schema").QuestionKeyType | "steps" | "task" | "video" | undefined>;
    }[] | undefined;
    ordinal: number;
    title: string;
    type: "folder";
    invitationCode: string;
    invitationUrl: string;
    tacticPreviewsById: {
        [x: string]: {
            updatedAt?: {
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            image?: {
                localFilePath?: import("yup").Maybe<string | undefined>;
                storagePath?: import("yup").Maybe<string | undefined>;
                uri?: import("yup").Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | undefined;
            title: string;
            type: NonNullable<"audio" | "breathe" | "contacts" | import("../schema").QuestionKeyType | "steps" | "task" | "video" | undefined>;
        };
    };
}, "ordinal" | "title" | "type" | "invitationCode" | "invitationUrl" | "tacticPreviewsById" | ("createdAt" | "updatedAt" | "recommendedForIssueIds" | "recommendedForIssueOrdinals" | "slug" | "creatorProfileId" | "last3TacticPreviews")>;
