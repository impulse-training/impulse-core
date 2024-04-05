import * as Factory from 'factory.ts';
import { TacticValue } from '../schema';
import { TimestampLike } from '../utils/TimestampLike';
export declare const makeTacticFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<TacticValue, "createdAt" | "updatedAt" | "profileId" | "type" | "sourceId" | "title" | "subtitle" | "description" | "image" | "backgroundColor" | "isTemplate" | "language" | "href" | "categoryIds" | "isShared" | "isResponseRequired" | "timerSeconds" | "isAvailableForRecommendation" | "numberOfLikes" | "isSuggested">;
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
    sourceId?: string | undefined;
    subtitle?: import("yup").Maybe<string | undefined>;
    description?: string | null | undefined;
    image?: {
        localFilePath?: import("yup").Maybe<string | undefined>;
        storagePath?: import("yup").Maybe<string | undefined>;
        uri?: import("yup").Maybe<string | undefined>;
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
    type: "question-time";
    title: string;
    backgroundColor: string;
}, "type" | "title" | "backgroundColor" | ("createdAt" | "updatedAt" | "profileId" | "sourceId" | "subtitle" | "description" | "image" | "isTemplate" | "language" | "href" | "categoryIds" | "isShared" | "isResponseRequired" | "timerSeconds" | "isAvailableForRecommendation" | "numberOfLikes" | "isSuggested")>;
