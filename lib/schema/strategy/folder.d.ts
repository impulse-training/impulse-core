import * as yup from 'yup';
export declare const tacticPreviewSchema: yup.ObjectSchema<{
    title: string;
    type: NonNullable<"audio" | "breathe" | "contacts" | import("..").QuestionKeyType | "steps" | "task" | "video" | undefined>;
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
    recommendedForIssueIds: string[] | undefined;
    recommendedForIssueOrdinals: {
        [x: string]: number;
    } | null | undefined;
    ordinal: number;
    title: string;
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
    slug: string | undefined;
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
            title: string;
            type: NonNullable<"audio" | "breathe" | "contacts" | import("..").QuestionKeyType | "steps" | "task" | "video" | undefined>;
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
        title: string;
        type: NonNullable<"audio" | "breathe" | "contacts" | import("..").QuestionKeyType | "steps" | "task" | "video" | undefined>;
    }[] | undefined;
}, yup.AnyObject, {
    recommendedForIssueIds: "";
    recommendedForIssueOrdinals: undefined;
    ordinal: undefined;
    title: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    type: undefined;
    slug: undefined;
    creatorProfileId: undefined;
    invitationCode: undefined;
    invitationUrl: undefined;
    tacticPreviewsById: undefined;
    last3TacticPreviews: "";
}, "">;
export type FolderValue = yup.InferType<typeof folderSchema>;
