import * as yup from 'yup';
import { RecapActionTacticValue } from './recapAction';
import { RecapTrackingTacticValue } from './recapTracking';
export * from './recapAction';
export * from './recapTracking';
export declare const recapTacticSchemas: Record<RecapTacticValue['type'], yup.ObjectSchema<RecapTacticValue>>;
export declare const recapTacticSchema: yup.Lazy<{
    setbackThreshold?: number | null | undefined;
    recommendedForIssueIds?: string[] | undefined;
    createdAt?: {
        isEqual?: any;
        toMillis?: any;
        toJSON?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    updatedAt?: {
        isEqual?: any;
        toMillis?: any;
        toJSON?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    prompt?: string | undefined;
    profileId?: string | undefined;
    recommendedForIssueOrdinals?: {
        [x: string]: number;
    } | null | undefined;
    description?: string | null | undefined;
    pastTenseTitle?: string | undefined;
    debriefAfterMinutes?: number | null | undefined;
    image?: {
        localFilePath?: yup.Maybe<string | undefined>;
        storagePath?: yup.Maybe<string | undefined>;
        uri?: yup.Maybe<string | undefined>;
    } | null | undefined;
    backgroundColor?: string | undefined;
    likesCount?: number | null | undefined;
    timerSeconds?: yup.Maybe<number | undefined>;
    isSuggested?: boolean | undefined;
    type: import("./recapKeyType").RecapKeyType;
    ordinal: number;
}, yup.AnyObject, any>;
export type RecapTacticValue = RecapActionTacticValue | RecapTrackingTacticValue;
