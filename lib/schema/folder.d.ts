import * as yup from 'yup';
export declare const tacticPreviewSchema: yup.ObjectSchema<{
    title: string;
    type: NonNullable<import(".").QuestionKeyType | "audio" | "breathe" | "day-review" | "emotions" | "phone" | import("./tactic/recap/recapKeyType").RecapKeyType | "steps" | "task" | "urge-surfing" | "video" | undefined>;
    image: {
        localFilePath?: yup.Maybe<string | undefined>;
        storagePath?: yup.Maybe<string | undefined>;
        uri?: yup.Maybe<string | undefined>;
    } | null | undefined;
    backgroundColor: string | undefined;
    updatedAt: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
}, yup.AnyObject, {
    title: undefined;
    type: undefined;
    image: {
        localFilePath: undefined;
        storagePath: undefined;
        uri: undefined;
    };
    backgroundColor: undefined;
    updatedAt: undefined;
}, "">;
export type TacticPreviewValue = yup.InferType<typeof tacticPreviewSchema>;
export declare const folderSchema: yup.ObjectSchema<{
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
    slug: string | undefined;
    name: string;
    creatorProfileId: string | undefined;
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
            } | null | undefined;
            backgroundColor?: string | undefined;
            type: NonNullable<import(".").QuestionKeyType | "audio" | "breathe" | "day-review" | "emotions" | "phone" | import("./tactic/recap/recapKeyType").RecapKeyType | "steps" | "task" | "urge-surfing" | "video" | undefined>;
            title: string;
        };
    };
    last3TacticPreviews: {
        updatedAt?: {
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        image?: {
            localFilePath?: yup.Maybe<string | undefined>;
            storagePath?: yup.Maybe<string | undefined>;
            uri?: yup.Maybe<string | undefined>;
        } | null | undefined;
        backgroundColor?: string | undefined;
        type: NonNullable<import(".").QuestionKeyType | "audio" | "breathe" | "day-review" | "emotions" | "phone" | import("./tactic/recap/recapKeyType").RecapKeyType | "steps" | "task" | "urge-surfing" | "video" | undefined>;
        title: string;
    }[] | undefined;
    defaultFor: "trackTactics" | "debriefTactics" | "reflectionTactics" | undefined;
    recommendedFor: "time" | "impulse" | null | undefined;
    recommendedForIssueIds: string[] | undefined;
    recommendedForIssueOrdinals: {
        [x: string]: number;
    } | null | undefined;
}, yup.AnyObject, {
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
}, "">;
export type FolderValue = yup.InferType<typeof folderSchema>;
