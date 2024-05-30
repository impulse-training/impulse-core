import * as Factory from 'factory.ts';
import { TacticValue } from '../schema';
import { TimestampLike } from '../utils/firestore/TimestampLike';
export declare const makeTacticFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<TacticValue, "createdAt" | "updatedAt" | "profileId" | "title" | "image" | "backgroundColor" | "type" | "setbackThreshold" | "ordinal" | "description" | "debriefAfterMinutes" | "optionsById" | "isTemplate" | "language" | "linkUrl" | "likesCount" | "timerSeconds" | "isSuggested">;
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
    image?: {
        localFilePath?: import("yup").Maybe<string | undefined>;
        storagePath?: import("yup").Maybe<string | undefined>;
        uri?: import("yup").Maybe<string | undefined>;
    } | null | undefined;
    setbackThreshold?: number | null | undefined;
    description?: string | null | undefined;
    debriefAfterMinutes?: number | null | undefined;
    optionsById?: {
        [x: string]: {
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
            strategiesPath: string;
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
            strategiesPath: string;
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
            strategiesPath: string;
        };
    } | null | undefined;
    isTemplate?: boolean | null | undefined;
    language?: string | null | undefined;
    linkUrl?: string | null | undefined;
    likesCount?: number | null | undefined;
    timerSeconds?: import("yup").Maybe<number | undefined>;
    isSuggested?: boolean | undefined;
    title: string;
    backgroundColor: string;
    type: import("../schema").QuestionKeyType;
    ordinal: number;
}, "title" | "backgroundColor" | "type" | "ordinal" | ("createdAt" | "updatedAt" | "profileId" | "image" | "setbackThreshold" | "description" | "debriefAfterMinutes" | "optionsById" | "isTemplate" | "language" | "linkUrl" | "likesCount" | "timerSeconds" | "isSuggested")>;
