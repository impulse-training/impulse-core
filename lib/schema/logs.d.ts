import * as yup from 'yup';
import { TimestampLike } from '../utils/TimestampLike';
type Outcome = 'success' | 'setback' | 'indeterminate';
export type BaseLogValue = WithTypes<typeof baseLogSchema>;
declare const baseLogSchema: yup.ObjectSchema<{
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
    startTime: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    timezone: string;
    location: {
        latitude?: number | undefined;
        longitude?: number | undefined;
        altitude?: number | undefined;
        accuracy?: number | undefined;
        altitudeAccuracy?: number | undefined;
        heading?: number | undefined;
        speed?: number | undefined;
    };
    locationIsFetching: NonNullable<boolean | undefined>;
    locationFormatted: yup.Maybe<string | undefined>;
    commentCount: yup.Maybe<number | undefined>;
    commentsById: {} | null | undefined;
    commentsByTacticId: {
        [x: string]: {
            tacticTitle: string;
            comments: any[];
        };
    } | null | undefined;
    steps: yup.Maybe<number | undefined>;
    strategy: {
        impulseDebrief?: {
            conditionalTacticIds?: {
                [x: string]: {
                    condition: NonNullable<"eq" | "gt" | "lt" | "keyword" | undefined>;
                    value: {};
                    ids: string[];
                }[] | undefined;
            } | null | undefined;
            tacticIds: string[];
            suggestedTacticIds: string[];
        } | null | undefined;
        main: {
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
    seenTacticIds: string[];
    completedTacticIds: string[];
    tacticLikes: {
        [x: string]: NonNullable<boolean | undefined>;
    } | null | undefined;
    tacticData: {
        [x: string]: {
            isTotal?: yup.Maybe<boolean | undefined>;
            value: number;
            unit: string;
            formattedValue: string;
        };
    } | null | undefined;
    sharedWithSupportGroupIds: yup.Maybe<string[] | undefined>;
}, yup.AnyObject, {
    uid: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    startTime: {
        seconds: undefined;
        nanoseconds: undefined;
        toDate: undefined;
    };
    timezone: undefined;
    location: {
        latitude: undefined;
        longitude: undefined;
        altitude: undefined;
        accuracy: undefined;
        altitudeAccuracy: undefined;
        heading: undefined;
        speed: undefined;
    };
    locationIsFetching: undefined;
    locationFormatted: undefined;
    commentCount: undefined;
    commentsById: {};
    commentsByTacticId: undefined;
    steps: undefined;
    strategy: {
        main: {
            tacticIds: "";
            suggestedTacticIds: "";
            conditionalTacticIds: undefined;
        };
        impulseDebrief: {
            tacticIds: "";
            suggestedTacticIds: "";
            conditionalTacticIds: undefined;
        };
    };
    tacticsById: undefined;
    seenTacticIds: "";
    completedTacticIds: "";
    tacticLikes: undefined;
    tacticData: undefined;
    sharedWithSupportGroupIds: "";
}, "">;
type WithTypes<T extends yup.ISchema<unknown>> = yup.InferType<T> & {
    createdAt: TimestampLike;
    updatedAt: TimestampLike;
    startTime: TimestampLike;
};
export type ImpulseLogValue = WithTypes<typeof impulseLogSchema>;
export declare function logIsImpulseLog(log: LogValue): log is ImpulseLogValue;
declare const impulseLogSchema: yup.ObjectSchema<{
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
    startTime: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    timezone: string;
    location: {
        latitude?: number | undefined;
        longitude?: number | undefined;
        altitude?: number | undefined;
        accuracy?: number | undefined;
        altitudeAccuracy?: number | undefined;
        heading?: number | undefined;
        speed?: number | undefined;
    };
    locationIsFetching: NonNullable<boolean | undefined>;
    locationFormatted: yup.Maybe<string | undefined>;
    commentCount: yup.Maybe<number | undefined>;
    commentsById: {} | null | undefined;
    commentsByTacticId: {
        [x: string]: {
            tacticTitle: string;
            comments: any[];
        };
    } | null | undefined;
    steps: yup.Maybe<number | undefined>;
    strategy: {
        impulseDebrief?: {
            conditionalTacticIds?: {
                [x: string]: {
                    condition: NonNullable<"eq" | "gt" | "lt" | "keyword" | undefined>;
                    value: {};
                    ids: string[];
                }[] | undefined;
            } | null | undefined;
            tacticIds: string[];
            suggestedTacticIds: string[];
        } | null | undefined;
        main: {
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
    seenTacticIds: string[];
    completedTacticIds: string[];
    tacticLikes: {
        [x: string]: NonNullable<boolean | undefined>;
    } | null | undefined;
    tacticData: {
        [x: string]: {
            isTotal?: yup.Maybe<boolean | undefined>;
            value: number;
            unit: string;
            formattedValue: string;
        };
    } | null | undefined;
    sharedWithSupportGroupIds: yup.Maybe<string[] | undefined>;
} & {
    type: "impulse";
    setAsActiveImpulse: yup.Maybe<boolean | undefined>;
    pressCount: yup.Maybe<number | undefined>;
    isDisplayable: NonNullable<boolean | undefined>;
    buttonPressSecondsSinceEpoch: yup.Maybe<number | undefined>;
    gameplan: {
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
        uid: string;
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
    };
    outcome: Outcome | undefined;
    patternId: string;
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
    debriefNotes: yup.Maybe<string | undefined>;
    debriefReminderSentAt: yup.Maybe<{} | undefined>;
    debriefedAt: yup.Maybe<{} | undefined>;
}, yup.AnyObject, {
    uid: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    startTime: {
        seconds: undefined;
        nanoseconds: undefined;
        toDate: undefined;
    };
    timezone: undefined;
    location: {
        latitude: undefined;
        longitude: undefined;
        altitude: undefined;
        accuracy: undefined;
        altitudeAccuracy: undefined;
        heading: undefined;
        speed: undefined;
    };
    locationIsFetching: undefined;
    locationFormatted: undefined;
    commentCount: undefined;
    commentsById: {};
    commentsByTacticId: undefined;
    steps: undefined;
    strategy: {
        main: {
            tacticIds: "";
            suggestedTacticIds: "";
            conditionalTacticIds: undefined;
        };
        impulseDebrief: {
            tacticIds: "";
            suggestedTacticIds: "";
            conditionalTacticIds: undefined;
        };
    };
    tacticsById: undefined;
    seenTacticIds: "";
    completedTacticIds: "";
    tacticLikes: undefined;
    tacticData: undefined;
    sharedWithSupportGroupIds: "";
    type: undefined;
    setAsActiveImpulse: undefined;
    pressCount: undefined;
    isDisplayable: undefined;
    buttonPressSecondsSinceEpoch: undefined;
    gameplan: {
        uid: undefined;
        createdAt: undefined;
        updatedAt: undefined;
        impulse: undefined;
        impulseDebrief: undefined;
        routine: undefined;
        tacticsById: undefined;
        routinesById: undefined;
        patternsById: undefined;
    };
    outcome: undefined;
    patternId: undefined;
    patternsById: undefined;
    debriefNotes: undefined;
    debriefReminderSentAt: undefined;
    debriefedAt: undefined;
}, "">;
export type LocationLogValue = WithTypes<typeof locationLogSchema>;
export declare function logIsLocationLog(log: LogValue): log is LocationLogValue;
declare const locationLogSchema: yup.ObjectSchema<{
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
    startTime: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    timezone: string;
    location: {
        latitude?: number | undefined;
        longitude?: number | undefined;
        altitude?: number | undefined;
        accuracy?: number | undefined;
        altitudeAccuracy?: number | undefined;
        heading?: number | undefined;
        speed?: number | undefined;
    };
    locationIsFetching: NonNullable<boolean | undefined>;
    locationFormatted: yup.Maybe<string | undefined>;
    commentCount: yup.Maybe<number | undefined>;
    commentsById: {} | null | undefined;
    commentsByTacticId: {
        [x: string]: {
            tacticTitle: string;
            comments: any[];
        };
    } | null | undefined;
    steps: yup.Maybe<number | undefined>;
    strategy: {
        impulseDebrief?: {
            conditionalTacticIds?: {
                [x: string]: {
                    condition: NonNullable<"eq" | "gt" | "lt" | "keyword" | undefined>;
                    value: {};
                    ids: string[];
                }[] | undefined;
            } | null | undefined;
            tacticIds: string[];
            suggestedTacticIds: string[];
        } | null | undefined;
        main: {
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
    seenTacticIds: string[];
    completedTacticIds: string[];
    tacticLikes: {
        [x: string]: NonNullable<boolean | undefined>;
    } | null | undefined;
    tacticData: {
        [x: string]: {
            isTotal?: yup.Maybe<boolean | undefined>;
            value: number;
            unit: string;
            formattedValue: string;
        };
    } | null | undefined;
    sharedWithSupportGroupIds: yup.Maybe<string[] | undefined>;
} & {
    type: "location";
    locationId: string;
    isDisplayable: NonNullable<boolean | undefined>;
    locationName: string;
    locationMode: {};
}, yup.AnyObject, {
    uid: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    startTime: {
        seconds: undefined;
        nanoseconds: undefined;
        toDate: undefined;
    };
    timezone: undefined;
    location: {
        latitude: undefined;
        longitude: undefined;
        altitude: undefined;
        accuracy: undefined;
        altitudeAccuracy: undefined;
        heading: undefined;
        speed: undefined;
    };
    locationIsFetching: undefined;
    locationFormatted: undefined;
    commentCount: undefined;
    commentsById: {};
    commentsByTacticId: undefined;
    steps: undefined;
    strategy: {
        main: {
            tacticIds: "";
            suggestedTacticIds: "";
            conditionalTacticIds: undefined;
        };
        impulseDebrief: {
            tacticIds: "";
            suggestedTacticIds: "";
            conditionalTacticIds: undefined;
        };
    };
    tacticsById: undefined;
    seenTacticIds: "";
    completedTacticIds: "";
    tacticLikes: undefined;
    tacticData: undefined;
    sharedWithSupportGroupIds: "";
    type: undefined;
    locationId: undefined;
    isDisplayable: undefined;
    locationName: undefined;
    locationMode: undefined;
}, "">;
export type TimeLogValue = WithTypes<typeof timeLogSchema>;
export declare function logIsTimeLog(log: LogValue): log is TimeLogValue;
declare const timeLogSchema: yup.ObjectSchema<{
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
    startTime: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    timezone: string;
    location: {
        latitude?: number | undefined;
        longitude?: number | undefined;
        altitude?: number | undefined;
        accuracy?: number | undefined;
        altitudeAccuracy?: number | undefined;
        heading?: number | undefined;
        speed?: number | undefined;
    };
    locationIsFetching: NonNullable<boolean | undefined>;
    locationFormatted: yup.Maybe<string | undefined>;
    commentCount: yup.Maybe<number | undefined>;
    commentsById: {} | null | undefined;
    commentsByTacticId: {
        [x: string]: {
            tacticTitle: string;
            comments: any[];
        };
    } | null | undefined;
    steps: yup.Maybe<number | undefined>;
    strategy: {
        impulseDebrief?: {
            conditionalTacticIds?: {
                [x: string]: {
                    condition: NonNullable<"eq" | "gt" | "lt" | "keyword" | undefined>;
                    value: {};
                    ids: string[];
                }[] | undefined;
            } | null | undefined;
            tacticIds: string[];
            suggestedTacticIds: string[];
        } | null | undefined;
        main: {
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
    seenTacticIds: string[];
    completedTacticIds: string[];
    tacticLikes: {
        [x: string]: NonNullable<boolean | undefined>;
    } | null | undefined;
    tacticData: {
        [x: string]: {
            isTotal?: yup.Maybe<boolean | undefined>;
            value: number;
            unit: string;
            formattedValue: string;
        };
    } | null | undefined;
    sharedWithSupportGroupIds: yup.Maybe<string[] | undefined>;
} & {
    type: "time";
    isDisplayable: NonNullable<boolean | undefined>;
    routineId: string;
}, yup.AnyObject, {
    uid: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    startTime: {
        seconds: undefined;
        nanoseconds: undefined;
        toDate: undefined;
    };
    timezone: undefined;
    location: {
        latitude: undefined;
        longitude: undefined;
        altitude: undefined;
        accuracy: undefined;
        altitudeAccuracy: undefined;
        heading: undefined;
        speed: undefined;
    };
    locationIsFetching: undefined;
    locationFormatted: undefined;
    commentCount: undefined;
    commentsById: {};
    commentsByTacticId: undefined;
    steps: undefined;
    strategy: {
        main: {
            tacticIds: "";
            suggestedTacticIds: "";
            conditionalTacticIds: undefined;
        };
        impulseDebrief: {
            tacticIds: "";
            suggestedTacticIds: "";
            conditionalTacticIds: undefined;
        };
    };
    tacticsById: undefined;
    seenTacticIds: "";
    completedTacticIds: "";
    tacticLikes: undefined;
    tacticData: undefined;
    sharedWithSupportGroupIds: "";
    type: undefined;
    isDisplayable: undefined;
    routineId: undefined;
}, "">;
export type DebriefLogValue = WithTypes<typeof dayDebriefLogSchema>;
export declare function logIsDebriefLog(log: LogValue): log is DebriefLogValue;
declare const dayDebriefLogSchema: yup.ObjectSchema<{
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
    startTime: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    timezone: string;
    location: {
        latitude?: number | undefined;
        longitude?: number | undefined;
        altitude?: number | undefined;
        accuracy?: number | undefined;
        altitudeAccuracy?: number | undefined;
        heading?: number | undefined;
        speed?: number | undefined;
    };
    locationIsFetching: NonNullable<boolean | undefined>;
    locationFormatted: yup.Maybe<string | undefined>;
    commentCount: yup.Maybe<number | undefined>;
    commentsById: {} | null | undefined;
    commentsByTacticId: {
        [x: string]: {
            tacticTitle: string;
            comments: any[];
        };
    } | null | undefined;
    steps: yup.Maybe<number | undefined>;
    strategy: {
        impulseDebrief?: {
            conditionalTacticIds?: {
                [x: string]: {
                    condition: NonNullable<"eq" | "gt" | "lt" | "keyword" | undefined>;
                    value: {};
                    ids: string[];
                }[] | undefined;
            } | null | undefined;
            tacticIds: string[];
            suggestedTacticIds: string[];
        } | null | undefined;
        main: {
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
    seenTacticIds: string[];
    completedTacticIds: string[];
    tacticLikes: {
        [x: string]: NonNullable<boolean | undefined>;
    } | null | undefined;
    tacticData: {
        [x: string]: {
            isTotal?: yup.Maybe<boolean | undefined>;
            value: number;
            unit: string;
            formattedValue: string;
        };
    } | null | undefined;
    sharedWithSupportGroupIds: yup.Maybe<string[] | undefined>;
} & {
    type: "dayDebrief";
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
    isDisplayable: NonNullable<boolean | undefined>;
    routineId: string;
    tacticDataEntries: {
        [x: string]: {} | undefined;
    };
}, yup.AnyObject, {
    uid: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    startTime: {
        seconds: undefined;
        nanoseconds: undefined;
        toDate: undefined;
    };
    timezone: undefined;
    location: {
        latitude: undefined;
        longitude: undefined;
        altitude: undefined;
        accuracy: undefined;
        altitudeAccuracy: undefined;
        heading: undefined;
        speed: undefined;
    };
    locationIsFetching: undefined;
    locationFormatted: undefined;
    commentCount: undefined;
    commentsById: {};
    commentsByTacticId: undefined;
    steps: undefined;
    strategy: {
        main: {
            tacticIds: "";
            suggestedTacticIds: "";
            conditionalTacticIds: undefined;
        };
        impulseDebrief: {
            tacticIds: "";
            suggestedTacticIds: "";
            conditionalTacticIds: undefined;
        };
    };
    tacticsById: undefined;
    seenTacticIds: "";
    completedTacticIds: "";
    tacticLikes: undefined;
    tacticData: undefined;
    sharedWithSupportGroupIds: "";
    type: undefined;
    patternsById: undefined;
    isDisplayable: undefined;
    routineId: undefined;
    tacticDataEntries: undefined;
}, "">;
export type MotionLogValue = WithTypes<typeof motionLogSchema>;
export declare function logIsMotionLog(log: LogValue): log is MotionLogValue;
declare const motionLogSchema: yup.ObjectSchema<{
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
    startTime: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    timezone: string;
    location: {
        latitude?: number | undefined;
        longitude?: number | undefined;
        altitude?: number | undefined;
        accuracy?: number | undefined;
        altitudeAccuracy?: number | undefined;
        heading?: number | undefined;
        speed?: number | undefined;
    };
    locationIsFetching: NonNullable<boolean | undefined>;
    locationFormatted: yup.Maybe<string | undefined>;
    commentCount: yup.Maybe<number | undefined>;
    commentsById: {} | null | undefined;
    commentsByTacticId: {
        [x: string]: {
            tacticTitle: string;
            comments: any[];
        };
    } | null | undefined;
    steps: yup.Maybe<number | undefined>;
    strategy: {
        impulseDebrief?: {
            conditionalTacticIds?: {
                [x: string]: {
                    condition: NonNullable<"eq" | "gt" | "lt" | "keyword" | undefined>;
                    value: {};
                    ids: string[];
                }[] | undefined;
            } | null | undefined;
            tacticIds: string[];
            suggestedTacticIds: string[];
        } | null | undefined;
        main: {
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
    seenTacticIds: string[];
    completedTacticIds: string[];
    tacticLikes: {
        [x: string]: NonNullable<boolean | undefined>;
    } | null | undefined;
    tacticData: {
        [x: string]: {
            isTotal?: yup.Maybe<boolean | undefined>;
            value: number;
            unit: string;
            formattedValue: string;
        };
    } | null | undefined;
    sharedWithSupportGroupIds: yup.Maybe<string[] | undefined>;
} & {
    type: "motion";
    isDisplayable: NonNullable<boolean | undefined>;
}, yup.AnyObject, {
    uid: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    startTime: {
        seconds: undefined;
        nanoseconds: undefined;
        toDate: undefined;
    };
    timezone: undefined;
    location: {
        latitude: undefined;
        longitude: undefined;
        altitude: undefined;
        accuracy: undefined;
        altitudeAccuracy: undefined;
        heading: undefined;
        speed: undefined;
    };
    locationIsFetching: undefined;
    locationFormatted: undefined;
    commentCount: undefined;
    commentsById: {};
    commentsByTacticId: undefined;
    steps: undefined;
    strategy: {
        main: {
            tacticIds: "";
            suggestedTacticIds: "";
            conditionalTacticIds: undefined;
        };
        impulseDebrief: {
            tacticIds: "";
            suggestedTacticIds: "";
            conditionalTacticIds: undefined;
        };
    };
    tacticsById: undefined;
    seenTacticIds: "";
    completedTacticIds: "";
    tacticLikes: undefined;
    tacticData: undefined;
    sharedWithSupportGroupIds: "";
    type: undefined;
    isDisplayable: undefined;
}, "">;
export type ButtonLogValue = WithTypes<typeof buttonLogSchema>;
export declare function logIsButtonLog(log: LogValue): log is ButtonLogValue;
declare const buttonLogSchema: yup.ObjectSchema<{
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
    startTime: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    timezone: string;
    location: {
        latitude?: number | undefined;
        longitude?: number | undefined;
        altitude?: number | undefined;
        accuracy?: number | undefined;
        altitudeAccuracy?: number | undefined;
        heading?: number | undefined;
        speed?: number | undefined;
    };
    locationIsFetching: NonNullable<boolean | undefined>;
    locationFormatted: yup.Maybe<string | undefined>;
    commentCount: yup.Maybe<number | undefined>;
    commentsById: {} | null | undefined;
    commentsByTacticId: {
        [x: string]: {
            tacticTitle: string;
            comments: any[];
        };
    } | null | undefined;
    steps: yup.Maybe<number | undefined>;
    strategy: {
        impulseDebrief?: {
            conditionalTacticIds?: {
                [x: string]: {
                    condition: NonNullable<"eq" | "gt" | "lt" | "keyword" | undefined>;
                    value: {};
                    ids: string[];
                }[] | undefined;
            } | null | undefined;
            tacticIds: string[];
            suggestedTacticIds: string[];
        } | null | undefined;
        main: {
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
    seenTacticIds: string[];
    completedTacticIds: string[];
    tacticLikes: {
        [x: string]: NonNullable<boolean | undefined>;
    } | null | undefined;
    tacticData: {
        [x: string]: {
            isTotal?: yup.Maybe<boolean | undefined>;
            value: number;
            unit: string;
            formattedValue: string;
        };
    } | null | undefined;
    sharedWithSupportGroupIds: yup.Maybe<string[] | undefined>;
} & {
    type: "button";
    isDisplayable: NonNullable<boolean | undefined>;
    isDeviceConnected: NonNullable<boolean | undefined>;
    characteristics: {};
}, yup.AnyObject, {
    uid: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    startTime: {
        seconds: undefined;
        nanoseconds: undefined;
        toDate: undefined;
    };
    timezone: undefined;
    location: {
        latitude: undefined;
        longitude: undefined;
        altitude: undefined;
        accuracy: undefined;
        altitudeAccuracy: undefined;
        heading: undefined;
        speed: undefined;
    };
    locationIsFetching: undefined;
    locationFormatted: undefined;
    commentCount: undefined;
    commentsById: {};
    commentsByTacticId: undefined;
    steps: undefined;
    strategy: {
        main: {
            tacticIds: "";
            suggestedTacticIds: "";
            conditionalTacticIds: undefined;
        };
        impulseDebrief: {
            tacticIds: "";
            suggestedTacticIds: "";
            conditionalTacticIds: undefined;
        };
    };
    tacticsById: undefined;
    seenTacticIds: "";
    completedTacticIds: "";
    tacticLikes: undefined;
    tacticData: undefined;
    sharedWithSupportGroupIds: "";
    type: undefined;
    isDisplayable: undefined;
    isDeviceConnected: undefined;
    characteristics: {};
}, "">;
export declare const logSchema: yup.Lazy<{
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
    steps?: yup.Maybe<number | undefined>;
    locationFormatted?: yup.Maybe<string | undefined>;
    commentCount?: yup.Maybe<number | undefined>;
    commentsById?: {} | null | undefined;
    commentsByTacticId?: {
        [x: string]: {
            tacticTitle: string;
            comments: any[];
        };
    } | null | undefined;
    tacticLikes?: {
        [x: string]: NonNullable<boolean | undefined>;
    } | null | undefined;
    tacticData?: {
        [x: string]: {
            isTotal?: yup.Maybe<boolean | undefined>;
            value: number;
            unit: string;
            formattedValue: string;
        };
    } | null | undefined;
    sharedWithSupportGroupIds?: yup.Maybe<string[] | undefined>;
    setAsActiveImpulse?: yup.Maybe<boolean | undefined>;
    pressCount?: yup.Maybe<number | undefined>;
    buttonPressSecondsSinceEpoch?: yup.Maybe<number | undefined>;
    outcome?: Outcome | undefined;
    debriefNotes?: yup.Maybe<string | undefined>;
    debriefReminderSentAt?: yup.Maybe<{} | undefined>;
    debriefedAt?: yup.Maybe<{} | undefined>;
    uid: string;
    timezone: string;
    type: "impulse";
    location: {
        latitude?: number | undefined;
        longitude?: number | undefined;
        altitude?: number | undefined;
        accuracy?: number | undefined;
        altitudeAccuracy?: number | undefined;
        heading?: number | undefined;
        speed?: number | undefined;
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
    startTime: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    locationIsFetching: NonNullable<boolean | undefined>;
    strategy: {
        impulseDebrief?: {
            conditionalTacticIds?: {
                [x: string]: {
                    condition: NonNullable<"eq" | "gt" | "lt" | "keyword" | undefined>;
                    value: {};
                    ids: string[];
                }[] | undefined;
            } | null | undefined;
            tacticIds: string[];
            suggestedTacticIds: string[];
        } | null | undefined;
        main: {
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
    seenTacticIds: string[];
    completedTacticIds: string[];
    isDisplayable: NonNullable<boolean | undefined>;
    gameplan: {
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
        uid: string;
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
    };
    patternId: string;
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
    steps?: yup.Maybe<number | undefined>;
    locationFormatted?: yup.Maybe<string | undefined>;
    commentCount?: yup.Maybe<number | undefined>;
    commentsById?: {} | null | undefined;
    commentsByTacticId?: {
        [x: string]: {
            tacticTitle: string;
            comments: any[];
        };
    } | null | undefined;
    tacticLikes?: {
        [x: string]: NonNullable<boolean | undefined>;
    } | null | undefined;
    tacticData?: {
        [x: string]: {
            isTotal?: yup.Maybe<boolean | undefined>;
            value: number;
            unit: string;
            formattedValue: string;
        };
    } | null | undefined;
    sharedWithSupportGroupIds?: yup.Maybe<string[] | undefined>;
    uid: string;
    timezone: string;
    type: "location";
    location: {
        latitude?: number | undefined;
        longitude?: number | undefined;
        altitude?: number | undefined;
        accuracy?: number | undefined;
        altitudeAccuracy?: number | undefined;
        heading?: number | undefined;
        speed?: number | undefined;
    };
    locationId: string;
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
    startTime: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    locationIsFetching: NonNullable<boolean | undefined>;
    strategy: {
        impulseDebrief?: {
            conditionalTacticIds?: {
                [x: string]: {
                    condition: NonNullable<"eq" | "gt" | "lt" | "keyword" | undefined>;
                    value: {};
                    ids: string[];
                }[] | undefined;
            } | null | undefined;
            tacticIds: string[];
            suggestedTacticIds: string[];
        } | null | undefined;
        main: {
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
    seenTacticIds: string[];
    completedTacticIds: string[];
    isDisplayable: NonNullable<boolean | undefined>;
    locationName: string;
    locationMode: {};
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
    steps?: yup.Maybe<number | undefined>;
    locationFormatted?: yup.Maybe<string | undefined>;
    commentCount?: yup.Maybe<number | undefined>;
    commentsById?: {} | null | undefined;
    commentsByTacticId?: {
        [x: string]: {
            tacticTitle: string;
            comments: any[];
        };
    } | null | undefined;
    tacticLikes?: {
        [x: string]: NonNullable<boolean | undefined>;
    } | null | undefined;
    tacticData?: {
        [x: string]: {
            isTotal?: yup.Maybe<boolean | undefined>;
            value: number;
            unit: string;
            formattedValue: string;
        };
    } | null | undefined;
    sharedWithSupportGroupIds?: yup.Maybe<string[] | undefined>;
    uid: string;
    timezone: string;
    type: "time";
    location: {
        latitude?: number | undefined;
        longitude?: number | undefined;
        altitude?: number | undefined;
        accuracy?: number | undefined;
        altitudeAccuracy?: number | undefined;
        heading?: number | undefined;
        speed?: number | undefined;
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
    startTime: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    locationIsFetching: NonNullable<boolean | undefined>;
    strategy: {
        impulseDebrief?: {
            conditionalTacticIds?: {
                [x: string]: {
                    condition: NonNullable<"eq" | "gt" | "lt" | "keyword" | undefined>;
                    value: {};
                    ids: string[];
                }[] | undefined;
            } | null | undefined;
            tacticIds: string[];
            suggestedTacticIds: string[];
        } | null | undefined;
        main: {
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
    seenTacticIds: string[];
    completedTacticIds: string[];
    isDisplayable: NonNullable<boolean | undefined>;
    routineId: string;
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
    steps?: yup.Maybe<number | undefined>;
    locationFormatted?: yup.Maybe<string | undefined>;
    commentCount?: yup.Maybe<number | undefined>;
    commentsById?: {} | null | undefined;
    commentsByTacticId?: {
        [x: string]: {
            tacticTitle: string;
            comments: any[];
        };
    } | null | undefined;
    tacticLikes?: {
        [x: string]: NonNullable<boolean | undefined>;
    } | null | undefined;
    tacticData?: {
        [x: string]: {
            isTotal?: yup.Maybe<boolean | undefined>;
            value: number;
            unit: string;
            formattedValue: string;
        };
    } | null | undefined;
    sharedWithSupportGroupIds?: yup.Maybe<string[] | undefined>;
    uid: string;
    timezone: string;
    type: "dayDebrief";
    location: {
        latitude?: number | undefined;
        longitude?: number | undefined;
        altitude?: number | undefined;
        accuracy?: number | undefined;
        altitudeAccuracy?: number | undefined;
        heading?: number | undefined;
        speed?: number | undefined;
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
    startTime: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    locationIsFetching: NonNullable<boolean | undefined>;
    strategy: {
        impulseDebrief?: {
            conditionalTacticIds?: {
                [x: string]: {
                    condition: NonNullable<"eq" | "gt" | "lt" | "keyword" | undefined>;
                    value: {};
                    ids: string[];
                }[] | undefined;
            } | null | undefined;
            tacticIds: string[];
            suggestedTacticIds: string[];
        } | null | undefined;
        main: {
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
    seenTacticIds: string[];
    completedTacticIds: string[];
    isDisplayable: NonNullable<boolean | undefined>;
    routineId: string;
    tacticDataEntries: {
        [x: string]: {} | undefined;
    };
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
    steps?: yup.Maybe<number | undefined>;
    locationFormatted?: yup.Maybe<string | undefined>;
    commentCount?: yup.Maybe<number | undefined>;
    commentsById?: {} | null | undefined;
    commentsByTacticId?: {
        [x: string]: {
            tacticTitle: string;
            comments: any[];
        };
    } | null | undefined;
    tacticLikes?: {
        [x: string]: NonNullable<boolean | undefined>;
    } | null | undefined;
    tacticData?: {
        [x: string]: {
            isTotal?: yup.Maybe<boolean | undefined>;
            value: number;
            unit: string;
            formattedValue: string;
        };
    } | null | undefined;
    sharedWithSupportGroupIds?: yup.Maybe<string[] | undefined>;
    uid: string;
    timezone: string;
    type: "motion";
    location: {
        latitude?: number | undefined;
        longitude?: number | undefined;
        altitude?: number | undefined;
        accuracy?: number | undefined;
        altitudeAccuracy?: number | undefined;
        heading?: number | undefined;
        speed?: number | undefined;
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
    startTime: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    locationIsFetching: NonNullable<boolean | undefined>;
    strategy: {
        impulseDebrief?: {
            conditionalTacticIds?: {
                [x: string]: {
                    condition: NonNullable<"eq" | "gt" | "lt" | "keyword" | undefined>;
                    value: {};
                    ids: string[];
                }[] | undefined;
            } | null | undefined;
            tacticIds: string[];
            suggestedTacticIds: string[];
        } | null | undefined;
        main: {
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
    seenTacticIds: string[];
    completedTacticIds: string[];
    isDisplayable: NonNullable<boolean | undefined>;
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
    steps?: yup.Maybe<number | undefined>;
    locationFormatted?: yup.Maybe<string | undefined>;
    commentCount?: yup.Maybe<number | undefined>;
    commentsById?: {} | null | undefined;
    commentsByTacticId?: {
        [x: string]: {
            tacticTitle: string;
            comments: any[];
        };
    } | null | undefined;
    tacticLikes?: {
        [x: string]: NonNullable<boolean | undefined>;
    } | null | undefined;
    tacticData?: {
        [x: string]: {
            isTotal?: yup.Maybe<boolean | undefined>;
            value: number;
            unit: string;
            formattedValue: string;
        };
    } | null | undefined;
    sharedWithSupportGroupIds?: yup.Maybe<string[] | undefined>;
    uid: string;
    timezone: string;
    type: "button";
    location: {
        latitude?: number | undefined;
        longitude?: number | undefined;
        altitude?: number | undefined;
        accuracy?: number | undefined;
        altitudeAccuracy?: number | undefined;
        heading?: number | undefined;
        speed?: number | undefined;
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
    startTime: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    locationIsFetching: NonNullable<boolean | undefined>;
    strategy: {
        impulseDebrief?: {
            conditionalTacticIds?: {
                [x: string]: {
                    condition: NonNullable<"eq" | "gt" | "lt" | "keyword" | undefined>;
                    value: {};
                    ids: string[];
                }[] | undefined;
            } | null | undefined;
            tacticIds: string[];
            suggestedTacticIds: string[];
        } | null | undefined;
        main: {
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
    seenTacticIds: string[];
    completedTacticIds: string[];
    isDisplayable: NonNullable<boolean | undefined>;
    isDeviceConnected: NonNullable<boolean | undefined>;
    characteristics: {};
}, yup.AnyObject, any>;
export type LogValue = ImpulseLogValue | LocationLogValue | TimeLogValue | DebriefLogValue | MotionLogValue | ButtonLogValue;
export {};
