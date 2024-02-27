import * as yup from 'yup';
import { TimestampLike } from '../utils/TimestampLike';
export declare const strategy: yup.ObjectSchema<{
    tacticIds: string[];
    suggestedTacticIds: string[];
    conditionalTacticIds: {
        [x: string]: {
            condition: NonNullable<"eq" | "gt" | "lt" | "keyword" | undefined>;
            value: {};
            ids: string[];
        }[] | undefined;
    } | null | undefined;
}, yup.AnyObject, {
    tacticIds: "";
    suggestedTacticIds: "";
    conditionalTacticIds: undefined;
}, "">;
export type Strategy = yup.InferType<typeof strategy>;
export type GameplanValue = WithTypes<typeof gameplanSchema>;
export declare const gameplanSchema: yup.ObjectSchema<{
    uid: string;
    createdAt: yup.Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt: yup.Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    impulse: {
        [x: string]: {
            conditionalTacticIds?: {
                [x: string]: {
                    condition: NonNullable<"eq" | "gt" | "lt" | "keyword" | undefined>;
                    value: {};
                    ids: string[];
                }[] | undefined;
            } | null | undefined;
            tacticIds: string[];
            suggestedTacticIds: string[];
        };
    };
    impulseDebrief: {
        [x: string]: {
            conditionalTacticIds?: {
                [x: string]: {
                    condition: NonNullable<"eq" | "gt" | "lt" | "keyword" | undefined>;
                    value: {};
                    ids: string[];
                }[] | undefined;
            } | null | undefined;
            tacticIds: string[];
            suggestedTacticIds: string[];
        };
    };
    routine: {
        [x: string]: {
            conditionalTacticIds?: {
                [x: string]: {
                    condition: NonNullable<"eq" | "gt" | "lt" | "keyword" | undefined>;
                    value: {};
                    ids: string[];
                }[] | undefined;
            } | null | undefined;
            tacticIds: string[];
            suggestedTacticIds: string[];
        };
    };
    tacticsById: {
        [x: string]: {
            uid?: string | null | undefined;
            updatedAt?: yup.Maybe<{} | undefined> | {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            createdAt?: yup.Maybe<{} | undefined> | {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            ordinal?: number | null | undefined;
            isTemplate?: boolean | null | undefined;
            sourceId?: string | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            isSuggested?: boolean | undefined;
            nextId?: string | undefined;
            autogenerate?: boolean | undefined;
            title: string;
            type: "folder";
            backgroundColor: string;
            tacticIds: string[];
            currentTacticIndex: number;
            tacticsById: {};
        } | {
            uid?: string | null | undefined;
            updatedAt?: yup.Maybe<{} | undefined> | {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            createdAt?: yup.Maybe<{} | undefined> | {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            ordinal?: number | null | undefined;
            isTemplate?: boolean | null | undefined;
            sourceId?: string | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            isSuggested?: boolean | undefined;
            title: string;
            type: "steps";
            backgroundColor: string;
            steps: number;
        } | {
            uid?: string | null | undefined;
            updatedAt?: yup.Maybe<{} | undefined> | {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            createdAt?: yup.Maybe<{} | undefined> | {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            ordinal?: number | null | undefined;
            isTemplate?: boolean | null | undefined;
            sourceId?: string | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            isSuggested?: boolean | undefined;
            title: string;
            type: "emotions";
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            updatedAt?: yup.Maybe<{} | undefined> | {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            createdAt?: yup.Maybe<{} | undefined> | {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            ordinal?: number | null | undefined;
            isTemplate?: boolean | null | undefined;
            sourceId?: string | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            isSuggested?: boolean | undefined;
            title: string;
            type: "audio";
            backgroundColor: string;
            recording: {
                waveform?: string | null | undefined;
                localFilePath: string;
                remoteFilePath: string;
            };
        } | {
            uid?: string | null | undefined;
            updatedAt?: yup.Maybe<{} | undefined> | {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            createdAt?: yup.Maybe<{} | undefined> | {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            ordinal?: number | null | undefined;
            isTemplate?: boolean | null | undefined;
            sourceId?: string | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            isSuggested?: boolean | undefined;
            title: string;
            type: "video";
            backgroundColor: string;
            video: {
                storagePath?: string | null | undefined;
                url?: string | null | undefined;
                title: string;
                description: string;
                thumbnailUrl: string;
                duration: number;
            };
        } | {
            uid?: string | null | undefined;
            updatedAt?: yup.Maybe<{} | undefined> | {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            createdAt?: yup.Maybe<{} | undefined> | {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            ordinal?: number | null | undefined;
            isTemplate?: boolean | null | undefined;
            sourceId?: string | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
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
            title: string;
            type: "measure-slider";
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            updatedAt?: yup.Maybe<{} | undefined> | {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            createdAt?: yup.Maybe<{} | undefined> | {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            ordinal?: number | null | undefined;
            isTemplate?: boolean | null | undefined;
            sourceId?: string | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            isSuggested?: boolean | undefined;
            title: string;
            type: "measure-time";
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            updatedAt?: yup.Maybe<{} | undefined> | {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            createdAt?: yup.Maybe<{} | undefined> | {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            ordinal?: number | null | undefined;
            isTemplate?: boolean | null | undefined;
            sourceId?: string | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            isSuggested?: boolean | undefined;
            title: string;
            type: "measure-counter";
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            updatedAt?: yup.Maybe<{} | undefined> | {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            createdAt?: yup.Maybe<{} | undefined> | {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            ordinal?: number | null | undefined;
            isTemplate?: boolean | null | undefined;
            sourceId?: string | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            isSuggested?: boolean | undefined;
            title: string;
            type: "phone";
            backgroundColor: string;
            supportGroupId: string;
            trigger: {};
        } | {
            uid?: string | null | undefined;
            updatedAt?: yup.Maybe<{} | undefined> | {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            createdAt?: yup.Maybe<{} | undefined> | {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            ordinal?: number | null | undefined;
            isTemplate?: boolean | null | undefined;
            sourceId?: string | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            isSuggested?: boolean | undefined;
            title: string;
            repeat: number;
            type: "breathe";
            backgroundColor: string;
            inFor: number;
            holdFor: number;
            outFor: number;
        } | {
            uid?: string | null | undefined;
            updatedAt?: yup.Maybe<{} | undefined> | {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            createdAt?: yup.Maybe<{} | undefined> | {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            ordinal?: number | null | undefined;
            isTemplate?: boolean | null | undefined;
            sourceId?: string | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            isSuggested?: boolean | undefined;
            title: string;
            type: "urge-surfing";
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            updatedAt?: yup.Maybe<{} | undefined> | {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            createdAt?: yup.Maybe<{} | undefined> | {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            ordinal?: number | null | undefined;
            isTemplate?: boolean | null | undefined;
            sourceId?: string | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            isSuggested?: boolean | undefined;
            title: string;
            type: "task";
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            updatedAt?: yup.Maybe<{} | undefined> | {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            createdAt?: yup.Maybe<{} | undefined> | {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            ordinal?: number | null | undefined;
            isTemplate?: boolean | null | undefined;
            sourceId?: string | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            isSuggested?: boolean | undefined;
            title: string;
            type: "question";
            backgroundColor: string;
        };
    };
    routinesById: {
        [x: string]: {
            updatedAt?: yup.Maybe<{} | undefined> | {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            createdAt?: yup.Maybe<{} | undefined> | {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title?: string | null | undefined;
            navigationTitle?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            scheduledNotificationIds?: string[] | null | undefined;
            uid: string;
            timezone: string;
            type: "time";
            weekdays: number[];
            hour: number;
            minute: number;
        } | {
            updatedAt?: yup.Maybe<{} | undefined> | {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            createdAt?: yup.Maybe<{} | undefined> | {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title?: string | null | undefined;
            navigationTitle?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            scheduledNotificationIds?: string[] | null | undefined;
            uid: string;
            timezone: string;
            type: "dayDebrief";
            weekdays: number[];
            hour: number;
            minute: number;
        } | {
            updatedAt?: yup.Maybe<{} | undefined> | {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            createdAt?: yup.Maybe<{} | undefined> | {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title?: string | null | undefined;
            navigationTitle?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            timezone?: string | null | undefined;
            locationId?: string | null | undefined;
            uid: string;
            type: "location";
            mode: {};
        };
    };
    patternsById: {
        [x: string]: {
            updatedAt?: yup.Maybe<{} | undefined> | {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            createdAt?: yup.Maybe<{} | undefined> | {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            supportGroupIds?: yup.Maybe<(string | undefined)[] | undefined>;
            notification?: {
                title: string;
                body: string;
            } | null | undefined;
            setbackTacticId?: yup.Maybe<string | undefined>;
            issueId?: yup.Maybe<string | undefined>;
            uid: string;
            name: string;
            ordinal: number;
            setbackThreshold: number;
            sendWeeklyReports: NonNullable<boolean | undefined>;
        };
    };
}, yup.AnyObject, {
    uid: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    impulse: undefined;
    impulseDebrief: undefined;
    routine: undefined;
    tacticsById: undefined;
    routinesById: undefined;
    patternsById: undefined;
}, "">;
type WithTypes<T extends yup.ISchema<unknown>> = yup.InferType<T> & {
    createdAt: TimestampLike;
    updatedAt: TimestampLike;
};
export {};
