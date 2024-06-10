import * as Factory from 'factory.ts';
import { TacticValue } from '../schema';
import { TimestampLike } from '../utils/firestore/TimestampLike';
export declare const makeTacticFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<TacticValue, "createdAt" | "updatedAt" | "profileId" | "recommendedForIssueIds" | "recommendedForIssueOrdinals" | "ordinal" | "title" | "type" | "pastTenseTitle" | "commentCount" | "description" | "debriefAfterMinutes" | "image" | "backgroundColor" | "setbackThreshold" | "likesCount" | "timerSeconds" | "isSuggested">;
export declare const makeQuestionTimeTacticFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<{
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
        localFilePath?: import("yup").Maybe<string | undefined>;
        storagePath?: import("yup").Maybe<string | undefined>;
        uri?: import("yup").Maybe<string | undefined>;
    } | null | undefined;
    backgroundColor?: string | undefined;
    setbackThreshold?: number | null | undefined;
    likesCount?: number | null | undefined;
    timerSeconds?: import("yup").Maybe<number | undefined>;
    isSuggested?: boolean | undefined;
    options?: ({
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
        label?: string | undefined;
        text: string;
        type: "question-multiple-choice";
        color: string;
        textColor: string;
    } | {
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
        label?: string | undefined;
        setbackThreshold?: number | undefined;
        greaterThan?: number | undefined;
        lessThanOrEqualTo?: number | undefined;
        text: string;
        type: "question-time";
        color: string;
        textColor: string;
    } | {
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
        label?: string | undefined;
        setbackThreshold?: number | undefined;
        greaterThan?: number | undefined;
        lessThanOrEqualTo?: number | undefined;
        text: string;
        type: "question-counter";
        color: string;
        textColor: string;
    })[] | undefined;
    ordinal: number;
    title: string;
    type: import("../schema").QuestionKeyType;
}, "ordinal" | "title" | "type" | ("createdAt" | "updatedAt" | "profileId" | "recommendedForIssueIds" | "recommendedForIssueOrdinals" | "pastTenseTitle" | "commentCount" | "description" | "debriefAfterMinutes" | "image" | "backgroundColor" | "setbackThreshold" | "likesCount" | "timerSeconds" | "isSuggested" | "options")>;
