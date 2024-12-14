import * as yup from 'yup';
export declare function logBaseSchema<K extends string>(type: K): yup.ObjectSchema<{
    type: yup.Defined<K>;
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
    uid: string;
    audioFile: {
        createdAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        updatedAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        content?: string | undefined;
        localFilePath?: yup.Maybe<string | undefined>;
        isDeleted?: boolean | undefined;
        waveForm?: yup.Maybe<string | undefined>;
        thumbnailStoragePath?: yup.Maybe<string | undefined>;
        thumbnailUri?: yup.Maybe<string | undefined>;
        contentType: string;
        storagePath: string;
        uri: string;
    } | undefined;
    audioDurationSeconds: number | undefined;
    audioWaveform: string | undefined;
    issueId: string | null | undefined;
    issueName: string | undefined;
    completedTacticIds: string[];
    tacticsById: {
        [x: string]: {
            recommendedForIssueIds?: string[] | undefined;
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            prompt?: string | undefined;
            setbackThreshold?: number | null | undefined;
            uid?: string | undefined;
            sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
            sharedWithIssueIds?: string[] | undefined;
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
                content?: string | undefined;
                localFilePath?: yup.Maybe<string | undefined>;
                isDeleted?: boolean | undefined;
                waveForm?: yup.Maybe<string | undefined>;
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
            type: "audio";
            ordinal: number;
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
                content?: string | undefined;
                localFilePath?: yup.Maybe<string | undefined>;
                isDeleted?: boolean | undefined;
                waveForm?: yup.Maybe<string | undefined>;
                thumbnailStoragePath?: yup.Maybe<string | undefined>;
                thumbnailUri?: yup.Maybe<string | undefined>;
                contentType: string;
                storagePath: string;
                uri: string;
            };
        } | {
            recommendedForIssueIds?: string[] | undefined;
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            prompt?: string | undefined;
            setbackThreshold?: number | null | undefined;
            repeat?: yup.Maybe<number | undefined>;
            uid?: string | undefined;
            sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
            sharedWithIssueIds?: string[] | undefined;
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
                content?: string | undefined;
                localFilePath?: yup.Maybe<string | undefined>;
                isDeleted?: boolean | undefined;
                waveForm?: yup.Maybe<string | undefined>;
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
            type: "breathingExercise";
            ordinal: number;
            inFor: number;
            holdFor: number;
            outFor: number;
        } | {
            recommendedForIssueIds?: string[] | undefined;
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            prompt?: string | undefined;
            setbackThreshold?: number | null | undefined;
            uid?: string | undefined;
            sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
            sharedWithIssueIds?: string[] | undefined;
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
                content?: string | undefined;
                localFilePath?: yup.Maybe<string | undefined>;
                isDeleted?: boolean | undefined;
                waveForm?: yup.Maybe<string | undefined>;
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
            type: "link";
            ordinal: number;
            url: string;
        } | {
            recommendedForIssueIds?: string[] | undefined;
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            prompt?: string | undefined;
            setbackThreshold?: number | null | undefined;
            uid?: string | undefined;
            sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
            sharedWithIssueIds?: string[] | undefined;
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
                content?: string | undefined;
                localFilePath?: yup.Maybe<string | undefined>;
                isDeleted?: boolean | undefined;
                waveForm?: yup.Maybe<string | undefined>;
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
            type: "notifyASupportPerson";
            ordinal: number;
            contactIds: string[];
        } | {
            recommendedForIssueIds?: string[] | undefined;
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            prompt?: string | undefined;
            setbackThreshold?: number | null | undefined;
            uid?: string | undefined;
            sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
            sharedWithIssueIds?: string[] | undefined;
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
                content?: string | undefined;
                localFilePath?: yup.Maybe<string | undefined>;
                isDeleted?: boolean | undefined;
                waveForm?: yup.Maybe<string | undefined>;
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
            type: "notifySupportGroup";
            ordinal: number;
            supportGroup: import("../utils/firestore").DocumentReferenceLike<unknown>;
        } | {
            recommendedForIssueIds?: string[] | undefined;
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            prompt?: string | undefined;
            setbackThreshold?: number | null | undefined;
            uid?: string | undefined;
            sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
            sharedWithIssueIds?: string[] | undefined;
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
                content?: string | undefined;
                localFilePath?: yup.Maybe<string | undefined>;
                isDeleted?: boolean | undefined;
                waveForm?: yup.Maybe<string | undefined>;
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
            type: "steps";
            ordinal: number;
            targetSteps: number;
        } | {
            recommendedForIssueIds?: string[] | undefined;
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            setbackThreshold?: number | null | undefined;
            uid?: string | undefined;
            sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
            sharedWithIssueIds?: string[] | undefined;
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
                content?: string | undefined;
                localFilePath?: yup.Maybe<string | undefined>;
                isDeleted?: boolean | undefined;
                waveForm?: yup.Maybe<string | undefined>;
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
            prompt: string;
            type: "task";
            ordinal: number;
        } | {
            recommendedForIssueIds?: string[] | undefined;
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            prompt?: string | undefined;
            setbackThreshold?: number | null | undefined;
            uid?: string | undefined;
            sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
            sharedWithIssueIds?: string[] | undefined;
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
                content?: string | undefined;
                localFilePath?: yup.Maybe<string | undefined>;
                isDeleted?: boolean | undefined;
                waveForm?: yup.Maybe<string | undefined>;
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
            type: "video";
            ordinal: number;
            video: {
                storagePath?: string | null | undefined;
                url?: string | null | undefined;
            };
        };
    };
    behaviorsById: {
        [x: string]: {
            recommendedForIssueIds?: string[] | undefined;
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            templateFor?: "onboarding" | "afterSuccess" | "afterSetback" | undefined;
            setbackThreshold?: number | undefined;
            prompt: string;
            type: "counter";
            ordinal: number;
        } | {
            recommendedForIssueIds?: string[] | undefined;
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            templateFor?: "onboarding" | "afterSuccess" | "afterSetback" | undefined;
            setbackThreshold?: number | undefined;
            lowEmoji?: yup.Maybe<string | undefined>;
            highEmoji?: yup.Maybe<string | undefined>;
            prompt: string;
            type: "scaleOf1To10";
            ordinal: number;
        } | {
            recommendedForIssueIds?: string[] | undefined;
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            templateFor?: "onboarding" | "afterSuccess" | "afterSetback" | undefined;
            setbackThreshold?: number | undefined;
            prompt: string;
            type: "time";
            ordinal: number;
        };
    } | null | undefined;
    behaviorData: {
        [x: string]: {
            setbackThreshold?: number | undefined;
            label?: string | undefined;
            idValue?: string | undefined;
            numericValue?: number | undefined;
            color?: string | undefined;
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
    } | null | undefined;
    submittedAt: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    blandPathwayChatId: string | undefined;
    text: string | undefined;
    date: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    };
    dateString: string;
    profileEmojiIDString: string | undefined;
    tacticId: string | null | undefined;
    tactic: ({
        recommendedForIssueIds?: string[] | undefined;
        createdAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        updatedAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        prompt?: string | undefined;
        setbackThreshold?: number | null | undefined;
        uid?: string | undefined;
        sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
        sharedWithIssueIds?: string[] | undefined;
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
            content?: string | undefined;
            localFilePath?: yup.Maybe<string | undefined>;
            isDeleted?: boolean | undefined;
            waveForm?: yup.Maybe<string | undefined>;
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
        type: "audio";
        ordinal: number;
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
            content?: string | undefined;
            localFilePath?: yup.Maybe<string | undefined>;
            isDeleted?: boolean | undefined;
            waveForm?: yup.Maybe<string | undefined>;
            thumbnailStoragePath?: yup.Maybe<string | undefined>;
            thumbnailUri?: yup.Maybe<string | undefined>;
            contentType: string;
            storagePath: string;
            uri: string;
        };
    } | {
        recommendedForIssueIds?: string[] | undefined;
        createdAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        updatedAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        prompt?: string | undefined;
        setbackThreshold?: number | null | undefined;
        repeat?: yup.Maybe<number | undefined>;
        uid?: string | undefined;
        sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
        sharedWithIssueIds?: string[] | undefined;
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
            content?: string | undefined;
            localFilePath?: yup.Maybe<string | undefined>;
            isDeleted?: boolean | undefined;
            waveForm?: yup.Maybe<string | undefined>;
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
        type: "breathingExercise";
        ordinal: number;
        inFor: number;
        holdFor: number;
        outFor: number;
    } | {
        recommendedForIssueIds?: string[] | undefined;
        createdAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        updatedAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        prompt?: string | undefined;
        setbackThreshold?: number | null | undefined;
        uid?: string | undefined;
        sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
        sharedWithIssueIds?: string[] | undefined;
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
            content?: string | undefined;
            localFilePath?: yup.Maybe<string | undefined>;
            isDeleted?: boolean | undefined;
            waveForm?: yup.Maybe<string | undefined>;
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
        type: "link";
        ordinal: number;
        url: string;
    } | {
        recommendedForIssueIds?: string[] | undefined;
        createdAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        updatedAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        prompt?: string | undefined;
        setbackThreshold?: number | null | undefined;
        uid?: string | undefined;
        sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
        sharedWithIssueIds?: string[] | undefined;
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
            content?: string | undefined;
            localFilePath?: yup.Maybe<string | undefined>;
            isDeleted?: boolean | undefined;
            waveForm?: yup.Maybe<string | undefined>;
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
        type: "notifyASupportPerson";
        ordinal: number;
        contactIds: string[];
    } | {
        recommendedForIssueIds?: string[] | undefined;
        createdAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        updatedAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        prompt?: string | undefined;
        setbackThreshold?: number | null | undefined;
        uid?: string | undefined;
        sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
        sharedWithIssueIds?: string[] | undefined;
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
            content?: string | undefined;
            localFilePath?: yup.Maybe<string | undefined>;
            isDeleted?: boolean | undefined;
            waveForm?: yup.Maybe<string | undefined>;
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
        type: "notifySupportGroup";
        ordinal: number;
        supportGroup: import("../utils/firestore").DocumentReferenceLike<unknown>;
    } | {
        recommendedForIssueIds?: string[] | undefined;
        createdAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        updatedAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        prompt?: string | undefined;
        setbackThreshold?: number | null | undefined;
        uid?: string | undefined;
        sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
        sharedWithIssueIds?: string[] | undefined;
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
            content?: string | undefined;
            localFilePath?: yup.Maybe<string | undefined>;
            isDeleted?: boolean | undefined;
            waveForm?: yup.Maybe<string | undefined>;
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
        type: "steps";
        ordinal: number;
        targetSteps: number;
    } | {
        recommendedForIssueIds?: string[] | undefined;
        createdAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        updatedAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        setbackThreshold?: number | null | undefined;
        uid?: string | undefined;
        sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
        sharedWithIssueIds?: string[] | undefined;
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
            content?: string | undefined;
            localFilePath?: yup.Maybe<string | undefined>;
            isDeleted?: boolean | undefined;
            waveForm?: yup.Maybe<string | undefined>;
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
        prompt: string;
        type: "task";
        ordinal: number;
    } | {
        recommendedForIssueIds?: string[] | undefined;
        createdAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        updatedAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        prompt?: string | undefined;
        setbackThreshold?: number | null | undefined;
        uid?: string | undefined;
        sourceFile?: import("../utils/firestore").DocumentReferenceLike<unknown> | undefined;
        sharedWithIssueIds?: string[] | undefined;
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
            content?: string | undefined;
            localFilePath?: yup.Maybe<string | undefined>;
            isDeleted?: boolean | undefined;
            waveForm?: yup.Maybe<string | undefined>;
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
        type: "video";
        ordinal: number;
        video: {
            storagePath?: string | null | undefined;
            url?: string | null | undefined;
        };
    }) | yup.Maybe<{} | undefined>;
    tacticData: {
        [x: string]: {} | undefined;
    } | null | undefined;
    isGptSender: boolean | undefined;
    senderUid: string | null | undefined;
}, yup.AnyObject, {
    type: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    uid: undefined;
    audioFile: undefined;
    audioDurationSeconds: undefined;
    audioWaveform: undefined;
    issueId: undefined;
    issueName: undefined;
    completedTacticIds: "";
    tacticsById: undefined;
    behaviorsById: undefined;
    behaviorData: undefined;
    submittedAt: undefined;
    blandPathwayChatId: undefined;
    text: undefined;
    date: {
        seconds: undefined;
        nanoseconds: undefined;
        isEqual: undefined;
        toMillis: undefined;
        toDate: undefined;
    };
    dateString: undefined;
    profileEmojiIDString: undefined;
    tacticId: undefined;
    tactic: undefined;
    tacticData: undefined;
    isGptSender: undefined;
    senderUid: undefined;
}, "">;
