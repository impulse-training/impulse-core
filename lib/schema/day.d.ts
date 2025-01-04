import * as yup from 'yup';
import { LogValue } from './log';
export declare const daySchema: yup.ObjectSchema<{
    uid: string;
    date: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    };
    logsById: {
        [x: string]: import("./log").WithTacticsById<{
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
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
                    doc?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                    data: {
                        label: string;
                        metricInputValue: number;
                        absoluteAttributeValue: number;
                    };
                    attribute: {
                        name: string;
                        key: string;
                        icon: NonNullable<import("./metric").MetricIcons | undefined>;
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
                        skipGameplanAutoCreation?: boolean | undefined;
                        name: string;
                        ordinal: number;
                        trackingType: NonNullable<"time" | "counter" | undefined>;
                        isHelpful: boolean | null;
                    };
                    data: {
                        label?: {
                            color?: string | undefined;
                            text: string;
                        } | null | undefined;
                        counterValue?: number | undefined;
                        timeSeconds?: number | undefined;
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
                    doc: import("./utils/firestore").DocumentReferenceLike<unknown>;
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
                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                        sharedWithIssueIds?: string[] | undefined;
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
                        type: "basic";
                        prompt: string;
                    } | {
                        createdAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
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
                        repeat?: yup.Maybe<number | undefined>;
                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                        sharedWithIssueIds?: string[] | undefined;
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
                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                        sharedWithIssueIds?: string[] | undefined;
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
                        type: "link";
                        url: string;
                    } | {
                        createdAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
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
                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                        sharedWithIssueIds?: string[] | undefined;
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
                        uid?: string | undefined;
                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                        sharedWithIssueIds?: string[] | undefined;
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
                        uid?: string | undefined;
                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                        sharedWithIssueIds?: string[] | undefined;
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
                        uid?: string | undefined;
                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                        sharedWithIssueIds?: string[] | undefined;
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
                    };
                };
            } | undefined;
            senderUid?: string | null | undefined;
            type: "call";
            uid: string;
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
                    doc?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                    data: {
                        label: string;
                        metricInputValue: number;
                        absoluteAttributeValue: number;
                    };
                    attribute: {
                        name: string;
                        key: string;
                        icon: NonNullable<import("./metric").MetricIcons | undefined>;
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
                        skipGameplanAutoCreation?: boolean | undefined;
                        name: string;
                        ordinal: number;
                        trackingType: NonNullable<"time" | "counter" | undefined>;
                        isHelpful: boolean | null;
                    };
                    data: {
                        label?: {
                            color?: string | undefined;
                            text: string;
                        } | null | undefined;
                        counterValue?: number | undefined;
                        timeSeconds?: number | undefined;
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
                    doc: import("./utils/firestore").DocumentReferenceLike<unknown>;
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
                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                        sharedWithIssueIds?: string[] | undefined;
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
                        type: "basic";
                        prompt: string;
                    } | {
                        createdAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
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
                        repeat?: yup.Maybe<number | undefined>;
                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                        sharedWithIssueIds?: string[] | undefined;
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
                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                        sharedWithIssueIds?: string[] | undefined;
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
                        type: "link";
                        url: string;
                    } | {
                        createdAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
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
                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                        sharedWithIssueIds?: string[] | undefined;
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
                        uid?: string | undefined;
                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                        sharedWithIssueIds?: string[] | undefined;
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
                        uid?: string | undefined;
                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                        sharedWithIssueIds?: string[] | undefined;
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
                        uid?: string | undefined;
                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                        sharedWithIssueIds?: string[] | undefined;
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
                    };
                };
            } | undefined;
            senderUid?: string | null | undefined;
            gameplanDoc?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
            outcome?: "success" | "setback" | undefined;
            type: "gameplan";
            uid: string;
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
                    doc?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                    data: {
                        label: string;
                        metricInputValue: number;
                        absoluteAttributeValue: number;
                    };
                    attribute: {
                        name: string;
                        key: string;
                        icon: NonNullable<import("./metric").MetricIcons | undefined>;
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
                        skipGameplanAutoCreation?: boolean | undefined;
                        name: string;
                        ordinal: number;
                        trackingType: NonNullable<"time" | "counter" | undefined>;
                        isHelpful: boolean | null;
                    };
                    data: {
                        label?: {
                            color?: string | undefined;
                            text: string;
                        } | null | undefined;
                        counterValue?: number | undefined;
                        timeSeconds?: number | undefined;
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
                    doc: import("./utils/firestore").DocumentReferenceLike<unknown>;
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
                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                        sharedWithIssueIds?: string[] | undefined;
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
                        type: "basic";
                        prompt: string;
                    } | {
                        createdAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
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
                        repeat?: yup.Maybe<number | undefined>;
                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                        sharedWithIssueIds?: string[] | undefined;
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
                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                        sharedWithIssueIds?: string[] | undefined;
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
                        type: "link";
                        url: string;
                    } | {
                        createdAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
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
                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                        sharedWithIssueIds?: string[] | undefined;
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
                        uid?: string | undefined;
                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                        sharedWithIssueIds?: string[] | undefined;
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
                        uid?: string | undefined;
                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                        sharedWithIssueIds?: string[] | undefined;
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
                        uid?: string | undefined;
                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                        sharedWithIssueIds?: string[] | undefined;
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
                    };
                };
            } | undefined;
            senderUid?: string | null | undefined;
            type: "gpt";
            uid: string;
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
                    doc?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                    data: {
                        label: string;
                        metricInputValue: number;
                        absoluteAttributeValue: number;
                    };
                    attribute: {
                        name: string;
                        key: string;
                        icon: NonNullable<import("./metric").MetricIcons | undefined>;
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
                        skipGameplanAutoCreation?: boolean | undefined;
                        name: string;
                        ordinal: number;
                        trackingType: NonNullable<"time" | "counter" | undefined>;
                        isHelpful: boolean | null;
                    };
                    data: {
                        label?: {
                            color?: string | undefined;
                            text: string;
                        } | null | undefined;
                        counterValue?: number | undefined;
                        timeSeconds?: number | undefined;
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
                    doc: import("./utils/firestore").DocumentReferenceLike<unknown>;
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
                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                        sharedWithIssueIds?: string[] | undefined;
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
                        type: "basic";
                        prompt: string;
                    } | {
                        createdAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
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
                        repeat?: yup.Maybe<number | undefined>;
                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                        sharedWithIssueIds?: string[] | undefined;
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
                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                        sharedWithIssueIds?: string[] | undefined;
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
                        type: "link";
                        url: string;
                    } | {
                        createdAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
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
                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                        sharedWithIssueIds?: string[] | undefined;
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
                        uid?: string | undefined;
                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                        sharedWithIssueIds?: string[] | undefined;
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
                        uid?: string | undefined;
                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                        sharedWithIssueIds?: string[] | undefined;
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
                        uid?: string | undefined;
                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                        sharedWithIssueIds?: string[] | undefined;
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
                    };
                };
            } | undefined;
            senderUid?: string | null | undefined;
            animationFileName?: string | undefined;
            type: "showTour";
            uid: string;
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
                    doc?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                    data: {
                        label: string;
                        metricInputValue: number;
                        absoluteAttributeValue: number;
                    };
                    attribute: {
                        name: string;
                        key: string;
                        icon: NonNullable<import("./metric").MetricIcons | undefined>;
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
                        skipGameplanAutoCreation?: boolean | undefined;
                        name: string;
                        ordinal: number;
                        trackingType: NonNullable<"time" | "counter" | undefined>;
                        isHelpful: boolean | null;
                    };
                    data: {
                        label?: {
                            color?: string | undefined;
                            text: string;
                        } | null | undefined;
                        counterValue?: number | undefined;
                        timeSeconds?: number | undefined;
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
                    doc: import("./utils/firestore").DocumentReferenceLike<unknown>;
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
                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                        sharedWithIssueIds?: string[] | undefined;
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
                        type: "basic";
                        prompt: string;
                    } | {
                        createdAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
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
                        repeat?: yup.Maybe<number | undefined>;
                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                        sharedWithIssueIds?: string[] | undefined;
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
                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                        sharedWithIssueIds?: string[] | undefined;
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
                        type: "link";
                        url: string;
                    } | {
                        createdAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
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
                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                        sharedWithIssueIds?: string[] | undefined;
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
                        uid?: string | undefined;
                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                        sharedWithIssueIds?: string[] | undefined;
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
                        uid?: string | undefined;
                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                        sharedWithIssueIds?: string[] | undefined;
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
                        uid?: string | undefined;
                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                        sharedWithIssueIds?: string[] | undefined;
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
                    };
                };
            } | undefined;
            senderUid?: string | null | undefined;
            type: "toolCall";
            uid: string;
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
                    doc?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                    data: {
                        label: string;
                        metricInputValue: number;
                        absoluteAttributeValue: number;
                    };
                    attribute: {
                        name: string;
                        key: string;
                        icon: NonNullable<import("./metric").MetricIcons | undefined>;
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
                        skipGameplanAutoCreation?: boolean | undefined;
                        name: string;
                        ordinal: number;
                        trackingType: NonNullable<"time" | "counter" | undefined>;
                        isHelpful: boolean | null;
                    };
                    data: {
                        label?: {
                            color?: string | undefined;
                            text: string;
                        } | null | undefined;
                        counterValue?: number | undefined;
                        timeSeconds?: number | undefined;
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
                    doc: import("./utils/firestore").DocumentReferenceLike<unknown>;
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
                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                        sharedWithIssueIds?: string[] | undefined;
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
                        type: "basic";
                        prompt: string;
                    } | {
                        createdAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
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
                        repeat?: yup.Maybe<number | undefined>;
                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                        sharedWithIssueIds?: string[] | undefined;
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
                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                        sharedWithIssueIds?: string[] | undefined;
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
                        type: "link";
                        url: string;
                    } | {
                        createdAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
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
                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                        sharedWithIssueIds?: string[] | undefined;
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
                        uid?: string | undefined;
                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                        sharedWithIssueIds?: string[] | undefined;
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
                        uid?: string | undefined;
                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                        sharedWithIssueIds?: string[] | undefined;
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
                        uid?: string | undefined;
                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                        sharedWithIssueIds?: string[] | undefined;
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
                    };
                };
            } | undefined;
            senderUid?: string | null | undefined;
            type: "user";
            uid: string;
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
                    doc?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                    data: {
                        label: string;
                        metricInputValue: number;
                        absoluteAttributeValue: number;
                    };
                    attribute: {
                        name: string;
                        key: string;
                        icon: NonNullable<import("./metric").MetricIcons | undefined>;
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
                        skipGameplanAutoCreation?: boolean | undefined;
                        name: string;
                        ordinal: number;
                        trackingType: NonNullable<"time" | "counter" | undefined>;
                        isHelpful: boolean | null;
                    };
                    data: {
                        label?: {
                            color?: string | undefined;
                            text: string;
                        } | null | undefined;
                        counterValue?: number | undefined;
                        timeSeconds?: number | undefined;
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
                    doc: import("./utils/firestore").DocumentReferenceLike<unknown>;
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
                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                        sharedWithIssueIds?: string[] | undefined;
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
                        type: "basic";
                        prompt: string;
                    } | {
                        createdAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
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
                        repeat?: yup.Maybe<number | undefined>;
                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                        sharedWithIssueIds?: string[] | undefined;
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
                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                        sharedWithIssueIds?: string[] | undefined;
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
                        type: "link";
                        url: string;
                    } | {
                        createdAt?: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
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
                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                        sharedWithIssueIds?: string[] | undefined;
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
                        uid?: string | undefined;
                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                        sharedWithIssueIds?: string[] | undefined;
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
                        uid?: string | undefined;
                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                        sharedWithIssueIds?: string[] | undefined;
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
                        uid?: string | undefined;
                        sourceFile?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
                        sharedWithIssueIds?: string[] | undefined;
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
                    };
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
            type: "whatsappMessage";
            uid: string;
            date: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            };
            dateString: string;
        }>;
    };
}, yup.AnyObject, {
    uid: undefined;
    date: {
        seconds: undefined;
        nanoseconds: undefined;
        isEqual: undefined;
        toMillis: undefined;
        toDate: undefined;
    };
    logsById: undefined;
}, "">;
export type DayValue = Omit<yup.InferType<typeof daySchema>, 'logsById'> & {
    logsById: Record<string, LogValue>;
};
