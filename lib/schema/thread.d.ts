import * as yup from 'yup';
import { LogsById } from './day';
export declare enum AgentType {
    GENERAL = "general",
    ONBOARDING = "onboarding",
    DEBRIEFING = "debriefing",
    IMPULSE = "impulse"
}
export declare const outcome: yup.MixedSchema<"success" | "setback" | undefined, yup.AnyObject, undefined, "">;
export declare const agentType: yup.MixedSchema<AgentType | undefined, yup.AnyObject, undefined, "">;
export declare const threadSchema: yup.ObjectSchema<{
    isDisplayable: NonNullable<boolean | undefined>;
    dateString: string;
    date: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    };
    title: string | undefined;
    summary: string | undefined;
    logsById: {
        [x: string]: {
            doc: import("./utils/firestore").DocumentReferenceLike<unknown>;
            log: import("./log").WithTacticsById<{
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
                metricData?: {
                    [x: string]: {
                        doc?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                        data: {
                            label: string;
                            metricInputValue: number;
                            absoluteAttributeValue: number;
                        };
                        attribute: {
                            icon?: import("./metric").MetricIcons | undefined;
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
                                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        supportGroup: import("./utils/firestore").DocumentReferenceLike<unknown>;
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
                                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                    doc: import("./utils/firestore").DocumentReferenceLike<unknown>;
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
                            sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            supportGroup: import("./utils/firestore").DocumentReferenceLike<unknown>;
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
                            sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                        doc: import("./utils/firestore").DocumentReferenceLike<unknown>;
                    };
                } | undefined;
                skipGptResponse?: boolean | undefined;
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
                date: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                };
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
                metricData?: {
                    [x: string]: {
                        doc?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                        data: {
                            label: string;
                            metricInputValue: number;
                            absoluteAttributeValue: number;
                        };
                        attribute: {
                            icon?: import("./metric").MetricIcons | undefined;
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
                                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        supportGroup: import("./utils/firestore").DocumentReferenceLike<unknown>;
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
                                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                    doc: import("./utils/firestore").DocumentReferenceLike<unknown>;
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
                            sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            supportGroup: import("./utils/firestore").DocumentReferenceLike<unknown>;
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
                            sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                        doc: import("./utils/firestore").DocumentReferenceLike<unknown>;
                    };
                } | undefined;
                skipGptResponse?: boolean | undefined;
                senderUid?: string | null | undefined;
                senderName?: string | null | undefined;
                suggestedResponses?: string[] | undefined;
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
                metricData?: {
                    [x: string]: {
                        doc?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                        data: {
                            label: string;
                            metricInputValue: number;
                            absoluteAttributeValue: number;
                        };
                        attribute: {
                            icon?: import("./metric").MetricIcons | undefined;
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
                                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        supportGroup: import("./utils/firestore").DocumentReferenceLike<unknown>;
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
                                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                    doc: import("./utils/firestore").DocumentReferenceLike<unknown>;
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
                            sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            supportGroup: import("./utils/firestore").DocumentReferenceLike<unknown>;
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
                            sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                        doc: import("./utils/firestore").DocumentReferenceLike<unknown>;
                    };
                } | undefined;
                skipGptResponse?: boolean | undefined;
                senderUid?: string | null | undefined;
                senderName?: string | null | undefined;
                triggerDoc?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                uid: string;
                type: "impulse";
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
                metricData?: {
                    [x: string]: {
                        doc?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                        data: {
                            label: string;
                            metricInputValue: number;
                            absoluteAttributeValue: number;
                        };
                        attribute: {
                            icon?: import("./metric").MetricIcons | undefined;
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
                                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        supportGroup: import("./utils/firestore").DocumentReferenceLike<unknown>;
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
                                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                    doc: import("./utils/firestore").DocumentReferenceLike<unknown>;
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
                            sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            supportGroup: import("./utils/firestore").DocumentReferenceLike<unknown>;
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
                            sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                        doc: import("./utils/firestore").DocumentReferenceLike<unknown>;
                    };
                } | undefined;
                skipGptResponse?: boolean | undefined;
                senderUid?: string | null | undefined;
                senderName?: string | null | undefined;
                uid: string;
                type: "meeting";
                date: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                };
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
                metricData?: {
                    [x: string]: {
                        doc?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                        data: {
                            label: string;
                            metricInputValue: number;
                            absoluteAttributeValue: number;
                        };
                        attribute: {
                            icon?: import("./metric").MetricIcons | undefined;
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
                                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        supportGroup: import("./utils/firestore").DocumentReferenceLike<unknown>;
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
                                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                    doc: import("./utils/firestore").DocumentReferenceLike<unknown>;
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
                            sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            supportGroup: import("./utils/firestore").DocumentReferenceLike<unknown>;
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
                            sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                        doc: import("./utils/firestore").DocumentReferenceLike<unknown>;
                    };
                } | undefined;
                skipGptResponse?: boolean | undefined;
                senderUid?: string | null | undefined;
                senderName?: string | null | undefined;
                audioTranscript?: string | undefined;
                audioTranscribedLocally?: boolean | undefined;
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
                icon?: import("./log").TourIcon | undefined;
                audioFile?: {
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
                        doc?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                        data: {
                            label: string;
                            metricInputValue: number;
                            absoluteAttributeValue: number;
                        };
                        attribute: {
                            icon?: import("./metric").MetricIcons | undefined;
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
                                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        supportGroup: import("./utils/firestore").DocumentReferenceLike<unknown>;
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
                                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                    doc: import("./utils/firestore").DocumentReferenceLike<unknown>;
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
                            sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            supportGroup: import("./utils/firestore").DocumentReferenceLike<unknown>;
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
                            sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                        doc: import("./utils/firestore").DocumentReferenceLike<unknown>;
                    };
                } | undefined;
                skipGptResponse?: boolean | undefined;
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
                openAutomatically?: boolean | undefined;
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
                metricData?: {
                    [x: string]: {
                        doc?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                        data: {
                            label: string;
                            metricInputValue: number;
                            absoluteAttributeValue: number;
                        };
                        attribute: {
                            icon?: import("./metric").MetricIcons | undefined;
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
                                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        supportGroup: import("./utils/firestore").DocumentReferenceLike<unknown>;
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
                                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                    doc: import("./utils/firestore").DocumentReferenceLike<unknown>;
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
                            sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            supportGroup: import("./utils/firestore").DocumentReferenceLike<unknown>;
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
                            sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                        doc: import("./utils/firestore").DocumentReferenceLike<unknown>;
                    };
                } | undefined;
                skipGptResponse?: boolean | undefined;
                senderUid?: string | null | undefined;
                senderName?: string | null | undefined;
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
                metricData?: {
                    [x: string]: {
                        doc?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                        data: {
                            label: string;
                            metricInputValue: number;
                            absoluteAttributeValue: number;
                        };
                        attribute: {
                            icon?: import("./metric").MetricIcons | undefined;
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
                                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        supportGroup: import("./utils/firestore").DocumentReferenceLike<unknown>;
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
                                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                    doc: import("./utils/firestore").DocumentReferenceLike<unknown>;
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
                            sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            supportGroup: import("./utils/firestore").DocumentReferenceLike<unknown>;
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
                            sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                        doc: import("./utils/firestore").DocumentReferenceLike<unknown>;
                    };
                } | undefined;
                skipGptResponse?: boolean | undefined;
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
                date: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                };
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
                metricData?: {
                    [x: string]: {
                        doc?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                        data: {
                            label: string;
                            metricInputValue: number;
                            absoluteAttributeValue: number;
                        };
                        attribute: {
                            icon?: import("./metric").MetricIcons | undefined;
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
                                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                        supportGroup: import("./utils/firestore").DocumentReferenceLike<unknown>;
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
                                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                    doc: import("./utils/firestore").DocumentReferenceLike<unknown>;
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
                            sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            supportGroup: import("./utils/firestore").DocumentReferenceLike<unknown>;
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
                            sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                        doc: import("./utils/firestore").DocumentReferenceLike<unknown>;
                    };
                } | undefined;
                skipGptResponse?: boolean | undefined;
                senderUid?: string | null | undefined;
                senderName?: string | null | undefined;
                uid: string;
                type: "outcome";
                date: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                };
                dateString: string;
                role: "user";
                outcome: NonNullable<"success" | "setback" | undefined>;
            }>;
        };
    };
    suggestedTactics: ({
        createdAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        updatedAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
        supportGroup: import("./utils/firestore").DocumentReferenceLike<unknown>;
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
        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
    })[] | undefined;
    debriefedAt: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    debriefAfter: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    debriefRoutineSentAt: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    agentType: NonNullable<AgentType | undefined>;
    hasImpulse: boolean | undefined;
    outcome: "success" | "setback" | undefined;
    zaraResponseStartedProcessingAt: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    createdAt: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    updatedAt: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
}, yup.AnyObject, {
    isDisplayable: undefined;
    dateString: undefined;
    date: {
        seconds: undefined;
        nanoseconds: undefined;
        isEqual: undefined;
        toMillis: undefined;
        toDate: undefined;
    };
    title: undefined;
    summary: undefined;
    logsById: undefined;
    suggestedTactics: "";
    debriefedAt: undefined;
    debriefAfter: undefined;
    debriefRoutineSentAt: undefined;
    agentType: undefined;
    hasImpulse: undefined;
    outcome: undefined;
    zaraResponseStartedProcessingAt: undefined;
    createdAt: undefined;
    updatedAt: undefined;
}, "">;
export type ThreadValue = Omit<yup.InferType<typeof threadSchema>, 'logsById'> & {
    logsById: LogsById;
};
