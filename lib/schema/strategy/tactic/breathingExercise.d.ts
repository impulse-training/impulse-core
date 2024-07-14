import * as yup from 'yup';
export declare const breathingExerciseTacticSchema: yup.ObjectSchema<{
    recommendedForIssueIds: string[] | undefined;
    recommendedForIssueOrdinals: {
        [x: string]: number;
    } | null | undefined;
    isInGameplan: boolean | undefined;
    ordinal: number;
    prompt: string;
    type: "breathingExercise";
    profileId: string | null | undefined;
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
    inFor: number;
    holdFor: number;
    outFor: number;
    repeat: yup.Maybe<number | undefined>;
}, yup.AnyObject, {
    recommendedForIssueIds: "";
    recommendedForIssueOrdinals: undefined;
    isInGameplan: undefined;
    ordinal: undefined;
    prompt: undefined;
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
    inFor: undefined;
    holdFor: undefined;
    outFor: undefined;
    repeat: undefined;
}, "">;
export type BreatheTacticValue = yup.InferType<typeof breathingExerciseTacticSchema>;
