import { RecapKeyType } from './recapKeyType';
export declare function recapTacticValueBaseSchema(type: RecapKeyType): import("yup").ObjectSchema<{
    recommendedForIssueIds: string[] | undefined;
    recommendedForIssueOrdinals: {
        [x: string]: number;
    } | null | undefined;
    isInGameplan: boolean | undefined;
    ordinal: number;
    prompt: string;
    type: RecapKeyType;
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
        localFilePath?: import("yup").Maybe<string | undefined>;
        storagePath?: import("yup").Maybe<string | undefined>;
        uri?: import("yup").Maybe<string | undefined>;
    } | null | undefined;
    backgroundColor: string | undefined;
    setbackThreshold: number | null | undefined;
    likesCount: number | null | undefined;
    timerSeconds: import("yup").Maybe<number | undefined>;
    isSuggested: boolean | undefined;
}, import("yup").AnyObject, {
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
}, "">;
