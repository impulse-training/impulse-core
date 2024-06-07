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
    ordinal: number;
    tacticLikes: {
        [x: string]: NonNullable<boolean | undefined>;
    };
    folderRef: import("../schema/utils/firestore").DocumentReferenceLike<unknown>;
    folderData: {
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
            } | undefined;
            backgroundColor?: string | undefined;
            title: string;
        }[] | undefined;
        defaultFor?: "trackTactics" | "debriefTactics" | "reflectionTactics" | undefined;
        recommendedFor?: "impulse" | "time" | null | undefined;
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
                } | undefined;
                backgroundColor?: string | undefined;
                title: string;
            };
        };
    };
    seenTactics: {
        [x: string]: NonNullable<boolean | undefined>;
    };
    tacticOrdinals: {
        [x: string]: number;
    };
}, "ordinal" | "tacticLikes" | "folderRef" | "folderData" | "seenTactics" | "tacticOrdinals" | ("createdAt" | "updatedAt")>;
