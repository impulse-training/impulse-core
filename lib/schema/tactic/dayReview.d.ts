import * as yup from 'yup';
export declare const dayReviewForDayOptions: {
    readonly today: "The current day";
    readonly yesterday: "The previous day";
};
export declare const dayReviewTacticSchema: yup.ObjectSchema<{
    uid: string | undefined;
    recommendedForIssueIds: string[] | undefined;
    sharedWithIssueIds: string[] | undefined;
    recommendedForIssueOrdinals: {
        [x: string]: number;
    } | null | undefined;
    ordinal: number;
    prompt: string | undefined;
    isShared: boolean | undefined;
    description: string | null | undefined;
    type: "day-review";
    createdAt: {
        isEqual?: any;
        toMillis?: any;
        toJSON?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    updatedAt: {
        isEqual?: any;
        toMillis?: any;
        toJSON?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    pastTenseTitle: string | undefined;
    debriefAfterMinutes: number | null | undefined;
    image: {
        localFilePath?: yup.Maybe<string | undefined>;
        storagePath?: yup.Maybe<string | undefined>;
        uri?: yup.Maybe<string | undefined>;
        waveForm?: yup.Maybe<string | undefined>;
    } | null | undefined;
    backgroundColor: string | undefined;
    setbackThreshold: number | null | undefined;
    likesCount: number | null | undefined;
    timerSeconds: yup.Maybe<number | undefined>;
    isSuggested: boolean | undefined;
    forDay: string;
}, yup.AnyObject, {
    uid: undefined;
    recommendedForIssueIds: "";
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
    image: {
        localFilePath: undefined;
        storagePath: undefined;
        uri: undefined;
        waveForm: undefined;
    };
    backgroundColor: undefined;
    setbackThreshold: undefined;
    likesCount: undefined;
    timerSeconds: undefined;
    isSuggested: undefined;
    forDay: undefined;
}, "">;
export type DayReviewTacticValue = yup.InferType<typeof dayReviewTacticSchema>;
