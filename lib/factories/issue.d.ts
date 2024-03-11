import * as Factory from 'factory.ts';
import { TimestampLike } from '../utils/TimestampLike';
export declare const makeIssueFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<{
    path?: string | null | undefined;
    main?: {
        suggestedTacticIds: string[];
        llmPrompt: string;
    } | null | undefined;
    success?: {
        suggestedTacticIds: string[];
        llmPrompt: string;
    } | null | undefined;
    setback?: {
        suggestedTacticIds: string[];
        llmPrompt: string;
    } | null | undefined;
    parentId?: string | null | undefined;
    setbackThreshold?: number | undefined;
    programsCount?: number | null | undefined;
    profileCount?: number | null | undefined;
    isFeatured?: boolean | null | undefined;
    createdAt: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    };
    updatedAt: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    };
    name: string;
    synonyms: (string | undefined)[];
    measureTactic: {
        createdAt?: TimestampLike | import("yup").Maybe<null>;
        updatedAt?: TimestampLike | import("yup").Maybe<null>;
        uid?: string | null | undefined;
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
        lowEmoji?: import("yup").Maybe<string | undefined>;
        highEmoji?: import("yup").Maybe<string | undefined>;
        type: "measure-slider";
        title: string;
        backgroundColor: string;
    } | {
        createdAt?: TimestampLike | import("yup").Maybe<null>;
        updatedAt?: TimestampLike | import("yup").Maybe<null>;
        uid?: string | null | undefined;
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
        type: "measure-time";
        title: string;
        backgroundColor: string;
    } | {
        createdAt?: TimestampLike | import("yup").Maybe<null>;
        updatedAt?: TimestampLike | import("yup").Maybe<null>;
        uid?: string | null | undefined;
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
        type: "measure-counter";
        title: string;
        backgroundColor: string;
    };
    parentIds: (string | undefined)[];
    parentNames: (string | undefined)[];
}, "createdAt" | "updatedAt" | "name" | "synonyms" | "measureTactic" | "parentIds" | "parentNames" | ("path" | "main" | "success" | "setback" | "parentId" | "setbackThreshold" | "programsCount" | "profileCount" | "isFeatured")>;
