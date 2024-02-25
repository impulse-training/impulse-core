import * as yup from 'yup';
import { TimestampLike } from '../utils/TimestampLike';
type Outcome = 'success' | 'setback' | 'indeterminate';
export type BaseLogValue = WithTypes<typeof baseLogSchema>;
declare const baseLogSchema: yup.ObjectSchema<{
    uid: string;
    createdAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt: {
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
            comments?: any[] | undefined;
            tacticTitle: string;
        };
    } | null | undefined;
    steps: yup.Maybe<number | undefined>;
    tacticsById: {
        [x: string]: {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            nextId?: string | undefined;
            autogenerate?: boolean | undefined;
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "folder";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
            tacticIds: string[];
            currentTacticIndex: number;
            tacticsById: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "steps";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
            steps: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "emotions";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "audio";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
            metadata: {
                waveform?: string | null | undefined;
                localFilePath: string;
                remoteFilePath: string;
            };
            recording: {
                waveform?: string | null | undefined;
                localFilePath: string;
                remoteFilePath: string;
            } | null;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "video";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
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
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "measure-slider";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
            lowEmoji: string;
            highEmoji: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "measure-time";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "measure-counter";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "phone";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
            supportGroupId: string;
            trigger: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "breathe";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
            inFor: number;
            holdFor: number;
            outFor: number;
            repeat: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "urge-surfing";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "task";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "question";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
        };
    };
    gameplan: {
        impulseDebrief?: yup.Maybe<string[] | undefined>;
        main: string[];
    };
    seenGameplan: {
        impulseDebrief?: yup.Maybe<string[] | undefined>;
        main: string[];
    };
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
    tacticsById: undefined;
    gameplan: {
        main: "";
        impulseDebrief: "";
    };
    seenGameplan: {
        main: "";
        impulseDebrief: "";
    };
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
    createdAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt: {
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
            comments?: any[] | undefined;
            tacticTitle: string;
        };
    } | null | undefined;
    steps: yup.Maybe<number | undefined>;
    tacticsById: {
        [x: string]: {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            nextId?: string | undefined;
            autogenerate?: boolean | undefined;
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "folder";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
            tacticIds: string[];
            currentTacticIndex: number;
            tacticsById: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "steps";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
            steps: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "emotions";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "audio";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
            metadata: {
                waveform?: string | null | undefined;
                localFilePath: string;
                remoteFilePath: string;
            };
            recording: {
                waveform?: string | null | undefined;
                localFilePath: string;
                remoteFilePath: string;
            } | null;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "video";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
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
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "measure-slider";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
            lowEmoji: string;
            highEmoji: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "measure-time";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "measure-counter";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "phone";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
            supportGroupId: string;
            trigger: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "breathe";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
            inFor: number;
            holdFor: number;
            outFor: number;
            repeat: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "urge-surfing";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "task";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "question";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
        };
    };
    gameplan: {
        impulseDebrief?: yup.Maybe<string[] | undefined>;
        main: string[];
    };
    seenGameplan: {
        impulseDebrief?: yup.Maybe<string[] | undefined>;
        main: string[];
    };
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
    gameplans: {
        [x: string]: {
            main: string[];
            impulseDebrief: string[];
        };
    };
    seenGameplans: {
        [x: string]: {
            main: string[];
            impulseDebrief: string[];
        };
    };
    outcome: Outcome | undefined;
    patterns: {
        [x: string]: {
            supportGroupIds?: yup.Maybe<(string | undefined)[] | undefined>;
            notification?: {
                title: string;
                body: string;
            } | null | undefined;
            setbackTacticId?: yup.Maybe<string | undefined>;
            issueId?: yup.Maybe<string | undefined>;
            uid: string;
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            name: string;
            ordinal: number;
            setbackThreshold: number;
            sendWeeklyReports: NonNullable<boolean | undefined>;
        };
    };
    patternId: string;
    patternIds: string[];
    debriefNotes: yup.Maybe<string | undefined>;
    debriefReminderSentAt: yup.Maybe<{} | undefined>;
    debriefedAt: yup.Maybe<{} | undefined>;
}, yup.AnyObject, {
    uid: undefined;
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
    tacticsById: undefined;
    gameplan: {
        main: "";
        impulseDebrief: "";
    };
    seenGameplan: {
        main: "";
        impulseDebrief: "";
    };
    tacticLikes: undefined;
    tacticData: undefined;
    sharedWithSupportGroupIds: "";
    type: undefined;
    setAsActiveImpulse: undefined;
    pressCount: undefined;
    isDisplayable: undefined;
    buttonPressSecondsSinceEpoch: undefined;
    gameplans: undefined;
    seenGameplans: undefined;
    outcome: undefined;
    patterns: undefined;
    patternId: undefined;
    patternIds: "";
    debriefNotes: undefined;
    debriefReminderSentAt: undefined;
    debriefedAt: undefined;
}, "">;
export type LocationLogValue = WithTypes<typeof locationLogSchema>;
export declare function logIsLocationLog(log: LogValue): log is LocationLogValue;
declare const locationLogSchema: yup.ObjectSchema<{
    uid: string;
    createdAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt: {
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
            comments?: any[] | undefined;
            tacticTitle: string;
        };
    } | null | undefined;
    steps: yup.Maybe<number | undefined>;
    tacticsById: {
        [x: string]: {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            nextId?: string | undefined;
            autogenerate?: boolean | undefined;
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "folder";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
            tacticIds: string[];
            currentTacticIndex: number;
            tacticsById: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "steps";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
            steps: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "emotions";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "audio";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
            metadata: {
                waveform?: string | null | undefined;
                localFilePath: string;
                remoteFilePath: string;
            };
            recording: {
                waveform?: string | null | undefined;
                localFilePath: string;
                remoteFilePath: string;
            } | null;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "video";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
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
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "measure-slider";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
            lowEmoji: string;
            highEmoji: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "measure-time";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "measure-counter";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "phone";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
            supportGroupId: string;
            trigger: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "breathe";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
            inFor: number;
            holdFor: number;
            outFor: number;
            repeat: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "urge-surfing";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "task";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "question";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
        };
    };
    gameplan: {
        impulseDebrief?: yup.Maybe<string[] | undefined>;
        main: string[];
    };
    seenGameplan: {
        impulseDebrief?: yup.Maybe<string[] | undefined>;
        main: string[];
    };
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
    tacticsById: undefined;
    gameplan: {
        main: "";
        impulseDebrief: "";
    };
    seenGameplan: {
        main: "";
        impulseDebrief: "";
    };
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
    createdAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt: {
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
            comments?: any[] | undefined;
            tacticTitle: string;
        };
    } | null | undefined;
    steps: yup.Maybe<number | undefined>;
    tacticsById: {
        [x: string]: {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            nextId?: string | undefined;
            autogenerate?: boolean | undefined;
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "folder";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
            tacticIds: string[];
            currentTacticIndex: number;
            tacticsById: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "steps";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
            steps: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "emotions";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "audio";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
            metadata: {
                waveform?: string | null | undefined;
                localFilePath: string;
                remoteFilePath: string;
            };
            recording: {
                waveform?: string | null | undefined;
                localFilePath: string;
                remoteFilePath: string;
            } | null;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "video";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
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
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "measure-slider";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
            lowEmoji: string;
            highEmoji: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "measure-time";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "measure-counter";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "phone";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
            supportGroupId: string;
            trigger: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "breathe";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
            inFor: number;
            holdFor: number;
            outFor: number;
            repeat: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "urge-surfing";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "task";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "question";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
        };
    };
    gameplan: {
        impulseDebrief?: yup.Maybe<string[] | undefined>;
        main: string[];
    };
    seenGameplan: {
        impulseDebrief?: yup.Maybe<string[] | undefined>;
        main: string[];
    };
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
    gameplanId: string;
}, yup.AnyObject, {
    uid: undefined;
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
    tacticsById: undefined;
    gameplan: {
        main: "";
        impulseDebrief: "";
    };
    seenGameplan: {
        main: "";
        impulseDebrief: "";
    };
    tacticLikes: undefined;
    tacticData: undefined;
    sharedWithSupportGroupIds: "";
    type: undefined;
    isDisplayable: undefined;
    gameplanId: undefined;
}, "">;
export type DebriefLogValue = WithTypes<typeof dayDebriefLogSchema>;
export declare function logIsDebriefLog(log: LogValue): log is DebriefLogValue;
declare const dayDebriefLogSchema: yup.ObjectSchema<{
    uid: string;
    createdAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt: {
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
            comments?: any[] | undefined;
            tacticTitle: string;
        };
    } | null | undefined;
    steps: yup.Maybe<number | undefined>;
    tacticsById: {
        [x: string]: {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            nextId?: string | undefined;
            autogenerate?: boolean | undefined;
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "folder";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
            tacticIds: string[];
            currentTacticIndex: number;
            tacticsById: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "steps";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
            steps: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "emotions";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "audio";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
            metadata: {
                waveform?: string | null | undefined;
                localFilePath: string;
                remoteFilePath: string;
            };
            recording: {
                waveform?: string | null | undefined;
                localFilePath: string;
                remoteFilePath: string;
            } | null;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "video";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
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
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "measure-slider";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
            lowEmoji: string;
            highEmoji: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "measure-time";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "measure-counter";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "phone";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
            supportGroupId: string;
            trigger: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "breathe";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
            inFor: number;
            holdFor: number;
            outFor: number;
            repeat: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "urge-surfing";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "task";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "question";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
        };
    };
    gameplan: {
        impulseDebrief?: yup.Maybe<string[] | undefined>;
        main: string[];
    };
    seenGameplan: {
        impulseDebrief?: yup.Maybe<string[] | undefined>;
        main: string[];
    };
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
    patterns: {
        [x: string]: {
            supportGroupIds?: yup.Maybe<(string | undefined)[] | undefined>;
            notification?: {
                title: string;
                body: string;
            } | null | undefined;
            setbackTacticId?: yup.Maybe<string | undefined>;
            issueId?: yup.Maybe<string | undefined>;
            uid: string;
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            name: string;
            ordinal: number;
            setbackThreshold: number;
            sendWeeklyReports: NonNullable<boolean | undefined>;
        };
    };
    isDisplayable: NonNullable<boolean | undefined>;
    gameplanId: string;
    patternIds: (string | undefined)[];
    tacticDataEntries: {
        [x: string]: {} | undefined;
    };
}, yup.AnyObject, {
    uid: undefined;
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
    tacticsById: undefined;
    gameplan: {
        main: "";
        impulseDebrief: "";
    };
    seenGameplan: {
        main: "";
        impulseDebrief: "";
    };
    tacticLikes: undefined;
    tacticData: undefined;
    sharedWithSupportGroupIds: "";
    type: undefined;
    patterns: undefined;
    isDisplayable: undefined;
    gameplanId: undefined;
    patternIds: "";
    tacticDataEntries: undefined;
}, "">;
export type MotionLogValue = WithTypes<typeof motionLogSchema>;
export declare function logIsMotionLog(log: LogValue): log is MotionLogValue;
declare const motionLogSchema: yup.ObjectSchema<{
    uid: string;
    createdAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt: {
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
            comments?: any[] | undefined;
            tacticTitle: string;
        };
    } | null | undefined;
    steps: yup.Maybe<number | undefined>;
    tacticsById: {
        [x: string]: {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            nextId?: string | undefined;
            autogenerate?: boolean | undefined;
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "folder";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
            tacticIds: string[];
            currentTacticIndex: number;
            tacticsById: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "steps";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
            steps: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "emotions";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "audio";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
            metadata: {
                waveform?: string | null | undefined;
                localFilePath: string;
                remoteFilePath: string;
            };
            recording: {
                waveform?: string | null | undefined;
                localFilePath: string;
                remoteFilePath: string;
            } | null;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "video";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
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
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "measure-slider";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
            lowEmoji: string;
            highEmoji: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "measure-time";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "measure-counter";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "phone";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
            supportGroupId: string;
            trigger: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "breathe";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
            inFor: number;
            holdFor: number;
            outFor: number;
            repeat: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "urge-surfing";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "task";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "question";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
        };
    };
    gameplan: {
        impulseDebrief?: yup.Maybe<string[] | undefined>;
        main: string[];
    };
    seenGameplan: {
        impulseDebrief?: yup.Maybe<string[] | undefined>;
        main: string[];
    };
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
    tacticsById: undefined;
    gameplan: {
        main: "";
        impulseDebrief: "";
    };
    seenGameplan: {
        main: "";
        impulseDebrief: "";
    };
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
    createdAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt: {
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
            comments?: any[] | undefined;
            tacticTitle: string;
        };
    } | null | undefined;
    steps: yup.Maybe<number | undefined>;
    tacticsById: {
        [x: string]: {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            nextId?: string | undefined;
            autogenerate?: boolean | undefined;
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "folder";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
            tacticIds: string[];
            currentTacticIndex: number;
            tacticsById: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "steps";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
            steps: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "emotions";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "audio";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
            metadata: {
                waveform?: string | null | undefined;
                localFilePath: string;
                remoteFilePath: string;
            };
            recording: {
                waveform?: string | null | undefined;
                localFilePath: string;
                remoteFilePath: string;
            } | null;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "video";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
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
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "measure-slider";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
            lowEmoji: string;
            highEmoji: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "measure-time";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "measure-counter";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "phone";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
            supportGroupId: string;
            trigger: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "breathe";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
            inFor: number;
            holdFor: number;
            outFor: number;
            repeat: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "urge-surfing";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "task";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "question";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
        };
    };
    gameplan: {
        impulseDebrief?: yup.Maybe<string[] | undefined>;
        main: string[];
    };
    seenGameplan: {
        impulseDebrief?: yup.Maybe<string[] | undefined>;
        main: string[];
    };
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
    tacticsById: undefined;
    gameplan: {
        main: "";
        impulseDebrief: "";
    };
    seenGameplan: {
        main: "";
        impulseDebrief: "";
    };
    tacticLikes: undefined;
    tacticData: undefined;
    sharedWithSupportGroupIds: "";
    type: undefined;
    isDisplayable: undefined;
    isDeviceConnected: undefined;
    characteristics: {};
}, "">;
export declare const logSchema: yup.Lazy<{
    steps?: yup.Maybe<number | undefined>;
    locationFormatted?: yup.Maybe<string | undefined>;
    commentCount?: yup.Maybe<number | undefined>;
    commentsById?: {} | null | undefined;
    commentsByTacticId?: {
        [x: string]: {
            comments?: any[] | undefined;
            tacticTitle: string;
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
    createdAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    type: "impulse";
    tacticsById: {
        [x: string]: {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            nextId?: string | undefined;
            autogenerate?: boolean | undefined;
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "folder";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
            tacticIds: string[];
            currentTacticIndex: number;
            tacticsById: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "steps";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
            steps: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "emotions";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "audio";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
            metadata: {
                waveform?: string | null | undefined;
                localFilePath: string;
                remoteFilePath: string;
            };
            recording: {
                waveform?: string | null | undefined;
                localFilePath: string;
                remoteFilePath: string;
            } | null;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "video";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
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
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "measure-slider";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
            lowEmoji: string;
            highEmoji: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "measure-time";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "measure-counter";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "phone";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
            supportGroupId: string;
            trigger: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "breathe";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
            inFor: number;
            holdFor: number;
            outFor: number;
            repeat: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "urge-surfing";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "task";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "question";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
        };
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
    gameplan: {
        impulseDebrief?: yup.Maybe<string[] | undefined>;
        main: string[];
    };
    seenGameplan: {
        impulseDebrief?: yup.Maybe<string[] | undefined>;
        main: string[];
    };
    isDisplayable: NonNullable<boolean | undefined>;
    gameplans: {
        [x: string]: {
            main: string[];
            impulseDebrief: string[];
        };
    };
    seenGameplans: {
        [x: string]: {
            main: string[];
            impulseDebrief: string[];
        };
    };
    patterns: {
        [x: string]: {
            supportGroupIds?: yup.Maybe<(string | undefined)[] | undefined>;
            notification?: {
                title: string;
                body: string;
            } | null | undefined;
            setbackTacticId?: yup.Maybe<string | undefined>;
            issueId?: yup.Maybe<string | undefined>;
            uid: string;
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            name: string;
            ordinal: number;
            setbackThreshold: number;
            sendWeeklyReports: NonNullable<boolean | undefined>;
        };
    };
    patternId: string;
    patternIds: string[];
} | {
    steps?: yup.Maybe<number | undefined>;
    locationFormatted?: yup.Maybe<string | undefined>;
    commentCount?: yup.Maybe<number | undefined>;
    commentsById?: {} | null | undefined;
    commentsByTacticId?: {
        [x: string]: {
            comments?: any[] | undefined;
            tacticTitle: string;
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
    createdAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    type: "location";
    tacticsById: {
        [x: string]: {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            nextId?: string | undefined;
            autogenerate?: boolean | undefined;
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "folder";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
            tacticIds: string[];
            currentTacticIndex: number;
            tacticsById: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "steps";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
            steps: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "emotions";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "audio";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
            metadata: {
                waveform?: string | null | undefined;
                localFilePath: string;
                remoteFilePath: string;
            };
            recording: {
                waveform?: string | null | undefined;
                localFilePath: string;
                remoteFilePath: string;
            } | null;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "video";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
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
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "measure-slider";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
            lowEmoji: string;
            highEmoji: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "measure-time";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "measure-counter";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "phone";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
            supportGroupId: string;
            trigger: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "breathe";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
            inFor: number;
            holdFor: number;
            outFor: number;
            repeat: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "urge-surfing";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "task";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "question";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
        };
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
    gameplan: {
        impulseDebrief?: yup.Maybe<string[] | undefined>;
        main: string[];
    };
    seenGameplan: {
        impulseDebrief?: yup.Maybe<string[] | undefined>;
        main: string[];
    };
    isDisplayable: NonNullable<boolean | undefined>;
    locationId: string;
    locationName: string;
    locationMode: {};
} | {
    steps?: yup.Maybe<number | undefined>;
    locationFormatted?: yup.Maybe<string | undefined>;
    commentCount?: yup.Maybe<number | undefined>;
    commentsById?: {} | null | undefined;
    commentsByTacticId?: {
        [x: string]: {
            comments?: any[] | undefined;
            tacticTitle: string;
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
    createdAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    type: "time";
    tacticsById: {
        [x: string]: {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            nextId?: string | undefined;
            autogenerate?: boolean | undefined;
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "folder";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
            tacticIds: string[];
            currentTacticIndex: number;
            tacticsById: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "steps";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
            steps: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "emotions";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "audio";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
            metadata: {
                waveform?: string | null | undefined;
                localFilePath: string;
                remoteFilePath: string;
            };
            recording: {
                waveform?: string | null | undefined;
                localFilePath: string;
                remoteFilePath: string;
            } | null;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "video";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
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
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "measure-slider";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
            lowEmoji: string;
            highEmoji: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "measure-time";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "measure-counter";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "phone";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
            supportGroupId: string;
            trigger: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "breathe";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
            inFor: number;
            holdFor: number;
            outFor: number;
            repeat: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "urge-surfing";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "task";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "question";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
        };
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
    gameplan: {
        impulseDebrief?: yup.Maybe<string[] | undefined>;
        main: string[];
    };
    seenGameplan: {
        impulseDebrief?: yup.Maybe<string[] | undefined>;
        main: string[];
    };
    isDisplayable: NonNullable<boolean | undefined>;
    gameplanId: string;
} | {
    steps?: yup.Maybe<number | undefined>;
    locationFormatted?: yup.Maybe<string | undefined>;
    commentCount?: yup.Maybe<number | undefined>;
    commentsById?: {} | null | undefined;
    commentsByTacticId?: {
        [x: string]: {
            comments?: any[] | undefined;
            tacticTitle: string;
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
    createdAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    type: "dayDebrief";
    tacticsById: {
        [x: string]: {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            nextId?: string | undefined;
            autogenerate?: boolean | undefined;
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "folder";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
            tacticIds: string[];
            currentTacticIndex: number;
            tacticsById: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "steps";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
            steps: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "emotions";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "audio";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
            metadata: {
                waveform?: string | null | undefined;
                localFilePath: string;
                remoteFilePath: string;
            };
            recording: {
                waveform?: string | null | undefined;
                localFilePath: string;
                remoteFilePath: string;
            } | null;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "video";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
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
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "measure-slider";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
            lowEmoji: string;
            highEmoji: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "measure-time";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "measure-counter";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "phone";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
            supportGroupId: string;
            trigger: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "breathe";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
            inFor: number;
            holdFor: number;
            outFor: number;
            repeat: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "urge-surfing";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "task";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "question";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
        };
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
    gameplan: {
        impulseDebrief?: yup.Maybe<string[] | undefined>;
        main: string[];
    };
    seenGameplan: {
        impulseDebrief?: yup.Maybe<string[] | undefined>;
        main: string[];
    };
    isDisplayable: NonNullable<boolean | undefined>;
    patterns: {
        [x: string]: {
            supportGroupIds?: yup.Maybe<(string | undefined)[] | undefined>;
            notification?: {
                title: string;
                body: string;
            } | null | undefined;
            setbackTacticId?: yup.Maybe<string | undefined>;
            issueId?: yup.Maybe<string | undefined>;
            uid: string;
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            name: string;
            ordinal: number;
            setbackThreshold: number;
            sendWeeklyReports: NonNullable<boolean | undefined>;
        };
    };
    patternIds: (string | undefined)[];
    gameplanId: string;
    tacticDataEntries: {
        [x: string]: {} | undefined;
    };
} | {
    steps?: yup.Maybe<number | undefined>;
    locationFormatted?: yup.Maybe<string | undefined>;
    commentCount?: yup.Maybe<number | undefined>;
    commentsById?: {} | null | undefined;
    commentsByTacticId?: {
        [x: string]: {
            comments?: any[] | undefined;
            tacticTitle: string;
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
    createdAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    type: "motion";
    tacticsById: {
        [x: string]: {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            nextId?: string | undefined;
            autogenerate?: boolean | undefined;
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "folder";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
            tacticIds: string[];
            currentTacticIndex: number;
            tacticsById: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "steps";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
            steps: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "emotions";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "audio";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
            metadata: {
                waveform?: string | null | undefined;
                localFilePath: string;
                remoteFilePath: string;
            };
            recording: {
                waveform?: string | null | undefined;
                localFilePath: string;
                remoteFilePath: string;
            } | null;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "video";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
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
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "measure-slider";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
            lowEmoji: string;
            highEmoji: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "measure-time";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "measure-counter";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "phone";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
            supportGroupId: string;
            trigger: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "breathe";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
            inFor: number;
            holdFor: number;
            outFor: number;
            repeat: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "urge-surfing";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "task";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "question";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
        };
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
    gameplan: {
        impulseDebrief?: yup.Maybe<string[] | undefined>;
        main: string[];
    };
    seenGameplan: {
        impulseDebrief?: yup.Maybe<string[] | undefined>;
        main: string[];
    };
    isDisplayable: NonNullable<boolean | undefined>;
} | {
    steps?: yup.Maybe<number | undefined>;
    locationFormatted?: yup.Maybe<string | undefined>;
    commentCount?: yup.Maybe<number | undefined>;
    commentsById?: {} | null | undefined;
    commentsByTacticId?: {
        [x: string]: {
            comments?: any[] | undefined;
            tacticTitle: string;
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
    createdAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    type: "button";
    tacticsById: {
        [x: string]: {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            nextId?: string | undefined;
            autogenerate?: boolean | undefined;
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "folder";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
            tacticIds: string[];
            currentTacticIndex: number;
            tacticsById: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "steps";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
            steps: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "emotions";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "audio";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
            metadata: {
                waveform?: string | null | undefined;
                localFilePath: string;
                remoteFilePath: string;
            };
            recording: {
                waveform?: string | null | undefined;
                localFilePath: string;
                remoteFilePath: string;
            } | null;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "video";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
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
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "measure-slider";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
            lowEmoji: string;
            highEmoji: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "measure-time";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "measure-counter";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "phone";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
            supportGroupId: string;
            trigger: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "breathe";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
            inFor: number;
            holdFor: number;
            outFor: number;
            repeat: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "urge-surfing";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "task";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            type: "question";
            backgroundColor: string;
            ordinals: {
                main?: {
                    [x: string]: number;
                } | null | undefined;
                impulseDebrief?: {
                    [x: string]: number;
                } | null | undefined;
                routine?: {
                    [x: string]: number;
                } | null | undefined;
                tactic?: {
                    [x: string]: number;
                } | null | undefined;
            };
        };
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
    gameplan: {
        impulseDebrief?: yup.Maybe<string[] | undefined>;
        main: string[];
    };
    seenGameplan: {
        impulseDebrief?: yup.Maybe<string[] | undefined>;
        main: string[];
    };
    isDisplayable: NonNullable<boolean | undefined>;
    isDeviceConnected: NonNullable<boolean | undefined>;
    characteristics: {};
}, yup.AnyObject, any>;
export type LogValue = ImpulseLogValue | LocationLogValue | TimeLogValue | DebriefLogValue | MotionLogValue | ButtonLogValue;
export {};
