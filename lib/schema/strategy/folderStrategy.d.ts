import { InferType } from 'yup';
export declare const folderStrategySchema: import("yup").ObjectSchema<{
    createdAt: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    updatedAt: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    type: "folder";
    docRef: import("../utils/firestore").DocumentReferenceLike<unknown>;
    docData: {
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
    ordinal: number;
}, import("yup").AnyObject, {
    createdAt: undefined;
    updatedAt: undefined;
    type: undefined;
    docRef: undefined;
    docData: {
        createdAt: undefined;
        updatedAt: undefined;
        slug: undefined;
        name: undefined;
        creatorProfileId: undefined;
        invitationCode: undefined;
        invitationUrl: undefined;
        tacticPreviewsById: undefined;
        last3TacticPreviews: "";
        defaultFor: undefined;
        recommendedFor: undefined;
        recommendedForIssueIds: "";
        recommendedForIssueOrdinals: undefined;
    };
    ordinal: undefined;
}, "">;
export type FolderStrategyValue = InferType<typeof folderStrategySchema>;
