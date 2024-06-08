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
        type: NonNullable<import("../schema").QuestionKeyType | "audio" | "breathe" | "day-review" | "emotions" | "phone" | import("../schema/tactic/recap/recapKeyType").RecapKeyType | "steps" | "task" | "urge-surfing" | "video" | undefined>;
        title: string;
    }[] | undefined;
    defaultFor?: "trackTactics" | "debriefTactics" | "reflectionTactics" | undefined;
    recommendedFor?: "time" | "impulse" | null | undefined;
    recommendedForIssueIds?: string[] | undefined;
    recommendedForIssueOrdinals?: {
        [x: string]: number;
    } | null | undefined;
    name: string;
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
            type: NonNullable<import("../schema").QuestionKeyType | "audio" | "breathe" | "day-review" | "emotions" | "phone" | import("../schema/tactic/recap/recapKeyType").RecapKeyType | "steps" | "task" | "urge-surfing" | "video" | undefined>;
            title: string;
        };
    };
}, "name" | "invitationCode" | "invitationUrl" | "tacticPreviewsById" | ("createdAt" | "updatedAt" | "slug" | "creatorProfileId" | "last3TacticPreviews" | "defaultFor" | "recommendedFor" | "recommendedForIssueIds" | "recommendedForIssueOrdinals")>;
