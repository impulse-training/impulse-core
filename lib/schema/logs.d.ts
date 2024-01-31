import * as yup from 'yup';
import { TimestampLike } from '../utils/TimestampLike';
import { Gameplan } from './gameplan';
import { TacticValue } from './tactic';
export type Outcome = 'success' | 'setback' | 'indeterminate';
export type BaseLogValue = WithTypes<typeof BaseLogSchema>;
declare const BaseLogSchema: yup.ObjectSchema<{
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
    allTacticIds: (string | undefined)[];
    commentCount: yup.Maybe<number | undefined>;
    commentsById: {} | null | undefined;
    commentsByTacticId: {} | null | undefined;
    steps: yup.Maybe<number | undefined>;
    tacticIds: (string | undefined)[];
    tactics: {
        [x: string]: {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            steps: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "measure-sliders";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            rows: {
                value?: number | null | undefined;
                key: string;
                label: string;
                lowEmoji: string;
                highEmoji: string;
            }[];
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            tacticIds: (string | undefined)[];
            tacticsById: {} | null;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            supportGroupId: string;
            trigger: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "timer";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            timerSeconds: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            inFor: number;
            holdFor: number;
            outFor: number;
            repeat: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "options";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            tacticIds: (string | undefined)[];
            tacticsById: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        };
        [x: number]: {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            steps: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "measure-sliders";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            rows: {
                value?: number | null | undefined;
                key: string;
                label: string;
                lowEmoji: string;
                highEmoji: string;
            }[];
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            tacticIds: (string | undefined)[];
            tacticsById: {} | null;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            supportGroupId: string;
            trigger: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "timer";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            timerSeconds: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            inFor: number;
            holdFor: number;
            outFor: number;
            repeat: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "options";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            tacticIds: (string | undefined)[];
            tacticsById: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        };
        [x: symbol]: {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            steps: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "measure-sliders";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            rows: {
                value?: number | null | undefined;
                key: string;
                label: string;
                lowEmoji: string;
                highEmoji: string;
            }[];
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            tacticIds: (string | undefined)[];
            tacticsById: {} | null;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            supportGroupId: string;
            trigger: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "timer";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            timerSeconds: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            inFor: number;
            holdFor: number;
            outFor: number;
            repeat: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "options";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            tacticIds: (string | undefined)[];
            tacticsById: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        };
    };
    suggestedTacticIds: yup.Maybe<(string | undefined)[] | undefined>;
    isUpdatingSuggestions: yup.Maybe<boolean | undefined>;
    supportGroupSuggestedTacticIds: {
        impulse: {};
        success: {};
        setback: {};
        all: {};
    } | null | undefined;
    tacticUsage: {} | null | undefined;
    tacticData: {} | null | undefined;
    sharedWithSupportGroupIds: yup.Maybe<(string | undefined)[] | undefined>;
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
    allTacticIds: "";
    commentCount: undefined;
    commentsById: {};
    commentsByTacticId: {};
    steps: undefined;
    tacticIds: "";
    tactics: undefined;
    suggestedTacticIds: "";
    isUpdatingSuggestions: undefined;
    supportGroupSuggestedTacticIds: {
        impulse: {};
        success: {};
        setback: {};
        all: {};
    };
    tacticUsage: {};
    tacticData: {};
    sharedWithSupportGroupIds: "";
}, "">;
type WithTypes<T extends yup.ISchema<unknown>> = Omit<yup.InferType<T>, 'gameplan' | 'tactics'> & {
    createdAt: TimestampLike;
    updatedAt: TimestampLike;
    startTime: TimestampLike;
    gameplan: {
        main: Gameplan;
        success?: Gameplan;
        setback?: Gameplan;
    };
    tactics: Record<string, TacticValue>;
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
    allTacticIds: (string | undefined)[];
    commentCount: yup.Maybe<number | undefined>;
    commentsById: {} | null | undefined;
    commentsByTacticId: {} | null | undefined;
    steps: yup.Maybe<number | undefined>;
    tacticIds: (string | undefined)[];
    tactics: {
        [x: string]: {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            steps: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "measure-sliders";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            rows: {
                value?: number | null | undefined;
                key: string;
                label: string;
                lowEmoji: string;
                highEmoji: string;
            }[];
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            tacticIds: (string | undefined)[];
            tacticsById: {} | null;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            supportGroupId: string;
            trigger: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "timer";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            timerSeconds: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            inFor: number;
            holdFor: number;
            outFor: number;
            repeat: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "options";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            tacticIds: (string | undefined)[];
            tacticsById: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        };
        [x: number]: {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            steps: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "measure-sliders";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            rows: {
                value?: number | null | undefined;
                key: string;
                label: string;
                lowEmoji: string;
                highEmoji: string;
            }[];
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            tacticIds: (string | undefined)[];
            tacticsById: {} | null;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            supportGroupId: string;
            trigger: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "timer";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            timerSeconds: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            inFor: number;
            holdFor: number;
            outFor: number;
            repeat: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "options";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            tacticIds: (string | undefined)[];
            tacticsById: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        };
        [x: symbol]: {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            steps: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "measure-sliders";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            rows: {
                value?: number | null | undefined;
                key: string;
                label: string;
                lowEmoji: string;
                highEmoji: string;
            }[];
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            tacticIds: (string | undefined)[];
            tacticsById: {} | null;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            supportGroupId: string;
            trigger: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "timer";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            timerSeconds: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            inFor: number;
            holdFor: number;
            outFor: number;
            repeat: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "options";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            tacticIds: (string | undefined)[];
            tacticsById: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        };
    };
    suggestedTacticIds: yup.Maybe<(string | undefined)[] | undefined>;
    isUpdatingSuggestions: yup.Maybe<boolean | undefined>;
    supportGroupSuggestedTacticIds: {
        impulse: {};
        success: {};
        setback: {};
        all: {};
    } | null | undefined;
    tacticUsage: {} | null | undefined;
    tacticData: {} | null | undefined;
    sharedWithSupportGroupIds: yup.Maybe<(string | undefined)[] | undefined>;
} & {
    type: "impulse";
    setAsActiveImpulse: yup.Maybe<boolean | undefined>;
    pressCount: yup.Maybe<number | undefined>;
    outcome: NonNullable<"success" | "setback" | "indeterminate" | undefined>;
    isDisplayable: NonNullable<boolean | undefined>;
    buttonPressSecondsSinceEpoch: yup.Maybe<number | undefined>;
    gameplans: {};
    patterns: {
        [x: string]: {
            issueId?: yup.Maybe<string | undefined>;
            customUnit?: string | undefined;
            supportGroupIds?: yup.Maybe<(string | undefined)[] | undefined>;
            notification?: {
                title: string;
                body: string;
            } | null | undefined;
            gameplanId?: yup.Maybe<string | undefined>;
            successGameplanId?: yup.Maybe<string | undefined>;
            setbackGameplanId?: yup.Maybe<string | undefined>;
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
            name: string;
            unit: NonNullable<"time" | "custom" | undefined>;
            sendWeeklyReports: NonNullable<boolean | undefined>;
            setbackThreshold: number;
        };
        [x: number]: {
            issueId?: yup.Maybe<string | undefined>;
            customUnit?: string | undefined;
            supportGroupIds?: yup.Maybe<(string | undefined)[] | undefined>;
            notification?: {
                title: string;
                body: string;
            } | null | undefined;
            gameplanId?: yup.Maybe<string | undefined>;
            successGameplanId?: yup.Maybe<string | undefined>;
            setbackGameplanId?: yup.Maybe<string | undefined>;
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
            name: string;
            unit: NonNullable<"time" | "custom" | undefined>;
            sendWeeklyReports: NonNullable<boolean | undefined>;
            setbackThreshold: number;
        };
        [x: symbol]: {
            issueId?: yup.Maybe<string | undefined>;
            customUnit?: string | undefined;
            supportGroupIds?: yup.Maybe<(string | undefined)[] | undefined>;
            notification?: {
                title: string;
                body: string;
            } | null | undefined;
            gameplanId?: yup.Maybe<string | undefined>;
            successGameplanId?: yup.Maybe<string | undefined>;
            setbackGameplanId?: yup.Maybe<string | undefined>;
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
            name: string;
            unit: NonNullable<"time" | "custom" | undefined>;
            sendWeeklyReports: NonNullable<boolean | undefined>;
            setbackThreshold: number;
        };
    };
    patternId: string;
    patternIds: (string | undefined)[];
    patternUsage: {
        [x: string]: {
            customUnit?: string | undefined;
            value: number;
            unit: NonNullable<"time" | "custom" | undefined>;
            formattedValue: string;
        };
        [x: number]: {
            customUnit?: string | undefined;
            value: number;
            unit: NonNullable<"time" | "custom" | undefined>;
            formattedValue: string;
        };
        [x: symbol]: {
            customUnit?: string | undefined;
            value: number;
            unit: NonNullable<"time" | "custom" | undefined>;
            formattedValue: string;
        };
    };
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
    allTacticIds: "";
    commentCount: undefined;
    commentsById: {};
    commentsByTacticId: {};
    steps: undefined;
    tacticIds: "";
    tactics: undefined;
    suggestedTacticIds: "";
    isUpdatingSuggestions: undefined;
    supportGroupSuggestedTacticIds: {
        impulse: {};
        success: {};
        setback: {};
        all: {};
    };
    tacticUsage: {};
    tacticData: {};
    sharedWithSupportGroupIds: "";
    type: undefined;
    setAsActiveImpulse: undefined;
    pressCount: undefined;
    outcome: undefined;
    isDisplayable: undefined;
    buttonPressSecondsSinceEpoch: undefined;
    gameplans: {};
    patterns: undefined;
    patternId: undefined;
    patternIds: "";
    patternUsage: undefined;
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
    allTacticIds: (string | undefined)[];
    commentCount: yup.Maybe<number | undefined>;
    commentsById: {} | null | undefined;
    commentsByTacticId: {} | null | undefined;
    steps: yup.Maybe<number | undefined>;
    tacticIds: (string | undefined)[];
    tactics: {
        [x: string]: {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            steps: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "measure-sliders";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            rows: {
                value?: number | null | undefined;
                key: string;
                label: string;
                lowEmoji: string;
                highEmoji: string;
            }[];
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            tacticIds: (string | undefined)[];
            tacticsById: {} | null;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            supportGroupId: string;
            trigger: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "timer";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            timerSeconds: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            inFor: number;
            holdFor: number;
            outFor: number;
            repeat: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "options";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            tacticIds: (string | undefined)[];
            tacticsById: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        };
        [x: number]: {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            steps: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "measure-sliders";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            rows: {
                value?: number | null | undefined;
                key: string;
                label: string;
                lowEmoji: string;
                highEmoji: string;
            }[];
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            tacticIds: (string | undefined)[];
            tacticsById: {} | null;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            supportGroupId: string;
            trigger: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "timer";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            timerSeconds: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            inFor: number;
            holdFor: number;
            outFor: number;
            repeat: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "options";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            tacticIds: (string | undefined)[];
            tacticsById: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        };
        [x: symbol]: {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            steps: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "measure-sliders";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            rows: {
                value?: number | null | undefined;
                key: string;
                label: string;
                lowEmoji: string;
                highEmoji: string;
            }[];
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            tacticIds: (string | undefined)[];
            tacticsById: {} | null;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            supportGroupId: string;
            trigger: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "timer";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            timerSeconds: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            inFor: number;
            holdFor: number;
            outFor: number;
            repeat: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "options";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            tacticIds: (string | undefined)[];
            tacticsById: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        };
    };
    suggestedTacticIds: yup.Maybe<(string | undefined)[] | undefined>;
    isUpdatingSuggestions: yup.Maybe<boolean | undefined>;
    supportGroupSuggestedTacticIds: {
        impulse: {};
        success: {};
        setback: {};
        all: {};
    } | null | undefined;
    tacticUsage: {} | null | undefined;
    tacticData: {} | null | undefined;
    sharedWithSupportGroupIds: yup.Maybe<(string | undefined)[] | undefined>;
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
    allTacticIds: "";
    commentCount: undefined;
    commentsById: {};
    commentsByTacticId: {};
    steps: undefined;
    tacticIds: "";
    tactics: undefined;
    suggestedTacticIds: "";
    isUpdatingSuggestions: undefined;
    supportGroupSuggestedTacticIds: {
        impulse: {};
        success: {};
        setback: {};
        all: {};
    };
    tacticUsage: {};
    tacticData: {};
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
    allTacticIds: (string | undefined)[];
    commentCount: yup.Maybe<number | undefined>;
    commentsById: {} | null | undefined;
    commentsByTacticId: {} | null | undefined;
    steps: yup.Maybe<number | undefined>;
    tacticIds: (string | undefined)[];
    tactics: {
        [x: string]: {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            steps: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "measure-sliders";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            rows: {
                value?: number | null | undefined;
                key: string;
                label: string;
                lowEmoji: string;
                highEmoji: string;
            }[];
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            tacticIds: (string | undefined)[];
            tacticsById: {} | null;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            supportGroupId: string;
            trigger: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "timer";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            timerSeconds: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            inFor: number;
            holdFor: number;
            outFor: number;
            repeat: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "options";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            tacticIds: (string | undefined)[];
            tacticsById: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        };
        [x: number]: {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            steps: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "measure-sliders";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            rows: {
                value?: number | null | undefined;
                key: string;
                label: string;
                lowEmoji: string;
                highEmoji: string;
            }[];
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            tacticIds: (string | undefined)[];
            tacticsById: {} | null;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            supportGroupId: string;
            trigger: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "timer";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            timerSeconds: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            inFor: number;
            holdFor: number;
            outFor: number;
            repeat: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "options";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            tacticIds: (string | undefined)[];
            tacticsById: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        };
        [x: symbol]: {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            steps: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "measure-sliders";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            rows: {
                value?: number | null | undefined;
                key: string;
                label: string;
                lowEmoji: string;
                highEmoji: string;
            }[];
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            tacticIds: (string | undefined)[];
            tacticsById: {} | null;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            supportGroupId: string;
            trigger: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "timer";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            timerSeconds: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            inFor: number;
            holdFor: number;
            outFor: number;
            repeat: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "options";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            tacticIds: (string | undefined)[];
            tacticsById: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        };
    };
    suggestedTacticIds: yup.Maybe<(string | undefined)[] | undefined>;
    isUpdatingSuggestions: yup.Maybe<boolean | undefined>;
    supportGroupSuggestedTacticIds: {
        impulse: {};
        success: {};
        setback: {};
        all: {};
    } | null | undefined;
    tacticUsage: {} | null | undefined;
    tacticData: {} | null | undefined;
    sharedWithSupportGroupIds: yup.Maybe<(string | undefined)[] | undefined>;
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
    allTacticIds: "";
    commentCount: undefined;
    commentsById: {};
    commentsByTacticId: {};
    steps: undefined;
    tacticIds: "";
    tactics: undefined;
    suggestedTacticIds: "";
    isUpdatingSuggestions: undefined;
    supportGroupSuggestedTacticIds: {
        impulse: {};
        success: {};
        setback: {};
        all: {};
    };
    tacticUsage: {};
    tacticData: {};
    sharedWithSupportGroupIds: "";
    type: undefined;
    isDisplayable: undefined;
    gameplanId: undefined;
}, "">;
export type DebriefLogValue = WithTypes<typeof debriefLogSchema>;
export declare function logIsDebriefLog(log: LogValue): log is DebriefLogValue;
declare const debriefLogSchema: yup.ObjectSchema<{
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
    allTacticIds: (string | undefined)[];
    commentCount: yup.Maybe<number | undefined>;
    commentsById: {} | null | undefined;
    commentsByTacticId: {} | null | undefined;
    steps: yup.Maybe<number | undefined>;
    tacticIds: (string | undefined)[];
    tactics: {
        [x: string]: {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            steps: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "measure-sliders";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            rows: {
                value?: number | null | undefined;
                key: string;
                label: string;
                lowEmoji: string;
                highEmoji: string;
            }[];
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            tacticIds: (string | undefined)[];
            tacticsById: {} | null;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            supportGroupId: string;
            trigger: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "timer";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            timerSeconds: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            inFor: number;
            holdFor: number;
            outFor: number;
            repeat: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "options";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            tacticIds: (string | undefined)[];
            tacticsById: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        };
        [x: number]: {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            steps: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "measure-sliders";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            rows: {
                value?: number | null | undefined;
                key: string;
                label: string;
                lowEmoji: string;
                highEmoji: string;
            }[];
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            tacticIds: (string | undefined)[];
            tacticsById: {} | null;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            supportGroupId: string;
            trigger: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "timer";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            timerSeconds: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            inFor: number;
            holdFor: number;
            outFor: number;
            repeat: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "options";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            tacticIds: (string | undefined)[];
            tacticsById: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        };
        [x: symbol]: {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            steps: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "measure-sliders";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            rows: {
                value?: number | null | undefined;
                key: string;
                label: string;
                lowEmoji: string;
                highEmoji: string;
            }[];
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            tacticIds: (string | undefined)[];
            tacticsById: {} | null;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            supportGroupId: string;
            trigger: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "timer";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            timerSeconds: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            inFor: number;
            holdFor: number;
            outFor: number;
            repeat: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "options";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            tacticIds: (string | undefined)[];
            tacticsById: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        };
    };
    suggestedTacticIds: yup.Maybe<(string | undefined)[] | undefined>;
    isUpdatingSuggestions: yup.Maybe<boolean | undefined>;
    supportGroupSuggestedTacticIds: {
        impulse: {};
        success: {};
        setback: {};
        all: {};
    } | null | undefined;
    tacticUsage: {} | null | undefined;
    tacticData: {} | null | undefined;
    sharedWithSupportGroupIds: yup.Maybe<(string | undefined)[] | undefined>;
} & {
    type: "debrief";
    outcome: {};
    patterns: {
        [x: string]: {
            issueId?: yup.Maybe<string | undefined>;
            customUnit?: string | undefined;
            supportGroupIds?: yup.Maybe<(string | undefined)[] | undefined>;
            notification?: {
                title: string;
                body: string;
            } | null | undefined;
            gameplanId?: yup.Maybe<string | undefined>;
            successGameplanId?: yup.Maybe<string | undefined>;
            setbackGameplanId?: yup.Maybe<string | undefined>;
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
            name: string;
            unit: NonNullable<"time" | "custom" | undefined>;
            sendWeeklyReports: NonNullable<boolean | undefined>;
            setbackThreshold: number;
        };
        [x: number]: {
            issueId?: yup.Maybe<string | undefined>;
            customUnit?: string | undefined;
            supportGroupIds?: yup.Maybe<(string | undefined)[] | undefined>;
            notification?: {
                title: string;
                body: string;
            } | null | undefined;
            gameplanId?: yup.Maybe<string | undefined>;
            successGameplanId?: yup.Maybe<string | undefined>;
            setbackGameplanId?: yup.Maybe<string | undefined>;
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
            name: string;
            unit: NonNullable<"time" | "custom" | undefined>;
            sendWeeklyReports: NonNullable<boolean | undefined>;
            setbackThreshold: number;
        };
        [x: symbol]: {
            issueId?: yup.Maybe<string | undefined>;
            customUnit?: string | undefined;
            supportGroupIds?: yup.Maybe<(string | undefined)[] | undefined>;
            notification?: {
                title: string;
                body: string;
            } | null | undefined;
            gameplanId?: yup.Maybe<string | undefined>;
            successGameplanId?: yup.Maybe<string | undefined>;
            setbackGameplanId?: yup.Maybe<string | undefined>;
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
            name: string;
            unit: NonNullable<"time" | "custom" | undefined>;
            sendWeeklyReports: NonNullable<boolean | undefined>;
            setbackThreshold: number;
        };
    };
    isDisplayable: NonNullable<boolean | undefined>;
    gameplanId: string;
    patternIds: (string | undefined)[];
    patternUsage: {};
    patternUsageEntries: {};
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
    allTacticIds: "";
    commentCount: undefined;
    commentsById: {};
    commentsByTacticId: {};
    steps: undefined;
    tacticIds: "";
    tactics: undefined;
    suggestedTacticIds: "";
    isUpdatingSuggestions: undefined;
    supportGroupSuggestedTacticIds: {
        impulse: {};
        success: {};
        setback: {};
        all: {};
    };
    tacticUsage: {};
    tacticData: {};
    sharedWithSupportGroupIds: "";
    type: undefined;
    outcome: undefined;
    patterns: undefined;
    isDisplayable: undefined;
    gameplanId: undefined;
    patternIds: "";
    patternUsage: {};
    patternUsageEntries: {};
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
    allTacticIds: (string | undefined)[];
    commentCount: yup.Maybe<number | undefined>;
    commentsById: {} | null | undefined;
    commentsByTacticId: {} | null | undefined;
    steps: yup.Maybe<number | undefined>;
    tacticIds: (string | undefined)[];
    tactics: {
        [x: string]: {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            steps: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "measure-sliders";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            rows: {
                value?: number | null | undefined;
                key: string;
                label: string;
                lowEmoji: string;
                highEmoji: string;
            }[];
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            tacticIds: (string | undefined)[];
            tacticsById: {} | null;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            supportGroupId: string;
            trigger: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "timer";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            timerSeconds: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            inFor: number;
            holdFor: number;
            outFor: number;
            repeat: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "options";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            tacticIds: (string | undefined)[];
            tacticsById: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        };
        [x: number]: {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            steps: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "measure-sliders";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            rows: {
                value?: number | null | undefined;
                key: string;
                label: string;
                lowEmoji: string;
                highEmoji: string;
            }[];
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            tacticIds: (string | undefined)[];
            tacticsById: {} | null;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            supportGroupId: string;
            trigger: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "timer";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            timerSeconds: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            inFor: number;
            holdFor: number;
            outFor: number;
            repeat: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "options";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            tacticIds: (string | undefined)[];
            tacticsById: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        };
        [x: symbol]: {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            steps: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "measure-sliders";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            rows: {
                value?: number | null | undefined;
                key: string;
                label: string;
                lowEmoji: string;
                highEmoji: string;
            }[];
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            tacticIds: (string | undefined)[];
            tacticsById: {} | null;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            supportGroupId: string;
            trigger: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "timer";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            timerSeconds: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            inFor: number;
            holdFor: number;
            outFor: number;
            repeat: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "options";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            tacticIds: (string | undefined)[];
            tacticsById: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        };
    };
    suggestedTacticIds: yup.Maybe<(string | undefined)[] | undefined>;
    isUpdatingSuggestions: yup.Maybe<boolean | undefined>;
    supportGroupSuggestedTacticIds: {
        impulse: {};
        success: {};
        setback: {};
        all: {};
    } | null | undefined;
    tacticUsage: {} | null | undefined;
    tacticData: {} | null | undefined;
    sharedWithSupportGroupIds: yup.Maybe<(string | undefined)[] | undefined>;
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
    allTacticIds: "";
    commentCount: undefined;
    commentsById: {};
    commentsByTacticId: {};
    steps: undefined;
    tacticIds: "";
    tactics: undefined;
    suggestedTacticIds: "";
    isUpdatingSuggestions: undefined;
    supportGroupSuggestedTacticIds: {
        impulse: {};
        success: {};
        setback: {};
        all: {};
    };
    tacticUsage: {};
    tacticData: {};
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
    allTacticIds: (string | undefined)[];
    commentCount: yup.Maybe<number | undefined>;
    commentsById: {} | null | undefined;
    commentsByTacticId: {} | null | undefined;
    steps: yup.Maybe<number | undefined>;
    tacticIds: (string | undefined)[];
    tactics: {
        [x: string]: {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            steps: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "measure-sliders";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            rows: {
                value?: number | null | undefined;
                key: string;
                label: string;
                lowEmoji: string;
                highEmoji: string;
            }[];
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            tacticIds: (string | undefined)[];
            tacticsById: {} | null;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            supportGroupId: string;
            trigger: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "timer";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            timerSeconds: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            inFor: number;
            holdFor: number;
            outFor: number;
            repeat: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "options";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            tacticIds: (string | undefined)[];
            tacticsById: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        };
        [x: number]: {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            steps: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "measure-sliders";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            rows: {
                value?: number | null | undefined;
                key: string;
                label: string;
                lowEmoji: string;
                highEmoji: string;
            }[];
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            tacticIds: (string | undefined)[];
            tacticsById: {} | null;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            supportGroupId: string;
            trigger: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "timer";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            timerSeconds: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            inFor: number;
            holdFor: number;
            outFor: number;
            repeat: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "options";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            tacticIds: (string | undefined)[];
            tacticsById: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        };
        [x: symbol]: {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            steps: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "measure-sliders";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            rows: {
                value?: number | null | undefined;
                key: string;
                label: string;
                lowEmoji: string;
                highEmoji: string;
            }[];
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            tacticIds: (string | undefined)[];
            tacticsById: {} | null;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            supportGroupId: string;
            trigger: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "timer";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            timerSeconds: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            inFor: number;
            holdFor: number;
            outFor: number;
            repeat: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "options";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            tacticIds: (string | undefined)[];
            tacticsById: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        };
    };
    suggestedTacticIds: yup.Maybe<(string | undefined)[] | undefined>;
    isUpdatingSuggestions: yup.Maybe<boolean | undefined>;
    supportGroupSuggestedTacticIds: {
        impulse: {};
        success: {};
        setback: {};
        all: {};
    } | null | undefined;
    tacticUsage: {} | null | undefined;
    tacticData: {} | null | undefined;
    sharedWithSupportGroupIds: yup.Maybe<(string | undefined)[] | undefined>;
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
    allTacticIds: "";
    commentCount: undefined;
    commentsById: {};
    commentsByTacticId: {};
    steps: undefined;
    tacticIds: "";
    tactics: undefined;
    suggestedTacticIds: "";
    isUpdatingSuggestions: undefined;
    supportGroupSuggestedTacticIds: {
        impulse: {};
        success: {};
        setback: {};
        all: {};
    };
    tacticUsage: {};
    tacticData: {};
    sharedWithSupportGroupIds: "";
    type: undefined;
    isDisplayable: undefined;
    isDeviceConnected: undefined;
    characteristics: {};
}, "">;
export declare const logSchema: yup.Lazy<{
    steps?: yup.Maybe<number | undefined>;
    suggestedTacticIds?: yup.Maybe<(string | undefined)[] | undefined>;
    locationFormatted?: yup.Maybe<string | undefined>;
    commentCount?: yup.Maybe<number | undefined>;
    commentsById?: {} | null | undefined;
    commentsByTacticId?: {} | null | undefined;
    isUpdatingSuggestions?: yup.Maybe<boolean | undefined>;
    supportGroupSuggestedTacticIds?: {
        impulse: {};
        success: {};
        setback: {};
        all: {};
    } | null | undefined;
    tacticUsage?: {} | null | undefined;
    tacticData?: {} | null | undefined;
    sharedWithSupportGroupIds?: yup.Maybe<(string | undefined)[] | undefined>;
    setAsActiveImpulse?: yup.Maybe<boolean | undefined>;
    pressCount?: yup.Maybe<number | undefined>;
    buttonPressSecondsSinceEpoch?: yup.Maybe<number | undefined>;
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
    tacticIds: (string | undefined)[];
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
    allTacticIds: (string | undefined)[];
    tactics: {
        [x: string]: {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            steps: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "measure-sliders";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            rows: {
                value?: number | null | undefined;
                key: string;
                label: string;
                lowEmoji: string;
                highEmoji: string;
            }[];
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            tacticIds: (string | undefined)[];
            tacticsById: {} | null;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            supportGroupId: string;
            trigger: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "timer";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            timerSeconds: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            inFor: number;
            holdFor: number;
            outFor: number;
            repeat: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "options";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            tacticIds: (string | undefined)[];
            tacticsById: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        };
        [x: number]: {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            steps: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "measure-sliders";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            rows: {
                value?: number | null | undefined;
                key: string;
                label: string;
                lowEmoji: string;
                highEmoji: string;
            }[];
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            tacticIds: (string | undefined)[];
            tacticsById: {} | null;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            supportGroupId: string;
            trigger: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "timer";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            timerSeconds: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            inFor: number;
            holdFor: number;
            outFor: number;
            repeat: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "options";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            tacticIds: (string | undefined)[];
            tacticsById: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        };
        [x: symbol]: {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            steps: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "measure-sliders";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            rows: {
                value?: number | null | undefined;
                key: string;
                label: string;
                lowEmoji: string;
                highEmoji: string;
            }[];
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            tacticIds: (string | undefined)[];
            tacticsById: {} | null;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            supportGroupId: string;
            trigger: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "timer";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            timerSeconds: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            inFor: number;
            holdFor: number;
            outFor: number;
            repeat: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "options";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            tacticIds: (string | undefined)[];
            tacticsById: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        };
    };
    outcome: NonNullable<"success" | "setback" | "indeterminate" | undefined>;
    isDisplayable: NonNullable<boolean | undefined>;
    gameplans: {};
    patterns: {
        [x: string]: {
            issueId?: yup.Maybe<string | undefined>;
            customUnit?: string | undefined;
            supportGroupIds?: yup.Maybe<(string | undefined)[] | undefined>;
            notification?: {
                title: string;
                body: string;
            } | null | undefined;
            gameplanId?: yup.Maybe<string | undefined>;
            successGameplanId?: yup.Maybe<string | undefined>;
            setbackGameplanId?: yup.Maybe<string | undefined>;
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
            name: string;
            unit: NonNullable<"time" | "custom" | undefined>;
            sendWeeklyReports: NonNullable<boolean | undefined>;
            setbackThreshold: number;
        };
        [x: number]: {
            issueId?: yup.Maybe<string | undefined>;
            customUnit?: string | undefined;
            supportGroupIds?: yup.Maybe<(string | undefined)[] | undefined>;
            notification?: {
                title: string;
                body: string;
            } | null | undefined;
            gameplanId?: yup.Maybe<string | undefined>;
            successGameplanId?: yup.Maybe<string | undefined>;
            setbackGameplanId?: yup.Maybe<string | undefined>;
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
            name: string;
            unit: NonNullable<"time" | "custom" | undefined>;
            sendWeeklyReports: NonNullable<boolean | undefined>;
            setbackThreshold: number;
        };
        [x: symbol]: {
            issueId?: yup.Maybe<string | undefined>;
            customUnit?: string | undefined;
            supportGroupIds?: yup.Maybe<(string | undefined)[] | undefined>;
            notification?: {
                title: string;
                body: string;
            } | null | undefined;
            gameplanId?: yup.Maybe<string | undefined>;
            successGameplanId?: yup.Maybe<string | undefined>;
            setbackGameplanId?: yup.Maybe<string | undefined>;
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
            name: string;
            unit: NonNullable<"time" | "custom" | undefined>;
            sendWeeklyReports: NonNullable<boolean | undefined>;
            setbackThreshold: number;
        };
    };
    patternIds: (string | undefined)[];
    patternUsage: {
        [x: string]: {
            customUnit?: string | undefined;
            value: number;
            unit: NonNullable<"time" | "custom" | undefined>;
            formattedValue: string;
        };
        [x: number]: {
            customUnit?: string | undefined;
            value: number;
            unit: NonNullable<"time" | "custom" | undefined>;
            formattedValue: string;
        };
        [x: symbol]: {
            customUnit?: string | undefined;
            value: number;
            unit: NonNullable<"time" | "custom" | undefined>;
            formattedValue: string;
        };
    };
} | {
    steps?: yup.Maybe<number | undefined>;
    suggestedTacticIds?: yup.Maybe<(string | undefined)[] | undefined>;
    locationFormatted?: yup.Maybe<string | undefined>;
    commentCount?: yup.Maybe<number | undefined>;
    commentsById?: {} | null | undefined;
    commentsByTacticId?: {} | null | undefined;
    isUpdatingSuggestions?: yup.Maybe<boolean | undefined>;
    supportGroupSuggestedTacticIds?: {
        impulse: {};
        success: {};
        setback: {};
        all: {};
    } | null | undefined;
    tacticUsage?: {} | null | undefined;
    tacticData?: {} | null | undefined;
    sharedWithSupportGroupIds?: yup.Maybe<(string | undefined)[] | undefined>;
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
    tacticIds: (string | undefined)[];
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
    allTacticIds: (string | undefined)[];
    tactics: {
        [x: string]: {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            steps: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "measure-sliders";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            rows: {
                value?: number | null | undefined;
                key: string;
                label: string;
                lowEmoji: string;
                highEmoji: string;
            }[];
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            tacticIds: (string | undefined)[];
            tacticsById: {} | null;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            supportGroupId: string;
            trigger: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "timer";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            timerSeconds: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            inFor: number;
            holdFor: number;
            outFor: number;
            repeat: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "options";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            tacticIds: (string | undefined)[];
            tacticsById: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        };
        [x: number]: {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            steps: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "measure-sliders";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            rows: {
                value?: number | null | undefined;
                key: string;
                label: string;
                lowEmoji: string;
                highEmoji: string;
            }[];
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            tacticIds: (string | undefined)[];
            tacticsById: {} | null;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            supportGroupId: string;
            trigger: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "timer";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            timerSeconds: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            inFor: number;
            holdFor: number;
            outFor: number;
            repeat: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "options";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            tacticIds: (string | undefined)[];
            tacticsById: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        };
        [x: symbol]: {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            steps: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "measure-sliders";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            rows: {
                value?: number | null | undefined;
                key: string;
                label: string;
                lowEmoji: string;
                highEmoji: string;
            }[];
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            tacticIds: (string | undefined)[];
            tacticsById: {} | null;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            supportGroupId: string;
            trigger: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "timer";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            timerSeconds: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            inFor: number;
            holdFor: number;
            outFor: number;
            repeat: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "options";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            tacticIds: (string | undefined)[];
            tacticsById: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        };
    };
    isDisplayable: NonNullable<boolean | undefined>;
    locationName: string;
    locationMode: {};
} | {
    steps?: yup.Maybe<number | undefined>;
    suggestedTacticIds?: yup.Maybe<(string | undefined)[] | undefined>;
    locationFormatted?: yup.Maybe<string | undefined>;
    commentCount?: yup.Maybe<number | undefined>;
    commentsById?: {} | null | undefined;
    commentsByTacticId?: {} | null | undefined;
    isUpdatingSuggestions?: yup.Maybe<boolean | undefined>;
    supportGroupSuggestedTacticIds?: {
        impulse: {};
        success: {};
        setback: {};
        all: {};
    } | null | undefined;
    tacticUsage?: {} | null | undefined;
    tacticData?: {} | null | undefined;
    sharedWithSupportGroupIds?: yup.Maybe<(string | undefined)[] | undefined>;
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
    tacticIds: (string | undefined)[];
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
    allTacticIds: (string | undefined)[];
    tactics: {
        [x: string]: {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            steps: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "measure-sliders";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            rows: {
                value?: number | null | undefined;
                key: string;
                label: string;
                lowEmoji: string;
                highEmoji: string;
            }[];
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            tacticIds: (string | undefined)[];
            tacticsById: {} | null;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            supportGroupId: string;
            trigger: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "timer";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            timerSeconds: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            inFor: number;
            holdFor: number;
            outFor: number;
            repeat: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "options";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            tacticIds: (string | undefined)[];
            tacticsById: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        };
        [x: number]: {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            steps: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "measure-sliders";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            rows: {
                value?: number | null | undefined;
                key: string;
                label: string;
                lowEmoji: string;
                highEmoji: string;
            }[];
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            tacticIds: (string | undefined)[];
            tacticsById: {} | null;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            supportGroupId: string;
            trigger: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "timer";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            timerSeconds: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            inFor: number;
            holdFor: number;
            outFor: number;
            repeat: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "options";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            tacticIds: (string | undefined)[];
            tacticsById: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        };
        [x: symbol]: {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            steps: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "measure-sliders";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            rows: {
                value?: number | null | undefined;
                key: string;
                label: string;
                lowEmoji: string;
                highEmoji: string;
            }[];
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            tacticIds: (string | undefined)[];
            tacticsById: {} | null;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            supportGroupId: string;
            trigger: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "timer";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            timerSeconds: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            inFor: number;
            holdFor: number;
            outFor: number;
            repeat: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "options";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            tacticIds: (string | undefined)[];
            tacticsById: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        };
    };
    isDisplayable: NonNullable<boolean | undefined>;
} | {
    steps?: yup.Maybe<number | undefined>;
    suggestedTacticIds?: yup.Maybe<(string | undefined)[] | undefined>;
    locationFormatted?: yup.Maybe<string | undefined>;
    commentCount?: yup.Maybe<number | undefined>;
    commentsById?: {} | null | undefined;
    commentsByTacticId?: {} | null | undefined;
    isUpdatingSuggestions?: yup.Maybe<boolean | undefined>;
    supportGroupSuggestedTacticIds?: {
        impulse: {};
        success: {};
        setback: {};
        all: {};
    } | null | undefined;
    tacticUsage?: {} | null | undefined;
    tacticData?: {} | null | undefined;
    sharedWithSupportGroupIds?: yup.Maybe<(string | undefined)[] | undefined>;
    type: "debrief";
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
    tacticIds: (string | undefined)[];
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
    allTacticIds: (string | undefined)[];
    tactics: {
        [x: string]: {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            steps: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "measure-sliders";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            rows: {
                value?: number | null | undefined;
                key: string;
                label: string;
                lowEmoji: string;
                highEmoji: string;
            }[];
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            tacticIds: (string | undefined)[];
            tacticsById: {} | null;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            supportGroupId: string;
            trigger: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "timer";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            timerSeconds: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            inFor: number;
            holdFor: number;
            outFor: number;
            repeat: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "options";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            tacticIds: (string | undefined)[];
            tacticsById: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        };
        [x: number]: {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            steps: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "measure-sliders";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            rows: {
                value?: number | null | undefined;
                key: string;
                label: string;
                lowEmoji: string;
                highEmoji: string;
            }[];
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            tacticIds: (string | undefined)[];
            tacticsById: {} | null;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            supportGroupId: string;
            trigger: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "timer";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            timerSeconds: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            inFor: number;
            holdFor: number;
            outFor: number;
            repeat: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "options";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            tacticIds: (string | undefined)[];
            tacticsById: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        };
        [x: symbol]: {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            steps: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "measure-sliders";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            rows: {
                value?: number | null | undefined;
                key: string;
                label: string;
                lowEmoji: string;
                highEmoji: string;
            }[];
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            tacticIds: (string | undefined)[];
            tacticsById: {} | null;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            supportGroupId: string;
            trigger: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "timer";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            timerSeconds: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            inFor: number;
            holdFor: number;
            outFor: number;
            repeat: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "options";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            tacticIds: (string | undefined)[];
            tacticsById: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        };
    };
    outcome: {};
    isDisplayable: NonNullable<boolean | undefined>;
    patterns: {
        [x: string]: {
            issueId?: yup.Maybe<string | undefined>;
            customUnit?: string | undefined;
            supportGroupIds?: yup.Maybe<(string | undefined)[] | undefined>;
            notification?: {
                title: string;
                body: string;
            } | null | undefined;
            gameplanId?: yup.Maybe<string | undefined>;
            successGameplanId?: yup.Maybe<string | undefined>;
            setbackGameplanId?: yup.Maybe<string | undefined>;
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
            name: string;
            unit: NonNullable<"time" | "custom" | undefined>;
            sendWeeklyReports: NonNullable<boolean | undefined>;
            setbackThreshold: number;
        };
        [x: number]: {
            issueId?: yup.Maybe<string | undefined>;
            customUnit?: string | undefined;
            supportGroupIds?: yup.Maybe<(string | undefined)[] | undefined>;
            notification?: {
                title: string;
                body: string;
            } | null | undefined;
            gameplanId?: yup.Maybe<string | undefined>;
            successGameplanId?: yup.Maybe<string | undefined>;
            setbackGameplanId?: yup.Maybe<string | undefined>;
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
            name: string;
            unit: NonNullable<"time" | "custom" | undefined>;
            sendWeeklyReports: NonNullable<boolean | undefined>;
            setbackThreshold: number;
        };
        [x: symbol]: {
            issueId?: yup.Maybe<string | undefined>;
            customUnit?: string | undefined;
            supportGroupIds?: yup.Maybe<(string | undefined)[] | undefined>;
            notification?: {
                title: string;
                body: string;
            } | null | undefined;
            gameplanId?: yup.Maybe<string | undefined>;
            successGameplanId?: yup.Maybe<string | undefined>;
            setbackGameplanId?: yup.Maybe<string | undefined>;
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
            name: string;
            unit: NonNullable<"time" | "custom" | undefined>;
            sendWeeklyReports: NonNullable<boolean | undefined>;
            setbackThreshold: number;
        };
    };
    patternIds: (string | undefined)[];
    patternUsage: {};
    patternUsageEntries: {};
} | {
    steps?: yup.Maybe<number | undefined>;
    suggestedTacticIds?: yup.Maybe<(string | undefined)[] | undefined>;
    locationFormatted?: yup.Maybe<string | undefined>;
    commentCount?: yup.Maybe<number | undefined>;
    commentsById?: {} | null | undefined;
    commentsByTacticId?: {} | null | undefined;
    isUpdatingSuggestions?: yup.Maybe<boolean | undefined>;
    supportGroupSuggestedTacticIds?: {
        impulse: {};
        success: {};
        setback: {};
        all: {};
    } | null | undefined;
    tacticUsage?: {} | null | undefined;
    tacticData?: {} | null | undefined;
    sharedWithSupportGroupIds?: yup.Maybe<(string | undefined)[] | undefined>;
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
    tacticIds: (string | undefined)[];
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
    allTacticIds: (string | undefined)[];
    tactics: {
        [x: string]: {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            steps: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "measure-sliders";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            rows: {
                value?: number | null | undefined;
                key: string;
                label: string;
                lowEmoji: string;
                highEmoji: string;
            }[];
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            tacticIds: (string | undefined)[];
            tacticsById: {} | null;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            supportGroupId: string;
            trigger: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "timer";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            timerSeconds: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            inFor: number;
            holdFor: number;
            outFor: number;
            repeat: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "options";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            tacticIds: (string | undefined)[];
            tacticsById: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        };
        [x: number]: {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            steps: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "measure-sliders";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            rows: {
                value?: number | null | undefined;
                key: string;
                label: string;
                lowEmoji: string;
                highEmoji: string;
            }[];
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            tacticIds: (string | undefined)[];
            tacticsById: {} | null;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            supportGroupId: string;
            trigger: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "timer";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            timerSeconds: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            inFor: number;
            holdFor: number;
            outFor: number;
            repeat: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "options";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            tacticIds: (string | undefined)[];
            tacticsById: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        };
        [x: symbol]: {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            steps: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "measure-sliders";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            rows: {
                value?: number | null | undefined;
                key: string;
                label: string;
                lowEmoji: string;
                highEmoji: string;
            }[];
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            tacticIds: (string | undefined)[];
            tacticsById: {} | null;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            supportGroupId: string;
            trigger: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "timer";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            timerSeconds: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            inFor: number;
            holdFor: number;
            outFor: number;
            repeat: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "options";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            tacticIds: (string | undefined)[];
            tacticsById: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        };
    };
    isDisplayable: NonNullable<boolean | undefined>;
} | {
    steps?: yup.Maybe<number | undefined>;
    suggestedTacticIds?: yup.Maybe<(string | undefined)[] | undefined>;
    locationFormatted?: yup.Maybe<string | undefined>;
    commentCount?: yup.Maybe<number | undefined>;
    commentsById?: {} | null | undefined;
    commentsByTacticId?: {} | null | undefined;
    isUpdatingSuggestions?: yup.Maybe<boolean | undefined>;
    supportGroupSuggestedTacticIds?: {
        impulse: {};
        success: {};
        setback: {};
        all: {};
    } | null | undefined;
    tacticUsage?: {} | null | undefined;
    tacticData?: {} | null | undefined;
    sharedWithSupportGroupIds?: yup.Maybe<(string | undefined)[] | undefined>;
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
    tacticIds: (string | undefined)[];
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
    allTacticIds: (string | undefined)[];
    tactics: {
        [x: string]: {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            steps: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "measure-sliders";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            rows: {
                value?: number | null | undefined;
                key: string;
                label: string;
                lowEmoji: string;
                highEmoji: string;
            }[];
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            tacticIds: (string | undefined)[];
            tacticsById: {} | null;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            supportGroupId: string;
            trigger: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "timer";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            timerSeconds: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            inFor: number;
            holdFor: number;
            outFor: number;
            repeat: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "options";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            tacticIds: (string | undefined)[];
            tacticsById: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        };
        [x: number]: {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            steps: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "measure-sliders";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            rows: {
                value?: number | null | undefined;
                key: string;
                label: string;
                lowEmoji: string;
                highEmoji: string;
            }[];
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            tacticIds: (string | undefined)[];
            tacticsById: {} | null;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            supportGroupId: string;
            trigger: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "timer";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            timerSeconds: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            inFor: number;
            holdFor: number;
            outFor: number;
            repeat: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "options";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            tacticIds: (string | undefined)[];
            tacticsById: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        };
        [x: symbol]: {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            steps: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "measure-sliders";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            rows: {
                value?: number | null | undefined;
                key: string;
                label: string;
                lowEmoji: string;
                highEmoji: string;
            }[];
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            tacticIds: (string | undefined)[];
            tacticsById: {} | null;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            supportGroupId: string;
            trigger: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "timer";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            timerSeconds: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
            inFor: number;
            holdFor: number;
            outFor: number;
            repeat: number;
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
            type: "options";
            createdAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt: {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            title: string;
            tacticIds: (string | undefined)[];
            tacticsById: {};
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        } | {
            uid?: string | null | undefined;
            ordinal?: number | null | undefined;
            isSuggested?: boolean | null | undefined;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            isAvailableForRecommendation?: boolean | null | undefined;
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
        };
    };
    isDisplayable: NonNullable<boolean | undefined>;
    isDeviceConnected: NonNullable<boolean | undefined>;
    characteristics: {};
}, yup.AnyObject, any>;
export type LogValue = ImpulseLogValue | LocationLogValue | TimeLogValue | DebriefLogValue | MotionLogValue | ButtonLogValue;
export {};
