import * as yup from 'yup';
import { LogValue } from './log';
export declare const daySchema: yup.ObjectSchema<{
    date: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    };
    issueName: string;
    logsById: {
        [x: string]: {
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
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
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
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
                contentType: string;
                storagePath: string;
                uri: string;
            } | undefined;
            emotionData?: {
                [x: string]: {
                    color?: string | undefined;
                    name: string;
                    label: string;
                    key: string;
                    intensity: number | null;
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
                        dailyLimit?: number | undefined;
                        name: string;
                        ordinal: number;
                        trackingType: NonNullable<"time" | "counter" | undefined>;
                        isHelpful: boolean | null;
                    };
                    data: {
                        label?: string | undefined;
                        idValue?: string | undefined;
                        numericValue?: number | undefined;
                        setAt: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        };
                        stringValue: string;
                        unit: string;
                    };
                };
            } | null | undefined;
            tacticsData?: {
                [x: string]: {
                    data: {
                        setAt: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        };
                        isCompleted: NonNullable<boolean | undefined>;
                    } | null;
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
                            contentType: string;
                            storagePath: string;
                            uri: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        ordinal: number;
                        type: "audio";
                        recording: {
                            createdAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
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
                            contentType: string;
                            storagePath: string;
                            uri: string;
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
                            contentType: string;
                            storagePath: string;
                            uri: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        ordinal: number;
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
                            contentType: string;
                            storagePath: string;
                            uri: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        ordinal: number;
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
                            contentType: string;
                            storagePath: string;
                            uri: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        ordinal: number;
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
                            contentType: string;
                            storagePath: string;
                            uri: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        ordinal: number;
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
                            contentType: string;
                            storagePath: string;
                            uri: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        ordinal: number;
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
                            contentType: string;
                            storagePath: string;
                            uri: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        ordinal: number;
                        type: "task";
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
                            contentType: string;
                            storagePath: string;
                            uri: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        ordinal: number;
                        type: "video";
                        video: {
                            storagePath?: string | null | undefined;
                            url?: string | null | undefined;
                        };
                    };
                };
            } | null | undefined;
            text?: string | null | undefined;
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
                contentType: string;
                storagePath: string;
                uri: string;
            } | undefined;
            emotionData?: {
                [x: string]: {
                    color?: string | undefined;
                    name: string;
                    label: string;
                    key: string;
                    intensity: number | null;
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
                        dailyLimit?: number | undefined;
                        name: string;
                        ordinal: number;
                        trackingType: NonNullable<"time" | "counter" | undefined>;
                        isHelpful: boolean | null;
                    };
                    data: {
                        label?: string | undefined;
                        idValue?: string | undefined;
                        numericValue?: number | undefined;
                        setAt: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        };
                        stringValue: string;
                        unit: string;
                    };
                };
            } | null | undefined;
            tacticsData?: {
                [x: string]: {
                    data: {
                        setAt: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        };
                        isCompleted: NonNullable<boolean | undefined>;
                    } | null;
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
                            contentType: string;
                            storagePath: string;
                            uri: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        ordinal: number;
                        type: "audio";
                        recording: {
                            createdAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
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
                            contentType: string;
                            storagePath: string;
                            uri: string;
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
                            contentType: string;
                            storagePath: string;
                            uri: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        ordinal: number;
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
                            contentType: string;
                            storagePath: string;
                            uri: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        ordinal: number;
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
                            contentType: string;
                            storagePath: string;
                            uri: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        ordinal: number;
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
                            contentType: string;
                            storagePath: string;
                            uri: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        ordinal: number;
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
                            contentType: string;
                            storagePath: string;
                            uri: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        ordinal: number;
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
                            contentType: string;
                            storagePath: string;
                            uri: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        ordinal: number;
                        type: "task";
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
                            contentType: string;
                            storagePath: string;
                            uri: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        ordinal: number;
                        type: "video";
                        video: {
                            storagePath?: string | null | undefined;
                            url?: string | null | undefined;
                        };
                    };
                };
            } | null | undefined;
            text?: string | null | undefined;
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
                contentType: string;
                storagePath: string;
                uri: string;
            } | undefined;
            emotionData?: {
                [x: string]: {
                    color?: string | undefined;
                    name: string;
                    label: string;
                    key: string;
                    intensity: number | null;
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
                        dailyLimit?: number | undefined;
                        name: string;
                        ordinal: number;
                        trackingType: NonNullable<"time" | "counter" | undefined>;
                        isHelpful: boolean | null;
                    };
                    data: {
                        label?: string | undefined;
                        idValue?: string | undefined;
                        numericValue?: number | undefined;
                        setAt: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        };
                        stringValue: string;
                        unit: string;
                    };
                };
            } | null | undefined;
            tacticsData?: {
                [x: string]: {
                    data: {
                        setAt: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        };
                        isCompleted: NonNullable<boolean | undefined>;
                    } | null;
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
                            contentType: string;
                            storagePath: string;
                            uri: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        ordinal: number;
                        type: "audio";
                        recording: {
                            createdAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
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
                            contentType: string;
                            storagePath: string;
                            uri: string;
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
                            contentType: string;
                            storagePath: string;
                            uri: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        ordinal: number;
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
                            contentType: string;
                            storagePath: string;
                            uri: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        ordinal: number;
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
                            contentType: string;
                            storagePath: string;
                            uri: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        ordinal: number;
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
                            contentType: string;
                            storagePath: string;
                            uri: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        ordinal: number;
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
                            contentType: string;
                            storagePath: string;
                            uri: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        ordinal: number;
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
                            contentType: string;
                            storagePath: string;
                            uri: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        ordinal: number;
                        type: "task";
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
                            contentType: string;
                            storagePath: string;
                            uri: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        ordinal: number;
                        type: "video";
                        video: {
                            storagePath?: string | null | undefined;
                            url?: string | null | undefined;
                        };
                    };
                };
            } | null | undefined;
            text?: string | null | undefined;
            senderUid?: string | null | undefined;
            type: "impulse";
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
                contentType: string;
                storagePath: string;
                uri: string;
            } | undefined;
            emotionData?: {
                [x: string]: {
                    color?: string | undefined;
                    name: string;
                    label: string;
                    key: string;
                    intensity: number | null;
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
                        dailyLimit?: number | undefined;
                        name: string;
                        ordinal: number;
                        trackingType: NonNullable<"time" | "counter" | undefined>;
                        isHelpful: boolean | null;
                    };
                    data: {
                        label?: string | undefined;
                        idValue?: string | undefined;
                        numericValue?: number | undefined;
                        setAt: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        };
                        stringValue: string;
                        unit: string;
                    };
                };
            } | null | undefined;
            tacticsData?: {
                [x: string]: {
                    data: {
                        setAt: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        };
                        isCompleted: NonNullable<boolean | undefined>;
                    } | null;
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
                            contentType: string;
                            storagePath: string;
                            uri: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        ordinal: number;
                        type: "audio";
                        recording: {
                            createdAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
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
                            contentType: string;
                            storagePath: string;
                            uri: string;
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
                            contentType: string;
                            storagePath: string;
                            uri: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        ordinal: number;
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
                            contentType: string;
                            storagePath: string;
                            uri: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        ordinal: number;
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
                            contentType: string;
                            storagePath: string;
                            uri: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        ordinal: number;
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
                            contentType: string;
                            storagePath: string;
                            uri: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        ordinal: number;
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
                            contentType: string;
                            storagePath: string;
                            uri: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        ordinal: number;
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
                            contentType: string;
                            storagePath: string;
                            uri: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        ordinal: number;
                        type: "task";
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
                            contentType: string;
                            storagePath: string;
                            uri: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        ordinal: number;
                        type: "video";
                        video: {
                            storagePath?: string | null | undefined;
                            url?: string | null | undefined;
                        };
                    };
                };
            } | null | undefined;
            text?: string | null | undefined;
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
                contentType: string;
                storagePath: string;
                uri: string;
            } | undefined;
            emotionData?: {
                [x: string]: {
                    color?: string | undefined;
                    name: string;
                    label: string;
                    key: string;
                    intensity: number | null;
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
                        dailyLimit?: number | undefined;
                        name: string;
                        ordinal: number;
                        trackingType: NonNullable<"time" | "counter" | undefined>;
                        isHelpful: boolean | null;
                    };
                    data: {
                        label?: string | undefined;
                        idValue?: string | undefined;
                        numericValue?: number | undefined;
                        setAt: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        };
                        stringValue: string;
                        unit: string;
                    };
                };
            } | null | undefined;
            tacticsData?: {
                [x: string]: {
                    data: {
                        setAt: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        };
                        isCompleted: NonNullable<boolean | undefined>;
                    } | null;
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
                            contentType: string;
                            storagePath: string;
                            uri: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        ordinal: number;
                        type: "audio";
                        recording: {
                            createdAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
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
                            contentType: string;
                            storagePath: string;
                            uri: string;
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
                            contentType: string;
                            storagePath: string;
                            uri: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        ordinal: number;
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
                            contentType: string;
                            storagePath: string;
                            uri: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        ordinal: number;
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
                            contentType: string;
                            storagePath: string;
                            uri: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        ordinal: number;
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
                            contentType: string;
                            storagePath: string;
                            uri: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        ordinal: number;
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
                            contentType: string;
                            storagePath: string;
                            uri: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        ordinal: number;
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
                            contentType: string;
                            storagePath: string;
                            uri: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        ordinal: number;
                        type: "task";
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
                            contentType: string;
                            storagePath: string;
                            uri: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        ordinal: number;
                        type: "video";
                        video: {
                            storagePath?: string | null | undefined;
                            url?: string | null | undefined;
                        };
                    };
                };
            } | null | undefined;
            text?: string | null | undefined;
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
                contentType: string;
                storagePath: string;
                uri: string;
            } | undefined;
            emotionData?: {
                [x: string]: {
                    color?: string | undefined;
                    name: string;
                    label: string;
                    key: string;
                    intensity: number | null;
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
                        dailyLimit?: number | undefined;
                        name: string;
                        ordinal: number;
                        trackingType: NonNullable<"time" | "counter" | undefined>;
                        isHelpful: boolean | null;
                    };
                    data: {
                        label?: string | undefined;
                        idValue?: string | undefined;
                        numericValue?: number | undefined;
                        setAt: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        };
                        stringValue: string;
                        unit: string;
                    };
                };
            } | null | undefined;
            tacticsData?: {
                [x: string]: {
                    data: {
                        setAt: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        };
                        isCompleted: NonNullable<boolean | undefined>;
                    } | null;
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
                            contentType: string;
                            storagePath: string;
                            uri: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        ordinal: number;
                        type: "audio";
                        recording: {
                            createdAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
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
                            contentType: string;
                            storagePath: string;
                            uri: string;
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
                            contentType: string;
                            storagePath: string;
                            uri: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        ordinal: number;
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
                            contentType: string;
                            storagePath: string;
                            uri: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        ordinal: number;
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
                            contentType: string;
                            storagePath: string;
                            uri: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        ordinal: number;
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
                            contentType: string;
                            storagePath: string;
                            uri: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        ordinal: number;
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
                            contentType: string;
                            storagePath: string;
                            uri: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        ordinal: number;
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
                            contentType: string;
                            storagePath: string;
                            uri: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        ordinal: number;
                        type: "task";
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
                            contentType: string;
                            storagePath: string;
                            uri: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        ordinal: number;
                        type: "video";
                        video: {
                            storagePath?: string | null | undefined;
                            url?: string | null | undefined;
                        };
                    };
                };
            } | null | undefined;
            text?: string | null | undefined;
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
                contentType: string;
                storagePath: string;
                uri: string;
            } | undefined;
            emotionData?: {
                [x: string]: {
                    color?: string | undefined;
                    name: string;
                    label: string;
                    key: string;
                    intensity: number | null;
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
                        dailyLimit?: number | undefined;
                        name: string;
                        ordinal: number;
                        trackingType: NonNullable<"time" | "counter" | undefined>;
                        isHelpful: boolean | null;
                    };
                    data: {
                        label?: string | undefined;
                        idValue?: string | undefined;
                        numericValue?: number | undefined;
                        setAt: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        };
                        stringValue: string;
                        unit: string;
                    };
                };
            } | null | undefined;
            tacticsData?: {
                [x: string]: {
                    data: {
                        setAt: {
                            isEqual?: any;
                            toMillis?: any;
                            seconds: number;
                            nanoseconds: number;
                            toDate: Function;
                        };
                        isCompleted: NonNullable<boolean | undefined>;
                    } | null;
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
                            contentType: string;
                            storagePath: string;
                            uri: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        ordinal: number;
                        type: "audio";
                        recording: {
                            createdAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
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
                            contentType: string;
                            storagePath: string;
                            uri: string;
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
                            contentType: string;
                            storagePath: string;
                            uri: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        ordinal: number;
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
                            contentType: string;
                            storagePath: string;
                            uri: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        ordinal: number;
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
                            contentType: string;
                            storagePath: string;
                            uri: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        ordinal: number;
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
                            contentType: string;
                            storagePath: string;
                            uri: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        ordinal: number;
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
                            contentType: string;
                            storagePath: string;
                            uri: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        ordinal: number;
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
                            contentType: string;
                            storagePath: string;
                            uri: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        ordinal: number;
                        type: "task";
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
                            contentType: string;
                            storagePath: string;
                            uri: string;
                        } | undefined;
                        backgroundColor?: string | undefined;
                        likesCount?: number | null | undefined;
                        timerSeconds?: yup.Maybe<number | undefined>;
                        isSuggested?: boolean | undefined;
                        ordinal: number;
                        type: "video";
                        video: {
                            storagePath?: string | null | undefined;
                            url?: string | null | undefined;
                        };
                    };
                };
            } | null | undefined;
            text?: string | null | undefined;
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
                contentType: string;
                storagePath: string;
                uri: string;
            }[] | undefined>;
            type: "whatsappMessage";
            uid: string;
            strategyDoc: import("./utils/firestore").DocumentReferenceLike<unknown>;
            date: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            };
            dateString: string;
        };
    };
    behaviorsById: {
        [x: string]: {
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            dailyLimit?: number | undefined;
            name: string;
            ordinal: number;
            trackingType: NonNullable<"time" | "counter" | undefined>;
            isHelpful: boolean | null;
        };
    };
    summary: string | null;
}, yup.AnyObject, {
    date: {
        seconds: undefined;
        nanoseconds: undefined;
        isEqual: undefined;
        toMillis: undefined;
        toDate: undefined;
    };
    issueName: undefined;
    logsById: undefined;
    behaviorsById: undefined;
    summary: undefined;
}, "">;
export type DayValue = Omit<yup.InferType<typeof daySchema>, 'logsById'> & {
    logsById: Record<string, LogValue>;
};
