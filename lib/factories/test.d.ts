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
        localFilePath?: import("yup").Maybe<string | undefined>;
        isDeleted?: boolean | undefined;
        metadata?: {} | null | undefined;
        thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
        thumbnailUri?: import("yup").Maybe<string | undefined>;
        storagePath: string;
        url: string;
    } | undefined;
    metricData?: {
        [x: string]: {
            doc?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                            sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                localFilePath?: import("yup").Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                                thumbnailUri?: import("yup").Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            likesCount?: number | null | undefined;
                            timerSeconds?: import("yup").Maybe<number | undefined>;
                            isSuggested?: boolean | undefined;
                            repeat?: import("yup").Maybe<number | undefined>;
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
                            sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                localFilePath?: import("yup").Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                                thumbnailUri?: import("yup").Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            likesCount?: number | null | undefined;
                            timerSeconds?: import("yup").Maybe<number | undefined>;
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
                            sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                localFilePath?: import("yup").Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                                thumbnailUri?: import("yup").Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            likesCount?: number | null | undefined;
                            timerSeconds?: import("yup").Maybe<number | undefined>;
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
                            sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                localFilePath?: import("yup").Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                                thumbnailUri?: import("yup").Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            likesCount?: number | null | undefined;
                            timerSeconds?: import("yup").Maybe<number | undefined>;
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
                                localFilePath?: import("yup").Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                                thumbnailUri?: import("yup").Maybe<string | undefined>;
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
                            sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                localFilePath?: import("yup").Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                                thumbnailUri?: import("yup").Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            likesCount?: number | null | undefined;
                            timerSeconds?: import("yup").Maybe<number | undefined>;
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
                            sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                localFilePath?: import("yup").Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                                thumbnailUri?: import("yup").Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            likesCount?: number | null | undefined;
                            timerSeconds?: import("yup").Maybe<number | undefined>;
                            isSuggested?: boolean | undefined;
                            type: "notifySupportGroup";
                            supportGroup: import("../schema/utils/firestore").DocumentReferenceLike<unknown>;
                        } | {
                            createdAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            updatedAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
                                toDate: Function;
                            } | null | undefined;
                            sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                localFilePath?: import("yup").Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                                thumbnailUri?: import("yup").Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            likesCount?: number | null | undefined;
                            timerSeconds?: import("yup").Maybe<number | undefined>;
                            isSuggested?: boolean | undefined;
                            url: string;
                            type: "link";
                        };
                        doc: import("../schema/utils/firestore").DocumentReferenceLike<unknown>;
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
                sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                    localFilePath?: import("yup").Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                    thumbnailUri?: import("yup").Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                likesCount?: number | null | undefined;
                timerSeconds?: import("yup").Maybe<number | undefined>;
                isSuggested?: boolean | undefined;
                repeat?: import("yup").Maybe<number | undefined>;
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
                sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                    localFilePath?: import("yup").Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                    thumbnailUri?: import("yup").Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                likesCount?: number | null | undefined;
                timerSeconds?: import("yup").Maybe<number | undefined>;
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
                sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                    localFilePath?: import("yup").Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                    thumbnailUri?: import("yup").Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                likesCount?: number | null | undefined;
                timerSeconds?: import("yup").Maybe<number | undefined>;
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
                sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                    localFilePath?: import("yup").Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                    thumbnailUri?: import("yup").Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                likesCount?: number | null | undefined;
                timerSeconds?: import("yup").Maybe<number | undefined>;
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
                    localFilePath?: import("yup").Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                    thumbnailUri?: import("yup").Maybe<string | undefined>;
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
                sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                    localFilePath?: import("yup").Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                    thumbnailUri?: import("yup").Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                likesCount?: number | null | undefined;
                timerSeconds?: import("yup").Maybe<number | undefined>;
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
                sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                    localFilePath?: import("yup").Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                    thumbnailUri?: import("yup").Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                likesCount?: number | null | undefined;
                timerSeconds?: import("yup").Maybe<number | undefined>;
                isSuggested?: boolean | undefined;
                type: "notifySupportGroup";
                supportGroup: import("../schema/utils/firestore").DocumentReferenceLike<unknown>;
            } | {
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                    localFilePath?: import("yup").Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                    thumbnailUri?: import("yup").Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                likesCount?: number | null | undefined;
                timerSeconds?: import("yup").Maybe<number | undefined>;
                isSuggested?: boolean | undefined;
                url: string;
                type: "link";
            };
            doc: import("../schema/utils/firestore").DocumentReferenceLike<unknown>;
        };
    } | undefined;
    senderUid?: string | null | undefined;
    senderName?: string | null | undefined;
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
}, "uid" | "type" | "date" | "dateString" | "role" | ("createdAt" | "updatedAt" | "text" | "audioFile" | "metricData" | "behaviorData" | "tacticsData" | "senderUid" | "senderName")>, profileFactory: import("factory.ts").Factory<{
    createdAt?: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
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
    defaultBehaviorDoc?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
    goal?: string | null | undefined;
    isReadyForTour?: boolean | undefined;
    isOnboardingComplete?: boolean | undefined;
    sendDebriefRoutinesAfterMinutes?: number | undefined;
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
}, "uids" | "verificationCode" | "dayReviewTime" | "recentSummaries" | "timezone" | ("createdAt" | "updatedAt" | "parentIds" | "lastActiveAt" | "widgetInstalledAt" | "widgetLastPressedAt" | "activeImpulseDoc" | "defaultBehaviorDoc" | "tourCompletedAt" | "scheduledNotificationIds" | "whatsappStrategyDoc" | "onboardedWithZaraAt" | "currentAppState" | "expoPushToken" | "notificationPreferences" | "goal" | "isReadyForTour" | "isOnboardingComplete" | "sendDebriefRoutinesAfterMinutes" | "androidPermissions" | "historicalInsights" | "isTourDismissed" | "region" | "enableZara")>, tacticFactory: import("factory.ts").Factory<import("..").TacticValue, "createdAt" | "updatedAt" | "sourceFile" | "sharedWithIssueIds" | "uid" | "recommendedForIssueIds" | "recommendedForIssueOrdinals" | "prompt" | "isShared" | "description" | "type" | "pastTenseTitle" | "debriefAfterMinutes" | "image" | "backgroundColor" | "likesCount" | "timerSeconds" | "isSuggested">;
