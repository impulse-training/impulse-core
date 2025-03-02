export declare const factories: {
    regularLogFactory: import("factory.ts").Factory<{
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
            localFilePath?: import("yup").Maybe<string | undefined>;
            isDeleted?: boolean | undefined;
            metadata?: {} | null | undefined;
            thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
            thumbnailUri?: import("yup").Maybe<string | undefined>;
            storagePath: string;
            url: string;
        } | undefined;
        skipGptResponse?: boolean | undefined;
        metricData?: {
            [x: string]: {
                doc?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                                sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
                                uid?: string | undefined;
                                recommendedForIssueIds?: string[] | undefined;
                                isDemoTactic?: boolean | undefined;
                                prompt?: string | undefined;
                                isShared?: boolean | undefined;
                                description?: string | null | undefined;
                                pastTenseTitle?: string | undefined;
                                debriefAfterMinutes?: number | null | undefined;
                                image?: {
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
                                uid?: string | undefined;
                                recommendedForIssueIds?: string[] | undefined;
                                isDemoTactic?: boolean | undefined;
                                prompt?: string | undefined;
                                isShared?: boolean | undefined;
                                description?: string | null | undefined;
                                pastTenseTitle?: string | undefined;
                                debriefAfterMinutes?: number | null | undefined;
                                image?: {
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
                                uid?: string | undefined;
                                recommendedForIssueIds?: string[] | undefined;
                                isDemoTactic?: boolean | undefined;
                                prompt?: string | undefined;
                                isShared?: boolean | undefined;
                                description?: string | null | undefined;
                                pastTenseTitle?: string | undefined;
                                debriefAfterMinutes?: number | null | undefined;
                                image?: {
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
                                uid?: string | undefined;
                                recommendedForIssueIds?: string[] | undefined;
                                isDemoTactic?: boolean | undefined;
                                isShared?: boolean | undefined;
                                description?: string | null | undefined;
                                pastTenseTitle?: string | undefined;
                                debriefAfterMinutes?: number | null | undefined;
                                image?: {
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
                                uid?: string | undefined;
                                recommendedForIssueIds?: string[] | undefined;
                                isDemoTactic?: boolean | undefined;
                                prompt?: string | undefined;
                                isShared?: boolean | undefined;
                                description?: string | null | undefined;
                                pastTenseTitle?: string | undefined;
                                debriefAfterMinutes?: number | null | undefined;
                                image?: {
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
                                uid?: string | undefined;
                                recommendedForIssueIds?: string[] | undefined;
                                isDemoTactic?: boolean | undefined;
                                prompt?: string | undefined;
                                isShared?: boolean | undefined;
                                description?: string | null | undefined;
                                pastTenseTitle?: string | undefined;
                                debriefAfterMinutes?: number | null | undefined;
                                image?: {
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
                                uid?: string | undefined;
                                recommendedForIssueIds?: string[] | undefined;
                                isDemoTactic?: boolean | undefined;
                                prompt?: string | undefined;
                                isShared?: boolean | undefined;
                                description?: string | null | undefined;
                                pastTenseTitle?: string | undefined;
                                debriefAfterMinutes?: number | null | undefined;
                                image?: {
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
                    uid?: string | undefined;
                    recommendedForIssueIds?: string[] | undefined;
                    isDemoTactic?: boolean | undefined;
                    prompt?: string | undefined;
                    isShared?: boolean | undefined;
                    description?: string | null | undefined;
                    pastTenseTitle?: string | undefined;
                    debriefAfterMinutes?: number | null | undefined;
                    image?: {
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
                    uid?: string | undefined;
                    recommendedForIssueIds?: string[] | undefined;
                    isDemoTactic?: boolean | undefined;
                    prompt?: string | undefined;
                    isShared?: boolean | undefined;
                    description?: string | null | undefined;
                    pastTenseTitle?: string | undefined;
                    debriefAfterMinutes?: number | null | undefined;
                    image?: {
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
                    uid?: string | undefined;
                    recommendedForIssueIds?: string[] | undefined;
                    isDemoTactic?: boolean | undefined;
                    prompt?: string | undefined;
                    isShared?: boolean | undefined;
                    description?: string | null | undefined;
                    pastTenseTitle?: string | undefined;
                    debriefAfterMinutes?: number | null | undefined;
                    image?: {
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
                    uid?: string | undefined;
                    recommendedForIssueIds?: string[] | undefined;
                    isDemoTactic?: boolean | undefined;
                    isShared?: boolean | undefined;
                    description?: string | null | undefined;
                    pastTenseTitle?: string | undefined;
                    debriefAfterMinutes?: number | null | undefined;
                    image?: {
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
                    uid?: string | undefined;
                    recommendedForIssueIds?: string[] | undefined;
                    isDemoTactic?: boolean | undefined;
                    prompt?: string | undefined;
                    isShared?: boolean | undefined;
                    description?: string | null | undefined;
                    pastTenseTitle?: string | undefined;
                    debriefAfterMinutes?: number | null | undefined;
                    image?: {
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
                    uid?: string | undefined;
                    recommendedForIssueIds?: string[] | undefined;
                    isDemoTactic?: boolean | undefined;
                    prompt?: string | undefined;
                    isShared?: boolean | undefined;
                    description?: string | null | undefined;
                    pastTenseTitle?: string | undefined;
                    debriefAfterMinutes?: number | null | undefined;
                    image?: {
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
                    uid?: string | undefined;
                    recommendedForIssueIds?: string[] | undefined;
                    isDemoTactic?: boolean | undefined;
                    prompt?: string | undefined;
                    isShared?: boolean | undefined;
                    description?: string | null | undefined;
                    pastTenseTitle?: string | undefined;
                    debriefAfterMinutes?: number | null | undefined;
                    image?: {
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
        isDisplayable: NonNullable<boolean | undefined>;
        dateString: string;
        role: "user";
    }, "uid" | "type" | "date" | "isDisplayable" | "dateString" | "role" | ("text" | "createdAt" | "updatedAt" | "audioFile" | "skipGptResponse" | "metricData" | "behaviorData" | "tacticsData" | "senderUid" | "senderName" | "audioTranscript" | "audioTranscribedLocally")>;
    dayFactory: import("factory.ts").Factory<import("..").DayValue, "uid" | "date" | "logsById" | "cachedSummaryText">;
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
        reminderTactics?: import("../schema/utils/firestore").DocumentReferenceLike<unknown>[] | undefined;
        name: string;
    }, "name" | ("path" | "createdAt" | "updatedAt" | "ordinal" | "parentId" | "parentName" | "hasDebriefBehavior" | "synonyms" | "parentIds" | "parentNames" | "profileCount" | "isFeatured" | "blandContext" | "recommendedStrategies" | "reminderTactics")>;
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
        name: string;
        uid: string;
        address: string;
    }, "name" | "uid" | "address" | ("createdAt" | "updatedAt" | "latitude" | "longitude")>;
    daysSummaryFactory: import("factory.ts").Factory<{
        createdAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        updatedAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        dates: {
            [x: string]: {
                behaviors: {
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
                                        sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
                                        uid?: string | undefined;
                                        recommendedForIssueIds?: string[] | undefined;
                                        isDemoTactic?: boolean | undefined;
                                        prompt?: string | undefined;
                                        isShared?: boolean | undefined;
                                        description?: string | null | undefined;
                                        pastTenseTitle?: string | undefined;
                                        debriefAfterMinutes?: number | null | undefined;
                                        image?: {
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
                                        uid?: string | undefined;
                                        recommendedForIssueIds?: string[] | undefined;
                                        isDemoTactic?: boolean | undefined;
                                        prompt?: string | undefined;
                                        isShared?: boolean | undefined;
                                        description?: string | null | undefined;
                                        pastTenseTitle?: string | undefined;
                                        debriefAfterMinutes?: number | null | undefined;
                                        image?: {
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
                                        uid?: string | undefined;
                                        recommendedForIssueIds?: string[] | undefined;
                                        isDemoTactic?: boolean | undefined;
                                        prompt?: string | undefined;
                                        isShared?: boolean | undefined;
                                        description?: string | null | undefined;
                                        pastTenseTitle?: string | undefined;
                                        debriefAfterMinutes?: number | null | undefined;
                                        image?: {
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
                                        uid?: string | undefined;
                                        recommendedForIssueIds?: string[] | undefined;
                                        isDemoTactic?: boolean | undefined;
                                        isShared?: boolean | undefined;
                                        description?: string | null | undefined;
                                        pastTenseTitle?: string | undefined;
                                        debriefAfterMinutes?: number | null | undefined;
                                        image?: {
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
                                        uid?: string | undefined;
                                        recommendedForIssueIds?: string[] | undefined;
                                        isDemoTactic?: boolean | undefined;
                                        prompt?: string | undefined;
                                        isShared?: boolean | undefined;
                                        description?: string | null | undefined;
                                        pastTenseTitle?: string | undefined;
                                        debriefAfterMinutes?: number | null | undefined;
                                        image?: {
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
                                        uid?: string | undefined;
                                        recommendedForIssueIds?: string[] | undefined;
                                        isDemoTactic?: boolean | undefined;
                                        prompt?: string | undefined;
                                        isShared?: boolean | undefined;
                                        description?: string | null | undefined;
                                        pastTenseTitle?: string | undefined;
                                        debriefAfterMinutes?: number | null | undefined;
                                        image?: {
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
                                        uid?: string | undefined;
                                        recommendedForIssueIds?: string[] | undefined;
                                        isDemoTactic?: boolean | undefined;
                                        prompt?: string | undefined;
                                        isShared?: boolean | undefined;
                                        description?: string | null | undefined;
                                        pastTenseTitle?: string | undefined;
                                        debriefAfterMinutes?: number | null | undefined;
                                        image?: {
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
                };
                metrics: {
                    [x: string]: {
                        doc?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
                };
            };
        };
    }, "dates" | ("createdAt" | "updatedAt")>;
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
        dayReviewTimeMinutes?: number | null | undefined;
        isReadyForTour?: boolean | undefined;
        isOnboardingComplete?: boolean | undefined;
        debriefReminderDelayMinutes?: number | null | undefined;
        androidPermissions?: {
            [x: string]: NonNullable<boolean | undefined>;
        } | null | undefined;
        behaviorsDescription?: string | undefined;
        initialImpulseMode?: "text" | "liveAudio" | undefined;
        historicalInsights?: string[] | undefined;
        activeThread?: {
            doc: import("../schema/utils/firestore").DocumentReferenceLike<unknown>;
            expiresAt: {
                isEqual?: any;
                toMillis?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            };
        } | undefined;
        isTourDismissed?: boolean | undefined;
        region?: string | null | undefined;
        enableZara?: boolean | undefined;
        agentType: NonNullable<import("..").AgentType | undefined>;
        uids: string[];
        verificationCode: string;
        recentSummaries: {
            [x: string]: string;
        };
        timezone: string;
    }, "agentType" | "uids" | "verificationCode" | "recentSummaries" | "timezone" | ("createdAt" | "updatedAt" | "parentIds" | "lastActiveAt" | "widgetInstalledAt" | "widgetLastPressedAt" | "defaultBehaviorDoc" | "tourCompletedAt" | "scheduledNotificationIds" | "whatsappStrategyDoc" | "onboardedWithZaraAt" | "currentAppState" | "expoPushToken" | "notificationPreferences" | "goal" | "dayReviewTimeMinutes" | "isReadyForTour" | "isOnboardingComplete" | "debriefReminderDelayMinutes" | "androidPermissions" | "behaviorsDescription" | "initialImpulseMode" | "historicalInsights" | "activeThread" | "isTourDismissed" | "region" | "enableZara")>;
    routineFactory: import("factory.ts").Factory<{
        createdAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
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
        name: string;
        type: "scheduled";
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
                    uid?: string | undefined;
                    recommendedForIssueIds?: string[] | undefined;
                    isDemoTactic?: boolean | undefined;
                    prompt?: string | undefined;
                    isShared?: boolean | undefined;
                    description?: string | null | undefined;
                    pastTenseTitle?: string | undefined;
                    debriefAfterMinutes?: number | null | undefined;
                    image?: {
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
                    uid?: string | undefined;
                    recommendedForIssueIds?: string[] | undefined;
                    isDemoTactic?: boolean | undefined;
                    prompt?: string | undefined;
                    isShared?: boolean | undefined;
                    description?: string | null | undefined;
                    pastTenseTitle?: string | undefined;
                    debriefAfterMinutes?: number | null | undefined;
                    image?: {
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
                    uid?: string | undefined;
                    recommendedForIssueIds?: string[] | undefined;
                    isDemoTactic?: boolean | undefined;
                    prompt?: string | undefined;
                    isShared?: boolean | undefined;
                    description?: string | null | undefined;
                    pastTenseTitle?: string | undefined;
                    debriefAfterMinutes?: number | null | undefined;
                    image?: {
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
                    uid?: string | undefined;
                    recommendedForIssueIds?: string[] | undefined;
                    isDemoTactic?: boolean | undefined;
                    isShared?: boolean | undefined;
                    description?: string | null | undefined;
                    pastTenseTitle?: string | undefined;
                    debriefAfterMinutes?: number | null | undefined;
                    image?: {
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
                    uid?: string | undefined;
                    recommendedForIssueIds?: string[] | undefined;
                    isDemoTactic?: boolean | undefined;
                    prompt?: string | undefined;
                    isShared?: boolean | undefined;
                    description?: string | null | undefined;
                    pastTenseTitle?: string | undefined;
                    debriefAfterMinutes?: number | null | undefined;
                    image?: {
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
                    uid?: string | undefined;
                    recommendedForIssueIds?: string[] | undefined;
                    isDemoTactic?: boolean | undefined;
                    prompt?: string | undefined;
                    isShared?: boolean | undefined;
                    description?: string | null | undefined;
                    pastTenseTitle?: string | undefined;
                    debriefAfterMinutes?: number | null | undefined;
                    image?: {
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
                    uid?: string | undefined;
                    recommendedForIssueIds?: string[] | undefined;
                    isDemoTactic?: boolean | undefined;
                    prompt?: string | undefined;
                    isShared?: boolean | undefined;
                    description?: string | null | undefined;
                    pastTenseTitle?: string | undefined;
                    debriefAfterMinutes?: number | null | undefined;
                    image?: {
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
        hour: number;
        minute: number;
        weekdays: (number | undefined)[];
    }, "name" | "type" | "tacticsById" | "hour" | "minute" | "weekdays" | ("createdAt" | "updatedAt" | "ordinal")>;
    tacticFactory: import("factory.ts").Factory<import("..").TacticValue, "createdAt" | "updatedAt" | "sourceFile" | "uid" | "recommendedForIssueIds" | "isDemoTactic" | "prompt" | "isShared" | "description" | "type" | "pastTenseTitle" | "debriefAfterMinutes" | "image" | "backgroundColor" | "likesCount" | "timerSeconds" | "isSuggested">;
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
        tacticDocs?: import("../schema/utils/firestore").DocumentReferenceLike<unknown>[] | undefined;
        stages?: number[] | undefined;
        title: string;
        gptContext: string;
    }, "title" | "gptContext" | ("createdAt" | "updatedAt" | "tacticDocs" | "stages")>;
    behaviorFactory: import("factory.ts").Factory<{
        createdAt?: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
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
                    sourceFile?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
                    uid?: string | undefined;
                    recommendedForIssueIds?: string[] | undefined;
                    isDemoTactic?: boolean | undefined;
                    prompt?: string | undefined;
                    isShared?: boolean | undefined;
                    description?: string | null | undefined;
                    pastTenseTitle?: string | undefined;
                    debriefAfterMinutes?: number | null | undefined;
                    image?: {
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
                    uid?: string | undefined;
                    recommendedForIssueIds?: string[] | undefined;
                    isDemoTactic?: boolean | undefined;
                    prompt?: string | undefined;
                    isShared?: boolean | undefined;
                    description?: string | null | undefined;
                    pastTenseTitle?: string | undefined;
                    debriefAfterMinutes?: number | null | undefined;
                    image?: {
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
                    uid?: string | undefined;
                    recommendedForIssueIds?: string[] | undefined;
                    isDemoTactic?: boolean | undefined;
                    prompt?: string | undefined;
                    isShared?: boolean | undefined;
                    description?: string | null | undefined;
                    pastTenseTitle?: string | undefined;
                    debriefAfterMinutes?: number | null | undefined;
                    image?: {
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
                    uid?: string | undefined;
                    recommendedForIssueIds?: string[] | undefined;
                    isDemoTactic?: boolean | undefined;
                    isShared?: boolean | undefined;
                    description?: string | null | undefined;
                    pastTenseTitle?: string | undefined;
                    debriefAfterMinutes?: number | null | undefined;
                    image?: {
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
                    uid?: string | undefined;
                    recommendedForIssueIds?: string[] | undefined;
                    isDemoTactic?: boolean | undefined;
                    prompt?: string | undefined;
                    isShared?: boolean | undefined;
                    description?: string | null | undefined;
                    pastTenseTitle?: string | undefined;
                    debriefAfterMinutes?: number | null | undefined;
                    image?: {
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
                    uid?: string | undefined;
                    recommendedForIssueIds?: string[] | undefined;
                    isDemoTactic?: boolean | undefined;
                    prompt?: string | undefined;
                    isShared?: boolean | undefined;
                    description?: string | null | undefined;
                    pastTenseTitle?: string | undefined;
                    debriefAfterMinutes?: number | null | undefined;
                    image?: {
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
                    uid?: string | undefined;
                    recommendedForIssueIds?: string[] | undefined;
                    isDemoTactic?: boolean | undefined;
                    prompt?: string | undefined;
                    isShared?: boolean | undefined;
                    description?: string | null | undefined;
                    pastTenseTitle?: string | undefined;
                    debriefAfterMinutes?: number | null | undefined;
                    image?: {
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
    }, "name" | "ordinal" | "trackingType" | "tacticsById" | "isHelpful" | ("createdAt" | "updatedAt" | "trackingUnit" | "dailyLimit")>;
};
