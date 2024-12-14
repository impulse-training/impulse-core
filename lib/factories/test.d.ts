export declare const applicationFactory: import("factory.ts").Factory<import("..").ApplicationValue, keyof import("..").ApplicationValue>, regularLogFactory: import("factory.ts").Factory<{
    createdAt?: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    updatedAt?: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    submittedAt?: {
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
        content?: string | undefined;
        localFilePath?: import("yup").Maybe<string | undefined>;
        isDeleted?: boolean | undefined;
        waveForm?: import("yup").Maybe<string | undefined>;
        thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
        thumbnailUri?: import("yup").Maybe<string | undefined>;
        contentType: string;
        storagePath: string;
        uri: string;
    } | undefined;
    audioDurationSeconds?: number | undefined;
    audioWaveform?: string | undefined;
    issueId?: string | null | undefined;
    issueName?: string | undefined;
    behaviorsById?: {
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
            lowEmoji?: import("yup").Maybe<string | undefined>;
            highEmoji?: import("yup").Maybe<string | undefined>;
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
    behaviorData?: {
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
    blandPathwayChatId?: string | undefined;
    text?: string | undefined;
    profileEmojiIDString?: string | undefined;
    tacticId?: string | null | undefined;
    tactic?: ({
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
        sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
            localFilePath?: import("yup").Maybe<string | undefined>;
            isDeleted?: boolean | undefined;
            waveForm?: import("yup").Maybe<string | undefined>;
            thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
            thumbnailUri?: import("yup").Maybe<string | undefined>;
            contentType: string;
            storagePath: string;
            uri: string;
        } | undefined;
        backgroundColor?: string | undefined;
        likesCount?: number | null | undefined;
        timerSeconds?: import("yup").Maybe<number | undefined>;
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
            localFilePath?: import("yup").Maybe<string | undefined>;
            isDeleted?: boolean | undefined;
            waveForm?: import("yup").Maybe<string | undefined>;
            thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
            thumbnailUri?: import("yup").Maybe<string | undefined>;
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
        repeat?: import("yup").Maybe<number | undefined>;
        uid?: string | undefined;
        sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
            localFilePath?: import("yup").Maybe<string | undefined>;
            isDeleted?: boolean | undefined;
            waveForm?: import("yup").Maybe<string | undefined>;
            thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
            thumbnailUri?: import("yup").Maybe<string | undefined>;
            contentType: string;
            storagePath: string;
            uri: string;
        } | undefined;
        backgroundColor?: string | undefined;
        likesCount?: number | null | undefined;
        timerSeconds?: import("yup").Maybe<number | undefined>;
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
        sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
            localFilePath?: import("yup").Maybe<string | undefined>;
            isDeleted?: boolean | undefined;
            waveForm?: import("yup").Maybe<string | undefined>;
            thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
            thumbnailUri?: import("yup").Maybe<string | undefined>;
            contentType: string;
            storagePath: string;
            uri: string;
        } | undefined;
        backgroundColor?: string | undefined;
        likesCount?: number | null | undefined;
        timerSeconds?: import("yup").Maybe<number | undefined>;
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
        sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
            localFilePath?: import("yup").Maybe<string | undefined>;
            isDeleted?: boolean | undefined;
            waveForm?: import("yup").Maybe<string | undefined>;
            thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
            thumbnailUri?: import("yup").Maybe<string | undefined>;
            contentType: string;
            storagePath: string;
            uri: string;
        } | undefined;
        backgroundColor?: string | undefined;
        likesCount?: number | null | undefined;
        timerSeconds?: import("yup").Maybe<number | undefined>;
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
        sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
            localFilePath?: import("yup").Maybe<string | undefined>;
            isDeleted?: boolean | undefined;
            waveForm?: import("yup").Maybe<string | undefined>;
            thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
            thumbnailUri?: import("yup").Maybe<string | undefined>;
            contentType: string;
            storagePath: string;
            uri: string;
        } | undefined;
        backgroundColor?: string | undefined;
        likesCount?: number | null | undefined;
        timerSeconds?: import("yup").Maybe<number | undefined>;
        isSuggested?: boolean | undefined;
        type: "notifySupportGroup";
        ordinal: number;
        supportGroup: import("../schema/utils/firestore").DocumentReferenceLike<unknown>;
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
        sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
            localFilePath?: import("yup").Maybe<string | undefined>;
            isDeleted?: boolean | undefined;
            waveForm?: import("yup").Maybe<string | undefined>;
            thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
            thumbnailUri?: import("yup").Maybe<string | undefined>;
            contentType: string;
            storagePath: string;
            uri: string;
        } | undefined;
        backgroundColor?: string | undefined;
        likesCount?: number | null | undefined;
        timerSeconds?: import("yup").Maybe<number | undefined>;
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
        sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
            localFilePath?: import("yup").Maybe<string | undefined>;
            isDeleted?: boolean | undefined;
            waveForm?: import("yup").Maybe<string | undefined>;
            thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
            thumbnailUri?: import("yup").Maybe<string | undefined>;
            contentType: string;
            storagePath: string;
            uri: string;
        } | undefined;
        backgroundColor?: string | undefined;
        likesCount?: number | null | undefined;
        timerSeconds?: import("yup").Maybe<number | undefined>;
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
        sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
            localFilePath?: import("yup").Maybe<string | undefined>;
            isDeleted?: boolean | undefined;
            waveForm?: import("yup").Maybe<string | undefined>;
            thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
            thumbnailUri?: import("yup").Maybe<string | undefined>;
            contentType: string;
            storagePath: string;
            uri: string;
        } | undefined;
        backgroundColor?: string | undefined;
        likesCount?: number | null | undefined;
        timerSeconds?: import("yup").Maybe<number | undefined>;
        isSuggested?: boolean | undefined;
        type: "video";
        ordinal: number;
        video: {
            storagePath?: string | null | undefined;
            url?: string | null | undefined;
        };
    }) | import("yup").Maybe<{} | undefined>;
    tacticData?: {
        [x: string]: {} | undefined;
    } | null | undefined;
    isGptSender?: boolean | undefined;
    senderUid?: string | null | undefined;
    pressedImpulseButton?: boolean | undefined;
    type: "regular";
    uid: string;
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
            sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                localFilePath?: import("yup").Maybe<string | undefined>;
                isDeleted?: boolean | undefined;
                waveForm?: import("yup").Maybe<string | undefined>;
                thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                thumbnailUri?: import("yup").Maybe<string | undefined>;
                contentType: string;
                storagePath: string;
                uri: string;
            } | undefined;
            backgroundColor?: string | undefined;
            likesCount?: number | null | undefined;
            timerSeconds?: import("yup").Maybe<number | undefined>;
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
                localFilePath?: import("yup").Maybe<string | undefined>;
                isDeleted?: boolean | undefined;
                waveForm?: import("yup").Maybe<string | undefined>;
                thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                thumbnailUri?: import("yup").Maybe<string | undefined>;
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
            repeat?: import("yup").Maybe<number | undefined>;
            uid?: string | undefined;
            sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                localFilePath?: import("yup").Maybe<string | undefined>;
                isDeleted?: boolean | undefined;
                waveForm?: import("yup").Maybe<string | undefined>;
                thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                thumbnailUri?: import("yup").Maybe<string | undefined>;
                contentType: string;
                storagePath: string;
                uri: string;
            } | undefined;
            backgroundColor?: string | undefined;
            likesCount?: number | null | undefined;
            timerSeconds?: import("yup").Maybe<number | undefined>;
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
            sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                localFilePath?: import("yup").Maybe<string | undefined>;
                isDeleted?: boolean | undefined;
                waveForm?: import("yup").Maybe<string | undefined>;
                thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                thumbnailUri?: import("yup").Maybe<string | undefined>;
                contentType: string;
                storagePath: string;
                uri: string;
            } | undefined;
            backgroundColor?: string | undefined;
            likesCount?: number | null | undefined;
            timerSeconds?: import("yup").Maybe<number | undefined>;
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
            sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                localFilePath?: import("yup").Maybe<string | undefined>;
                isDeleted?: boolean | undefined;
                waveForm?: import("yup").Maybe<string | undefined>;
                thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                thumbnailUri?: import("yup").Maybe<string | undefined>;
                contentType: string;
                storagePath: string;
                uri: string;
            } | undefined;
            backgroundColor?: string | undefined;
            likesCount?: number | null | undefined;
            timerSeconds?: import("yup").Maybe<number | undefined>;
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
            sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                localFilePath?: import("yup").Maybe<string | undefined>;
                isDeleted?: boolean | undefined;
                waveForm?: import("yup").Maybe<string | undefined>;
                thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                thumbnailUri?: import("yup").Maybe<string | undefined>;
                contentType: string;
                storagePath: string;
                uri: string;
            } | undefined;
            backgroundColor?: string | undefined;
            likesCount?: number | null | undefined;
            timerSeconds?: import("yup").Maybe<number | undefined>;
            isSuggested?: boolean | undefined;
            type: "notifySupportGroup";
            ordinal: number;
            supportGroup: import("../schema/utils/firestore").DocumentReferenceLike<unknown>;
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
            sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                localFilePath?: import("yup").Maybe<string | undefined>;
                isDeleted?: boolean | undefined;
                waveForm?: import("yup").Maybe<string | undefined>;
                thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                thumbnailUri?: import("yup").Maybe<string | undefined>;
                contentType: string;
                storagePath: string;
                uri: string;
            } | undefined;
            backgroundColor?: string | undefined;
            likesCount?: number | null | undefined;
            timerSeconds?: import("yup").Maybe<number | undefined>;
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
            sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                localFilePath?: import("yup").Maybe<string | undefined>;
                isDeleted?: boolean | undefined;
                waveForm?: import("yup").Maybe<string | undefined>;
                thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                thumbnailUri?: import("yup").Maybe<string | undefined>;
                contentType: string;
                storagePath: string;
                uri: string;
            } | undefined;
            backgroundColor?: string | undefined;
            likesCount?: number | null | undefined;
            timerSeconds?: import("yup").Maybe<number | undefined>;
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
            sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                localFilePath?: import("yup").Maybe<string | undefined>;
                isDeleted?: boolean | undefined;
                waveForm?: import("yup").Maybe<string | undefined>;
                thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                thumbnailUri?: import("yup").Maybe<string | undefined>;
                contentType: string;
                storagePath: string;
                uri: string;
            } | undefined;
            backgroundColor?: string | undefined;
            likesCount?: number | null | undefined;
            timerSeconds?: import("yup").Maybe<number | undefined>;
            isSuggested?: boolean | undefined;
            type: "video";
            ordinal: number;
            video: {
                storagePath?: string | null | undefined;
                url?: string | null | undefined;
            };
        };
    };
    completedTacticIds: string[];
    date: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    };
    dateString: string;
}, "type" | "uid" | "tacticsById" | "completedTacticIds" | "date" | "dateString" | ("createdAt" | "updatedAt" | "submittedAt" | "audioFile" | "audioDurationSeconds" | "audioWaveform" | "issueId" | "issueName" | "behaviorsById" | "behaviorData" | "blandPathwayChatId" | "text" | "profileEmojiIDString" | "tacticId" | "tactic" | "tacticData" | "isGptSender" | "senderUid" | "pressedImpulseButton")>, profileFactory: import("factory.ts").Factory<{
    createdAt?: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    updatedAt?: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    parentIds?: string[] | undefined;
    lastActiveAt?: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    widgetInstalledAt?: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    widgetLastPressedAt?: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    activeImpulseDoc?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
    tourCompletedAt?: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    scheduledNotificationIds?: string[] | undefined;
    whatsappStrategyDoc?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
    onboardedWithZaraAt?: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    currentAppState?: import("react-native/types").AppStateStatus | undefined;
    expoPushToken?: string | undefined;
    notificationPreferences?: {
        [x: string]: NonNullable<"push" | "email" | undefined>[] | undefined;
    } | null | undefined;
    isReadyForTour?: boolean | undefined;
    isOnboardingComplete?: boolean | undefined;
    sendDebriefRemindersAfterMinutes?: number | undefined;
    gameplanStrategies?: import("../schema/utils/firestore").DocumentReferenceLike<unknown>[] | undefined;
    androidPermissions?: {
        [x: string]: NonNullable<boolean | undefined>;
    } | null | undefined;
    historicalInsights?: string[] | undefined;
    isTourDismissed?: boolean | undefined;
    region?: string | null | undefined;
    enableZara?: boolean | undefined;
    uids: string[];
    verificationCode: string;
    dayReviewTime: {
        hour: number;
        minute: number;
    } | null;
    recentSummaries: {
        [x: string]: string;
    };
    timezone: string;
}, "uids" | "verificationCode" | "dayReviewTime" | "recentSummaries" | "timezone" | ("createdAt" | "updatedAt" | "parentIds" | "lastActiveAt" | "widgetInstalledAt" | "widgetLastPressedAt" | "activeImpulseDoc" | "tourCompletedAt" | "scheduledNotificationIds" | "whatsappStrategyDoc" | "onboardedWithZaraAt" | "currentAppState" | "expoPushToken" | "notificationPreferences" | "isReadyForTour" | "isOnboardingComplete" | "sendDebriefRemindersAfterMinutes" | "gameplanStrategies" | "androidPermissions" | "historicalInsights" | "isTourDismissed" | "region" | "enableZara")>, tacticFactory: import("factory.ts").Factory<import("..").TacticValue, "recommendedForIssueIds" | "createdAt" | "updatedAt" | "prompt" | "type" | "ordinal" | "setbackThreshold" | "uid" | "sourceFile" | "sharedWithIssueIds" | "recommendedForIssueOrdinals" | "isShared" | "description" | "pastTenseTitle" | "debriefAfterMinutes" | "image" | "backgroundColor" | "likesCount" | "timerSeconds" | "isSuggested">;
