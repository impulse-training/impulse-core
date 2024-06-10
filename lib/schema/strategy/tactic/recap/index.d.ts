import * as yup from 'yup';
import { RecapActionTacticValue } from './recapAction';
import { RecapTrackingTacticValue } from './recapTracking';
export * from './recapAction';
export * from './recapTracking';
export declare const recapTacticSchemas: Record<RecapTacticValue['type'], yup.ObjectSchema<RecapTacticValue>>;
export declare const recapTacticSchema: yup.Lazy<{
    createdAt?: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    updatedAt?: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    profileId?: string | null | undefined;
    recommendedForIssueIds?: string[] | undefined;
    recommendedForIssueOrdinals?: {
        [x: string]: number;
    } | null | undefined;
    pastTenseTitle?: string | undefined;
    commentCount?: number | undefined;
    description?: string | null | undefined;
    debriefAfterMinutes?: number | null | undefined;
    image?: {
        localFilePath?: yup.Maybe<string | undefined>;
        storagePath?: yup.Maybe<string | undefined>;
        uri?: yup.Maybe<string | undefined>;
    } | null | undefined;
    backgroundColor?: string | undefined;
    setbackThreshold?: number | null | undefined;
    likesCount?: number | null | undefined;
    timerSeconds?: yup.Maybe<number | undefined>;
    isSuggested?: boolean | undefined;
    ordinal: number;
    title: string;
    type: import("./recapKeyType").RecapKeyType;
}, yup.AnyObject, any>;
export type RecapTacticValue = RecapActionTacticValue | RecapTrackingTacticValue;