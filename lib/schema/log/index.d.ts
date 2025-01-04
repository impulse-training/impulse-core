import * as yup from 'yup';
import { CallLogValue } from './call';
import { GameplanLogValue } from './gameplan';
import { GptLogValue } from './gpt';
import { ShowTourLogValue } from './showTour';
import { ToolCallLogValue } from './toolCall';
import { UserLogValue } from './user';
import { WithTacticsById } from './utils/tacticData';
import { WhatsappMessageLogValue } from './whatsappMessage';
export * from './gameplan';
export * from './gpt';
export * from './showTour';
export * from './toolCall';
export * from './user';
export * from './whatsappMessage';
export * from './utils/behaviorData';
export * from './utils/metricData';
export * from './utils/tacticData';
export declare const logSchemas: Record<LogValue['type'], yup.ObjectSchema<LogValue>>;
export declare const logSchema: yup.Lazy<WithTacticsById<{
    createdAt?: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    updatedAt?: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    text?: string | null | undefined;
    audioFile?: {
        createdAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        updatedAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        localFilePath?: yup.Maybe<string | undefined>;
        isDeleted?: boolean | undefined;
        metadata?: {} | null | undefined;
        thumbnailStoragePath?: yup.Maybe<string | undefined>;
        thumbnailUri?: yup.Maybe<string | undefined>;
        storagePath: string;
        url: string;
    } | undefined;
    metricData?: {
        [x: string]: {
            doc?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
            data: {
                label: string;
                metricInputValue: number;
                absoluteAttributeValue: number;
            };
            attribute: {
                name: string;
                key: string;
                icon: NonNullable<import("..").MetricIcons | undefined>;
            };
        };
    } | null | undefined;
    behaviorData?: {
        [x: string]: {
            color?: string | undefined;
            behavior: {
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                unit?: string | undefined;
                dailyLimit?: number | undefined;
                skipReminderAutoCreation?: boolean | undefined;
                name: string;
                ordinal: number;
                trackingType: NonNullable<"time" | "counter" | undefined>;
                tacticsById: {
                    [x: string]: {
                        data?: {
                            setAt: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            };
                            isCompleted: NonNullable<boolean | undefined>;
                        } | undefined;
                        tactic: {
                            createdAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            updatedAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                            sharedWithIssueIds?: string[] | undefined;
                            uid?: string | undefined;
                            recommendedForIssueIds?: string[] | undefined;
                            recommendedForIssueOrdinals?: {
                                [x: string]: number;
                            } | null | undefined;
                            prompt?: string | undefined;
                            isShared?: boolean | undefined;
                            description?: string | null | undefined;
                            pastTenseTitle?: string | undefined;
                            debriefAfterMinutes?: number | null | undefined;
                            image?: {
                                createdAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                updatedAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            likesCount?: number | null | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
                            isSuggested?: boolean | undefined;
                            repeat?: yup.Maybe<number | undefined>;
                            type: "breathingExercise";
                            inFor: number;
                            holdFor: number;
                            outFor: number;
                        } | {
                            createdAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            updatedAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                            sharedWithIssueIds?: string[] | undefined;
                            uid?: string | undefined;
                            recommendedForIssueIds?: string[] | undefined;
                            recommendedForIssueOrdinals?: {
                                [x: string]: number;
                            } | null | undefined;
                            prompt?: string | undefined;
                            isShared?: boolean | undefined;
                            description?: string | null | undefined;
                            pastTenseTitle?: string | undefined;
                            debriefAfterMinutes?: number | null | undefined;
                            image?: {
                                createdAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                updatedAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            likesCount?: number | null | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
                            isSuggested?: boolean | undefined;
                            type: "notifyASupportPerson";
                            contactIds: string[];
                        } | {
                            createdAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            updatedAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                            sharedWithIssueIds?: string[] | undefined;
                            uid?: string | undefined;
                            recommendedForIssueIds?: string[] | undefined;
                            recommendedForIssueOrdinals?: {
                                [x: string]: number;
                            } | null | undefined;
                            prompt?: string | undefined;
                            isShared?: boolean | undefined;
                            description?: string | null | undefined;
                            pastTenseTitle?: string | undefined;
                            debriefAfterMinutes?: number | null | undefined;
                            image?: {
                                createdAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                updatedAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            likesCount?: number | null | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
                            isSuggested?: boolean | undefined;
                            type: "steps";
                            targetSteps: number;
                        } | {
                            createdAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            updatedAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                            sharedWithIssueIds?: string[] | undefined;
                            uid?: string | undefined;
                            recommendedForIssueIds?: string[] | undefined;
                            recommendedForIssueOrdinals?: {
                                [x: string]: number;
                            } | null | undefined;
                            isShared?: boolean | undefined;
                            description?: string | null | undefined;
                            pastTenseTitle?: string | undefined;
                            debriefAfterMinutes?: number | null | undefined;
                            image?: {
                                createdAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                updatedAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            likesCount?: number | null | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
                            isSuggested?: boolean | undefined;
                            audio?: {
                                createdAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                updatedAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | null | undefined;
                            prompt: string;
                            type: "basic";
                        } | {
                            createdAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            updatedAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                            sharedWithIssueIds?: string[] | undefined;
                            uid?: string | undefined;
                            recommendedForIssueIds?: string[] | undefined;
                            recommendedForIssueOrdinals?: {
                                [x: string]: number;
                            } | null | undefined;
                            prompt?: string | undefined;
                            isShared?: boolean | undefined;
                            description?: string | null | undefined;
                            pastTenseTitle?: string | undefined;
                            debriefAfterMinutes?: number | null | undefined;
                            image?: {
                                createdAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                updatedAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            likesCount?: number | null | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
                            isSuggested?: boolean | undefined;
                            type: "video";
                            video: {
                                storagePath?: string | null | undefined;
                                url?: string | null | undefined;
                            };
                        } | {
                            createdAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            updatedAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                            sharedWithIssueIds?: string[] | undefined;
                            uid?: string | undefined;
                            recommendedForIssueIds?: string[] | undefined;
                            recommendedForIssueOrdinals?: {
                                [x: string]: number;
                            } | null | undefined;
                            prompt?: string | undefined;
                            isShared?: boolean | undefined;
                            description?: string | null | undefined;
                            pastTenseTitle?: string | undefined;
                            debriefAfterMinutes?: number | null | undefined;
                            image?: {
                                createdAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                updatedAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            likesCount?: number | null | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
                            isSuggested?: boolean | undefined;
                            type: "notifySupportGroup";
                            supportGroup: import("../utils/firestore").DocumentReferenceLike<unknown>;
                        } | {
                            createdAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            updatedAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                            sharedWithIssueIds?: string[] | undefined;
                            uid?: string | undefined;
                            recommendedForIssueIds?: string[] | undefined;
                            recommendedForIssueOrdinals?: {
                                [x: string]: number;
                            } | null | undefined;
                            prompt?: string | undefined;
                            isShared?: boolean | undefined;
                            description?: string | null | undefined;
                            pastTenseTitle?: string | undefined;
                            debriefAfterMinutes?: number | null | undefined;
                            image?: {
                                createdAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                updatedAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            likesCount?: number | null | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
                            isSuggested?: boolean | undefined;
                            url: string;
                            type: "link";
                        };
                        doc: import("../utils/firestore").DocumentReferenceLike<unknown>;
                    };
                };
                isHelpful: boolean | null;
            };
            data: {
                counterValue?: number | undefined;
                timeSeconds?: number | undefined;
                label?: {
                    color?: string | undefined;
                    text: string;
                } | null | undefined;
                formattedValue: string;
            };
        };
    } | null | undefined;
    tacticsData?: {
        [x: string]: {
            data?: {
                setAt: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                };
                isCompleted: NonNullable<boolean | undefined>;
            } | undefined;
            tactic: {
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                sharedWithIssueIds?: string[] | undefined;
                uid?: string | undefined;
                recommendedForIssueIds?: string[] | undefined;
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                prompt?: string | undefined;
                isShared?: boolean | undefined;
                description?: string | null | undefined;
                pastTenseTitle?: string | undefined;
                debriefAfterMinutes?: number | null | undefined;
                image?: {
                    createdAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                likesCount?: number | null | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
                isSuggested?: boolean | undefined;
                repeat?: yup.Maybe<number | undefined>;
                type: "breathingExercise";
                inFor: number;
                holdFor: number;
                outFor: number;
            } | {
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                sharedWithIssueIds?: string[] | undefined;
                uid?: string | undefined;
                recommendedForIssueIds?: string[] | undefined;
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                prompt?: string | undefined;
                isShared?: boolean | undefined;
                description?: string | null | undefined;
                pastTenseTitle?: string | undefined;
                debriefAfterMinutes?: number | null | undefined;
                image?: {
                    createdAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                likesCount?: number | null | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
                isSuggested?: boolean | undefined;
                type: "notifyASupportPerson";
                contactIds: string[];
            } | {
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                sharedWithIssueIds?: string[] | undefined;
                uid?: string | undefined;
                recommendedForIssueIds?: string[] | undefined;
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                prompt?: string | undefined;
                isShared?: boolean | undefined;
                description?: string | null | undefined;
                pastTenseTitle?: string | undefined;
                debriefAfterMinutes?: number | null | undefined;
                image?: {
                    createdAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                likesCount?: number | null | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
                isSuggested?: boolean | undefined;
                type: "steps";
                targetSteps: number;
            } | {
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                sharedWithIssueIds?: string[] | undefined;
                uid?: string | undefined;
                recommendedForIssueIds?: string[] | undefined;
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                isShared?: boolean | undefined;
                description?: string | null | undefined;
                pastTenseTitle?: string | undefined;
                debriefAfterMinutes?: number | null | undefined;
                image?: {
                    createdAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                likesCount?: number | null | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
                isSuggested?: boolean | undefined;
                audio?: {
                    createdAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | null | undefined;
                prompt: string;
                type: "basic";
            } | {
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                sharedWithIssueIds?: string[] | undefined;
                uid?: string | undefined;
                recommendedForIssueIds?: string[] | undefined;
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                prompt?: string | undefined;
                isShared?: boolean | undefined;
                description?: string | null | undefined;
                pastTenseTitle?: string | undefined;
                debriefAfterMinutes?: number | null | undefined;
                image?: {
                    createdAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                likesCount?: number | null | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
                isSuggested?: boolean | undefined;
                type: "video";
                video: {
                    storagePath?: string | null | undefined;
                    url?: string | null | undefined;
                };
            } | {
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                sharedWithIssueIds?: string[] | undefined;
                uid?: string | undefined;
                recommendedForIssueIds?: string[] | undefined;
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                prompt?: string | undefined;
                isShared?: boolean | undefined;
                description?: string | null | undefined;
                pastTenseTitle?: string | undefined;
                debriefAfterMinutes?: number | null | undefined;
                image?: {
                    createdAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                likesCount?: number | null | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
                isSuggested?: boolean | undefined;
                type: "notifySupportGroup";
                supportGroup: import("../utils/firestore").DocumentReferenceLike<unknown>;
            } | {
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                sharedWithIssueIds?: string[] | undefined;
                uid?: string | undefined;
                recommendedForIssueIds?: string[] | undefined;
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                prompt?: string | undefined;
                isShared?: boolean | undefined;
                description?: string | null | undefined;
                pastTenseTitle?: string | undefined;
                debriefAfterMinutes?: number | null | undefined;
                image?: {
                    createdAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                likesCount?: number | null | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
                isSuggested?: boolean | undefined;
                url: string;
                type: "link";
            };
            doc: import("../utils/firestore").DocumentReferenceLike<unknown>;
        };
    } | undefined;
    senderUid?: string | null | undefined;
    uid: string;
    type: "call";
    date: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    };
    dateString: string;
} | {
    createdAt?: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    updatedAt?: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    text?: string | null | undefined;
    audioFile?: {
        createdAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        updatedAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        localFilePath?: yup.Maybe<string | undefined>;
        isDeleted?: boolean | undefined;
        metadata?: {} | null | undefined;
        thumbnailStoragePath?: yup.Maybe<string | undefined>;
        thumbnailUri?: yup.Maybe<string | undefined>;
        storagePath: string;
        url: string;
    } | undefined;
    metricData?: {
        [x: string]: {
            doc?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
            data: {
                label: string;
                metricInputValue: number;
                absoluteAttributeValue: number;
            };
            attribute: {
                name: string;
                key: string;
                icon: NonNullable<import("..").MetricIcons | undefined>;
            };
        };
    } | null | undefined;
    behaviorData?: {
        [x: string]: {
            color?: string | undefined;
            behavior: {
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                unit?: string | undefined;
                dailyLimit?: number | undefined;
                skipReminderAutoCreation?: boolean | undefined;
                name: string;
                ordinal: number;
                trackingType: NonNullable<"time" | "counter" | undefined>;
                tacticsById: {
                    [x: string]: {
                        data?: {
                            setAt: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            };
                            isCompleted: NonNullable<boolean | undefined>;
                        } | undefined;
                        tactic: {
                            createdAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            updatedAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                            sharedWithIssueIds?: string[] | undefined;
                            uid?: string | undefined;
                            recommendedForIssueIds?: string[] | undefined;
                            recommendedForIssueOrdinals?: {
                                [x: string]: number;
                            } | null | undefined;
                            prompt?: string | undefined;
                            isShared?: boolean | undefined;
                            description?: string | null | undefined;
                            pastTenseTitle?: string | undefined;
                            debriefAfterMinutes?: number | null | undefined;
                            image?: {
                                createdAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                updatedAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            likesCount?: number | null | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
                            isSuggested?: boolean | undefined;
                            repeat?: yup.Maybe<number | undefined>;
                            type: "breathingExercise";
                            inFor: number;
                            holdFor: number;
                            outFor: number;
                        } | {
                            createdAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            updatedAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                            sharedWithIssueIds?: string[] | undefined;
                            uid?: string | undefined;
                            recommendedForIssueIds?: string[] | undefined;
                            recommendedForIssueOrdinals?: {
                                [x: string]: number;
                            } | null | undefined;
                            prompt?: string | undefined;
                            isShared?: boolean | undefined;
                            description?: string | null | undefined;
                            pastTenseTitle?: string | undefined;
                            debriefAfterMinutes?: number | null | undefined;
                            image?: {
                                createdAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                updatedAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            likesCount?: number | null | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
                            isSuggested?: boolean | undefined;
                            type: "notifyASupportPerson";
                            contactIds: string[];
                        } | {
                            createdAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            updatedAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                            sharedWithIssueIds?: string[] | undefined;
                            uid?: string | undefined;
                            recommendedForIssueIds?: string[] | undefined;
                            recommendedForIssueOrdinals?: {
                                [x: string]: number;
                            } | null | undefined;
                            prompt?: string | undefined;
                            isShared?: boolean | undefined;
                            description?: string | null | undefined;
                            pastTenseTitle?: string | undefined;
                            debriefAfterMinutes?: number | null | undefined;
                            image?: {
                                createdAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                updatedAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            likesCount?: number | null | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
                            isSuggested?: boolean | undefined;
                            type: "steps";
                            targetSteps: number;
                        } | {
                            createdAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            updatedAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                            sharedWithIssueIds?: string[] | undefined;
                            uid?: string | undefined;
                            recommendedForIssueIds?: string[] | undefined;
                            recommendedForIssueOrdinals?: {
                                [x: string]: number;
                            } | null | undefined;
                            isShared?: boolean | undefined;
                            description?: string | null | undefined;
                            pastTenseTitle?: string | undefined;
                            debriefAfterMinutes?: number | null | undefined;
                            image?: {
                                createdAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                updatedAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            likesCount?: number | null | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
                            isSuggested?: boolean | undefined;
                            audio?: {
                                createdAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                updatedAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | null | undefined;
                            prompt: string;
                            type: "basic";
                        } | {
                            createdAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            updatedAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                            sharedWithIssueIds?: string[] | undefined;
                            uid?: string | undefined;
                            recommendedForIssueIds?: string[] | undefined;
                            recommendedForIssueOrdinals?: {
                                [x: string]: number;
                            } | null | undefined;
                            prompt?: string | undefined;
                            isShared?: boolean | undefined;
                            description?: string | null | undefined;
                            pastTenseTitle?: string | undefined;
                            debriefAfterMinutes?: number | null | undefined;
                            image?: {
                                createdAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                updatedAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            likesCount?: number | null | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
                            isSuggested?: boolean | undefined;
                            type: "video";
                            video: {
                                storagePath?: string | null | undefined;
                                url?: string | null | undefined;
                            };
                        } | {
                            createdAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            updatedAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                            sharedWithIssueIds?: string[] | undefined;
                            uid?: string | undefined;
                            recommendedForIssueIds?: string[] | undefined;
                            recommendedForIssueOrdinals?: {
                                [x: string]: number;
                            } | null | undefined;
                            prompt?: string | undefined;
                            isShared?: boolean | undefined;
                            description?: string | null | undefined;
                            pastTenseTitle?: string | undefined;
                            debriefAfterMinutes?: number | null | undefined;
                            image?: {
                                createdAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                updatedAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            likesCount?: number | null | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
                            isSuggested?: boolean | undefined;
                            type: "notifySupportGroup";
                            supportGroup: import("../utils/firestore").DocumentReferenceLike<unknown>;
                        } | {
                            createdAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            updatedAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                            sharedWithIssueIds?: string[] | undefined;
                            uid?: string | undefined;
                            recommendedForIssueIds?: string[] | undefined;
                            recommendedForIssueOrdinals?: {
                                [x: string]: number;
                            } | null | undefined;
                            prompt?: string | undefined;
                            isShared?: boolean | undefined;
                            description?: string | null | undefined;
                            pastTenseTitle?: string | undefined;
                            debriefAfterMinutes?: number | null | undefined;
                            image?: {
                                createdAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                updatedAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            likesCount?: number | null | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
                            isSuggested?: boolean | undefined;
                            url: string;
                            type: "link";
                        };
                        doc: import("../utils/firestore").DocumentReferenceLike<unknown>;
                    };
                };
                isHelpful: boolean | null;
            };
            data: {
                counterValue?: number | undefined;
                timeSeconds?: number | undefined;
                label?: {
                    color?: string | undefined;
                    text: string;
                } | null | undefined;
                formattedValue: string;
            };
        };
    } | null | undefined;
    tacticsData?: {
        [x: string]: {
            data?: {
                setAt: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                };
                isCompleted: NonNullable<boolean | undefined>;
            } | undefined;
            tactic: {
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                sharedWithIssueIds?: string[] | undefined;
                uid?: string | undefined;
                recommendedForIssueIds?: string[] | undefined;
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                prompt?: string | undefined;
                isShared?: boolean | undefined;
                description?: string | null | undefined;
                pastTenseTitle?: string | undefined;
                debriefAfterMinutes?: number | null | undefined;
                image?: {
                    createdAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                likesCount?: number | null | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
                isSuggested?: boolean | undefined;
                repeat?: yup.Maybe<number | undefined>;
                type: "breathingExercise";
                inFor: number;
                holdFor: number;
                outFor: number;
            } | {
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                sharedWithIssueIds?: string[] | undefined;
                uid?: string | undefined;
                recommendedForIssueIds?: string[] | undefined;
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                prompt?: string | undefined;
                isShared?: boolean | undefined;
                description?: string | null | undefined;
                pastTenseTitle?: string | undefined;
                debriefAfterMinutes?: number | null | undefined;
                image?: {
                    createdAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                likesCount?: number | null | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
                isSuggested?: boolean | undefined;
                type: "notifyASupportPerson";
                contactIds: string[];
            } | {
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                sharedWithIssueIds?: string[] | undefined;
                uid?: string | undefined;
                recommendedForIssueIds?: string[] | undefined;
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                prompt?: string | undefined;
                isShared?: boolean | undefined;
                description?: string | null | undefined;
                pastTenseTitle?: string | undefined;
                debriefAfterMinutes?: number | null | undefined;
                image?: {
                    createdAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                likesCount?: number | null | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
                isSuggested?: boolean | undefined;
                type: "steps";
                targetSteps: number;
            } | {
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                sharedWithIssueIds?: string[] | undefined;
                uid?: string | undefined;
                recommendedForIssueIds?: string[] | undefined;
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                isShared?: boolean | undefined;
                description?: string | null | undefined;
                pastTenseTitle?: string | undefined;
                debriefAfterMinutes?: number | null | undefined;
                image?: {
                    createdAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                likesCount?: number | null | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
                isSuggested?: boolean | undefined;
                audio?: {
                    createdAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | null | undefined;
                prompt: string;
                type: "basic";
            } | {
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                sharedWithIssueIds?: string[] | undefined;
                uid?: string | undefined;
                recommendedForIssueIds?: string[] | undefined;
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                prompt?: string | undefined;
                isShared?: boolean | undefined;
                description?: string | null | undefined;
                pastTenseTitle?: string | undefined;
                debriefAfterMinutes?: number | null | undefined;
                image?: {
                    createdAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                likesCount?: number | null | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
                isSuggested?: boolean | undefined;
                type: "video";
                video: {
                    storagePath?: string | null | undefined;
                    url?: string | null | undefined;
                };
            } | {
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                sharedWithIssueIds?: string[] | undefined;
                uid?: string | undefined;
                recommendedForIssueIds?: string[] | undefined;
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                prompt?: string | undefined;
                isShared?: boolean | undefined;
                description?: string | null | undefined;
                pastTenseTitle?: string | undefined;
                debriefAfterMinutes?: number | null | undefined;
                image?: {
                    createdAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                likesCount?: number | null | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
                isSuggested?: boolean | undefined;
                type: "notifySupportGroup";
                supportGroup: import("../utils/firestore").DocumentReferenceLike<unknown>;
            } | {
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                sharedWithIssueIds?: string[] | undefined;
                uid?: string | undefined;
                recommendedForIssueIds?: string[] | undefined;
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                prompt?: string | undefined;
                isShared?: boolean | undefined;
                description?: string | null | undefined;
                pastTenseTitle?: string | undefined;
                debriefAfterMinutes?: number | null | undefined;
                image?: {
                    createdAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                likesCount?: number | null | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
                isSuggested?: boolean | undefined;
                url: string;
                type: "link";
            };
            doc: import("../utils/firestore").DocumentReferenceLike<unknown>;
        };
    } | undefined;
    senderUid?: string | null | undefined;
    triggerDoc?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
    outcome?: "success" | "setback" | undefined;
    uid: string;
    type: "gameplan";
    date: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    };
    dateString: string;
    role: "user";
} | {
    createdAt?: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    updatedAt?: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    text?: string | null | undefined;
    audioFile?: {
        createdAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        updatedAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        localFilePath?: yup.Maybe<string | undefined>;
        isDeleted?: boolean | undefined;
        metadata?: {} | null | undefined;
        thumbnailStoragePath?: yup.Maybe<string | undefined>;
        thumbnailUri?: yup.Maybe<string | undefined>;
        storagePath: string;
        url: string;
    } | undefined;
    metricData?: {
        [x: string]: {
            doc?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
            data: {
                label: string;
                metricInputValue: number;
                absoluteAttributeValue: number;
            };
            attribute: {
                name: string;
                key: string;
                icon: NonNullable<import("..").MetricIcons | undefined>;
            };
        };
    } | null | undefined;
    behaviorData?: {
        [x: string]: {
            color?: string | undefined;
            behavior: {
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                unit?: string | undefined;
                dailyLimit?: number | undefined;
                skipReminderAutoCreation?: boolean | undefined;
                name: string;
                ordinal: number;
                trackingType: NonNullable<"time" | "counter" | undefined>;
                tacticsById: {
                    [x: string]: {
                        data?: {
                            setAt: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            };
                            isCompleted: NonNullable<boolean | undefined>;
                        } | undefined;
                        tactic: {
                            createdAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            updatedAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                            sharedWithIssueIds?: string[] | undefined;
                            uid?: string | undefined;
                            recommendedForIssueIds?: string[] | undefined;
                            recommendedForIssueOrdinals?: {
                                [x: string]: number;
                            } | null | undefined;
                            prompt?: string | undefined;
                            isShared?: boolean | undefined;
                            description?: string | null | undefined;
                            pastTenseTitle?: string | undefined;
                            debriefAfterMinutes?: number | null | undefined;
                            image?: {
                                createdAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                updatedAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            likesCount?: number | null | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
                            isSuggested?: boolean | undefined;
                            repeat?: yup.Maybe<number | undefined>;
                            type: "breathingExercise";
                            inFor: number;
                            holdFor: number;
                            outFor: number;
                        } | {
                            createdAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            updatedAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                            sharedWithIssueIds?: string[] | undefined;
                            uid?: string | undefined;
                            recommendedForIssueIds?: string[] | undefined;
                            recommendedForIssueOrdinals?: {
                                [x: string]: number;
                            } | null | undefined;
                            prompt?: string | undefined;
                            isShared?: boolean | undefined;
                            description?: string | null | undefined;
                            pastTenseTitle?: string | undefined;
                            debriefAfterMinutes?: number | null | undefined;
                            image?: {
                                createdAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                updatedAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            likesCount?: number | null | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
                            isSuggested?: boolean | undefined;
                            type: "notifyASupportPerson";
                            contactIds: string[];
                        } | {
                            createdAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            updatedAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                            sharedWithIssueIds?: string[] | undefined;
                            uid?: string | undefined;
                            recommendedForIssueIds?: string[] | undefined;
                            recommendedForIssueOrdinals?: {
                                [x: string]: number;
                            } | null | undefined;
                            prompt?: string | undefined;
                            isShared?: boolean | undefined;
                            description?: string | null | undefined;
                            pastTenseTitle?: string | undefined;
                            debriefAfterMinutes?: number | null | undefined;
                            image?: {
                                createdAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                updatedAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            likesCount?: number | null | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
                            isSuggested?: boolean | undefined;
                            type: "steps";
                            targetSteps: number;
                        } | {
                            createdAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            updatedAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                            sharedWithIssueIds?: string[] | undefined;
                            uid?: string | undefined;
                            recommendedForIssueIds?: string[] | undefined;
                            recommendedForIssueOrdinals?: {
                                [x: string]: number;
                            } | null | undefined;
                            isShared?: boolean | undefined;
                            description?: string | null | undefined;
                            pastTenseTitle?: string | undefined;
                            debriefAfterMinutes?: number | null | undefined;
                            image?: {
                                createdAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                updatedAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            likesCount?: number | null | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
                            isSuggested?: boolean | undefined;
                            audio?: {
                                createdAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                updatedAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | null | undefined;
                            prompt: string;
                            type: "basic";
                        } | {
                            createdAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            updatedAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                            sharedWithIssueIds?: string[] | undefined;
                            uid?: string | undefined;
                            recommendedForIssueIds?: string[] | undefined;
                            recommendedForIssueOrdinals?: {
                                [x: string]: number;
                            } | null | undefined;
                            prompt?: string | undefined;
                            isShared?: boolean | undefined;
                            description?: string | null | undefined;
                            pastTenseTitle?: string | undefined;
                            debriefAfterMinutes?: number | null | undefined;
                            image?: {
                                createdAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                updatedAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            likesCount?: number | null | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
                            isSuggested?: boolean | undefined;
                            type: "video";
                            video: {
                                storagePath?: string | null | undefined;
                                url?: string | null | undefined;
                            };
                        } | {
                            createdAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            updatedAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                            sharedWithIssueIds?: string[] | undefined;
                            uid?: string | undefined;
                            recommendedForIssueIds?: string[] | undefined;
                            recommendedForIssueOrdinals?: {
                                [x: string]: number;
                            } | null | undefined;
                            prompt?: string | undefined;
                            isShared?: boolean | undefined;
                            description?: string | null | undefined;
                            pastTenseTitle?: string | undefined;
                            debriefAfterMinutes?: number | null | undefined;
                            image?: {
                                createdAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                updatedAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            likesCount?: number | null | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
                            isSuggested?: boolean | undefined;
                            type: "notifySupportGroup";
                            supportGroup: import("../utils/firestore").DocumentReferenceLike<unknown>;
                        } | {
                            createdAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            updatedAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                            sharedWithIssueIds?: string[] | undefined;
                            uid?: string | undefined;
                            recommendedForIssueIds?: string[] | undefined;
                            recommendedForIssueOrdinals?: {
                                [x: string]: number;
                            } | null | undefined;
                            prompt?: string | undefined;
                            isShared?: boolean | undefined;
                            description?: string | null | undefined;
                            pastTenseTitle?: string | undefined;
                            debriefAfterMinutes?: number | null | undefined;
                            image?: {
                                createdAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                updatedAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            likesCount?: number | null | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
                            isSuggested?: boolean | undefined;
                            url: string;
                            type: "link";
                        };
                        doc: import("../utils/firestore").DocumentReferenceLike<unknown>;
                    };
                };
                isHelpful: boolean | null;
            };
            data: {
                counterValue?: number | undefined;
                timeSeconds?: number | undefined;
                label?: {
                    color?: string | undefined;
                    text: string;
                } | null | undefined;
                formattedValue: string;
            };
        };
    } | null | undefined;
    tacticsData?: {
        [x: string]: {
            data?: {
                setAt: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                };
                isCompleted: NonNullable<boolean | undefined>;
            } | undefined;
            tactic: {
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                sharedWithIssueIds?: string[] | undefined;
                uid?: string | undefined;
                recommendedForIssueIds?: string[] | undefined;
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                prompt?: string | undefined;
                isShared?: boolean | undefined;
                description?: string | null | undefined;
                pastTenseTitle?: string | undefined;
                debriefAfterMinutes?: number | null | undefined;
                image?: {
                    createdAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                likesCount?: number | null | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
                isSuggested?: boolean | undefined;
                repeat?: yup.Maybe<number | undefined>;
                type: "breathingExercise";
                inFor: number;
                holdFor: number;
                outFor: number;
            } | {
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                sharedWithIssueIds?: string[] | undefined;
                uid?: string | undefined;
                recommendedForIssueIds?: string[] | undefined;
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                prompt?: string | undefined;
                isShared?: boolean | undefined;
                description?: string | null | undefined;
                pastTenseTitle?: string | undefined;
                debriefAfterMinutes?: number | null | undefined;
                image?: {
                    createdAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                likesCount?: number | null | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
                isSuggested?: boolean | undefined;
                type: "notifyASupportPerson";
                contactIds: string[];
            } | {
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                sharedWithIssueIds?: string[] | undefined;
                uid?: string | undefined;
                recommendedForIssueIds?: string[] | undefined;
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                prompt?: string | undefined;
                isShared?: boolean | undefined;
                description?: string | null | undefined;
                pastTenseTitle?: string | undefined;
                debriefAfterMinutes?: number | null | undefined;
                image?: {
                    createdAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                likesCount?: number | null | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
                isSuggested?: boolean | undefined;
                type: "steps";
                targetSteps: number;
            } | {
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                sharedWithIssueIds?: string[] | undefined;
                uid?: string | undefined;
                recommendedForIssueIds?: string[] | undefined;
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                isShared?: boolean | undefined;
                description?: string | null | undefined;
                pastTenseTitle?: string | undefined;
                debriefAfterMinutes?: number | null | undefined;
                image?: {
                    createdAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                likesCount?: number | null | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
                isSuggested?: boolean | undefined;
                audio?: {
                    createdAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | null | undefined;
                prompt: string;
                type: "basic";
            } | {
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                sharedWithIssueIds?: string[] | undefined;
                uid?: string | undefined;
                recommendedForIssueIds?: string[] | undefined;
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                prompt?: string | undefined;
                isShared?: boolean | undefined;
                description?: string | null | undefined;
                pastTenseTitle?: string | undefined;
                debriefAfterMinutes?: number | null | undefined;
                image?: {
                    createdAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                likesCount?: number | null | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
                isSuggested?: boolean | undefined;
                type: "video";
                video: {
                    storagePath?: string | null | undefined;
                    url?: string | null | undefined;
                };
            } | {
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                sharedWithIssueIds?: string[] | undefined;
                uid?: string | undefined;
                recommendedForIssueIds?: string[] | undefined;
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                prompt?: string | undefined;
                isShared?: boolean | undefined;
                description?: string | null | undefined;
                pastTenseTitle?: string | undefined;
                debriefAfterMinutes?: number | null | undefined;
                image?: {
                    createdAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                likesCount?: number | null | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
                isSuggested?: boolean | undefined;
                type: "notifySupportGroup";
                supportGroup: import("../utils/firestore").DocumentReferenceLike<unknown>;
            } | {
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                sharedWithIssueIds?: string[] | undefined;
                uid?: string | undefined;
                recommendedForIssueIds?: string[] | undefined;
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                prompt?: string | undefined;
                isShared?: boolean | undefined;
                description?: string | null | undefined;
                pastTenseTitle?: string | undefined;
                debriefAfterMinutes?: number | null | undefined;
                image?: {
                    createdAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                likesCount?: number | null | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
                isSuggested?: boolean | undefined;
                url: string;
                type: "link";
            };
            doc: import("../utils/firestore").DocumentReferenceLike<unknown>;
        };
    } | undefined;
    senderUid?: string | null | undefined;
    uid: string;
    type: "gpt";
    date: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    };
    dateString: string;
    role: "assistant";
} | {
    createdAt?: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    updatedAt?: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    text?: string | null | undefined;
    audioFile?: {
        createdAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        updatedAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        localFilePath?: yup.Maybe<string | undefined>;
        isDeleted?: boolean | undefined;
        metadata?: {} | null | undefined;
        thumbnailStoragePath?: yup.Maybe<string | undefined>;
        thumbnailUri?: yup.Maybe<string | undefined>;
        storagePath: string;
        url: string;
    } | undefined;
    metricData?: {
        [x: string]: {
            doc?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
            data: {
                label: string;
                metricInputValue: number;
                absoluteAttributeValue: number;
            };
            attribute: {
                name: string;
                key: string;
                icon: NonNullable<import("..").MetricIcons | undefined>;
            };
        };
    } | null | undefined;
    behaviorData?: {
        [x: string]: {
            color?: string | undefined;
            behavior: {
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                unit?: string | undefined;
                dailyLimit?: number | undefined;
                skipReminderAutoCreation?: boolean | undefined;
                name: string;
                ordinal: number;
                trackingType: NonNullable<"time" | "counter" | undefined>;
                tacticsById: {
                    [x: string]: {
                        data?: {
                            setAt: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            };
                            isCompleted: NonNullable<boolean | undefined>;
                        } | undefined;
                        tactic: {
                            createdAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            updatedAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                            sharedWithIssueIds?: string[] | undefined;
                            uid?: string | undefined;
                            recommendedForIssueIds?: string[] | undefined;
                            recommendedForIssueOrdinals?: {
                                [x: string]: number;
                            } | null | undefined;
                            prompt?: string | undefined;
                            isShared?: boolean | undefined;
                            description?: string | null | undefined;
                            pastTenseTitle?: string | undefined;
                            debriefAfterMinutes?: number | null | undefined;
                            image?: {
                                createdAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                updatedAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            likesCount?: number | null | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
                            isSuggested?: boolean | undefined;
                            repeat?: yup.Maybe<number | undefined>;
                            type: "breathingExercise";
                            inFor: number;
                            holdFor: number;
                            outFor: number;
                        } | {
                            createdAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            updatedAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                            sharedWithIssueIds?: string[] | undefined;
                            uid?: string | undefined;
                            recommendedForIssueIds?: string[] | undefined;
                            recommendedForIssueOrdinals?: {
                                [x: string]: number;
                            } | null | undefined;
                            prompt?: string | undefined;
                            isShared?: boolean | undefined;
                            description?: string | null | undefined;
                            pastTenseTitle?: string | undefined;
                            debriefAfterMinutes?: number | null | undefined;
                            image?: {
                                createdAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                updatedAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            likesCount?: number | null | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
                            isSuggested?: boolean | undefined;
                            type: "notifyASupportPerson";
                            contactIds: string[];
                        } | {
                            createdAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            updatedAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                            sharedWithIssueIds?: string[] | undefined;
                            uid?: string | undefined;
                            recommendedForIssueIds?: string[] | undefined;
                            recommendedForIssueOrdinals?: {
                                [x: string]: number;
                            } | null | undefined;
                            prompt?: string | undefined;
                            isShared?: boolean | undefined;
                            description?: string | null | undefined;
                            pastTenseTitle?: string | undefined;
                            debriefAfterMinutes?: number | null | undefined;
                            image?: {
                                createdAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                updatedAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            likesCount?: number | null | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
                            isSuggested?: boolean | undefined;
                            type: "steps";
                            targetSteps: number;
                        } | {
                            createdAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            updatedAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                            sharedWithIssueIds?: string[] | undefined;
                            uid?: string | undefined;
                            recommendedForIssueIds?: string[] | undefined;
                            recommendedForIssueOrdinals?: {
                                [x: string]: number;
                            } | null | undefined;
                            isShared?: boolean | undefined;
                            description?: string | null | undefined;
                            pastTenseTitle?: string | undefined;
                            debriefAfterMinutes?: number | null | undefined;
                            image?: {
                                createdAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                updatedAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            likesCount?: number | null | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
                            isSuggested?: boolean | undefined;
                            audio?: {
                                createdAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                updatedAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | null | undefined;
                            prompt: string;
                            type: "basic";
                        } | {
                            createdAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            updatedAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                            sharedWithIssueIds?: string[] | undefined;
                            uid?: string | undefined;
                            recommendedForIssueIds?: string[] | undefined;
                            recommendedForIssueOrdinals?: {
                                [x: string]: number;
                            } | null | undefined;
                            prompt?: string | undefined;
                            isShared?: boolean | undefined;
                            description?: string | null | undefined;
                            pastTenseTitle?: string | undefined;
                            debriefAfterMinutes?: number | null | undefined;
                            image?: {
                                createdAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                updatedAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            likesCount?: number | null | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
                            isSuggested?: boolean | undefined;
                            type: "video";
                            video: {
                                storagePath?: string | null | undefined;
                                url?: string | null | undefined;
                            };
                        } | {
                            createdAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            updatedAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                            sharedWithIssueIds?: string[] | undefined;
                            uid?: string | undefined;
                            recommendedForIssueIds?: string[] | undefined;
                            recommendedForIssueOrdinals?: {
                                [x: string]: number;
                            } | null | undefined;
                            prompt?: string | undefined;
                            isShared?: boolean | undefined;
                            description?: string | null | undefined;
                            pastTenseTitle?: string | undefined;
                            debriefAfterMinutes?: number | null | undefined;
                            image?: {
                                createdAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                updatedAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            likesCount?: number | null | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
                            isSuggested?: boolean | undefined;
                            type: "notifySupportGroup";
                            supportGroup: import("../utils/firestore").DocumentReferenceLike<unknown>;
                        } | {
                            createdAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            updatedAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                            sharedWithIssueIds?: string[] | undefined;
                            uid?: string | undefined;
                            recommendedForIssueIds?: string[] | undefined;
                            recommendedForIssueOrdinals?: {
                                [x: string]: number;
                            } | null | undefined;
                            prompt?: string | undefined;
                            isShared?: boolean | undefined;
                            description?: string | null | undefined;
                            pastTenseTitle?: string | undefined;
                            debriefAfterMinutes?: number | null | undefined;
                            image?: {
                                createdAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                updatedAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            likesCount?: number | null | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
                            isSuggested?: boolean | undefined;
                            url: string;
                            type: "link";
                        };
                        doc: import("../utils/firestore").DocumentReferenceLike<unknown>;
                    };
                };
                isHelpful: boolean | null;
            };
            data: {
                counterValue?: number | undefined;
                timeSeconds?: number | undefined;
                label?: {
                    color?: string | undefined;
                    text: string;
                } | null | undefined;
                formattedValue: string;
            };
        };
    } | null | undefined;
    tacticsData?: {
        [x: string]: {
            data?: {
                setAt: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                };
                isCompleted: NonNullable<boolean | undefined>;
            } | undefined;
            tactic: {
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                sharedWithIssueIds?: string[] | undefined;
                uid?: string | undefined;
                recommendedForIssueIds?: string[] | undefined;
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                prompt?: string | undefined;
                isShared?: boolean | undefined;
                description?: string | null | undefined;
                pastTenseTitle?: string | undefined;
                debriefAfterMinutes?: number | null | undefined;
                image?: {
                    createdAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                likesCount?: number | null | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
                isSuggested?: boolean | undefined;
                repeat?: yup.Maybe<number | undefined>;
                type: "breathingExercise";
                inFor: number;
                holdFor: number;
                outFor: number;
            } | {
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                sharedWithIssueIds?: string[] | undefined;
                uid?: string | undefined;
                recommendedForIssueIds?: string[] | undefined;
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                prompt?: string | undefined;
                isShared?: boolean | undefined;
                description?: string | null | undefined;
                pastTenseTitle?: string | undefined;
                debriefAfterMinutes?: number | null | undefined;
                image?: {
                    createdAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                likesCount?: number | null | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
                isSuggested?: boolean | undefined;
                type: "notifyASupportPerson";
                contactIds: string[];
            } | {
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                sharedWithIssueIds?: string[] | undefined;
                uid?: string | undefined;
                recommendedForIssueIds?: string[] | undefined;
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                prompt?: string | undefined;
                isShared?: boolean | undefined;
                description?: string | null | undefined;
                pastTenseTitle?: string | undefined;
                debriefAfterMinutes?: number | null | undefined;
                image?: {
                    createdAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                likesCount?: number | null | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
                isSuggested?: boolean | undefined;
                type: "steps";
                targetSteps: number;
            } | {
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                sharedWithIssueIds?: string[] | undefined;
                uid?: string | undefined;
                recommendedForIssueIds?: string[] | undefined;
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                isShared?: boolean | undefined;
                description?: string | null | undefined;
                pastTenseTitle?: string | undefined;
                debriefAfterMinutes?: number | null | undefined;
                image?: {
                    createdAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                likesCount?: number | null | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
                isSuggested?: boolean | undefined;
                audio?: {
                    createdAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | null | undefined;
                prompt: string;
                type: "basic";
            } | {
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                sharedWithIssueIds?: string[] | undefined;
                uid?: string | undefined;
                recommendedForIssueIds?: string[] | undefined;
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                prompt?: string | undefined;
                isShared?: boolean | undefined;
                description?: string | null | undefined;
                pastTenseTitle?: string | undefined;
                debriefAfterMinutes?: number | null | undefined;
                image?: {
                    createdAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                likesCount?: number | null | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
                isSuggested?: boolean | undefined;
                type: "video";
                video: {
                    storagePath?: string | null | undefined;
                    url?: string | null | undefined;
                };
            } | {
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                sharedWithIssueIds?: string[] | undefined;
                uid?: string | undefined;
                recommendedForIssueIds?: string[] | undefined;
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                prompt?: string | undefined;
                isShared?: boolean | undefined;
                description?: string | null | undefined;
                pastTenseTitle?: string | undefined;
                debriefAfterMinutes?: number | null | undefined;
                image?: {
                    createdAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                likesCount?: number | null | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
                isSuggested?: boolean | undefined;
                type: "notifySupportGroup";
                supportGroup: import("../utils/firestore").DocumentReferenceLike<unknown>;
            } | {
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                sharedWithIssueIds?: string[] | undefined;
                uid?: string | undefined;
                recommendedForIssueIds?: string[] | undefined;
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                prompt?: string | undefined;
                isShared?: boolean | undefined;
                description?: string | null | undefined;
                pastTenseTitle?: string | undefined;
                debriefAfterMinutes?: number | null | undefined;
                image?: {
                    createdAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                likesCount?: number | null | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
                isSuggested?: boolean | undefined;
                url: string;
                type: "link";
            };
            doc: import("../utils/firestore").DocumentReferenceLike<unknown>;
        };
    } | undefined;
    senderUid?: string | null | undefined;
    animationFileName?: string | undefined;
    uid: string;
    type: "showTour";
    steps: {
        message: string;
        elementRefName: string;
        title: string;
        confirmButtonLabel: string;
    }[];
    date: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    };
    dateString: string;
} | {
    createdAt?: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    updatedAt?: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    text?: string | null | undefined;
    audioFile?: {
        createdAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        updatedAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        localFilePath?: yup.Maybe<string | undefined>;
        isDeleted?: boolean | undefined;
        metadata?: {} | null | undefined;
        thumbnailStoragePath?: yup.Maybe<string | undefined>;
        thumbnailUri?: yup.Maybe<string | undefined>;
        storagePath: string;
        url: string;
    } | undefined;
    metricData?: {
        [x: string]: {
            doc?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
            data: {
                label: string;
                metricInputValue: number;
                absoluteAttributeValue: number;
            };
            attribute: {
                name: string;
                key: string;
                icon: NonNullable<import("..").MetricIcons | undefined>;
            };
        };
    } | null | undefined;
    behaviorData?: {
        [x: string]: {
            color?: string | undefined;
            behavior: {
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                unit?: string | undefined;
                dailyLimit?: number | undefined;
                skipReminderAutoCreation?: boolean | undefined;
                name: string;
                ordinal: number;
                trackingType: NonNullable<"time" | "counter" | undefined>;
                tacticsById: {
                    [x: string]: {
                        data?: {
                            setAt: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            };
                            isCompleted: NonNullable<boolean | undefined>;
                        } | undefined;
                        tactic: {
                            createdAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            updatedAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                            sharedWithIssueIds?: string[] | undefined;
                            uid?: string | undefined;
                            recommendedForIssueIds?: string[] | undefined;
                            recommendedForIssueOrdinals?: {
                                [x: string]: number;
                            } | null | undefined;
                            prompt?: string | undefined;
                            isShared?: boolean | undefined;
                            description?: string | null | undefined;
                            pastTenseTitle?: string | undefined;
                            debriefAfterMinutes?: number | null | undefined;
                            image?: {
                                createdAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                updatedAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            likesCount?: number | null | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
                            isSuggested?: boolean | undefined;
                            repeat?: yup.Maybe<number | undefined>;
                            type: "breathingExercise";
                            inFor: number;
                            holdFor: number;
                            outFor: number;
                        } | {
                            createdAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            updatedAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                            sharedWithIssueIds?: string[] | undefined;
                            uid?: string | undefined;
                            recommendedForIssueIds?: string[] | undefined;
                            recommendedForIssueOrdinals?: {
                                [x: string]: number;
                            } | null | undefined;
                            prompt?: string | undefined;
                            isShared?: boolean | undefined;
                            description?: string | null | undefined;
                            pastTenseTitle?: string | undefined;
                            debriefAfterMinutes?: number | null | undefined;
                            image?: {
                                createdAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                updatedAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            likesCount?: number | null | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
                            isSuggested?: boolean | undefined;
                            type: "notifyASupportPerson";
                            contactIds: string[];
                        } | {
                            createdAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            updatedAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                            sharedWithIssueIds?: string[] | undefined;
                            uid?: string | undefined;
                            recommendedForIssueIds?: string[] | undefined;
                            recommendedForIssueOrdinals?: {
                                [x: string]: number;
                            } | null | undefined;
                            prompt?: string | undefined;
                            isShared?: boolean | undefined;
                            description?: string | null | undefined;
                            pastTenseTitle?: string | undefined;
                            debriefAfterMinutes?: number | null | undefined;
                            image?: {
                                createdAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                updatedAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            likesCount?: number | null | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
                            isSuggested?: boolean | undefined;
                            type: "steps";
                            targetSteps: number;
                        } | {
                            createdAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            updatedAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                            sharedWithIssueIds?: string[] | undefined;
                            uid?: string | undefined;
                            recommendedForIssueIds?: string[] | undefined;
                            recommendedForIssueOrdinals?: {
                                [x: string]: number;
                            } | null | undefined;
                            isShared?: boolean | undefined;
                            description?: string | null | undefined;
                            pastTenseTitle?: string | undefined;
                            debriefAfterMinutes?: number | null | undefined;
                            image?: {
                                createdAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                updatedAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            likesCount?: number | null | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
                            isSuggested?: boolean | undefined;
                            audio?: {
                                createdAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                updatedAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | null | undefined;
                            prompt: string;
                            type: "basic";
                        } | {
                            createdAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            updatedAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                            sharedWithIssueIds?: string[] | undefined;
                            uid?: string | undefined;
                            recommendedForIssueIds?: string[] | undefined;
                            recommendedForIssueOrdinals?: {
                                [x: string]: number;
                            } | null | undefined;
                            prompt?: string | undefined;
                            isShared?: boolean | undefined;
                            description?: string | null | undefined;
                            pastTenseTitle?: string | undefined;
                            debriefAfterMinutes?: number | null | undefined;
                            image?: {
                                createdAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                updatedAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            likesCount?: number | null | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
                            isSuggested?: boolean | undefined;
                            type: "video";
                            video: {
                                storagePath?: string | null | undefined;
                                url?: string | null | undefined;
                            };
                        } | {
                            createdAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            updatedAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                            sharedWithIssueIds?: string[] | undefined;
                            uid?: string | undefined;
                            recommendedForIssueIds?: string[] | undefined;
                            recommendedForIssueOrdinals?: {
                                [x: string]: number;
                            } | null | undefined;
                            prompt?: string | undefined;
                            isShared?: boolean | undefined;
                            description?: string | null | undefined;
                            pastTenseTitle?: string | undefined;
                            debriefAfterMinutes?: number | null | undefined;
                            image?: {
                                createdAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                updatedAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            likesCount?: number | null | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
                            isSuggested?: boolean | undefined;
                            type: "notifySupportGroup";
                            supportGroup: import("../utils/firestore").DocumentReferenceLike<unknown>;
                        } | {
                            createdAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            updatedAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                            sharedWithIssueIds?: string[] | undefined;
                            uid?: string | undefined;
                            recommendedForIssueIds?: string[] | undefined;
                            recommendedForIssueOrdinals?: {
                                [x: string]: number;
                            } | null | undefined;
                            prompt?: string | undefined;
                            isShared?: boolean | undefined;
                            description?: string | null | undefined;
                            pastTenseTitle?: string | undefined;
                            debriefAfterMinutes?: number | null | undefined;
                            image?: {
                                createdAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                updatedAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            likesCount?: number | null | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
                            isSuggested?: boolean | undefined;
                            url: string;
                            type: "link";
                        };
                        doc: import("../utils/firestore").DocumentReferenceLike<unknown>;
                    };
                };
                isHelpful: boolean | null;
            };
            data: {
                counterValue?: number | undefined;
                timeSeconds?: number | undefined;
                label?: {
                    color?: string | undefined;
                    text: string;
                } | null | undefined;
                formattedValue: string;
            };
        };
    } | null | undefined;
    tacticsData?: {
        [x: string]: {
            data?: {
                setAt: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                };
                isCompleted: NonNullable<boolean | undefined>;
            } | undefined;
            tactic: {
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                sharedWithIssueIds?: string[] | undefined;
                uid?: string | undefined;
                recommendedForIssueIds?: string[] | undefined;
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                prompt?: string | undefined;
                isShared?: boolean | undefined;
                description?: string | null | undefined;
                pastTenseTitle?: string | undefined;
                debriefAfterMinutes?: number | null | undefined;
                image?: {
                    createdAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                likesCount?: number | null | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
                isSuggested?: boolean | undefined;
                repeat?: yup.Maybe<number | undefined>;
                type: "breathingExercise";
                inFor: number;
                holdFor: number;
                outFor: number;
            } | {
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                sharedWithIssueIds?: string[] | undefined;
                uid?: string | undefined;
                recommendedForIssueIds?: string[] | undefined;
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                prompt?: string | undefined;
                isShared?: boolean | undefined;
                description?: string | null | undefined;
                pastTenseTitle?: string | undefined;
                debriefAfterMinutes?: number | null | undefined;
                image?: {
                    createdAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                likesCount?: number | null | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
                isSuggested?: boolean | undefined;
                type: "notifyASupportPerson";
                contactIds: string[];
            } | {
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                sharedWithIssueIds?: string[] | undefined;
                uid?: string | undefined;
                recommendedForIssueIds?: string[] | undefined;
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                prompt?: string | undefined;
                isShared?: boolean | undefined;
                description?: string | null | undefined;
                pastTenseTitle?: string | undefined;
                debriefAfterMinutes?: number | null | undefined;
                image?: {
                    createdAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                likesCount?: number | null | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
                isSuggested?: boolean | undefined;
                type: "steps";
                targetSteps: number;
            } | {
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                sharedWithIssueIds?: string[] | undefined;
                uid?: string | undefined;
                recommendedForIssueIds?: string[] | undefined;
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                isShared?: boolean | undefined;
                description?: string | null | undefined;
                pastTenseTitle?: string | undefined;
                debriefAfterMinutes?: number | null | undefined;
                image?: {
                    createdAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                likesCount?: number | null | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
                isSuggested?: boolean | undefined;
                audio?: {
                    createdAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | null | undefined;
                prompt: string;
                type: "basic";
            } | {
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                sharedWithIssueIds?: string[] | undefined;
                uid?: string | undefined;
                recommendedForIssueIds?: string[] | undefined;
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                prompt?: string | undefined;
                isShared?: boolean | undefined;
                description?: string | null | undefined;
                pastTenseTitle?: string | undefined;
                debriefAfterMinutes?: number | null | undefined;
                image?: {
                    createdAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                likesCount?: number | null | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
                isSuggested?: boolean | undefined;
                type: "video";
                video: {
                    storagePath?: string | null | undefined;
                    url?: string | null | undefined;
                };
            } | {
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                sharedWithIssueIds?: string[] | undefined;
                uid?: string | undefined;
                recommendedForIssueIds?: string[] | undefined;
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                prompt?: string | undefined;
                isShared?: boolean | undefined;
                description?: string | null | undefined;
                pastTenseTitle?: string | undefined;
                debriefAfterMinutes?: number | null | undefined;
                image?: {
                    createdAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                likesCount?: number | null | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
                isSuggested?: boolean | undefined;
                type: "notifySupportGroup";
                supportGroup: import("../utils/firestore").DocumentReferenceLike<unknown>;
            } | {
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                sharedWithIssueIds?: string[] | undefined;
                uid?: string | undefined;
                recommendedForIssueIds?: string[] | undefined;
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                prompt?: string | undefined;
                isShared?: boolean | undefined;
                description?: string | null | undefined;
                pastTenseTitle?: string | undefined;
                debriefAfterMinutes?: number | null | undefined;
                image?: {
                    createdAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                likesCount?: number | null | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
                isSuggested?: boolean | undefined;
                url: string;
                type: "link";
            };
            doc: import("../utils/firestore").DocumentReferenceLike<unknown>;
        };
    } | undefined;
    senderUid?: string | null | undefined;
    uid: string;
    type: "toolCall";
    date: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    };
    dateString: string;
    role: "tool";
    toolCallId: string;
} | {
    createdAt?: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    updatedAt?: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    text?: string | null | undefined;
    audioFile?: {
        createdAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        updatedAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        localFilePath?: yup.Maybe<string | undefined>;
        isDeleted?: boolean | undefined;
        metadata?: {} | null | undefined;
        thumbnailStoragePath?: yup.Maybe<string | undefined>;
        thumbnailUri?: yup.Maybe<string | undefined>;
        storagePath: string;
        url: string;
    } | undefined;
    metricData?: {
        [x: string]: {
            doc?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
            data: {
                label: string;
                metricInputValue: number;
                absoluteAttributeValue: number;
            };
            attribute: {
                name: string;
                key: string;
                icon: NonNullable<import("..").MetricIcons | undefined>;
            };
        };
    } | null | undefined;
    behaviorData?: {
        [x: string]: {
            color?: string | undefined;
            behavior: {
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                unit?: string | undefined;
                dailyLimit?: number | undefined;
                skipReminderAutoCreation?: boolean | undefined;
                name: string;
                ordinal: number;
                trackingType: NonNullable<"time" | "counter" | undefined>;
                tacticsById: {
                    [x: string]: {
                        data?: {
                            setAt: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            };
                            isCompleted: NonNullable<boolean | undefined>;
                        } | undefined;
                        tactic: {
                            createdAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            updatedAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                            sharedWithIssueIds?: string[] | undefined;
                            uid?: string | undefined;
                            recommendedForIssueIds?: string[] | undefined;
                            recommendedForIssueOrdinals?: {
                                [x: string]: number;
                            } | null | undefined;
                            prompt?: string | undefined;
                            isShared?: boolean | undefined;
                            description?: string | null | undefined;
                            pastTenseTitle?: string | undefined;
                            debriefAfterMinutes?: number | null | undefined;
                            image?: {
                                createdAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                updatedAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            likesCount?: number | null | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
                            isSuggested?: boolean | undefined;
                            repeat?: yup.Maybe<number | undefined>;
                            type: "breathingExercise";
                            inFor: number;
                            holdFor: number;
                            outFor: number;
                        } | {
                            createdAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            updatedAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                            sharedWithIssueIds?: string[] | undefined;
                            uid?: string | undefined;
                            recommendedForIssueIds?: string[] | undefined;
                            recommendedForIssueOrdinals?: {
                                [x: string]: number;
                            } | null | undefined;
                            prompt?: string | undefined;
                            isShared?: boolean | undefined;
                            description?: string | null | undefined;
                            pastTenseTitle?: string | undefined;
                            debriefAfterMinutes?: number | null | undefined;
                            image?: {
                                createdAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                updatedAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            likesCount?: number | null | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
                            isSuggested?: boolean | undefined;
                            type: "notifyASupportPerson";
                            contactIds: string[];
                        } | {
                            createdAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            updatedAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                            sharedWithIssueIds?: string[] | undefined;
                            uid?: string | undefined;
                            recommendedForIssueIds?: string[] | undefined;
                            recommendedForIssueOrdinals?: {
                                [x: string]: number;
                            } | null | undefined;
                            prompt?: string | undefined;
                            isShared?: boolean | undefined;
                            description?: string | null | undefined;
                            pastTenseTitle?: string | undefined;
                            debriefAfterMinutes?: number | null | undefined;
                            image?: {
                                createdAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                updatedAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            likesCount?: number | null | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
                            isSuggested?: boolean | undefined;
                            type: "steps";
                            targetSteps: number;
                        } | {
                            createdAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            updatedAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                            sharedWithIssueIds?: string[] | undefined;
                            uid?: string | undefined;
                            recommendedForIssueIds?: string[] | undefined;
                            recommendedForIssueOrdinals?: {
                                [x: string]: number;
                            } | null | undefined;
                            isShared?: boolean | undefined;
                            description?: string | null | undefined;
                            pastTenseTitle?: string | undefined;
                            debriefAfterMinutes?: number | null | undefined;
                            image?: {
                                createdAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                updatedAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            likesCount?: number | null | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
                            isSuggested?: boolean | undefined;
                            audio?: {
                                createdAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                updatedAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | null | undefined;
                            prompt: string;
                            type: "basic";
                        } | {
                            createdAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            updatedAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                            sharedWithIssueIds?: string[] | undefined;
                            uid?: string | undefined;
                            recommendedForIssueIds?: string[] | undefined;
                            recommendedForIssueOrdinals?: {
                                [x: string]: number;
                            } | null | undefined;
                            prompt?: string | undefined;
                            isShared?: boolean | undefined;
                            description?: string | null | undefined;
                            pastTenseTitle?: string | undefined;
                            debriefAfterMinutes?: number | null | undefined;
                            image?: {
                                createdAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                updatedAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            likesCount?: number | null | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
                            isSuggested?: boolean | undefined;
                            type: "video";
                            video: {
                                storagePath?: string | null | undefined;
                                url?: string | null | undefined;
                            };
                        } | {
                            createdAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            updatedAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                            sharedWithIssueIds?: string[] | undefined;
                            uid?: string | undefined;
                            recommendedForIssueIds?: string[] | undefined;
                            recommendedForIssueOrdinals?: {
                                [x: string]: number;
                            } | null | undefined;
                            prompt?: string | undefined;
                            isShared?: boolean | undefined;
                            description?: string | null | undefined;
                            pastTenseTitle?: string | undefined;
                            debriefAfterMinutes?: number | null | undefined;
                            image?: {
                                createdAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                updatedAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            likesCount?: number | null | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
                            isSuggested?: boolean | undefined;
                            type: "notifySupportGroup";
                            supportGroup: import("../utils/firestore").DocumentReferenceLike<unknown>;
                        } | {
                            createdAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            updatedAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                            sharedWithIssueIds?: string[] | undefined;
                            uid?: string | undefined;
                            recommendedForIssueIds?: string[] | undefined;
                            recommendedForIssueOrdinals?: {
                                [x: string]: number;
                            } | null | undefined;
                            prompt?: string | undefined;
                            isShared?: boolean | undefined;
                            description?: string | null | undefined;
                            pastTenseTitle?: string | undefined;
                            debriefAfterMinutes?: number | null | undefined;
                            image?: {
                                createdAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                updatedAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            likesCount?: number | null | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
                            isSuggested?: boolean | undefined;
                            url: string;
                            type: "link";
                        };
                        doc: import("../utils/firestore").DocumentReferenceLike<unknown>;
                    };
                };
                isHelpful: boolean | null;
            };
            data: {
                counterValue?: number | undefined;
                timeSeconds?: number | undefined;
                label?: {
                    color?: string | undefined;
                    text: string;
                } | null | undefined;
                formattedValue: string;
            };
        };
    } | null | undefined;
    tacticsData?: {
        [x: string]: {
            data?: {
                setAt: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                };
                isCompleted: NonNullable<boolean | undefined>;
            } | undefined;
            tactic: {
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                sharedWithIssueIds?: string[] | undefined;
                uid?: string | undefined;
                recommendedForIssueIds?: string[] | undefined;
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                prompt?: string | undefined;
                isShared?: boolean | undefined;
                description?: string | null | undefined;
                pastTenseTitle?: string | undefined;
                debriefAfterMinutes?: number | null | undefined;
                image?: {
                    createdAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                likesCount?: number | null | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
                isSuggested?: boolean | undefined;
                repeat?: yup.Maybe<number | undefined>;
                type: "breathingExercise";
                inFor: number;
                holdFor: number;
                outFor: number;
            } | {
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                sharedWithIssueIds?: string[] | undefined;
                uid?: string | undefined;
                recommendedForIssueIds?: string[] | undefined;
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                prompt?: string | undefined;
                isShared?: boolean | undefined;
                description?: string | null | undefined;
                pastTenseTitle?: string | undefined;
                debriefAfterMinutes?: number | null | undefined;
                image?: {
                    createdAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                likesCount?: number | null | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
                isSuggested?: boolean | undefined;
                type: "notifyASupportPerson";
                contactIds: string[];
            } | {
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                sharedWithIssueIds?: string[] | undefined;
                uid?: string | undefined;
                recommendedForIssueIds?: string[] | undefined;
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                prompt?: string | undefined;
                isShared?: boolean | undefined;
                description?: string | null | undefined;
                pastTenseTitle?: string | undefined;
                debriefAfterMinutes?: number | null | undefined;
                image?: {
                    createdAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                likesCount?: number | null | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
                isSuggested?: boolean | undefined;
                type: "steps";
                targetSteps: number;
            } | {
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                sharedWithIssueIds?: string[] | undefined;
                uid?: string | undefined;
                recommendedForIssueIds?: string[] | undefined;
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                isShared?: boolean | undefined;
                description?: string | null | undefined;
                pastTenseTitle?: string | undefined;
                debriefAfterMinutes?: number | null | undefined;
                image?: {
                    createdAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                likesCount?: number | null | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
                isSuggested?: boolean | undefined;
                audio?: {
                    createdAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | null | undefined;
                prompt: string;
                type: "basic";
            } | {
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                sharedWithIssueIds?: string[] | undefined;
                uid?: string | undefined;
                recommendedForIssueIds?: string[] | undefined;
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                prompt?: string | undefined;
                isShared?: boolean | undefined;
                description?: string | null | undefined;
                pastTenseTitle?: string | undefined;
                debriefAfterMinutes?: number | null | undefined;
                image?: {
                    createdAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                likesCount?: number | null | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
                isSuggested?: boolean | undefined;
                type: "video";
                video: {
                    storagePath?: string | null | undefined;
                    url?: string | null | undefined;
                };
            } | {
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                sharedWithIssueIds?: string[] | undefined;
                uid?: string | undefined;
                recommendedForIssueIds?: string[] | undefined;
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                prompt?: string | undefined;
                isShared?: boolean | undefined;
                description?: string | null | undefined;
                pastTenseTitle?: string | undefined;
                debriefAfterMinutes?: number | null | undefined;
                image?: {
                    createdAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                likesCount?: number | null | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
                isSuggested?: boolean | undefined;
                type: "notifySupportGroup";
                supportGroup: import("../utils/firestore").DocumentReferenceLike<unknown>;
            } | {
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                sharedWithIssueIds?: string[] | undefined;
                uid?: string | undefined;
                recommendedForIssueIds?: string[] | undefined;
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                prompt?: string | undefined;
                isShared?: boolean | undefined;
                description?: string | null | undefined;
                pastTenseTitle?: string | undefined;
                debriefAfterMinutes?: number | null | undefined;
                image?: {
                    createdAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                likesCount?: number | null | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
                isSuggested?: boolean | undefined;
                url: string;
                type: "link";
            };
            doc: import("../utils/firestore").DocumentReferenceLike<unknown>;
        };
    } | undefined;
    senderUid?: string | null | undefined;
    uid: string;
    type: "user";
    date: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    };
    dateString: string;
    role: "user";
} | {
    createdAt?: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    updatedAt?: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    text?: string | null | undefined;
    audioFile?: {
        createdAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        updatedAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        localFilePath?: yup.Maybe<string | undefined>;
        isDeleted?: boolean | undefined;
        metadata?: {} | null | undefined;
        thumbnailStoragePath?: yup.Maybe<string | undefined>;
        thumbnailUri?: yup.Maybe<string | undefined>;
        storagePath: string;
        url: string;
    } | undefined;
    metricData?: {
        [x: string]: {
            doc?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
            data: {
                label: string;
                metricInputValue: number;
                absoluteAttributeValue: number;
            };
            attribute: {
                name: string;
                key: string;
                icon: NonNullable<import("..").MetricIcons | undefined>;
            };
        };
    } | null | undefined;
    behaviorData?: {
        [x: string]: {
            color?: string | undefined;
            behavior: {
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                unit?: string | undefined;
                dailyLimit?: number | undefined;
                skipReminderAutoCreation?: boolean | undefined;
                name: string;
                ordinal: number;
                trackingType: NonNullable<"time" | "counter" | undefined>;
                tacticsById: {
                    [x: string]: {
                        data?: {
                            setAt: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            };
                            isCompleted: NonNullable<boolean | undefined>;
                        } | undefined;
                        tactic: {
                            createdAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            updatedAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                            sharedWithIssueIds?: string[] | undefined;
                            uid?: string | undefined;
                            recommendedForIssueIds?: string[] | undefined;
                            recommendedForIssueOrdinals?: {
                                [x: string]: number;
                            } | null | undefined;
                            prompt?: string | undefined;
                            isShared?: boolean | undefined;
                            description?: string | null | undefined;
                            pastTenseTitle?: string | undefined;
                            debriefAfterMinutes?: number | null | undefined;
                            image?: {
                                createdAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                updatedAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            likesCount?: number | null | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
                            isSuggested?: boolean | undefined;
                            repeat?: yup.Maybe<number | undefined>;
                            type: "breathingExercise";
                            inFor: number;
                            holdFor: number;
                            outFor: number;
                        } | {
                            createdAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            updatedAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                            sharedWithIssueIds?: string[] | undefined;
                            uid?: string | undefined;
                            recommendedForIssueIds?: string[] | undefined;
                            recommendedForIssueOrdinals?: {
                                [x: string]: number;
                            } | null | undefined;
                            prompt?: string | undefined;
                            isShared?: boolean | undefined;
                            description?: string | null | undefined;
                            pastTenseTitle?: string | undefined;
                            debriefAfterMinutes?: number | null | undefined;
                            image?: {
                                createdAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                updatedAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            likesCount?: number | null | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
                            isSuggested?: boolean | undefined;
                            type: "notifyASupportPerson";
                            contactIds: string[];
                        } | {
                            createdAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            updatedAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                            sharedWithIssueIds?: string[] | undefined;
                            uid?: string | undefined;
                            recommendedForIssueIds?: string[] | undefined;
                            recommendedForIssueOrdinals?: {
                                [x: string]: number;
                            } | null | undefined;
                            prompt?: string | undefined;
                            isShared?: boolean | undefined;
                            description?: string | null | undefined;
                            pastTenseTitle?: string | undefined;
                            debriefAfterMinutes?: number | null | undefined;
                            image?: {
                                createdAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                updatedAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            likesCount?: number | null | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
                            isSuggested?: boolean | undefined;
                            type: "steps";
                            targetSteps: number;
                        } | {
                            createdAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            updatedAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                            sharedWithIssueIds?: string[] | undefined;
                            uid?: string | undefined;
                            recommendedForIssueIds?: string[] | undefined;
                            recommendedForIssueOrdinals?: {
                                [x: string]: number;
                            } | null | undefined;
                            isShared?: boolean | undefined;
                            description?: string | null | undefined;
                            pastTenseTitle?: string | undefined;
                            debriefAfterMinutes?: number | null | undefined;
                            image?: {
                                createdAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                updatedAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            likesCount?: number | null | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
                            isSuggested?: boolean | undefined;
                            audio?: {
                                createdAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                updatedAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | null | undefined;
                            prompt: string;
                            type: "basic";
                        } | {
                            createdAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            updatedAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                            sharedWithIssueIds?: string[] | undefined;
                            uid?: string | undefined;
                            recommendedForIssueIds?: string[] | undefined;
                            recommendedForIssueOrdinals?: {
                                [x: string]: number;
                            } | null | undefined;
                            prompt?: string | undefined;
                            isShared?: boolean | undefined;
                            description?: string | null | undefined;
                            pastTenseTitle?: string | undefined;
                            debriefAfterMinutes?: number | null | undefined;
                            image?: {
                                createdAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                updatedAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            likesCount?: number | null | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
                            isSuggested?: boolean | undefined;
                            type: "video";
                            video: {
                                storagePath?: string | null | undefined;
                                url?: string | null | undefined;
                            };
                        } | {
                            createdAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            updatedAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                            sharedWithIssueIds?: string[] | undefined;
                            uid?: string | undefined;
                            recommendedForIssueIds?: string[] | undefined;
                            recommendedForIssueOrdinals?: {
                                [x: string]: number;
                            } | null | undefined;
                            prompt?: string | undefined;
                            isShared?: boolean | undefined;
                            description?: string | null | undefined;
                            pastTenseTitle?: string | undefined;
                            debriefAfterMinutes?: number | null | undefined;
                            image?: {
                                createdAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                updatedAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            likesCount?: number | null | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
                            isSuggested?: boolean | undefined;
                            type: "notifySupportGroup";
                            supportGroup: import("../utils/firestore").DocumentReferenceLike<unknown>;
                        } | {
                            createdAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            updatedAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                            sharedWithIssueIds?: string[] | undefined;
                            uid?: string | undefined;
                            recommendedForIssueIds?: string[] | undefined;
                            recommendedForIssueOrdinals?: {
                                [x: string]: number;
                            } | null | undefined;
                            prompt?: string | undefined;
                            isShared?: boolean | undefined;
                            description?: string | null | undefined;
                            pastTenseTitle?: string | undefined;
                            debriefAfterMinutes?: number | null | undefined;
                            image?: {
                                createdAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                updatedAt?: {
                                    isEqual?: any;
                                    toMillis?: any;
                                    seconds: number;
                                    nanoseconds: number;
                                    toDate: Function;
                                } | null | undefined;
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            likesCount?: number | null | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
                            isSuggested?: boolean | undefined;
                            url: string;
                            type: "link";
                        };
                        doc: import("../utils/firestore").DocumentReferenceLike<unknown>;
                    };
                };
                isHelpful: boolean | null;
            };
            data: {
                counterValue?: number | undefined;
                timeSeconds?: number | undefined;
                label?: {
                    color?: string | undefined;
                    text: string;
                } | null | undefined;
                formattedValue: string;
            };
        };
    } | null | undefined;
    tacticsData?: {
        [x: string]: {
            data?: {
                setAt: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                };
                isCompleted: NonNullable<boolean | undefined>;
            } | undefined;
            tactic: {
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                sharedWithIssueIds?: string[] | undefined;
                uid?: string | undefined;
                recommendedForIssueIds?: string[] | undefined;
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                prompt?: string | undefined;
                isShared?: boolean | undefined;
                description?: string | null | undefined;
                pastTenseTitle?: string | undefined;
                debriefAfterMinutes?: number | null | undefined;
                image?: {
                    createdAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                likesCount?: number | null | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
                isSuggested?: boolean | undefined;
                repeat?: yup.Maybe<number | undefined>;
                type: "breathingExercise";
                inFor: number;
                holdFor: number;
                outFor: number;
            } | {
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                sharedWithIssueIds?: string[] | undefined;
                uid?: string | undefined;
                recommendedForIssueIds?: string[] | undefined;
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                prompt?: string | undefined;
                isShared?: boolean | undefined;
                description?: string | null | undefined;
                pastTenseTitle?: string | undefined;
                debriefAfterMinutes?: number | null | undefined;
                image?: {
                    createdAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                likesCount?: number | null | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
                isSuggested?: boolean | undefined;
                type: "notifyASupportPerson";
                contactIds: string[];
            } | {
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                sharedWithIssueIds?: string[] | undefined;
                uid?: string | undefined;
                recommendedForIssueIds?: string[] | undefined;
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                prompt?: string | undefined;
                isShared?: boolean | undefined;
                description?: string | null | undefined;
                pastTenseTitle?: string | undefined;
                debriefAfterMinutes?: number | null | undefined;
                image?: {
                    createdAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                likesCount?: number | null | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
                isSuggested?: boolean | undefined;
                type: "steps";
                targetSteps: number;
            } | {
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                sharedWithIssueIds?: string[] | undefined;
                uid?: string | undefined;
                recommendedForIssueIds?: string[] | undefined;
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                isShared?: boolean | undefined;
                description?: string | null | undefined;
                pastTenseTitle?: string | undefined;
                debriefAfterMinutes?: number | null | undefined;
                image?: {
                    createdAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                likesCount?: number | null | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
                isSuggested?: boolean | undefined;
                audio?: {
                    createdAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | null | undefined;
                prompt: string;
                type: "basic";
            } | {
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                sharedWithIssueIds?: string[] | undefined;
                uid?: string | undefined;
                recommendedForIssueIds?: string[] | undefined;
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                prompt?: string | undefined;
                isShared?: boolean | undefined;
                description?: string | null | undefined;
                pastTenseTitle?: string | undefined;
                debriefAfterMinutes?: number | null | undefined;
                image?: {
                    createdAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                likesCount?: number | null | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
                isSuggested?: boolean | undefined;
                type: "video";
                video: {
                    storagePath?: string | null | undefined;
                    url?: string | null | undefined;
                };
            } | {
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                sharedWithIssueIds?: string[] | undefined;
                uid?: string | undefined;
                recommendedForIssueIds?: string[] | undefined;
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                prompt?: string | undefined;
                isShared?: boolean | undefined;
                description?: string | null | undefined;
                pastTenseTitle?: string | undefined;
                debriefAfterMinutes?: number | null | undefined;
                image?: {
                    createdAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                likesCount?: number | null | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
                isSuggested?: boolean | undefined;
                type: "notifySupportGroup";
                supportGroup: import("../utils/firestore").DocumentReferenceLike<unknown>;
            } | {
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
                sharedWithIssueIds?: string[] | undefined;
                uid?: string | undefined;
                recommendedForIssueIds?: string[] | undefined;
                recommendedForIssueOrdinals?: {
                    [x: string]: number;
                } | null | undefined;
                prompt?: string | undefined;
                isShared?: boolean | undefined;
                description?: string | null | undefined;
                pastTenseTitle?: string | undefined;
                debriefAfterMinutes?: number | null | undefined;
                image?: {
                    createdAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        isEqual?: any;
                        toMillis?: any;
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                likesCount?: number | null | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
                isSuggested?: boolean | undefined;
                url: string;
                type: "link";
            };
            doc: import("../utils/firestore").DocumentReferenceLike<unknown>;
        };
    } | undefined;
    senderUid?: string | null | undefined;
    files?: yup.Maybe<{
        createdAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        updatedAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        localFilePath?: yup.Maybe<string | undefined>;
        isDeleted?: boolean | undefined;
        metadata?: {} | null | undefined;
        thumbnailStoragePath?: yup.Maybe<string | undefined>;
        thumbnailUri?: yup.Maybe<string | undefined>;
        storagePath: string;
        url: string;
    }[] | undefined>;
    uid: string;
    type: "whatsappMessage";
    date: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    };
    dateString: string;
}>, yup.AnyObject, any>;
export type LogValues = {
    [K in LogValue['type']]: WithTacticsById<yup.InferType<(typeof logSchemas)[K]>>;
};
export type LogValue = UserLogValue | CallLogValue | ShowTourLogValue | ToolCallLogValue | WhatsappMessageLogValue | GameplanLogValue | GptLogValue;
