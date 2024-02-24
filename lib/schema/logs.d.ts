import * as yup from 'yup';
import { TimestampLike } from '../utils/TimestampLike';
import { Gameplan } from './gameplan';
import { TacticValue } from './tactic';
type ImpulseGameplan = {
    main: Gameplan;
    impulseDebrief: Gameplan;
};
type BasicGameplan = {
    main: Gameplan;
};
type Outcome = 'success' | 'setback' | 'indeterminate';
export type BaseLogValue = WithTypes<typeof baseLogSchema, unknown>;
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
    tacticIds: string[];
    seenTacticIds: string[];
    tacticsById: {
        [x: string]: {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            nextId?: string | undefined;
            autogenerate?: boolean | undefined;
            type: "folder";
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
            backgroundColor: string;
            tacticIds: string[];
            currentTacticIndex: number;
            tacticsById: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "steps";
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
            backgroundColor: string;
            steps: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "emotions";
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
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "audio";
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
            backgroundColor: string;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "video";
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
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "measure-slider";
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
            backgroundColor: string;
            lowEmoji: string;
            highEmoji: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "measure-time";
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
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "measure-counter";
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
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "phone";
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
            backgroundColor: string;
            supportGroupId: string;
            trigger: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "breathe";
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
            backgroundColor: string;
            inFor: number;
            holdFor: number;
            outFor: number;
            repeat: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "urge-surfing";
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
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "task";
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
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "question";
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
            backgroundColor: string;
        };
    } | null | undefined;
    suggestedTacticIds: yup.Maybe<(string | undefined)[] | undefined>;
    isUpdatingSuggestions: yup.Maybe<boolean | undefined>;
    supportGroupSuggestedTacticIds: {
        impulse: {};
        impulseDebrief: {};
    } | null | undefined;
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
    tacticIds: "";
    seenTacticIds: "";
    tacticsById: undefined;
    suggestedTacticIds: "";
    isUpdatingSuggestions: undefined;
    supportGroupSuggestedTacticIds: {
        impulse: {};
        impulseDebrief: {};
    };
    tacticLikes: undefined;
    tacticData: undefined;
    sharedWithSupportGroupIds: "";
}, "">;
type WithTypes<T extends yup.ISchema<unknown>, G> = Omit<yup.InferType<T>, 'gameplan' | 'tactics' | 'gameplans'> & {
    createdAt: TimestampLike;
    updatedAt: TimestampLike;
    startTime: TimestampLike;
    gameplan: G;
    gameplans?: Record<string, G>;
    tacticsById: Record<string, TacticValue>;
};
export type ImpulseLogValue = WithTypes<typeof impulseLogSchema, ImpulseGameplan>;
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
    tacticIds: string[];
    seenTacticIds: string[];
    tacticsById: {
        [x: string]: {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            nextId?: string | undefined;
            autogenerate?: boolean | undefined;
            type: "folder";
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
            backgroundColor: string;
            tacticIds: string[];
            currentTacticIndex: number;
            tacticsById: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "steps";
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
            backgroundColor: string;
            steps: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "emotions";
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
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "audio";
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
            backgroundColor: string;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "video";
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
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "measure-slider";
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
            backgroundColor: string;
            lowEmoji: string;
            highEmoji: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "measure-time";
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
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "measure-counter";
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
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "phone";
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
            backgroundColor: string;
            supportGroupId: string;
            trigger: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "breathe";
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
            backgroundColor: string;
            inFor: number;
            holdFor: number;
            outFor: number;
            repeat: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "urge-surfing";
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
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "task";
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
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "question";
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
            backgroundColor: string;
        };
    } | null | undefined;
    suggestedTacticIds: yup.Maybe<(string | undefined)[] | undefined>;
    isUpdatingSuggestions: yup.Maybe<boolean | undefined>;
    supportGroupSuggestedTacticIds: {
        impulse: {};
        impulseDebrief: {};
    } | null | undefined;
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
            impulseDebrief: {
                tacticIds: string[];
                tacticsById: {
                    [x: string]: {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        nextId?: string | undefined;
                        autogenerate?: boolean | undefined;
                        type: "folder";
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
                        backgroundColor: string;
                        tacticIds: string[];
                        currentTacticIndex: number;
                        tacticsById: {};
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "steps";
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
                        backgroundColor: string;
                        steps: number;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "emotions";
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
                        backgroundColor: string;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "audio";
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
                        backgroundColor: string;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "video";
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
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "measure-slider";
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
                        backgroundColor: string;
                        lowEmoji: string;
                        highEmoji: string;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "measure-time";
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
                        backgroundColor: string;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "measure-counter";
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
                        backgroundColor: string;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "phone";
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
                        backgroundColor: string;
                        supportGroupId: string;
                        trigger: {};
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "breathe";
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
                        backgroundColor: string;
                        inFor: number;
                        holdFor: number;
                        outFor: number;
                        repeat: number;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "urge-surfing";
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
                        backgroundColor: string;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "task";
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
                        backgroundColor: string;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "question";
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
                        backgroundColor: string;
                    };
                };
                suggestedTacticIds: string[];
            };
            main: {
                tacticIds: string[];
                tacticsById: {
                    [x: string]: {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        nextId?: string | undefined;
                        autogenerate?: boolean | undefined;
                        type: "folder";
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
                        backgroundColor: string;
                        tacticIds: string[];
                        currentTacticIndex: number;
                        tacticsById: {};
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "steps";
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
                        backgroundColor: string;
                        steps: number;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "emotions";
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
                        backgroundColor: string;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "audio";
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
                        backgroundColor: string;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "video";
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
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "measure-slider";
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
                        backgroundColor: string;
                        lowEmoji: string;
                        highEmoji: string;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "measure-time";
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
                        backgroundColor: string;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "measure-counter";
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
                        backgroundColor: string;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "phone";
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
                        backgroundColor: string;
                        supportGroupId: string;
                        trigger: {};
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "breathe";
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
                        backgroundColor: string;
                        inFor: number;
                        holdFor: number;
                        outFor: number;
                        repeat: number;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "urge-surfing";
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
                        backgroundColor: string;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "task";
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
                        backgroundColor: string;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "question";
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
                        backgroundColor: string;
                    };
                };
                suggestedTacticIds: string[];
            };
        };
    };
    outcome: Outcome | undefined;
    patterns: {
        [x: string]: {
            issueId?: yup.Maybe<string | undefined>;
            supportGroupIds?: yup.Maybe<(string | undefined)[] | undefined>;
            notification?: {
                title: string;
                body: string;
            } | null | undefined;
            setbackTacticId?: yup.Maybe<string | undefined>;
            gameplanId?: yup.Maybe<string | undefined>;
            debriefGameplanId?: yup.Maybe<string | undefined>;
            uid: string;
            ordinal: number;
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
            impulse: {
                tacticIds: string[];
                tacticsById: {
                    [x: string]: {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        nextId?: string | undefined;
                        autogenerate?: boolean | undefined;
                        type: "folder";
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
                        backgroundColor: string;
                        tacticIds: string[];
                        currentTacticIndex: number;
                        tacticsById: {};
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "steps";
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
                        backgroundColor: string;
                        steps: number;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "emotions";
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
                        backgroundColor: string;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "audio";
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
                        backgroundColor: string;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "video";
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
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "measure-slider";
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
                        backgroundColor: string;
                        lowEmoji: string;
                        highEmoji: string;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "measure-time";
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
                        backgroundColor: string;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "measure-counter";
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
                        backgroundColor: string;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "phone";
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
                        backgroundColor: string;
                        supportGroupId: string;
                        trigger: {};
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "breathe";
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
                        backgroundColor: string;
                        inFor: number;
                        holdFor: number;
                        outFor: number;
                        repeat: number;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "urge-surfing";
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
                        backgroundColor: string;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "task";
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
                        backgroundColor: string;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "question";
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
                        backgroundColor: string;
                    };
                };
                suggestedTacticIds: string[];
            };
            name: string;
            setbackThreshold: number;
            sendWeeklyReports: NonNullable<boolean | undefined>;
            debrief: {
                tacticIds: string[];
                tacticsById: {
                    [x: string]: {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        nextId?: string | undefined;
                        autogenerate?: boolean | undefined;
                        type: "folder";
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
                        backgroundColor: string;
                        tacticIds: string[];
                        currentTacticIndex: number;
                        tacticsById: {};
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "steps";
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
                        backgroundColor: string;
                        steps: number;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "emotions";
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
                        backgroundColor: string;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "audio";
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
                        backgroundColor: string;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "video";
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
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "measure-slider";
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
                        backgroundColor: string;
                        lowEmoji: string;
                        highEmoji: string;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "measure-time";
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
                        backgroundColor: string;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "measure-counter";
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
                        backgroundColor: string;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "phone";
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
                        backgroundColor: string;
                        supportGroupId: string;
                        trigger: {};
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "breathe";
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
                        backgroundColor: string;
                        inFor: number;
                        holdFor: number;
                        outFor: number;
                        repeat: number;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "urge-surfing";
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
                        backgroundColor: string;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "task";
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
                        backgroundColor: string;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "question";
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
                        backgroundColor: string;
                    };
                };
                suggestedTacticIds: string[];
            };
        };
    };
    patternId: string;
    patternIds: (string | undefined)[];
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
    tacticIds: "";
    seenTacticIds: "";
    tacticsById: undefined;
    suggestedTacticIds: "";
    isUpdatingSuggestions: undefined;
    supportGroupSuggestedTacticIds: {
        impulse: {};
        impulseDebrief: {};
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
    outcome: undefined;
    patterns: undefined;
    patternId: undefined;
    patternIds: "";
    debriefNotes: undefined;
    debriefReminderSentAt: undefined;
    debriefedAt: undefined;
}, "">;
export type LocationLogValue = WithTypes<typeof locationLogSchema, BasicGameplan>;
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
    tacticIds: string[];
    seenTacticIds: string[];
    tacticsById: {
        [x: string]: {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            nextId?: string | undefined;
            autogenerate?: boolean | undefined;
            type: "folder";
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
            backgroundColor: string;
            tacticIds: string[];
            currentTacticIndex: number;
            tacticsById: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "steps";
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
            backgroundColor: string;
            steps: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "emotions";
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
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "audio";
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
            backgroundColor: string;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "video";
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
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "measure-slider";
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
            backgroundColor: string;
            lowEmoji: string;
            highEmoji: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "measure-time";
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
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "measure-counter";
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
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "phone";
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
            backgroundColor: string;
            supportGroupId: string;
            trigger: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "breathe";
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
            backgroundColor: string;
            inFor: number;
            holdFor: number;
            outFor: number;
            repeat: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "urge-surfing";
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
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "task";
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
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "question";
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
            backgroundColor: string;
        };
    } | null | undefined;
    suggestedTacticIds: yup.Maybe<(string | undefined)[] | undefined>;
    isUpdatingSuggestions: yup.Maybe<boolean | undefined>;
    supportGroupSuggestedTacticIds: {
        impulse: {};
        impulseDebrief: {};
    } | null | undefined;
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
    tacticIds: "";
    seenTacticIds: "";
    tacticsById: undefined;
    suggestedTacticIds: "";
    isUpdatingSuggestions: undefined;
    supportGroupSuggestedTacticIds: {
        impulse: {};
        impulseDebrief: {};
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
export type TimeLogValue = WithTypes<typeof timeLogSchema, BasicGameplan>;
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
    tacticIds: string[];
    seenTacticIds: string[];
    tacticsById: {
        [x: string]: {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            nextId?: string | undefined;
            autogenerate?: boolean | undefined;
            type: "folder";
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
            backgroundColor: string;
            tacticIds: string[];
            currentTacticIndex: number;
            tacticsById: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "steps";
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
            backgroundColor: string;
            steps: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "emotions";
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
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "audio";
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
            backgroundColor: string;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "video";
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
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "measure-slider";
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
            backgroundColor: string;
            lowEmoji: string;
            highEmoji: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "measure-time";
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
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "measure-counter";
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
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "phone";
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
            backgroundColor: string;
            supportGroupId: string;
            trigger: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "breathe";
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
            backgroundColor: string;
            inFor: number;
            holdFor: number;
            outFor: number;
            repeat: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "urge-surfing";
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
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "task";
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
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "question";
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
            backgroundColor: string;
        };
    } | null | undefined;
    suggestedTacticIds: yup.Maybe<(string | undefined)[] | undefined>;
    isUpdatingSuggestions: yup.Maybe<boolean | undefined>;
    supportGroupSuggestedTacticIds: {
        impulse: {};
        impulseDebrief: {};
    } | null | undefined;
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
    tacticIds: "";
    seenTacticIds: "";
    tacticsById: undefined;
    suggestedTacticIds: "";
    isUpdatingSuggestions: undefined;
    supportGroupSuggestedTacticIds: {
        impulse: {};
        impulseDebrief: {};
    };
    tacticLikes: undefined;
    tacticData: undefined;
    sharedWithSupportGroupIds: "";
    type: undefined;
    isDisplayable: undefined;
    gameplanId: undefined;
}, "">;
export type DebriefLogValue = WithTypes<typeof dayDebriefLogSchema, BasicGameplan>;
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
    tacticIds: string[];
    seenTacticIds: string[];
    tacticsById: {
        [x: string]: {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            nextId?: string | undefined;
            autogenerate?: boolean | undefined;
            type: "folder";
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
            backgroundColor: string;
            tacticIds: string[];
            currentTacticIndex: number;
            tacticsById: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "steps";
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
            backgroundColor: string;
            steps: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "emotions";
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
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "audio";
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
            backgroundColor: string;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "video";
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
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "measure-slider";
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
            backgroundColor: string;
            lowEmoji: string;
            highEmoji: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "measure-time";
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
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "measure-counter";
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
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "phone";
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
            backgroundColor: string;
            supportGroupId: string;
            trigger: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "breathe";
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
            backgroundColor: string;
            inFor: number;
            holdFor: number;
            outFor: number;
            repeat: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "urge-surfing";
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
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "task";
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
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "question";
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
            backgroundColor: string;
        };
    } | null | undefined;
    suggestedTacticIds: yup.Maybe<(string | undefined)[] | undefined>;
    isUpdatingSuggestions: yup.Maybe<boolean | undefined>;
    supportGroupSuggestedTacticIds: {
        impulse: {};
        impulseDebrief: {};
    } | null | undefined;
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
            issueId?: yup.Maybe<string | undefined>;
            supportGroupIds?: yup.Maybe<(string | undefined)[] | undefined>;
            notification?: {
                title: string;
                body: string;
            } | null | undefined;
            setbackTacticId?: yup.Maybe<string | undefined>;
            gameplanId?: yup.Maybe<string | undefined>;
            debriefGameplanId?: yup.Maybe<string | undefined>;
            uid: string;
            ordinal: number;
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
            impulse: {
                tacticIds: string[];
                tacticsById: {
                    [x: string]: {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        nextId?: string | undefined;
                        autogenerate?: boolean | undefined;
                        type: "folder";
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
                        backgroundColor: string;
                        tacticIds: string[];
                        currentTacticIndex: number;
                        tacticsById: {};
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "steps";
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
                        backgroundColor: string;
                        steps: number;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "emotions";
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
                        backgroundColor: string;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "audio";
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
                        backgroundColor: string;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "video";
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
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "measure-slider";
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
                        backgroundColor: string;
                        lowEmoji: string;
                        highEmoji: string;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "measure-time";
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
                        backgroundColor: string;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "measure-counter";
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
                        backgroundColor: string;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "phone";
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
                        backgroundColor: string;
                        supportGroupId: string;
                        trigger: {};
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "breathe";
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
                        backgroundColor: string;
                        inFor: number;
                        holdFor: number;
                        outFor: number;
                        repeat: number;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "urge-surfing";
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
                        backgroundColor: string;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "task";
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
                        backgroundColor: string;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "question";
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
                        backgroundColor: string;
                    };
                };
                suggestedTacticIds: string[];
            };
            name: string;
            setbackThreshold: number;
            sendWeeklyReports: NonNullable<boolean | undefined>;
            debrief: {
                tacticIds: string[];
                tacticsById: {
                    [x: string]: {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        nextId?: string | undefined;
                        autogenerate?: boolean | undefined;
                        type: "folder";
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
                        backgroundColor: string;
                        tacticIds: string[];
                        currentTacticIndex: number;
                        tacticsById: {};
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "steps";
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
                        backgroundColor: string;
                        steps: number;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "emotions";
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
                        backgroundColor: string;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "audio";
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
                        backgroundColor: string;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "video";
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
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "measure-slider";
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
                        backgroundColor: string;
                        lowEmoji: string;
                        highEmoji: string;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "measure-time";
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
                        backgroundColor: string;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "measure-counter";
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
                        backgroundColor: string;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "phone";
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
                        backgroundColor: string;
                        supportGroupId: string;
                        trigger: {};
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "breathe";
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
                        backgroundColor: string;
                        inFor: number;
                        holdFor: number;
                        outFor: number;
                        repeat: number;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "urge-surfing";
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
                        backgroundColor: string;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "task";
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
                        backgroundColor: string;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "question";
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
                        backgroundColor: string;
                    };
                };
                suggestedTacticIds: string[];
            };
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
    tacticIds: "";
    seenTacticIds: "";
    tacticsById: undefined;
    suggestedTacticIds: "";
    isUpdatingSuggestions: undefined;
    supportGroupSuggestedTacticIds: {
        impulse: {};
        impulseDebrief: {};
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
export type MotionLogValue = WithTypes<typeof motionLogSchema, BasicGameplan>;
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
    tacticIds: string[];
    seenTacticIds: string[];
    tacticsById: {
        [x: string]: {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            nextId?: string | undefined;
            autogenerate?: boolean | undefined;
            type: "folder";
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
            backgroundColor: string;
            tacticIds: string[];
            currentTacticIndex: number;
            tacticsById: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "steps";
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
            backgroundColor: string;
            steps: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "emotions";
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
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "audio";
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
            backgroundColor: string;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "video";
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
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "measure-slider";
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
            backgroundColor: string;
            lowEmoji: string;
            highEmoji: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "measure-time";
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
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "measure-counter";
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
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "phone";
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
            backgroundColor: string;
            supportGroupId: string;
            trigger: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "breathe";
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
            backgroundColor: string;
            inFor: number;
            holdFor: number;
            outFor: number;
            repeat: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "urge-surfing";
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
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "task";
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
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "question";
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
            backgroundColor: string;
        };
    } | null | undefined;
    suggestedTacticIds: yup.Maybe<(string | undefined)[] | undefined>;
    isUpdatingSuggestions: yup.Maybe<boolean | undefined>;
    supportGroupSuggestedTacticIds: {
        impulse: {};
        impulseDebrief: {};
    } | null | undefined;
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
    tacticIds: "";
    seenTacticIds: "";
    tacticsById: undefined;
    suggestedTacticIds: "";
    isUpdatingSuggestions: undefined;
    supportGroupSuggestedTacticIds: {
        impulse: {};
        impulseDebrief: {};
    };
    tacticLikes: undefined;
    tacticData: undefined;
    sharedWithSupportGroupIds: "";
    type: undefined;
    isDisplayable: undefined;
}, "">;
export type ButtonLogValue = WithTypes<typeof buttonLogSchema, BasicGameplan>;
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
    tacticIds: string[];
    seenTacticIds: string[];
    tacticsById: {
        [x: string]: {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            nextId?: string | undefined;
            autogenerate?: boolean | undefined;
            type: "folder";
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
            backgroundColor: string;
            tacticIds: string[];
            currentTacticIndex: number;
            tacticsById: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "steps";
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
            backgroundColor: string;
            steps: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "emotions";
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
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "audio";
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
            backgroundColor: string;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "video";
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
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "measure-slider";
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
            backgroundColor: string;
            lowEmoji: string;
            highEmoji: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "measure-time";
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
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "measure-counter";
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
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "phone";
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
            backgroundColor: string;
            supportGroupId: string;
            trigger: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "breathe";
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
            backgroundColor: string;
            inFor: number;
            holdFor: number;
            outFor: number;
            repeat: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "urge-surfing";
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
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "task";
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
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "question";
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
            backgroundColor: string;
        };
    } | null | undefined;
    suggestedTacticIds: yup.Maybe<(string | undefined)[] | undefined>;
    isUpdatingSuggestions: yup.Maybe<boolean | undefined>;
    supportGroupSuggestedTacticIds: {
        impulse: {};
        impulseDebrief: {};
    } | null | undefined;
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
    tacticIds: "";
    seenTacticIds: "";
    tacticsById: undefined;
    suggestedTacticIds: "";
    isUpdatingSuggestions: undefined;
    supportGroupSuggestedTacticIds: {
        impulse: {};
        impulseDebrief: {};
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
    tacticsById?: {
        [x: string]: {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            nextId?: string | undefined;
            autogenerate?: boolean | undefined;
            type: "folder";
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
            backgroundColor: string;
            tacticIds: string[];
            currentTacticIndex: number;
            tacticsById: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "steps";
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
            backgroundColor: string;
            steps: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "emotions";
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
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "audio";
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
            backgroundColor: string;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "video";
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
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "measure-slider";
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
            backgroundColor: string;
            lowEmoji: string;
            highEmoji: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "measure-time";
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
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "measure-counter";
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
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "phone";
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
            backgroundColor: string;
            supportGroupId: string;
            trigger: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "breathe";
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
            backgroundColor: string;
            inFor: number;
            holdFor: number;
            outFor: number;
            repeat: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "urge-surfing";
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
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "task";
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
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "question";
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
            backgroundColor: string;
        };
    } | null | undefined;
    steps?: yup.Maybe<number | undefined>;
    suggestedTacticIds?: yup.Maybe<(string | undefined)[] | undefined>;
    locationFormatted?: yup.Maybe<string | undefined>;
    commentCount?: yup.Maybe<number | undefined>;
    commentsById?: {} | null | undefined;
    commentsByTacticId?: {
        [x: string]: {
            comments?: any[] | undefined;
            tacticTitle: string;
        };
    } | null | undefined;
    isUpdatingSuggestions?: yup.Maybe<boolean | undefined>;
    supportGroupSuggestedTacticIds?: {
        impulse: {};
        impulseDebrief: {};
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
    type: "impulse";
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
    tacticIds: string[];
    timezone: string;
    patternId: string;
    location: {
        latitude?: number | undefined;
        longitude?: number | undefined;
        altitude?: number | undefined;
        accuracy?: number | undefined;
        altitudeAccuracy?: number | undefined;
        heading?: number | undefined;
        speed?: number | undefined;
    };
    startTime: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    locationIsFetching: NonNullable<boolean | undefined>;
    seenTacticIds: string[];
    gameplans: {
        [x: string]: {
            impulseDebrief: {
                tacticIds: string[];
                tacticsById: {
                    [x: string]: {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        nextId?: string | undefined;
                        autogenerate?: boolean | undefined;
                        type: "folder";
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
                        backgroundColor: string;
                        tacticIds: string[];
                        currentTacticIndex: number;
                        tacticsById: {};
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "steps";
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
                        backgroundColor: string;
                        steps: number;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "emotions";
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
                        backgroundColor: string;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "audio";
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
                        backgroundColor: string;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "video";
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
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "measure-slider";
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
                        backgroundColor: string;
                        lowEmoji: string;
                        highEmoji: string;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "measure-time";
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
                        backgroundColor: string;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "measure-counter";
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
                        backgroundColor: string;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "phone";
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
                        backgroundColor: string;
                        supportGroupId: string;
                        trigger: {};
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "breathe";
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
                        backgroundColor: string;
                        inFor: number;
                        holdFor: number;
                        outFor: number;
                        repeat: number;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "urge-surfing";
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
                        backgroundColor: string;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "task";
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
                        backgroundColor: string;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "question";
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
                        backgroundColor: string;
                    };
                };
                suggestedTacticIds: string[];
            };
            main: {
                tacticIds: string[];
                tacticsById: {
                    [x: string]: {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        nextId?: string | undefined;
                        autogenerate?: boolean | undefined;
                        type: "folder";
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
                        backgroundColor: string;
                        tacticIds: string[];
                        currentTacticIndex: number;
                        tacticsById: {};
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "steps";
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
                        backgroundColor: string;
                        steps: number;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "emotions";
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
                        backgroundColor: string;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "audio";
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
                        backgroundColor: string;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "video";
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
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "measure-slider";
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
                        backgroundColor: string;
                        lowEmoji: string;
                        highEmoji: string;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "measure-time";
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
                        backgroundColor: string;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "measure-counter";
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
                        backgroundColor: string;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "phone";
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
                        backgroundColor: string;
                        supportGroupId: string;
                        trigger: {};
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "breathe";
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
                        backgroundColor: string;
                        inFor: number;
                        holdFor: number;
                        outFor: number;
                        repeat: number;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "urge-surfing";
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
                        backgroundColor: string;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "task";
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
                        backgroundColor: string;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "question";
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
                        backgroundColor: string;
                    };
                };
                suggestedTacticIds: string[];
            };
        };
    };
    isDisplayable: NonNullable<boolean | undefined>;
    patterns: {
        [x: string]: {
            issueId?: yup.Maybe<string | undefined>;
            supportGroupIds?: yup.Maybe<(string | undefined)[] | undefined>;
            notification?: {
                title: string;
                body: string;
            } | null | undefined;
            setbackTacticId?: yup.Maybe<string | undefined>;
            gameplanId?: yup.Maybe<string | undefined>;
            debriefGameplanId?: yup.Maybe<string | undefined>;
            uid: string;
            ordinal: number;
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
            impulse: {
                tacticIds: string[];
                tacticsById: {
                    [x: string]: {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        nextId?: string | undefined;
                        autogenerate?: boolean | undefined;
                        type: "folder";
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
                        backgroundColor: string;
                        tacticIds: string[];
                        currentTacticIndex: number;
                        tacticsById: {};
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "steps";
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
                        backgroundColor: string;
                        steps: number;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "emotions";
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
                        backgroundColor: string;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "audio";
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
                        backgroundColor: string;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "video";
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
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "measure-slider";
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
                        backgroundColor: string;
                        lowEmoji: string;
                        highEmoji: string;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "measure-time";
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
                        backgroundColor: string;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "measure-counter";
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
                        backgroundColor: string;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "phone";
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
                        backgroundColor: string;
                        supportGroupId: string;
                        trigger: {};
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "breathe";
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
                        backgroundColor: string;
                        inFor: number;
                        holdFor: number;
                        outFor: number;
                        repeat: number;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "urge-surfing";
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
                        backgroundColor: string;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "task";
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
                        backgroundColor: string;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "question";
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
                        backgroundColor: string;
                    };
                };
                suggestedTacticIds: string[];
            };
            name: string;
            setbackThreshold: number;
            sendWeeklyReports: NonNullable<boolean | undefined>;
            debrief: {
                tacticIds: string[];
                tacticsById: {
                    [x: string]: {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        nextId?: string | undefined;
                        autogenerate?: boolean | undefined;
                        type: "folder";
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
                        backgroundColor: string;
                        tacticIds: string[];
                        currentTacticIndex: number;
                        tacticsById: {};
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "steps";
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
                        backgroundColor: string;
                        steps: number;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "emotions";
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
                        backgroundColor: string;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "audio";
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
                        backgroundColor: string;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "video";
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
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "measure-slider";
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
                        backgroundColor: string;
                        lowEmoji: string;
                        highEmoji: string;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "measure-time";
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
                        backgroundColor: string;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "measure-counter";
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
                        backgroundColor: string;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "phone";
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
                        backgroundColor: string;
                        supportGroupId: string;
                        trigger: {};
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "breathe";
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
                        backgroundColor: string;
                        inFor: number;
                        holdFor: number;
                        outFor: number;
                        repeat: number;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "urge-surfing";
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
                        backgroundColor: string;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "task";
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
                        backgroundColor: string;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "question";
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
                        backgroundColor: string;
                    };
                };
                suggestedTacticIds: string[];
            };
        };
    };
    patternIds: (string | undefined)[];
} | {
    tacticsById?: {
        [x: string]: {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            nextId?: string | undefined;
            autogenerate?: boolean | undefined;
            type: "folder";
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
            backgroundColor: string;
            tacticIds: string[];
            currentTacticIndex: number;
            tacticsById: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "steps";
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
            backgroundColor: string;
            steps: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "emotions";
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
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "audio";
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
            backgroundColor: string;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "video";
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
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "measure-slider";
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
            backgroundColor: string;
            lowEmoji: string;
            highEmoji: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "measure-time";
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
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "measure-counter";
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
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "phone";
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
            backgroundColor: string;
            supportGroupId: string;
            trigger: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "breathe";
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
            backgroundColor: string;
            inFor: number;
            holdFor: number;
            outFor: number;
            repeat: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "urge-surfing";
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
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "task";
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
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "question";
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
            backgroundColor: string;
        };
    } | null | undefined;
    steps?: yup.Maybe<number | undefined>;
    suggestedTacticIds?: yup.Maybe<(string | undefined)[] | undefined>;
    locationFormatted?: yup.Maybe<string | undefined>;
    commentCount?: yup.Maybe<number | undefined>;
    commentsById?: {} | null | undefined;
    commentsByTacticId?: {
        [x: string]: {
            comments?: any[] | undefined;
            tacticTitle: string;
        };
    } | null | undefined;
    isUpdatingSuggestions?: yup.Maybe<boolean | undefined>;
    supportGroupSuggestedTacticIds?: {
        impulse: {};
        impulseDebrief: {};
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
    type: "location";
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
    tacticIds: string[];
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
    locationId: string;
    startTime: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    locationIsFetching: NonNullable<boolean | undefined>;
    seenTacticIds: string[];
    isDisplayable: NonNullable<boolean | undefined>;
    locationName: string;
    locationMode: {};
} | {
    tacticsById?: {
        [x: string]: {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            nextId?: string | undefined;
            autogenerate?: boolean | undefined;
            type: "folder";
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
            backgroundColor: string;
            tacticIds: string[];
            currentTacticIndex: number;
            tacticsById: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "steps";
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
            backgroundColor: string;
            steps: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "emotions";
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
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "audio";
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
            backgroundColor: string;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "video";
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
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "measure-slider";
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
            backgroundColor: string;
            lowEmoji: string;
            highEmoji: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "measure-time";
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
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "measure-counter";
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
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "phone";
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
            backgroundColor: string;
            supportGroupId: string;
            trigger: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "breathe";
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
            backgroundColor: string;
            inFor: number;
            holdFor: number;
            outFor: number;
            repeat: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "urge-surfing";
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
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "task";
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
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "question";
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
            backgroundColor: string;
        };
    } | null | undefined;
    steps?: yup.Maybe<number | undefined>;
    suggestedTacticIds?: yup.Maybe<(string | undefined)[] | undefined>;
    locationFormatted?: yup.Maybe<string | undefined>;
    commentCount?: yup.Maybe<number | undefined>;
    commentsById?: {} | null | undefined;
    commentsByTacticId?: {
        [x: string]: {
            comments?: any[] | undefined;
            tacticTitle: string;
        };
    } | null | undefined;
    isUpdatingSuggestions?: yup.Maybe<boolean | undefined>;
    supportGroupSuggestedTacticIds?: {
        impulse: {};
        impulseDebrief: {};
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
    type: "time";
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
    tacticIds: string[];
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
    gameplanId: string;
    startTime: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    locationIsFetching: NonNullable<boolean | undefined>;
    seenTacticIds: string[];
    isDisplayable: NonNullable<boolean | undefined>;
} | {
    tacticsById?: {
        [x: string]: {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            nextId?: string | undefined;
            autogenerate?: boolean | undefined;
            type: "folder";
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
            backgroundColor: string;
            tacticIds: string[];
            currentTacticIndex: number;
            tacticsById: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "steps";
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
            backgroundColor: string;
            steps: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "emotions";
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
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "audio";
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
            backgroundColor: string;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "video";
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
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "measure-slider";
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
            backgroundColor: string;
            lowEmoji: string;
            highEmoji: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "measure-time";
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
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "measure-counter";
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
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "phone";
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
            backgroundColor: string;
            supportGroupId: string;
            trigger: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "breathe";
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
            backgroundColor: string;
            inFor: number;
            holdFor: number;
            outFor: number;
            repeat: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "urge-surfing";
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
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "task";
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
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "question";
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
            backgroundColor: string;
        };
    } | null | undefined;
    steps?: yup.Maybe<number | undefined>;
    suggestedTacticIds?: yup.Maybe<(string | undefined)[] | undefined>;
    locationFormatted?: yup.Maybe<string | undefined>;
    commentCount?: yup.Maybe<number | undefined>;
    commentsById?: {} | null | undefined;
    commentsByTacticId?: {
        [x: string]: {
            comments?: any[] | undefined;
            tacticTitle: string;
        };
    } | null | undefined;
    isUpdatingSuggestions?: yup.Maybe<boolean | undefined>;
    supportGroupSuggestedTacticIds?: {
        impulse: {};
        impulseDebrief: {};
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
    type: "dayDebrief";
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
    tacticIds: string[];
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
    gameplanId: string;
    startTime: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    locationIsFetching: NonNullable<boolean | undefined>;
    seenTacticIds: string[];
    isDisplayable: NonNullable<boolean | undefined>;
    patterns: {
        [x: string]: {
            issueId?: yup.Maybe<string | undefined>;
            supportGroupIds?: yup.Maybe<(string | undefined)[] | undefined>;
            notification?: {
                title: string;
                body: string;
            } | null | undefined;
            setbackTacticId?: yup.Maybe<string | undefined>;
            gameplanId?: yup.Maybe<string | undefined>;
            debriefGameplanId?: yup.Maybe<string | undefined>;
            uid: string;
            ordinal: number;
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
            impulse: {
                tacticIds: string[];
                tacticsById: {
                    [x: string]: {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        nextId?: string | undefined;
                        autogenerate?: boolean | undefined;
                        type: "folder";
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
                        backgroundColor: string;
                        tacticIds: string[];
                        currentTacticIndex: number;
                        tacticsById: {};
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "steps";
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
                        backgroundColor: string;
                        steps: number;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "emotions";
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
                        backgroundColor: string;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "audio";
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
                        backgroundColor: string;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "video";
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
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "measure-slider";
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
                        backgroundColor: string;
                        lowEmoji: string;
                        highEmoji: string;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "measure-time";
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
                        backgroundColor: string;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "measure-counter";
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
                        backgroundColor: string;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "phone";
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
                        backgroundColor: string;
                        supportGroupId: string;
                        trigger: {};
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "breathe";
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
                        backgroundColor: string;
                        inFor: number;
                        holdFor: number;
                        outFor: number;
                        repeat: number;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "urge-surfing";
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
                        backgroundColor: string;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "task";
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
                        backgroundColor: string;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "question";
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
                        backgroundColor: string;
                    };
                };
                suggestedTacticIds: string[];
            };
            name: string;
            setbackThreshold: number;
            sendWeeklyReports: NonNullable<boolean | undefined>;
            debrief: {
                tacticIds: string[];
                tacticsById: {
                    [x: string]: {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        nextId?: string | undefined;
                        autogenerate?: boolean | undefined;
                        type: "folder";
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
                        backgroundColor: string;
                        tacticIds: string[];
                        currentTacticIndex: number;
                        tacticsById: {};
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "steps";
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
                        backgroundColor: string;
                        steps: number;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "emotions";
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
                        backgroundColor: string;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "audio";
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
                        backgroundColor: string;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "video";
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
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "measure-slider";
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
                        backgroundColor: string;
                        lowEmoji: string;
                        highEmoji: string;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "measure-time";
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
                        backgroundColor: string;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "measure-counter";
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
                        backgroundColor: string;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "phone";
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
                        backgroundColor: string;
                        supportGroupId: string;
                        trigger: {};
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "breathe";
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
                        backgroundColor: string;
                        inFor: number;
                        holdFor: number;
                        outFor: number;
                        repeat: number;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "urge-surfing";
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
                        backgroundColor: string;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "task";
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
                        backgroundColor: string;
                    } | {
                        uid?: string | null | undefined;
                        ordinal?: number | null | undefined;
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
                        impulseOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        debriefOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        emotionOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        scheduledGameplanOrdinals?: {
                            [x: string]: number;
                        } | null | undefined;
                        type: "question";
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
                        backgroundColor: string;
                    };
                };
                suggestedTacticIds: string[];
            };
        };
    };
    patternIds: (string | undefined)[];
    tacticDataEntries: {
        [x: string]: {} | undefined;
    };
} | {
    tacticsById?: {
        [x: string]: {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            nextId?: string | undefined;
            autogenerate?: boolean | undefined;
            type: "folder";
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
            backgroundColor: string;
            tacticIds: string[];
            currentTacticIndex: number;
            tacticsById: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "steps";
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
            backgroundColor: string;
            steps: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "emotions";
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
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "audio";
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
            backgroundColor: string;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "video";
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
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "measure-slider";
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
            backgroundColor: string;
            lowEmoji: string;
            highEmoji: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "measure-time";
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
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "measure-counter";
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
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "phone";
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
            backgroundColor: string;
            supportGroupId: string;
            trigger: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "breathe";
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
            backgroundColor: string;
            inFor: number;
            holdFor: number;
            outFor: number;
            repeat: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "urge-surfing";
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
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "task";
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
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "question";
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
            backgroundColor: string;
        };
    } | null | undefined;
    steps?: yup.Maybe<number | undefined>;
    suggestedTacticIds?: yup.Maybe<(string | undefined)[] | undefined>;
    locationFormatted?: yup.Maybe<string | undefined>;
    commentCount?: yup.Maybe<number | undefined>;
    commentsById?: {} | null | undefined;
    commentsByTacticId?: {
        [x: string]: {
            comments?: any[] | undefined;
            tacticTitle: string;
        };
    } | null | undefined;
    isUpdatingSuggestions?: yup.Maybe<boolean | undefined>;
    supportGroupSuggestedTacticIds?: {
        impulse: {};
        impulseDebrief: {};
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
    type: "motion";
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
    tacticIds: string[];
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
    startTime: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    locationIsFetching: NonNullable<boolean | undefined>;
    seenTacticIds: string[];
    isDisplayable: NonNullable<boolean | undefined>;
} | {
    tacticsById?: {
        [x: string]: {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            nextId?: string | undefined;
            autogenerate?: boolean | undefined;
            type: "folder";
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
            backgroundColor: string;
            tacticIds: string[];
            currentTacticIndex: number;
            tacticsById: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "steps";
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
            backgroundColor: string;
            steps: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "emotions";
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
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "audio";
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
            backgroundColor: string;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "video";
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
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "measure-slider";
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
            backgroundColor: string;
            lowEmoji: string;
            highEmoji: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "measure-time";
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
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "measure-counter";
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
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "phone";
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
            backgroundColor: string;
            supportGroupId: string;
            trigger: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "breathe";
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
            backgroundColor: string;
            inFor: number;
            holdFor: number;
            outFor: number;
            repeat: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "urge-surfing";
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
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "task";
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
            backgroundColor: string;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
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
            impulseOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            debriefOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            emotionOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            scheduledGameplanOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            type: "question";
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
            backgroundColor: string;
        };
    } | null | undefined;
    steps?: yup.Maybe<number | undefined>;
    suggestedTacticIds?: yup.Maybe<(string | undefined)[] | undefined>;
    locationFormatted?: yup.Maybe<string | undefined>;
    commentCount?: yup.Maybe<number | undefined>;
    commentsById?: {} | null | undefined;
    commentsByTacticId?: {
        [x: string]: {
            comments?: any[] | undefined;
            tacticTitle: string;
        };
    } | null | undefined;
    isUpdatingSuggestions?: yup.Maybe<boolean | undefined>;
    supportGroupSuggestedTacticIds?: {
        impulse: {};
        impulseDebrief: {};
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
    type: "button";
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
    tacticIds: string[];
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
    startTime: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    locationIsFetching: NonNullable<boolean | undefined>;
    seenTacticIds: string[];
    isDisplayable: NonNullable<boolean | undefined>;
    isDeviceConnected: NonNullable<boolean | undefined>;
    characteristics: {};
}, yup.AnyObject, any>;
export type LogValue = ImpulseLogValue | LocationLogValue | TimeLogValue | DebriefLogValue | MotionLogValue | ButtonLogValue;
export {};
