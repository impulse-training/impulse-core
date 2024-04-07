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
    synonyms: string[];
    measureTactic: {
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
        type: "question-counter";
        title: string;
        backgroundColor: string;
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
        profileId?: string | null | undefined;
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
        choices?: {
            [x: string]: {
                text: string;
                strategies: {
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
                        ordinal?: yup.Maybe<number | undefined>;
                        type: "impulse";
                        tacticIds: string[];
                        name: string;
                    };
                };
                ordinal: number;
            };
        } | null | undefined;
        type: "question-multiple-choice";
        title: string;
        backgroundColor: string;
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
        profileId?: string | null | undefined;
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
        type: "question-slider";
        title: string;
        backgroundColor: string;
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
        profileId?: string | null | undefined;
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
        type: "question-time";
        title: string;
        backgroundColor: string;
    };
    setbackThreshold: number | undefined;
    path: string | null | undefined;
    parentIds: string[];
    parentNames: string[];
    strategiesCount: number | null | undefined;
    profileCount: number | null | undefined;
    isFeatured: boolean | null | undefined;
    impulseStrategies: {
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
        ordinal?: yup.Maybe<number | undefined>;
        type: "impulse";
        tacticIds: string[];
        name: string;
    }[] | undefined;
    scheduledStrategies: {
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
        ordinal?: yup.Maybe<number | undefined>;
        type: "time";
        tacticIds: string[];
        name: string;
        weekdays: number[];
        hour: number;
        minute: number;
    }[];
    locationStrategies: {
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
        ordinal?: yup.Maybe<number | undefined>;
        type: "location";
        tacticIds: string[];
        name: string;
        locationId: string;
        mode: NonNullable<"enter" | "exit" | undefined>;
    }[];
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
    strategiesCount: undefined;
    profileCount: undefined;
    isFeatured: undefined;
    impulseStrategies: "";
    scheduledStrategies: undefined;
    locationStrategies: undefined;
}, "">;
export type IssueValue = yup.InferType<typeof issueSchema>;
