import * as yup from 'yup';
import { WithTacticsById } from '.';
export declare const strategySchema: yup.ObjectSchema<{
    ordinal: yup.Maybe<number | undefined>;
    name: string;
    type: NonNullable<"impulse" | "time" | "debrief" | undefined>;
    tacticIds: string[];
    tacticsById: {
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
            profileId?: string | null | undefined;
            sourceId?: string | undefined;
            subtitle?: yup.Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | null | undefined;
            setbackThreshold?: number | null | undefined;
            optionsById?: {
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
                    setbackThreshold?: yup.Maybe<number | undefined>;
                    strategiesPath?: string | undefined;
                    greaterThan?: yup.Maybe<number | undefined>;
                    lessThanOrEqualTo?: yup.Maybe<number | undefined>;
                    text: string;
                    ordinal: number;
                    type: "question-time";
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
                    setbackThreshold?: yup.Maybe<number | undefined>;
                    strategiesPath?: string | undefined;
                    greaterThan?: yup.Maybe<number | undefined>;
                    lessThanOrEqualTo?: yup.Maybe<number | undefined>;
                    text: string;
                    ordinal: number;
                    type: "question-counter";
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
                    strategiesPath?: string | undefined;
                    text: string;
                    ordinal: number;
                    type: "question-multiple-choice";
                    value: string;
                };
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
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
            setbackThreshold?: number | null | undefined;
            optionsById?: {
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
                    setbackThreshold?: yup.Maybe<number | undefined>;
                    strategiesPath?: string | undefined;
                    greaterThan?: yup.Maybe<number | undefined>;
                    lessThanOrEqualTo?: yup.Maybe<number | undefined>;
                    text: string;
                    ordinal: number;
                    type: "question-time";
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
                    setbackThreshold?: yup.Maybe<number | undefined>;
                    strategiesPath?: string | undefined;
                    greaterThan?: yup.Maybe<number | undefined>;
                    lessThanOrEqualTo?: yup.Maybe<number | undefined>;
                    text: string;
                    ordinal: number;
                    type: "question-counter";
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
                    strategiesPath?: string | undefined;
                    text: string;
                    ordinal: number;
                    type: "question-multiple-choice";
                    value: string;
                };
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            isSuggested?: boolean | undefined;
            recording: {
                waveform?: string | null | undefined;
                localFilePath: string;
                remoteFilePath: string;
            };
            title: string;
            type: "audio";
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
            setbackThreshold?: number | null | undefined;
            optionsById?: {
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
                    setbackThreshold?: yup.Maybe<number | undefined>;
                    strategiesPath?: string | undefined;
                    greaterThan?: yup.Maybe<number | undefined>;
                    lessThanOrEqualTo?: yup.Maybe<number | undefined>;
                    text: string;
                    ordinal: number;
                    type: "question-time";
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
                    setbackThreshold?: yup.Maybe<number | undefined>;
                    strategiesPath?: string | undefined;
                    greaterThan?: yup.Maybe<number | undefined>;
                    lessThanOrEqualTo?: yup.Maybe<number | undefined>;
                    text: string;
                    ordinal: number;
                    type: "question-counter";
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
                    strategiesPath?: string | undefined;
                    text: string;
                    ordinal: number;
                    type: "question-multiple-choice";
                    value: string;
                };
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
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
            setbackThreshold?: number | null | undefined;
            optionsById?: {
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
                    setbackThreshold?: yup.Maybe<number | undefined>;
                    strategiesPath?: string | undefined;
                    greaterThan?: yup.Maybe<number | undefined>;
                    lessThanOrEqualTo?: yup.Maybe<number | undefined>;
                    text: string;
                    ordinal: number;
                    type: "question-time";
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
                    setbackThreshold?: yup.Maybe<number | undefined>;
                    strategiesPath?: string | undefined;
                    greaterThan?: yup.Maybe<number | undefined>;
                    lessThanOrEqualTo?: yup.Maybe<number | undefined>;
                    text: string;
                    ordinal: number;
                    type: "question-counter";
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
                    strategiesPath?: string | undefined;
                    text: string;
                    ordinal: number;
                    type: "question-multiple-choice";
                    value: string;
                };
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
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
            setbackThreshold?: number | null | undefined;
            optionsById?: {
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
                    setbackThreshold?: yup.Maybe<number | undefined>;
                    strategiesPath?: string | undefined;
                    greaterThan?: yup.Maybe<number | undefined>;
                    lessThanOrEqualTo?: yup.Maybe<number | undefined>;
                    text: string;
                    ordinal: number;
                    type: "question-time";
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
                    setbackThreshold?: yup.Maybe<number | undefined>;
                    strategiesPath?: string | undefined;
                    greaterThan?: yup.Maybe<number | undefined>;
                    lessThanOrEqualTo?: yup.Maybe<number | undefined>;
                    text: string;
                    ordinal: number;
                    type: "question-counter";
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
                    strategiesPath?: string | undefined;
                    text: string;
                    ordinal: number;
                    type: "question-multiple-choice";
                    value: string;
                };
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
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
            type: import(".").QuestionKeyType;
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
            setbackThreshold?: number | null | undefined;
            optionsById?: {
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
                    setbackThreshold?: yup.Maybe<number | undefined>;
                    strategiesPath?: string | undefined;
                    greaterThan?: yup.Maybe<number | undefined>;
                    lessThanOrEqualTo?: yup.Maybe<number | undefined>;
                    text: string;
                    ordinal: number;
                    type: "question-time";
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
                    setbackThreshold?: yup.Maybe<number | undefined>;
                    strategiesPath?: string | undefined;
                    greaterThan?: yup.Maybe<number | undefined>;
                    lessThanOrEqualTo?: yup.Maybe<number | undefined>;
                    text: string;
                    ordinal: number;
                    type: "question-counter";
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
                    strategiesPath?: string | undefined;
                    text: string;
                    ordinal: number;
                    type: "question-multiple-choice";
                    value: string;
                };
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
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
            type: import(".").QuestionKeyType;
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
            setbackThreshold?: number | null | undefined;
            optionsById?: {
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
                    setbackThreshold?: yup.Maybe<number | undefined>;
                    strategiesPath?: string | undefined;
                    greaterThan?: yup.Maybe<number | undefined>;
                    lessThanOrEqualTo?: yup.Maybe<number | undefined>;
                    text: string;
                    ordinal: number;
                    type: "question-time";
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
                    setbackThreshold?: yup.Maybe<number | undefined>;
                    strategiesPath?: string | undefined;
                    greaterThan?: yup.Maybe<number | undefined>;
                    lessThanOrEqualTo?: yup.Maybe<number | undefined>;
                    text: string;
                    ordinal: number;
                    type: "question-counter";
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
                    strategiesPath?: string | undefined;
                    text: string;
                    ordinal: number;
                    type: "question-multiple-choice";
                    value: string;
                };
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
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
            setbackThreshold?: number | null | undefined;
            optionsById?: {
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
                    setbackThreshold?: yup.Maybe<number | undefined>;
                    strategiesPath?: string | undefined;
                    greaterThan?: yup.Maybe<number | undefined>;
                    lessThanOrEqualTo?: yup.Maybe<number | undefined>;
                    text: string;
                    ordinal: number;
                    type: "question-time";
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
                    setbackThreshold?: yup.Maybe<number | undefined>;
                    strategiesPath?: string | undefined;
                    greaterThan?: yup.Maybe<number | undefined>;
                    lessThanOrEqualTo?: yup.Maybe<number | undefined>;
                    text: string;
                    ordinal: number;
                    type: "question-counter";
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
                    strategiesPath?: string | undefined;
                    text: string;
                    ordinal: number;
                    type: "question-multiple-choice";
                    value: string;
                };
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: yup.Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            isSuggested?: boolean | undefined;
            repeat?: yup.Maybe<number | undefined>;
            title: string;
            type: "breathe";
            backgroundColor: string;
            inFor: number;
            holdFor: number;
            outFor: number;
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
            setbackThreshold?: number | null | undefined;
            optionsById?: {
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
                    setbackThreshold?: yup.Maybe<number | undefined>;
                    strategiesPath?: string | undefined;
                    greaterThan?: yup.Maybe<number | undefined>;
                    lessThanOrEqualTo?: yup.Maybe<number | undefined>;
                    text: string;
                    ordinal: number;
                    type: "question-time";
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
                    setbackThreshold?: yup.Maybe<number | undefined>;
                    strategiesPath?: string | undefined;
                    greaterThan?: yup.Maybe<number | undefined>;
                    lessThanOrEqualTo?: yup.Maybe<number | undefined>;
                    text: string;
                    ordinal: number;
                    type: "question-counter";
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
                    strategiesPath?: string | undefined;
                    text: string;
                    ordinal: number;
                    type: "question-multiple-choice";
                    value: string;
                };
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
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
            type: "link";
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
            setbackThreshold?: number | null | undefined;
            optionsById?: {
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
                    setbackThreshold?: yup.Maybe<number | undefined>;
                    strategiesPath?: string | undefined;
                    greaterThan?: yup.Maybe<number | undefined>;
                    lessThanOrEqualTo?: yup.Maybe<number | undefined>;
                    text: string;
                    ordinal: number;
                    type: "question-time";
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
                    setbackThreshold?: yup.Maybe<number | undefined>;
                    strategiesPath?: string | undefined;
                    greaterThan?: yup.Maybe<number | undefined>;
                    lessThanOrEqualTo?: yup.Maybe<number | undefined>;
                    text: string;
                    ordinal: number;
                    type: "question-counter";
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
                    strategiesPath?: string | undefined;
                    text: string;
                    ordinal: number;
                    type: "question-multiple-choice";
                    value: string;
                };
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
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
            setbackThreshold?: number | null | undefined;
            optionsById?: {
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
                    setbackThreshold?: yup.Maybe<number | undefined>;
                    strategiesPath?: string | undefined;
                    greaterThan?: yup.Maybe<number | undefined>;
                    lessThanOrEqualTo?: yup.Maybe<number | undefined>;
                    text: string;
                    ordinal: number;
                    type: "question-time";
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
                    setbackThreshold?: yup.Maybe<number | undefined>;
                    strategiesPath?: string | undefined;
                    greaterThan?: yup.Maybe<number | undefined>;
                    lessThanOrEqualTo?: yup.Maybe<number | undefined>;
                    text: string;
                    ordinal: number;
                    type: "question-counter";
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
                    strategiesPath?: string | undefined;
                    text: string;
                    ordinal: number;
                    type: "question-multiple-choice";
                    value: string;
                };
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
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
        };
    };
    profileId: string | undefined;
    createdAt: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    updatedAt: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
}, yup.AnyObject, {
    ordinal: undefined;
    name: undefined;
    type: undefined;
    tacticIds: "";
    tacticsById: undefined;
    profileId: undefined;
    createdAt: undefined;
    updatedAt: undefined;
}, "">;
export type StrategyValue = WithTacticsById<yup.InferType<typeof strategySchema>>;
