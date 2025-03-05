export declare const regularLogFactory: import("factory.ts").Factory<{
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
                            audio?: {
                                localFilePath?: import("yup").Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                                thumbnailUri?: import("yup").Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | null | undefined;
                            uid?: string | undefined;
                            prompt?: string | undefined;
                            description?: string | null | undefined;
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
                            timerSeconds?: import("yup").Maybe<number | undefined>;
                            type: "audio";
                        } | {
                            createdAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
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
                                localFilePath?: import("yup").Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                                thumbnailUri?: import("yup").Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            timerSeconds?: import("yup").Maybe<number | undefined>;
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
                            uid?: string | undefined;
                            prompt?: string | undefined;
                            description?: string | null | undefined;
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
                            timerSeconds?: import("yup").Maybe<number | undefined>;
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
                                localFilePath?: import("yup").Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                                thumbnailUri?: import("yup").Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            timerSeconds?: import("yup").Maybe<number | undefined>;
                            prompt: string;
                            type: "affirmation";
                        } | {
                            createdAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
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
                                localFilePath?: import("yup").Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                                thumbnailUri?: import("yup").Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            timerSeconds?: import("yup").Maybe<number | undefined>;
                            prompt: string;
                            type: "task";
                        } | {
                            createdAt?: {
                                isEqual?: any;
                                toMillis?: any;
                                seconds: number;
                                nanoseconds: number;
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
                                localFilePath?: import("yup").Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                                thumbnailUri?: import("yup").Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            timerSeconds?: import("yup").Maybe<number | undefined>;
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
                                localFilePath?: import("yup").Maybe<string | undefined>;
                                isDeleted?: boolean | undefined;
                                metadata?: {} | null | undefined;
                                thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                                thumbnailUri?: import("yup").Maybe<string | undefined>;
                                storagePath: string;
                                url: string;
                            } | undefined;
                            backgroundColor?: string | undefined;
                            timerSeconds?: import("yup").Maybe<number | undefined>;
                            type: "supportGroup";
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
                            uid?: string | undefined;
                            prompt?: string | undefined;
                            description?: string | null | undefined;
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
                            timerSeconds?: import("yup").Maybe<number | undefined>;
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
                audio?: {
                    localFilePath?: import("yup").Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                    thumbnailUri?: import("yup").Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | null | undefined;
                uid?: string | undefined;
                prompt?: string | undefined;
                description?: string | null | undefined;
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
                timerSeconds?: import("yup").Maybe<number | undefined>;
                type: "audio";
            } | {
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
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
                    localFilePath?: import("yup").Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                    thumbnailUri?: import("yup").Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                timerSeconds?: import("yup").Maybe<number | undefined>;
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
                uid?: string | undefined;
                prompt?: string | undefined;
                description?: string | null | undefined;
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
                timerSeconds?: import("yup").Maybe<number | undefined>;
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
                    localFilePath?: import("yup").Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                    thumbnailUri?: import("yup").Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                timerSeconds?: import("yup").Maybe<number | undefined>;
                prompt: string;
                type: "affirmation";
            } | {
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
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
                    localFilePath?: import("yup").Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                    thumbnailUri?: import("yup").Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                timerSeconds?: import("yup").Maybe<number | undefined>;
                prompt: string;
                type: "task";
            } | {
                createdAt?: {
                    isEqual?: any;
                    toMillis?: any;
                    seconds: number;
                    nanoseconds: number;
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
                    localFilePath?: import("yup").Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                    thumbnailUri?: import("yup").Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                timerSeconds?: import("yup").Maybe<number | undefined>;
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
                    localFilePath?: import("yup").Maybe<string | undefined>;
                    isDeleted?: boolean | undefined;
                    metadata?: {} | null | undefined;
                    thumbnailStoragePath?: import("yup").Maybe<string | undefined>;
                    thumbnailUri?: import("yup").Maybe<string | undefined>;
                    storagePath: string;
                    url: string;
                } | undefined;
                backgroundColor?: string | undefined;
                timerSeconds?: import("yup").Maybe<number | undefined>;
                type: "supportGroup";
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
                uid?: string | undefined;
                prompt?: string | undefined;
                description?: string | null | undefined;
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
                timerSeconds?: import("yup").Maybe<number | undefined>;
                url: string;
                type: "link";
            };
            doc: import("../schema/utils/firestore").DocumentReferenceLike<unknown>;
        };
    } | null | undefined;
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
}, "uid" | "type" | "date" | "isDisplayable" | "dateString" | "role" | ("text" | "createdAt" | "updatedAt" | "audioFile" | "skipGptResponse" | "metricData" | "behaviorData" | "tacticsData" | "senderUid" | "senderName" | "audioTranscript" | "audioTranscribedLocally")>, profileFactory: import("factory.ts").Factory<{
    createdAt?: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
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
}, "agentType" | "uids" | "verificationCode" | "recentSummaries" | "timezone" | ("createdAt" | "updatedAt" | "parentIds" | "lastActiveAt" | "widgetInstalledAt" | "widgetLastPressedAt" | "defaultBehaviorDoc" | "tourCompletedAt" | "scheduledNotificationIds" | "whatsappStrategyDoc" | "onboardedWithZaraAt" | "currentAppState" | "expoPushToken" | "notificationPreferences" | "goal" | "dayReviewTimeMinutes" | "isReadyForTour" | "isOnboardingComplete" | "debriefReminderDelayMinutes" | "androidPermissions" | "behaviorsDescription" | "initialImpulseMode" | "historicalInsights" | "activeThread" | "isTourDismissed" | "region" | "enableZara")>, tacticFactory: import("factory.ts").Factory<import("..").TacticValue, "createdAt" | "updatedAt" | "uid" | "prompt" | "description" | "type" | "image" | "backgroundColor" | "timerSeconds">;
