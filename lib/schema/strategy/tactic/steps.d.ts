import * as yup from 'yup';
export declare const stepsTacticSchema: yup.ObjectSchema<{
    recommendedForIssueIds: string[] | undefined;
    recommendedForIssueOrdinals: {
        [x: string]: number;
    } | null | undefined;
    ordinal: number;
    title: string;
    type: "steps";
    profileId: string | null | undefined;
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
    pastTenseTitle: string | undefined;
    commentCount: number | undefined;
    description: string | null | undefined;
    debriefAfterMinutes: number | null | undefined;
    image: {
        localFilePath?: yup.Maybe<string | undefined>;
        storagePath?: yup.Maybe<string | undefined>;
        uri?: yup.Maybe<string | undefined>;
    } | null | undefined;
    backgroundColor: string | undefined;
    setbackThreshold: number | null | undefined;
    likesCount: number | null | undefined;
    timerSeconds: yup.Maybe<number | undefined>;
    isSuggested: boolean | undefined;
    steps: number;
}, yup.AnyObject, {
    recommendedForIssueIds: "";
    recommendedForIssueOrdinals: undefined;
    ordinal: undefined;
    title: undefined;
    type: undefined;
    profileId: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    pastTenseTitle: undefined;
    commentCount: undefined;
    description: undefined;
    debriefAfterMinutes: undefined;
    image: {
        localFilePath: undefined;
        storagePath: undefined;
        uri: undefined;
    };
    backgroundColor: undefined;
    setbackThreshold: undefined;
    likesCount: undefined;
    timerSeconds: undefined;
    isSuggested: undefined;
    steps: undefined;
}, "">;
export type StepsTacticValue = yup.InferType<typeof stepsTacticSchema>;
