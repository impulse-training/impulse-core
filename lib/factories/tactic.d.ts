import * as Factory from 'factory.ts';
import { TacticValue } from '../schema';
import { TimestampLike } from '../utils/firestore/TimestampLike';
export declare const makeTacticFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<TacticValue, "createdAt" | "updatedAt" | "profileId" | "title" | "type" | "setbackThreshold" | "subtitle" | "description" | "image" | "optionsById" | "backgroundColor" | "isTemplate" | "language" | "href" | "categoryIds" | "isShared" | "isResponseRequired" | "timerSeconds" | "isAvailableForRecommendation" | "numberOfLikes" | "isSuggested">;
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
    setbackThreshold?: number | null | undefined;
    subtitle?: import("yup").Maybe<string | undefined>;
    description?: string | null | undefined;
    image?: {
        localFilePath?: import("yup").Maybe<string | undefined>;
        storagePath?: import("yup").Maybe<string | undefined>;
        uri?: import("yup").Maybe<string | undefined>;
    } | null | undefined;
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
    href?: string | null | undefined;
    categoryIds?: (string | undefined)[] | null | undefined;
    isShared?: boolean | null | undefined;
    isResponseRequired?: boolean | null | undefined;
    timerSeconds?: import("yup").Maybe<number | undefined>;
    isAvailableForRecommendation?: boolean | null | undefined;
    numberOfLikes?: number | null | undefined;
    isSuggested?: boolean | undefined;
    title: string;
    type: import("../schema").QuestionKeyType;
    backgroundColor: string;
}, "title" | "type" | "backgroundColor" | ("createdAt" | "updatedAt" | "profileId" | "setbackThreshold" | "subtitle" | "description" | "image" | "optionsById" | "isTemplate" | "language" | "href" | "categoryIds" | "isShared" | "isResponseRequired" | "timerSeconds" | "isAvailableForRecommendation" | "numberOfLikes" | "isSuggested")>;
