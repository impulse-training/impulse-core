import { RecapKeyType } from './recapKeyType';
export declare function recapTacticValueBaseSchema(type: RecapKeyType): import("yup").ObjectSchema<{
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
    type: RecapKeyType;
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
        localFilePath?: import("yup").Maybe<string | undefined>;
        storagePath?: import("yup").Maybe<string | undefined>;
        uri?: import("yup").Maybe<string | undefined>;
        waveForm?: import("yup").Maybe<string | undefined>;
    } | null | undefined;
    backgroundColor: string | undefined;
    setbackThreshold: number | null | undefined;
    likesCount: number | null | undefined;
    timerSeconds: import("yup").Maybe<number | undefined>;
    isSuggested: boolean | undefined;
}, import("yup").AnyObject, {
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
}, "">;
