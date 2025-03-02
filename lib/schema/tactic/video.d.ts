import * as yup from 'yup';
export declare const videoTacticSchema: yup.ObjectSchema<{
    uid: string | undefined;
    recommendedForIssueIds: string[] | undefined;
    sourceFile: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
    isDemoTactic: boolean | undefined;
    prompt: string | undefined;
    isShared: boolean | undefined;
    description: string | null | undefined;
    type: "video";
    createdAt: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    updatedAt: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    pastTenseTitle: string | undefined;
    debriefAfterMinutes: number | null | undefined;
    image: {
        localFilePath?: yup.Maybe<string | undefined>;
        isDeleted?: boolean | undefined;
        metadata?: {} | null | undefined;
        thumbnailStoragePath?: yup.Maybe<string | undefined>;
        thumbnailUri?: yup.Maybe<string | undefined>;
        storagePath: string;
        url: string;
    } | undefined;
    backgroundColor: string | undefined;
    likesCount: number | null | undefined;
    timerSeconds: yup.Maybe<number | undefined>;
    isSuggested: boolean | undefined;
    video: {
        storagePath?: string | null | undefined;
        url?: string | null | undefined;
    };
}, yup.AnyObject, {
    uid: undefined;
    recommendedForIssueIds: "";
    sourceFile: undefined;
    isDemoTactic: undefined;
    prompt: undefined;
    isShared: undefined;
    description: undefined;
    type: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    pastTenseTitle: undefined;
    debriefAfterMinutes: undefined;
    image: undefined;
    backgroundColor: undefined;
    likesCount: undefined;
    timerSeconds: undefined;
    isSuggested: undefined;
    video: {
        url: undefined;
        storagePath: undefined;
    };
}, "">;
export type VideoTacticValue = yup.InferType<typeof videoTacticSchema>;
