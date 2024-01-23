import * as yup from 'yup';
import { WithTacticsById } from './tactic';
export declare const gameplanSchema: yup.ObjectSchema<{
    tacticIds: string[];
    suggestedTacticIds: string[];
    tacticsById: {
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
}, yup.AnyObject, {
    tacticIds: "";
    suggestedTacticIds: "";
    tacticsById: {
        [x: string]: undefined;
    };
}, "">;
type Inferred<T extends yup.ISchema<unknown>> = WithTacticsById<yup.InferType<T>>;
export type Gameplan = Inferred<typeof gameplanSchema>;
declare const impulseGameplanValueSchema: yup.ObjectSchema<{
    tacticIds: string[];
    suggestedTacticIds: string[];
    tacticsById: {
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
    uid: string;
    createdAt: {};
    updatedAt: {};
    title: string | null | undefined;
    navigationTitle: string | null | undefined;
    isTemplate: boolean | null | undefined;
    tacticsUpdatedAt: {} | null | undefined;
    timezone: string | null | undefined;
    patternName: string | null | undefined;
    issueId: string | null | undefined;
    parentIssueIds: string[] | null | undefined;
} & {
    type: NonNullable<"impulse" | "success" | "setback" | undefined>;
    patternId: string;
}, yup.AnyObject, {
    tacticIds: "";
    suggestedTacticIds: "";
    tacticsById: {
        [x: string]: undefined;
    };
    uid: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    title: undefined;
    navigationTitle: undefined;
    isTemplate: undefined;
    tacticsUpdatedAt: undefined;
    timezone: undefined;
    patternName: undefined;
    issueId: undefined;
    parentIssueIds: "";
    type: undefined;
    patternId: undefined;
}, "">;
export type ImpulseGameplanValue = Inferred<typeof impulseGameplanValueSchema>;
export type SchedulableGameplanValue = Inferred<typeof schedulableGameplanValueSchema>;
declare const schedulableGameplanValueSchema: yup.ObjectSchema<{
    tacticIds: string[];
    suggestedTacticIds: string[];
    tacticsById: {
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
    uid: string;
    createdAt: {};
    updatedAt: {};
    title: string | null | undefined;
    navigationTitle: string | null | undefined;
    isTemplate: boolean | null | undefined;
    tacticsUpdatedAt: {} | null | undefined;
    timezone: string;
    patternName: string | null | undefined;
    issueId: string | null | undefined;
    parentIssueIds: string[] | null | undefined;
} & {
    weekdays: number[];
    hour: number;
    minute: number;
    timezone: string;
    scheduledNotificationIds: string[] | null | undefined;
}, yup.AnyObject, {
    tacticIds: "";
    suggestedTacticIds: "";
    tacticsById: {
        [x: string]: undefined;
    };
    uid: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    title: undefined;
    navigationTitle: undefined;
    isTemplate: undefined;
    tacticsUpdatedAt: undefined;
    timezone: undefined;
    patternName: undefined;
    issueId: undefined;
    parentIssueIds: "";
    weekdays: "";
    hour: undefined;
    minute: undefined;
    scheduledNotificationIds: "";
}, "">;
export type TimeGameplanValue = Inferred<typeof timeGameplanValueSchema>;
declare const timeGameplanValueSchema: yup.ObjectSchema<{
    tacticIds: string[];
    suggestedTacticIds: string[];
    tacticsById: {
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
    uid: string;
    createdAt: {};
    updatedAt: {};
    title: string | null | undefined;
    navigationTitle: string | null | undefined;
    isTemplate: boolean | null | undefined;
    tacticsUpdatedAt: {} | null | undefined;
    timezone: string;
    patternName: string | null | undefined;
    issueId: string | null | undefined;
    parentIssueIds: string[] | null | undefined;
    weekdays: number[];
    hour: number;
    minute: number;
    scheduledNotificationIds: string[] | null | undefined;
} & {
    type: "time";
}, yup.AnyObject, {
    tacticIds: "";
    suggestedTacticIds: "";
    tacticsById: {
        [x: string]: undefined;
    };
    uid: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    title: undefined;
    navigationTitle: undefined;
    isTemplate: undefined;
    tacticsUpdatedAt: undefined;
    timezone: undefined;
    patternName: undefined;
    issueId: undefined;
    parentIssueIds: "";
    weekdays: "";
    hour: undefined;
    minute: undefined;
    scheduledNotificationIds: "";
    type: undefined;
}, "">;
export type DebriefGameplanValue = Inferred<typeof debriefGameplanValueSchema>;
declare const debriefGameplanValueSchema: yup.ObjectSchema<{
    tacticIds: string[];
    suggestedTacticIds: string[];
    tacticsById: {
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
    uid: string;
    createdAt: {};
    updatedAt: {};
    title: string | null | undefined;
    navigationTitle: string | null | undefined;
    isTemplate: boolean | null | undefined;
    tacticsUpdatedAt: {} | null | undefined;
    timezone: string;
    patternName: string | null | undefined;
    issueId: string | null | undefined;
    parentIssueIds: string[] | null | undefined;
    weekdays: number[];
    hour: number;
    minute: number;
    scheduledNotificationIds: string[] | null | undefined;
} & {
    type: "debrief";
}, yup.AnyObject, {
    tacticIds: "";
    suggestedTacticIds: "";
    tacticsById: {
        [x: string]: undefined;
    };
    uid: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    title: undefined;
    navigationTitle: undefined;
    isTemplate: undefined;
    tacticsUpdatedAt: undefined;
    timezone: undefined;
    patternName: undefined;
    issueId: undefined;
    parentIssueIds: "";
    weekdays: "";
    hour: undefined;
    minute: undefined;
    scheduledNotificationIds: "";
    type: undefined;
}, "">;
export type LocationGameplanValue = Inferred<typeof locationGameplanValueSchema>;
declare const locationGameplanValueSchema: yup.ObjectSchema<{
    tacticIds: string[];
    suggestedTacticIds: string[];
    tacticsById: {
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
    uid: string;
    createdAt: {};
    updatedAt: {};
    title: string | null | undefined;
    navigationTitle: string | null | undefined;
    isTemplate: boolean | null | undefined;
    tacticsUpdatedAt: {} | null | undefined;
    timezone: string | null | undefined;
    patternName: string | null | undefined;
    issueId: string | null | undefined;
    parentIssueIds: string[] | null | undefined;
} & {
    type: "location";
    locationId: string | null | undefined;
    mode: {};
}, yup.AnyObject, {
    tacticIds: "";
    suggestedTacticIds: "";
    tacticsById: {
        [x: string]: undefined;
    };
    uid: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    title: undefined;
    navigationTitle: undefined;
    isTemplate: undefined;
    tacticsUpdatedAt: undefined;
    timezone: undefined;
    patternName: undefined;
    issueId: undefined;
    parentIssueIds: "";
    type: undefined;
    locationId: undefined;
    mode: undefined;
}, "">;
export type GameplanValue = ImpulseGameplanValue | TimeGameplanValue | DebriefGameplanValue | LocationGameplanValue;
export { debriefGameplanValueSchema, impulseGameplanValueSchema, locationGameplanValueSchema, timeGameplanValueSchema, };
