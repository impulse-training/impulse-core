import { RecapKeyType } from './recapKeyType';
export declare function recapTacticValueBaseSchema(type: RecapKeyType): import("yup").ObjectSchema<{
    uid: string | undefined;
    recommendedForIssueIds: string[] | undefined;
    sourceFile: import("../../utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
        localFilePath?: import("yup").Maybe<string | undefined>;
        isDeleted?: boolean | undefined;
        waveForm?: import("yup").Maybe<string | undefined>;
        thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
        thumbnailUri?: import("yup").Maybe<string | undefined>;
        storagePath: string;
        uri: string;
    } | undefined;
    backgroundColor: string | undefined;
    setbackThreshold: number | null | undefined;
    likesCount: number | null | undefined;
    timerSeconds: import("yup").Maybe<number | undefined>;
    isSuggested: boolean | undefined;
}, import("yup").AnyObject, {
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
    setbackThreshold: undefined;
    likesCount: undefined;
    timerSeconds: undefined;
    isSuggested: undefined;
}, "">;
