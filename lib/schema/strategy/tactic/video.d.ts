import * as yup from 'yup';
export declare const videoTacticSchema: yup.ObjectSchema<{
    profileId: string | null | undefined;
    recommendedForIssueIds: string[] | undefined;
    recommendedForIssueOrdinals: {
        [x: string]: number;
    } | null | undefined;
    isInGameplan: boolean | undefined;
    ordinal: number;
    prompt: string;
    type: "video";
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
    video: {
        storagePath?: string | null | undefined;
        url?: string | null | undefined;
        description: string;
        title: string;
        thumbnailUrl: string;
        duration: number;
    };
}, yup.AnyObject, {
    profileId: undefined;
    recommendedForIssueIds: "";
    recommendedForIssueOrdinals: undefined;
    isInGameplan: undefined;
    ordinal: undefined;
    prompt: undefined;
    type: undefined;
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
    video: {
        url: undefined;
        storagePath: undefined;
        title: undefined;
        description: undefined;
        thumbnailUrl: undefined;
        duration: undefined;
    };
}, "">;
export type VideoTacticValue = yup.InferType<typeof videoTacticSchema>;
