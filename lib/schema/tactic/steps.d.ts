import * as yup from 'yup';
export declare const stepsTacticSchema: yup.ObjectSchema<{
    uid: string | undefined;
    recommendedForIssueIds: string[] | undefined;
    sourceFile: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
    sharedWithIssueIds: string[] | undefined;
    recommendedForIssueOrdinals: {
        [x: string]: number;
    } | null | undefined;
    ordinal: number;
    prompt: string | undefined;
    isShared: boolean | undefined;
    description: string | null | undefined;
    type: "steps";
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
        createdAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        updatedAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        localFilePath?: yup.Maybe<string | undefined>;
        isDeleted?: boolean | undefined;
        metadata?: {} | null | undefined;
        thumbnailStoragePath?: yup.Maybe<string | undefined>;
        thumbnailUri?: yup.Maybe<string | undefined>;
        contentType: string;
        storagePath: string;
        uri: string;
    } | undefined;
    backgroundColor: string | undefined;
    likesCount: number | null | undefined;
    timerSeconds: yup.Maybe<number | undefined>;
    isSuggested: boolean | undefined;
    targetSteps: number;
}, yup.AnyObject, {
    uid: undefined;
    recommendedForIssueIds: "";
    sourceFile: undefined;
    sharedWithIssueIds: "";
    recommendedForIssueOrdinals: undefined;
    ordinal: undefined;
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
    targetSteps: undefined;
}, "">;
export type StepsTacticValue = yup.InferType<typeof stepsTacticSchema>;
