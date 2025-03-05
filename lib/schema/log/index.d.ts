import * as yup from 'yup';
import { CallLogValue } from './call';
import { GptLogValue } from './gpt';
import { ImpulseLogValue } from './impulse';
import { MeetingLogValue } from './meeting';
import { OutcomeLogValue } from './outcome';
import { ShowTourLogValue } from './showTour';
import { ToolCallLogValue } from './toolCall';
import { UserLogValue } from './user';
import { WithTacticsById } from './utils/tacticData';
import { WhatsappMessageLogValue } from './whatsappMessage';
export * from './call';
export * from './gpt';
export * from './impulse';
export * from './meeting';
export * from './outcome';
export * from './showTour';
export * from './toolCall';
export * from './user';
export * from './whatsappMessage';
export * from './utils/behaviorData';
export * from './utils/metricData';
export * from './utils/tacticData';
export declare const logSchemas: Record<LogValue['type'], yup.ObjectSchema<LogValue>>;
export declare const logSchema: yup.Lazy<WithTacticsById<{
    text?: string | null | undefined;
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
    audioFile?: {
        localFilePath?: yup.Maybe<string | undefined>;
        isDeleted?: boolean | undefined;
        metadata?: {} | null | undefined;
        thumbnailStoragePath?: yup.Maybe<string | undefined>;
        thumbnailUri?: yup.Maybe<string | undefined>;
        storagePath: string;
        url: string;
    } | undefined;
    skipGptResponse?: boolean | undefined;
    metricData?: {
        [x: string]: {
            doc?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
            data: {
                label: string;
                metricInputValue: number;
                absoluteAttributeValue: number;
            };
            attribute: {
                icon?: import("..").MetricIcons | undefined;
                name: string;
                key: string;
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
                trackingUnit?: string | undefined;
                dailyLimit?: number | undefined;
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
                            uid?: string | undefined;
                            prompt?: string | undefined;
                            description?: string | null | undefined;
                            image?: {
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
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
                            uid?: string | undefined;
                            prompt?: string | undefined;
                            description?: string | null | undefined;
                            image?: {
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
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
                            uid?: string | undefined;
                            prompt?: string | undefined;
                            description?: string | null | undefined;
                            image?: {
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
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
                            uid?: string | undefined;
                            description?: string | null | undefined;
                            image?: {
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
                            audio?: {
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
                            uid?: string | undefined;
                            prompt?: string | undefined;
                            description?: string | null | undefined;
                            image?: {
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
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
                            uid?: string | undefined;
                            prompt?: string | undefined;
                            description?: string | null | undefined;
                            image?: {
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
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
                            uid?: string | undefined;
                            prompt?: string | undefined;
                            description?: string | null | undefined;
                            image?: {
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
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
    senderUid?: string | null | undefined;
    senderName?: string | null | undefined;
    agentConnectedAt?: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    endedAt?: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    startedSummarizingTranscriptAt?: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    finishedSummarizingTranscriptAt?: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    formattedDuration?: string | undefined;
    transcriptSummary?: string | undefined;
    transcriptItems?: {
        text: string;
        timestamp: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        };
    }[] | undefined;
    uid: string;
    type: "call";
    tacticsData: {
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
                uid?: string | undefined;
                prompt?: string | undefined;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
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
                uid?: string | undefined;
                prompt?: string | undefined;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
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
                uid?: string | undefined;
                prompt?: string | undefined;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
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
                uid?: string | undefined;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
                audio?: {
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
                uid?: string | undefined;
                prompt?: string | undefined;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
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
                uid?: string | undefined;
                prompt?: string | undefined;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
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
                uid?: string | undefined;
                prompt?: string | undefined;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
                url: string;
                type: "link";
            };
            doc: import("../utils/firestore").DocumentReferenceLike<unknown>;
        };
    };
    date: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    };
    isDisplayable: NonNullable<boolean | undefined>;
    dateString: string;
    agentContext: string;
} | {
    text?: string | null | undefined;
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
    audioFile?: {
        localFilePath?: yup.Maybe<string | undefined>;
        isDeleted?: boolean | undefined;
        metadata?: {} | null | undefined;
        thumbnailStoragePath?: yup.Maybe<string | undefined>;
        thumbnailUri?: yup.Maybe<string | undefined>;
        storagePath: string;
        url: string;
    } | undefined;
    skipGptResponse?: boolean | undefined;
    metricData?: {
        [x: string]: {
            doc?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
            data: {
                label: string;
                metricInputValue: number;
                absoluteAttributeValue: number;
            };
            attribute: {
                icon?: import("..").MetricIcons | undefined;
                name: string;
                key: string;
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
                trackingUnit?: string | undefined;
                dailyLimit?: number | undefined;
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
                            uid?: string | undefined;
                            prompt?: string | undefined;
                            description?: string | null | undefined;
                            image?: {
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
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
                            uid?: string | undefined;
                            prompt?: string | undefined;
                            description?: string | null | undefined;
                            image?: {
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
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
                            uid?: string | undefined;
                            prompt?: string | undefined;
                            description?: string | null | undefined;
                            image?: {
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
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
                            uid?: string | undefined;
                            description?: string | null | undefined;
                            image?: {
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
                            audio?: {
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
                            uid?: string | undefined;
                            prompt?: string | undefined;
                            description?: string | null | undefined;
                            image?: {
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
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
                            uid?: string | undefined;
                            prompt?: string | undefined;
                            description?: string | null | undefined;
                            image?: {
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
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
                            uid?: string | undefined;
                            prompt?: string | undefined;
                            description?: string | null | undefined;
                            image?: {
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
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
    senderUid?: string | null | undefined;
    senderName?: string | null | undefined;
    suggestedResponses?: string[] | undefined;
    toolCallResponses?: {
        role: "tool";
        tool_call_id: string;
        content: string;
    }[] | undefined;
    uid: string;
    type: "gpt";
    message: {
        role?: "assistant" | undefined;
        tool_calls?: (import("openai/resources").ChatCompletionMessageToolCall | undefined)[] | undefined;
    };
    tacticsData: {
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
                uid?: string | undefined;
                prompt?: string | undefined;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
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
                uid?: string | undefined;
                prompt?: string | undefined;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
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
                uid?: string | undefined;
                prompt?: string | undefined;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
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
                uid?: string | undefined;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
                audio?: {
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
                uid?: string | undefined;
                prompt?: string | undefined;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
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
                uid?: string | undefined;
                prompt?: string | undefined;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
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
                uid?: string | undefined;
                prompt?: string | undefined;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
                url: string;
                type: "link";
            };
            doc: import("../utils/firestore").DocumentReferenceLike<unknown>;
        };
    };
    date: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    };
    isDisplayable: NonNullable<boolean | undefined>;
    dateString: string;
    role: "assistant";
} | {
    text?: string | null | undefined;
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
    audioFile?: {
        localFilePath?: yup.Maybe<string | undefined>;
        isDeleted?: boolean | undefined;
        metadata?: {} | null | undefined;
        thumbnailStoragePath?: yup.Maybe<string | undefined>;
        thumbnailUri?: yup.Maybe<string | undefined>;
        storagePath: string;
        url: string;
    } | undefined;
    skipGptResponse?: boolean | undefined;
    metricData?: {
        [x: string]: {
            doc?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
            data: {
                label: string;
                metricInputValue: number;
                absoluteAttributeValue: number;
            };
            attribute: {
                icon?: import("..").MetricIcons | undefined;
                name: string;
                key: string;
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
                trackingUnit?: string | undefined;
                dailyLimit?: number | undefined;
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
                            uid?: string | undefined;
                            prompt?: string | undefined;
                            description?: string | null | undefined;
                            image?: {
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
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
                            uid?: string | undefined;
                            prompt?: string | undefined;
                            description?: string | null | undefined;
                            image?: {
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
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
                            uid?: string | undefined;
                            prompt?: string | undefined;
                            description?: string | null | undefined;
                            image?: {
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
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
                            uid?: string | undefined;
                            description?: string | null | undefined;
                            image?: {
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
                            audio?: {
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
                            uid?: string | undefined;
                            prompt?: string | undefined;
                            description?: string | null | undefined;
                            image?: {
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
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
                            uid?: string | undefined;
                            prompt?: string | undefined;
                            description?: string | null | undefined;
                            image?: {
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
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
                            uid?: string | undefined;
                            prompt?: string | undefined;
                            description?: string | null | undefined;
                            image?: {
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
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
    senderUid?: string | null | undefined;
    senderName?: string | null | undefined;
    triggerDoc?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
    uid: string;
    type: "impulse";
    tacticsData: {
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
                uid?: string | undefined;
                prompt?: string | undefined;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
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
                uid?: string | undefined;
                prompt?: string | undefined;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
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
                uid?: string | undefined;
                prompt?: string | undefined;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
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
                uid?: string | undefined;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
                audio?: {
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
                uid?: string | undefined;
                prompt?: string | undefined;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
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
                uid?: string | undefined;
                prompt?: string | undefined;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
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
                uid?: string | undefined;
                prompt?: string | undefined;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
                url: string;
                type: "link";
            };
            doc: import("../utils/firestore").DocumentReferenceLike<unknown>;
        };
    };
    date: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    };
    isDisplayable: NonNullable<boolean | undefined>;
    dateString: string;
    role: "user";
} | {
    text?: string | null | undefined;
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
    audioFile?: {
        localFilePath?: yup.Maybe<string | undefined>;
        isDeleted?: boolean | undefined;
        metadata?: {} | null | undefined;
        thumbnailStoragePath?: yup.Maybe<string | undefined>;
        thumbnailUri?: yup.Maybe<string | undefined>;
        storagePath: string;
        url: string;
    } | undefined;
    skipGptResponse?: boolean | undefined;
    metricData?: {
        [x: string]: {
            doc?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
            data: {
                label: string;
                metricInputValue: number;
                absoluteAttributeValue: number;
            };
            attribute: {
                icon?: import("..").MetricIcons | undefined;
                name: string;
                key: string;
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
                trackingUnit?: string | undefined;
                dailyLimit?: number | undefined;
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
                            uid?: string | undefined;
                            prompt?: string | undefined;
                            description?: string | null | undefined;
                            image?: {
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
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
                            uid?: string | undefined;
                            prompt?: string | undefined;
                            description?: string | null | undefined;
                            image?: {
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
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
                            uid?: string | undefined;
                            prompt?: string | undefined;
                            description?: string | null | undefined;
                            image?: {
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
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
                            uid?: string | undefined;
                            description?: string | null | undefined;
                            image?: {
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
                            audio?: {
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
                            uid?: string | undefined;
                            prompt?: string | undefined;
                            description?: string | null | undefined;
                            image?: {
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
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
                            uid?: string | undefined;
                            prompt?: string | undefined;
                            description?: string | null | undefined;
                            image?: {
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
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
                            uid?: string | undefined;
                            prompt?: string | undefined;
                            description?: string | null | undefined;
                            image?: {
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
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
    senderUid?: string | null | undefined;
    senderName?: string | null | undefined;
    uid: string;
    type: "meeting";
    tacticsData: {
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
                uid?: string | undefined;
                prompt?: string | undefined;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
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
                uid?: string | undefined;
                prompt?: string | undefined;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
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
                uid?: string | undefined;
                prompt?: string | undefined;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
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
                uid?: string | undefined;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
                audio?: {
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
                uid?: string | undefined;
                prompt?: string | undefined;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
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
                uid?: string | undefined;
                prompt?: string | undefined;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
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
                uid?: string | undefined;
                prompt?: string | undefined;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
                url: string;
                type: "link";
            };
            doc: import("../utils/firestore").DocumentReferenceLike<unknown>;
        };
    };
    date: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    };
    isDisplayable: NonNullable<boolean | undefined>;
    dateString: string;
    mentorName: string;
    mentorAvatarUrl: string;
} | {
    text?: string | null | undefined;
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
    audioFile?: {
        localFilePath?: yup.Maybe<string | undefined>;
        isDeleted?: boolean | undefined;
        metadata?: {} | null | undefined;
        thumbnailStoragePath?: yup.Maybe<string | undefined>;
        thumbnailUri?: yup.Maybe<string | undefined>;
        storagePath: string;
        url: string;
    } | undefined;
    skipGptResponse?: boolean | undefined;
    metricData?: {
        [x: string]: {
            doc?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
            data: {
                label: string;
                metricInputValue: number;
                absoluteAttributeValue: number;
            };
            attribute: {
                icon?: import("..").MetricIcons | undefined;
                name: string;
                key: string;
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
                trackingUnit?: string | undefined;
                dailyLimit?: number | undefined;
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
                            uid?: string | undefined;
                            prompt?: string | undefined;
                            description?: string | null | undefined;
                            image?: {
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
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
                            uid?: string | undefined;
                            prompt?: string | undefined;
                            description?: string | null | undefined;
                            image?: {
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
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
                            uid?: string | undefined;
                            prompt?: string | undefined;
                            description?: string | null | undefined;
                            image?: {
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
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
                            uid?: string | undefined;
                            description?: string | null | undefined;
                            image?: {
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
                            audio?: {
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
                            uid?: string | undefined;
                            prompt?: string | undefined;
                            description?: string | null | undefined;
                            image?: {
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
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
                            uid?: string | undefined;
                            prompt?: string | undefined;
                            description?: string | null | undefined;
                            image?: {
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
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
                            uid?: string | undefined;
                            prompt?: string | undefined;
                            description?: string | null | undefined;
                            image?: {
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
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
    senderUid?: string | null | undefined;
    senderName?: string | null | undefined;
    audioTranscript?: string | undefined;
    audioTranscribedLocally?: boolean | undefined;
    uid: string;
    type: "user";
    tacticsData: {
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
                uid?: string | undefined;
                prompt?: string | undefined;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
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
                uid?: string | undefined;
                prompt?: string | undefined;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
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
                uid?: string | undefined;
                prompt?: string | undefined;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
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
                uid?: string | undefined;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
                audio?: {
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
                uid?: string | undefined;
                prompt?: string | undefined;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
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
                uid?: string | undefined;
                prompt?: string | undefined;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
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
                uid?: string | undefined;
                prompt?: string | undefined;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
                url: string;
                type: "link";
            };
            doc: import("../utils/firestore").DocumentReferenceLike<unknown>;
        };
    };
    date: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    };
    isDisplayable: NonNullable<boolean | undefined>;
    dateString: string;
    role: "user";
} | {
    text?: string | null | undefined;
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
    icon?: import("./showTour").TourIcon | undefined;
    audioFile?: {
        localFilePath?: yup.Maybe<string | undefined>;
        isDeleted?: boolean | undefined;
        metadata?: {} | null | undefined;
        thumbnailStoragePath?: yup.Maybe<string | undefined>;
        thumbnailUri?: yup.Maybe<string | undefined>;
        storagePath: string;
        url: string;
    } | undefined;
    skipGptResponse?: boolean | undefined;
    metricData?: {
        [x: string]: {
            doc?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
            data: {
                label: string;
                metricInputValue: number;
                absoluteAttributeValue: number;
            };
            attribute: {
                icon?: import("..").MetricIcons | undefined;
                name: string;
                key: string;
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
                trackingUnit?: string | undefined;
                dailyLimit?: number | undefined;
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
                            uid?: string | undefined;
                            prompt?: string | undefined;
                            description?: string | null | undefined;
                            image?: {
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
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
                            uid?: string | undefined;
                            prompt?: string | undefined;
                            description?: string | null | undefined;
                            image?: {
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
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
                            uid?: string | undefined;
                            prompt?: string | undefined;
                            description?: string | null | undefined;
                            image?: {
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
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
                            uid?: string | undefined;
                            description?: string | null | undefined;
                            image?: {
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
                            audio?: {
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
                            uid?: string | undefined;
                            prompt?: string | undefined;
                            description?: string | null | undefined;
                            image?: {
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
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
                            uid?: string | undefined;
                            prompt?: string | undefined;
                            description?: string | null | undefined;
                            image?: {
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
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
                            uid?: string | undefined;
                            prompt?: string | undefined;
                            description?: string | null | undefined;
                            image?: {
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
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
    senderUid?: string | null | undefined;
    senderName?: string | null | undefined;
    firstNavigateToRoute?: string | undefined;
    startButtonLabel?: string | undefined;
    animationFileName?: string | undefined;
    completedAt?: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    uid: string;
    type: "showTour";
    steps: {
        nextOnImpulseButtonPress?: boolean | undefined;
        borderRadius?: number | undefined;
        innerPadding?: number | undefined;
        description: string;
        elementRefName: string;
        title: string;
        confirmButtonLabel: string;
    }[];
    tacticsData: {
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
                uid?: string | undefined;
                prompt?: string | undefined;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
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
                uid?: string | undefined;
                prompt?: string | undefined;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
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
                uid?: string | undefined;
                prompt?: string | undefined;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
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
                uid?: string | undefined;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
                audio?: {
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
                uid?: string | undefined;
                prompt?: string | undefined;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
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
                uid?: string | undefined;
                prompt?: string | undefined;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
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
                uid?: string | undefined;
                prompt?: string | undefined;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
                url: string;
                type: "link";
            };
            doc: import("../utils/firestore").DocumentReferenceLike<unknown>;
        };
    };
    date: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    };
    isDisplayable: NonNullable<boolean | undefined>;
    dateString: string;
    role: "assistant";
} | {
    text?: string | null | undefined;
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
    audioFile?: {
        localFilePath?: yup.Maybe<string | undefined>;
        isDeleted?: boolean | undefined;
        metadata?: {} | null | undefined;
        thumbnailStoragePath?: yup.Maybe<string | undefined>;
        thumbnailUri?: yup.Maybe<string | undefined>;
        storagePath: string;
        url: string;
    } | undefined;
    skipGptResponse?: boolean | undefined;
    metricData?: {
        [x: string]: {
            doc?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
            data: {
                label: string;
                metricInputValue: number;
                absoluteAttributeValue: number;
            };
            attribute: {
                icon?: import("..").MetricIcons | undefined;
                name: string;
                key: string;
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
                trackingUnit?: string | undefined;
                dailyLimit?: number | undefined;
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
                            uid?: string | undefined;
                            prompt?: string | undefined;
                            description?: string | null | undefined;
                            image?: {
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
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
                            uid?: string | undefined;
                            prompt?: string | undefined;
                            description?: string | null | undefined;
                            image?: {
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
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
                            uid?: string | undefined;
                            prompt?: string | undefined;
                            description?: string | null | undefined;
                            image?: {
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
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
                            uid?: string | undefined;
                            description?: string | null | undefined;
                            image?: {
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
                            audio?: {
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
                            uid?: string | undefined;
                            prompt?: string | undefined;
                            description?: string | null | undefined;
                            image?: {
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
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
                            uid?: string | undefined;
                            prompt?: string | undefined;
                            description?: string | null | undefined;
                            image?: {
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
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
                            uid?: string | undefined;
                            prompt?: string | undefined;
                            description?: string | null | undefined;
                            image?: {
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
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
    senderUid?: string | null | undefined;
    senderName?: string | null | undefined;
    uid: string;
    type: "toolCall";
    tacticsData: {
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
                uid?: string | undefined;
                prompt?: string | undefined;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
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
                uid?: string | undefined;
                prompt?: string | undefined;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
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
                uid?: string | undefined;
                prompt?: string | undefined;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
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
                uid?: string | undefined;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
                audio?: {
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
                uid?: string | undefined;
                prompt?: string | undefined;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
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
                uid?: string | undefined;
                prompt?: string | undefined;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
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
                uid?: string | undefined;
                prompt?: string | undefined;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
                url: string;
                type: "link";
            };
            doc: import("../utils/firestore").DocumentReferenceLike<unknown>;
        };
    };
    date: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    };
    isDisplayable: NonNullable<boolean | undefined>;
    dateString: string;
    role: "tool";
    toolCallId: string;
} | {
    text?: string | null | undefined;
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
    audioFile?: {
        localFilePath?: yup.Maybe<string | undefined>;
        isDeleted?: boolean | undefined;
        metadata?: {} | null | undefined;
        thumbnailStoragePath?: yup.Maybe<string | undefined>;
        thumbnailUri?: yup.Maybe<string | undefined>;
        storagePath: string;
        url: string;
    } | undefined;
    skipGptResponse?: boolean | undefined;
    metricData?: {
        [x: string]: {
            doc?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
            data: {
                label: string;
                metricInputValue: number;
                absoluteAttributeValue: number;
            };
            attribute: {
                icon?: import("..").MetricIcons | undefined;
                name: string;
                key: string;
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
                trackingUnit?: string | undefined;
                dailyLimit?: number | undefined;
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
                            uid?: string | undefined;
                            prompt?: string | undefined;
                            description?: string | null | undefined;
                            image?: {
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
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
                            uid?: string | undefined;
                            prompt?: string | undefined;
                            description?: string | null | undefined;
                            image?: {
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
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
                            uid?: string | undefined;
                            prompt?: string | undefined;
                            description?: string | null | undefined;
                            image?: {
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
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
                            uid?: string | undefined;
                            description?: string | null | undefined;
                            image?: {
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
                            audio?: {
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
                            uid?: string | undefined;
                            prompt?: string | undefined;
                            description?: string | null | undefined;
                            image?: {
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
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
                            uid?: string | undefined;
                            prompt?: string | undefined;
                            description?: string | null | undefined;
                            image?: {
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
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
                            uid?: string | undefined;
                            prompt?: string | undefined;
                            description?: string | null | undefined;
                            image?: {
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
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
    senderUid?: string | null | undefined;
    senderName?: string | null | undefined;
    files?: yup.Maybe<{
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
    tacticsData: {
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
                uid?: string | undefined;
                prompt?: string | undefined;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
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
                uid?: string | undefined;
                prompt?: string | undefined;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
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
                uid?: string | undefined;
                prompt?: string | undefined;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
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
                uid?: string | undefined;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
                audio?: {
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
                uid?: string | undefined;
                prompt?: string | undefined;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
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
                uid?: string | undefined;
                prompt?: string | undefined;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
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
                uid?: string | undefined;
                prompt?: string | undefined;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
                url: string;
                type: "link";
            };
            doc: import("../utils/firestore").DocumentReferenceLike<unknown>;
        };
    };
    date: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    };
    isDisplayable: NonNullable<boolean | undefined>;
    dateString: string;
} | {
    text?: string | null | undefined;
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
    audioFile?: {
        localFilePath?: yup.Maybe<string | undefined>;
        isDeleted?: boolean | undefined;
        metadata?: {} | null | undefined;
        thumbnailStoragePath?: yup.Maybe<string | undefined>;
        thumbnailUri?: yup.Maybe<string | undefined>;
        storagePath: string;
        url: string;
    } | undefined;
    skipGptResponse?: boolean | undefined;
    metricData?: {
        [x: string]: {
            doc?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
            data: {
                label: string;
                metricInputValue: number;
                absoluteAttributeValue: number;
            };
            attribute: {
                icon?: import("..").MetricIcons | undefined;
                name: string;
                key: string;
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
                trackingUnit?: string | undefined;
                dailyLimit?: number | undefined;
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
                            uid?: string | undefined;
                            prompt?: string | undefined;
                            description?: string | null | undefined;
                            image?: {
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
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
                            uid?: string | undefined;
                            prompt?: string | undefined;
                            description?: string | null | undefined;
                            image?: {
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
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
                            uid?: string | undefined;
                            prompt?: string | undefined;
                            description?: string | null | undefined;
                            image?: {
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
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
                            uid?: string | undefined;
                            description?: string | null | undefined;
                            image?: {
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
                            audio?: {
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
                            uid?: string | undefined;
                            prompt?: string | undefined;
                            description?: string | null | undefined;
                            image?: {
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
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
                            uid?: string | undefined;
                            prompt?: string | undefined;
                            description?: string | null | undefined;
                            image?: {
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
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
                            uid?: string | undefined;
                            prompt?: string | undefined;
                            description?: string | null | undefined;
                            image?: {
                                localFilePath?: yup.Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                                thumbnailUri?: yup.Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            timerSeconds?: yup.Maybe<number | undefined>;
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
    senderUid?: string | null | undefined;
    senderName?: string | null | undefined;
    uid: string;
    type: "outcome";
    tacticsData: {
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
                uid?: string | undefined;
                prompt?: string | undefined;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
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
                uid?: string | undefined;
                prompt?: string | undefined;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
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
                uid?: string | undefined;
                prompt?: string | undefined;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
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
                uid?: string | undefined;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
                audio?: {
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
                uid?: string | undefined;
                prompt?: string | undefined;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
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
                uid?: string | undefined;
                prompt?: string | undefined;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
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
                uid?: string | undefined;
                prompt?: string | undefined;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: yup.Maybe<string | undefined>;
                    thumbnailUri?: yup.Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
                url: string;
                type: "link";
            };
            doc: import("../utils/firestore").DocumentReferenceLike<unknown>;
        };
    };
    date: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    };
    isDisplayable: NonNullable<boolean | undefined>;
    dateString: string;
    role: "user";
    outcome: NonNullable<"success" | "setback" | undefined>;
}>, yup.AnyObject, any>;
export type LogValues = {
    [K in LogValue['type']]: WithTacticsById<yup.InferType<(typeof logSchemas)[K]>>;
};
export type LogValue = UserLogValue | CallLogValue | MeetingLogValue | ShowTourLogValue | ToolCallLogValue | WhatsappMessageLogValue | ImpulseLogValue | OutcomeLogValue | GptLogValue;
