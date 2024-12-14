export declare const factories: {
    regularLogFactory: import("factory.ts").Factory<{
        createdAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
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
    }, "type" | "uid" | "tacticsById" | "completedTacticIds" | "date" | "dateString" | ("createdAt" | "updatedAt" | "submittedAt" | "audioFile" | "audioDurationSeconds" | "audioWaveform" | "issueId" | "issueName" | "behaviorsById" | "behaviorData" | "blandPathwayChatId" | "text" | "profileEmojiIDString" | "tacticId" | "tactic" | "tacticData" | "isGptSender" | "senderUid" | "pressedImpulseButton")>;
    counterBehaviorFactory: import("factory.ts").Factory<{
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
    }, "prompt" | "type" | "ordinal" | ("recommendedForIssueIds" | "createdAt" | "updatedAt" | "templateFor" | "setbackThreshold")>;
    timeBehaviorFactory: import("factory.ts").Factory<{
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
    }, "prompt" | "type" | "ordinal" | ("recommendedForIssueIds" | "createdAt" | "updatedAt" | "templateFor" | "setbackThreshold")>;
    applicationFactory: import("factory.ts").Factory<import("..").ApplicationValue, keyof import("..").ApplicationValue>;
    dayFactory: import("factory.ts").Factory<import("..").DayValue, "date" | "issueName" | "behaviorsById" | "logsById" | "summary">;
    issueFactory: import("factory.ts").Factory<{
        path?: string | null | undefined;
        createdAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        updatedAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        ordinal?: number | undefined;
        parentId?: string | null | undefined;
        parentName?: string | null | undefined;
        hasDebriefBehavior?: boolean | undefined;
        synonyms?: string[] | undefined;
        parentIds?: string[] | undefined;
        parentNames?: string[] | undefined;
        profileCount?: number | null | undefined;
        isFeatured?: boolean | null | undefined;
        blandContext?: string | undefined;
        recommendedStrategies?: import("../schema/utils/firestore").DocumentReferenceLike<unknown>[] | undefined;
        strategyOrdinals?: {
            [x: string]: number;
        } | null | undefined;
        gameplanTactics?: import("../schema/utils/firestore").DocumentReferenceLike<unknown>[] | undefined;
        name: string;
    }, "name" | ("path" | "createdAt" | "updatedAt" | "ordinal" | "parentId" | "parentName" | "hasDebriefBehavior" | "synonyms" | "parentIds" | "parentNames" | "profileCount" | "isFeatured" | "blandContext" | "recommendedStrategies" | "strategyOrdinals" | "gameplanTactics")>;
    locationFactory: import("factory.ts").Factory<{
        createdAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        updatedAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        latitude?: number | undefined;
        longitude?: number | undefined;
        uid: string;
        name: string;
        address: string;
    }, "uid" | "name" | "address" | ("createdAt" | "updatedAt" | "latitude" | "longitude")>;
    daysSummaryFactory: import("factory.ts").Factory<{
        [x: string]: {
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
        };
    }, string | number>;
    profileFactory: import("factory.ts").Factory<{
        createdAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
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
    }, "uids" | "verificationCode" | "dayReviewTime" | "recentSummaries" | "timezone" | ("createdAt" | "updatedAt" | "parentIds" | "lastActiveAt" | "widgetInstalledAt" | "widgetLastPressedAt" | "activeImpulseDoc" | "tourCompletedAt" | "scheduledNotificationIds" | "whatsappStrategyDoc" | "onboardedWithZaraAt" | "currentAppState" | "expoPushToken" | "notificationPreferences" | "isReadyForTour" | "isOnboardingComplete" | "sendDebriefRemindersAfterMinutes" | "gameplanStrategies" | "androidPermissions" | "historicalInsights" | "isTourDismissed" | "region" | "enableZara")>;
    timeReminderFactory: import("factory.ts").Factory<{
        createdAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        updatedAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        type: "time";
        name: string;
        weekdays: number[];
        hour: number;
        minute: number;
    }, "type" | "name" | "weekdays" | "hour" | "minute" | ("createdAt" | "updatedAt")>;
    tacticFactory: import("factory.ts").Factory<import("..").TacticValue, "recommendedForIssueIds" | "createdAt" | "updatedAt" | "prompt" | "type" | "ordinal" | "setbackThreshold" | "uid" | "sourceFile" | "sharedWithIssueIds" | "recommendedForIssueOrdinals" | "isShared" | "description" | "pastTenseTitle" | "debriefAfterMinutes" | "image" | "backgroundColor" | "likesCount" | "timerSeconds" | "isSuggested">;
    roadmapFactory: import("factory.ts").Factory<{
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
        recommendedForIssueOrdinals?: {
            [x: string]: number;
        } | null | undefined;
        name: string;
        stages: {
            name: string;
            graduationCriteria: {
                requiredWinRate: number;
                requiredWinRateDays: number;
            };
        }[];
    }, "name" | "stages" | ("recommendedForIssueIds" | "createdAt" | "updatedAt" | "recommendedForIssueOrdinals")>;
    suggestionFactory: import("factory.ts").Factory<{
        createdAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        updatedAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        stages?: number[] | undefined;
        tacticDocs?: import("../schema/utils/firestore").DocumentReferenceLike<unknown>[] | undefined;
        title: string;
        gptContext: string;
    }, "title" | "gptContext" | ("createdAt" | "updatedAt" | "stages" | "tacticDocs")>;
    strategyFactory: import("factory.ts").Factory<{
        createdAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
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
        sharedWithIssueIds?: string[] | undefined;
        description?: string | undefined;
        tacticsById?: {
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
        } | null | undefined;
        templateForIssueIds?: string[] | undefined;
        tacticCount?: number | undefined;
        profileIssues?: import("../schema/utils/firestore").DocumentReferenceLike<unknown>[] | undefined;
        tourTitle?: string | undefined;
        tourDescription?: string | undefined;
        tourConfirmButtonText?: string | undefined;
        next3Tactics?: ({
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
        })[] | undefined;
        nextTacticId?: string | undefined;
        name: string;
        isCollaborative: NonNullable<boolean | undefined>;
        invitationCode: string;
        invitationUrl: string;
    }, "name" | "isCollaborative" | "invitationCode" | "invitationUrl" | ("createdAt" | "updatedAt" | "uid" | "sharedWithIssueIds" | "description" | "tacticsById" | "templateForIssueIds" | "tacticCount" | "profileIssues" | "tourTitle" | "tourDescription" | "tourConfirmButtonText" | "next3Tactics" | "nextTacticId")>;
    profileStrategyFactory: import("factory.ts").Factory<{
        createdAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        updatedAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        ordinal?: number | undefined;
        strategyDoc?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
        forIssueIds?: string[] | undefined;
        ordinalsForIssues?: {
            [x: string]: number;
        } | null | undefined;
        forAllIssues?: boolean | undefined;
        tourDismissed?: boolean | undefined;
        reminders?: ({
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            type: "time";
            name: string;
            weekdays: number[];
            hour: number;
            minute: number;
        } | {
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            type: "location";
            name: string;
            locationId: string;
            mode: NonNullable<"enter" | "exit" | undefined>;
        })[] | undefined;
        type: "original";
        sortBy: NonNullable<"random" | "newest" | undefined>;
        strategy: {
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
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
            sharedWithIssueIds?: string[] | undefined;
            description?: string | undefined;
            tacticsById?: {
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
            } | null | undefined;
            templateForIssueIds?: string[] | undefined;
            tacticCount?: number | undefined;
            profileIssues?: import("../schema/utils/firestore").DocumentReferenceLike<unknown>[] | undefined;
            tourTitle?: string | undefined;
            tourDescription?: string | undefined;
            tourConfirmButtonText?: string | undefined;
            next3Tactics?: ({
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
            })[] | undefined;
            nextTacticId?: string | undefined;
            name: string;
            isCollaborative: NonNullable<boolean | undefined>;
            invitationCode: string;
            invitationUrl: string;
        };
    }, "type" | "sortBy" | "strategy" | ("createdAt" | "updatedAt" | "ordinal" | "strategyDoc" | "forIssueIds" | "ordinalsForIssues" | "forAllIssues" | "tourDismissed" | "reminders")>;
};
