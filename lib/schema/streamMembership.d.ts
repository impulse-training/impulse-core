import * as yup from 'yup';
export declare const streamMembershipSchema: yup.ObjectSchema<{
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
    streamRef: import("./utils/firestore").DocumentReferenceLike<unknown>;
    streamData: {
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
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
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
                    localFilePath?: yup.Maybe<string | undefined>;
                    storagePath?: yup.Maybe<string | undefined>;
                    uri?: yup.Maybe<string | undefined>;
                } | undefined;
                backgroundColor?: string | undefined;
                title: string;
            };
        };
    };
    ordinal: number;
    seenTactics: {
        [x: string]: NonNullable<boolean | undefined>;
    };
    tacticOrdinals: {
        [x: string]: number;
    };
    tacticLikes: {
        [x: string]: NonNullable<boolean | undefined>;
    };
}, yup.AnyObject, {
    createdAt: undefined;
    updatedAt: undefined;
    streamRef: undefined;
    streamData: {
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
    seenTactics: undefined;
    tacticOrdinals: undefined;
    tacticLikes: undefined;
}, "">;
export type StreamMembershipValue = yup.InferType<typeof streamMembershipSchema>;
