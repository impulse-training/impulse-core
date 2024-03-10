import * as yup from 'yup';
export declare const issueSchema: yup.ObjectSchema<{
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
    parentId: string | null | undefined;
    name: string;
    synonyms: (string | undefined)[];
    measureTactic: {
        createdAt?: import("..").TimestampLike | yup.Maybe<null>;
        updatedAt?: import("..").TimestampLike | yup.Maybe<null>;
        uid?: string | null | undefined;
        sourceId?: string | undefined;
        subtitle?: yup.Maybe<string | undefined>;
        description?: string | null | undefined;
        image?: {
            localFilePath?: yup.Maybe<string | undefined>;
            storagePath?: yup.Maybe<string | undefined>;
            uri?: yup.Maybe<string | undefined>;
        } | null | undefined;
        isTemplate?: boolean | null | undefined;
        language?: string | null | undefined;
        href?: string | null | undefined;
        categoryIds?: (string | undefined)[] | null | undefined;
        isShared?: boolean | null | undefined;
        isResponseRequired?: boolean | null | undefined;
        timerSeconds?: yup.Maybe<number | undefined>;
        isAvailableForRecommendation?: boolean | null | undefined;
        numberOfLikes?: number | null | undefined;
        isSuggested?: boolean | undefined;
        lowEmoji?: yup.Maybe<string | undefined>;
        highEmoji?: yup.Maybe<string | undefined>;
        type: "measure-slider";
        title: string;
        backgroundColor: string;
    } | {
        createdAt?: import("..").TimestampLike | yup.Maybe<null>;
        updatedAt?: import("..").TimestampLike | yup.Maybe<null>;
        uid?: string | null | undefined;
        sourceId?: string | undefined;
        subtitle?: yup.Maybe<string | undefined>;
        description?: string | null | undefined;
        image?: {
            localFilePath?: yup.Maybe<string | undefined>;
            storagePath?: yup.Maybe<string | undefined>;
            uri?: yup.Maybe<string | undefined>;
        } | null | undefined;
        isTemplate?: boolean | null | undefined;
        language?: string | null | undefined;
        href?: string | null | undefined;
        categoryIds?: (string | undefined)[] | null | undefined;
        isShared?: boolean | null | undefined;
        isResponseRequired?: boolean | null | undefined;
        timerSeconds?: yup.Maybe<number | undefined>;
        isAvailableForRecommendation?: boolean | null | undefined;
        numberOfLikes?: number | null | undefined;
        isSuggested?: boolean | undefined;
        type: "measure-time";
        title: string;
        backgroundColor: string;
    } | {
        createdAt?: import("..").TimestampLike | yup.Maybe<null>;
        updatedAt?: import("..").TimestampLike | yup.Maybe<null>;
        uid?: string | null | undefined;
        sourceId?: string | undefined;
        subtitle?: yup.Maybe<string | undefined>;
        description?: string | null | undefined;
        image?: {
            localFilePath?: yup.Maybe<string | undefined>;
            storagePath?: yup.Maybe<string | undefined>;
            uri?: yup.Maybe<string | undefined>;
        } | null | undefined;
        isTemplate?: boolean | null | undefined;
        language?: string | null | undefined;
        href?: string | null | undefined;
        categoryIds?: (string | undefined)[] | null | undefined;
        isShared?: boolean | null | undefined;
        isResponseRequired?: boolean | null | undefined;
        timerSeconds?: yup.Maybe<number | undefined>;
        isAvailableForRecommendation?: boolean | null | undefined;
        numberOfLikes?: number | null | undefined;
        isSuggested?: boolean | undefined;
        type: "measure-counter";
        title: string;
        backgroundColor: string;
    };
    setbackThreshold: number | undefined;
    path: string | null | undefined;
    parentIds: (string | undefined)[];
    parentNames: (string | undefined)[];
    programsCount: number | null | undefined;
    profileCount: number | null | undefined;
    isFeatured: boolean | null | undefined;
    main: {
        suggestedTacticIds: string[];
        llmPrompt: string;
    } | null | undefined;
    success: {
        suggestedTacticIds: string[];
        llmPrompt: string;
    } | null | undefined;
    setback: {
        suggestedTacticIds: string[];
        llmPrompt: string;
    } | null | undefined;
}, yup.AnyObject, {
    createdAt: {
        seconds: undefined;
        nanoseconds: undefined;
        toDate: undefined;
    };
    updatedAt: {
        seconds: undefined;
        nanoseconds: undefined;
        toDate: undefined;
    };
    parentId: undefined;
    name: undefined;
    synonyms: "";
    measureTactic: undefined;
    setbackThreshold: undefined;
    path: undefined;
    parentIds: "";
    parentNames: "";
    programsCount: undefined;
    profileCount: undefined;
    isFeatured: undefined;
    main: undefined;
    success: undefined;
    setback: undefined;
}, "">;
export type IssueValue = yup.InferType<typeof issueSchema>;
