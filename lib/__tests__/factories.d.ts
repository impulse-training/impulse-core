export declare const factories: {
    applicationFactory: import("factory.ts").Factory<import("..").ApplicationValue, keyof import("..").ApplicationValue>;
    commentFactory: import("factory.ts").Factory<{
        createdAt?: {
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        updatedAt?: {
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        tacticId?: string | null | undefined;
        tacticName?: string | null | undefined;
        text?: string | undefined;
        recording?: {
            waveform?: string | null | undefined;
            localFilePath: string;
            remoteFilePath: string;
        } | undefined;
        isEdited?: boolean | undefined;
        avatar?: {
            localFilePath?: import("yup").Maybe<string | undefined>;
            storagePath?: import("yup").Maybe<string | undefined>;
            uri?: import("yup").Maybe<string | undefined>;
        } | undefined;
        profileId: string;
        authorName: string;
    }, "profileId" | "authorName" | ("createdAt" | "updatedAt" | "tacticId" | "tacticName" | "text" | "recording" | "isEdited" | "avatar")>;
    impulseFactory: import("factory.ts").Factory<import("..").ImpulseLogValue, "createdAt" | "updatedAt" | "profileId" | "type" | "location" | "startTime" | "timezone" | "locationIsFetching" | "locationFormatted" | "commentCount" | "commentsById" | "commentsByTacticId" | "strategyIds" | "seenTacticsById" | "completedTacticIds" | "tacticLikes" | "tacticData" | "sharedWithSupportGroupIds" | "setAsActiveImpulse" | "pressCount" | "isDisplayable" | "buttonPressSecondsSinceEpoch" | "strategiesByPatternId" | "outcome" | "patternId" | "patternsById" | "debriefNotes" | "debriefReminderSentAt" | "debriefedAt">;
    timeLogFactory: import("factory.ts").Factory<import("..").TimeLogValue, "createdAt" | "updatedAt" | "profileId" | "type" | "location" | "startTime" | "timezone" | "locationIsFetching" | "locationFormatted" | "commentCount" | "commentsById" | "commentsByTacticId" | "strategyIds" | "seenTacticsById" | "completedTacticIds" | "tacticLikes" | "tacticData" | "sharedWithSupportGroupIds" | "isDisplayable">;
    locationLogFactory: import("factory.ts").Factory<import("..").LocationLogValue, "createdAt" | "updatedAt" | "profileId" | "type" | "location" | "locationId" | "startTime" | "timezone" | "locationIsFetching" | "locationFormatted" | "commentCount" | "commentsById" | "commentsByTacticId" | "strategyIds" | "seenTacticsById" | "completedTacticIds" | "tacticLikes" | "tacticData" | "sharedWithSupportGroupIds" | "isDisplayable" | "locationName" | "locationMode">;
    locationFactory: import("factory.ts").Factory<{
        createdAt?: {
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        updatedAt?: {
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        latitude?: number | undefined;
        longitude?: number | undefined;
        profileId: string;
        name: string;
        address: string;
    }, "profileId" | "name" | "address" | ("createdAt" | "updatedAt" | "latitude" | "longitude")>;
    profileFactory: import("factory.ts").Factory<{
        createdAt?: {
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        updatedAt?: {
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        parentIssueIds?: (string | undefined)[] | undefined;
        activeImpulseId?: string | undefined;
        currentAppState?: import("react-native/types").AppStateStatus | undefined;
        lastActiveAt?: Date | undefined;
        expoPushToken?: string | undefined;
        widgetInstalledAt?: {
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        notificationPreferences?: {
            [x: string]: NonNullable<"push" | "email" | undefined>[] | undefined;
        } | null | undefined;
        androidPermissions?: {
            [x: string]: NonNullable<boolean | undefined>;
        } | null | undefined;
        region?: string | null | undefined;
        scheduledNotificationIds?: string[] | undefined;
        timezone: string;
        invitationCode: string;
    }, "timezone" | "invitationCode" | ("createdAt" | "updatedAt" | "parentIssueIds" | "activeImpulseId" | "currentAppState" | "lastActiveAt" | "expoPushToken" | "widgetInstalledAt" | "notificationPreferences" | "androidPermissions" | "region" | "scheduledNotificationIds")>;
    issueFactory: import("factory.ts").Factory<{
        path?: string | null | undefined;
        parentId?: string | null | undefined;
        setbackThreshold?: number | undefined;
        strategiesCount?: number | null | undefined;
        profileCount?: number | null | undefined;
        isFeatured?: boolean | null | undefined;
        impulseStrategies?: {
            createdAt?: {
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            ordinal?: import("yup").Maybe<number | undefined>;
            type: "impulse";
            tacticsById: {
                [x: string]: {
                    createdAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    profileId?: string | null | undefined;
                    sourceId?: string | undefined;
                    subtitle?: import("yup").Maybe<string | undefined>;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        storagePath?: import("yup").Maybe<string | undefined>;
                        uri?: import("yup").Maybe<string | undefined>;
                    } | null | undefined;
                    isTemplate?: boolean | null | undefined;
                    language?: string | null | undefined;
                    href?: string | null | undefined;
                    categoryIds?: (string | undefined)[] | null | undefined;
                    isShared?: boolean | null | undefined;
                    isResponseRequired?: boolean | null | undefined;
                    timerSeconds?: import("yup").Maybe<number | undefined>;
                    isAvailableForRecommendation?: boolean | null | undefined;
                    numberOfLikes?: number | null | undefined;
                    isSuggested?: boolean | undefined;
                    type: "question-counter";
                    title: string;
                    backgroundColor: string;
                } | {
                    createdAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    profileId?: string | null | undefined;
                    sourceId?: string | undefined;
                    subtitle?: import("yup").Maybe<string | undefined>;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        storagePath?: import("yup").Maybe<string | undefined>;
                        uri?: import("yup").Maybe<string | undefined>;
                    } | null | undefined;
                    isTemplate?: boolean | null | undefined;
                    language?: string | null | undefined;
                    href?: string | null | undefined;
                    categoryIds?: (string | undefined)[] | null | undefined;
                    isShared?: boolean | null | undefined;
                    isResponseRequired?: boolean | null | undefined;
                    timerSeconds?: import("yup").Maybe<number | undefined>;
                    isAvailableForRecommendation?: boolean | null | undefined;
                    numberOfLikes?: number | null | undefined;
                    isSuggested?: boolean | undefined;
                    choices?: {
                        [x: string]: {
                            text: string;
                            strategies: {
                                [x: string]: {} | undefined;
                            };
                            ordinal: number;
                        };
                    } | null | undefined;
                    type: "question-multiple-choice";
                    title: string;
                    backgroundColor: string;
                } | {
                    createdAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    profileId?: string | null | undefined;
                    sourceId?: string | undefined;
                    subtitle?: import("yup").Maybe<string | undefined>;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        storagePath?: import("yup").Maybe<string | undefined>;
                        uri?: import("yup").Maybe<string | undefined>;
                    } | null | undefined;
                    isTemplate?: boolean | null | undefined;
                    language?: string | null | undefined;
                    href?: string | null | undefined;
                    categoryIds?: (string | undefined)[] | null | undefined;
                    isShared?: boolean | null | undefined;
                    isResponseRequired?: boolean | null | undefined;
                    timerSeconds?: import("yup").Maybe<number | undefined>;
                    isAvailableForRecommendation?: boolean | null | undefined;
                    numberOfLikes?: number | null | undefined;
                    isSuggested?: boolean | undefined;
                    lowEmoji?: import("yup").Maybe<string | undefined>;
                    highEmoji?: import("yup").Maybe<string | undefined>;
                    type: "question-slider";
                    title: string;
                    backgroundColor: string;
                } | {
                    createdAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    profileId?: string | null | undefined;
                    sourceId?: string | undefined;
                    subtitle?: import("yup").Maybe<string | undefined>;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        storagePath?: import("yup").Maybe<string | undefined>;
                        uri?: import("yup").Maybe<string | undefined>;
                    } | null | undefined;
                    isTemplate?: boolean | null | undefined;
                    language?: string | null | undefined;
                    href?: string | null | undefined;
                    categoryIds?: (string | undefined)[] | null | undefined;
                    isShared?: boolean | null | undefined;
                    isResponseRequired?: boolean | null | undefined;
                    timerSeconds?: import("yup").Maybe<number | undefined>;
                    isAvailableForRecommendation?: boolean | null | undefined;
                    numberOfLikes?: number | null | undefined;
                    isSuggested?: boolean | undefined;
                    type: "question-time";
                    title: string;
                    backgroundColor: string;
                } | {
                    createdAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    profileId?: string | null | undefined;
                    sourceId?: string | undefined;
                    subtitle?: import("yup").Maybe<string | undefined>;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        storagePath?: import("yup").Maybe<string | undefined>;
                        uri?: import("yup").Maybe<string | undefined>;
                    } | null | undefined;
                    isTemplate?: boolean | null | undefined;
                    language?: string | null | undefined;
                    href?: string | null | undefined;
                    categoryIds?: (string | undefined)[] | null | undefined;
                    isShared?: boolean | null | undefined;
                    isResponseRequired?: boolean | null | undefined;
                    timerSeconds?: import("yup").Maybe<number | undefined>;
                    isAvailableForRecommendation?: boolean | null | undefined;
                    numberOfLikes?: number | null | undefined;
                    isSuggested?: boolean | undefined;
                    recording: {
                        waveform?: string | null | undefined;
                        localFilePath: string;
                        remoteFilePath: string;
                    };
                    type: "audio";
                    title: string;
                    backgroundColor: string;
                } | {
                    createdAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    profileId?: string | null | undefined;
                    sourceId?: string | undefined;
                    subtitle?: import("yup").Maybe<string | undefined>;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        storagePath?: import("yup").Maybe<string | undefined>;
                        uri?: import("yup").Maybe<string | undefined>;
                    } | null | undefined;
                    isTemplate?: boolean | null | undefined;
                    language?: string | null | undefined;
                    href?: string | null | undefined;
                    categoryIds?: (string | undefined)[] | null | undefined;
                    isShared?: boolean | null | undefined;
                    isResponseRequired?: boolean | null | undefined;
                    timerSeconds?: import("yup").Maybe<number | undefined>;
                    isAvailableForRecommendation?: boolean | null | undefined;
                    numberOfLikes?: number | null | undefined;
                    isSuggested?: boolean | undefined;
                    repeat?: import("yup").Maybe<number | undefined>;
                    type: "breathe";
                    title: string;
                    backgroundColor: string;
                    inFor: number;
                    holdFor: number;
                    outFor: number;
                } | {
                    createdAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    profileId?: string | null | undefined;
                    sourceId?: string | undefined;
                    subtitle?: import("yup").Maybe<string | undefined>;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        storagePath?: import("yup").Maybe<string | undefined>;
                        uri?: import("yup").Maybe<string | undefined>;
                    } | null | undefined;
                    isTemplate?: boolean | null | undefined;
                    language?: string | null | undefined;
                    href?: string | null | undefined;
                    categoryIds?: (string | undefined)[] | null | undefined;
                    isShared?: boolean | null | undefined;
                    isResponseRequired?: boolean | null | undefined;
                    timerSeconds?: import("yup").Maybe<number | undefined>;
                    isAvailableForRecommendation?: boolean | null | undefined;
                    numberOfLikes?: number | null | undefined;
                    isSuggested?: boolean | undefined;
                    type: "emotions";
                    title: string;
                    backgroundColor: string;
                } | {
                    createdAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    profileId?: string | null | undefined;
                    sourceId?: string | undefined;
                    subtitle?: import("yup").Maybe<string | undefined>;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        storagePath?: import("yup").Maybe<string | undefined>;
                        uri?: import("yup").Maybe<string | undefined>;
                    } | null | undefined;
                    isTemplate?: boolean | null | undefined;
                    language?: string | null | undefined;
                    href?: string | null | undefined;
                    categoryIds?: (string | undefined)[] | null | undefined;
                    isShared?: boolean | null | undefined;
                    isResponseRequired?: boolean | null | undefined;
                    timerSeconds?: import("yup").Maybe<number | undefined>;
                    isAvailableForRecommendation?: boolean | null | undefined;
                    numberOfLikes?: number | null | undefined;
                    isSuggested?: boolean | undefined;
                    type: "link";
                    title: string;
                    backgroundColor: string;
                } | {
                    createdAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    profileId?: string | null | undefined;
                    sourceId?: string | undefined;
                    subtitle?: import("yup").Maybe<string | undefined>;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        storagePath?: import("yup").Maybe<string | undefined>;
                        uri?: import("yup").Maybe<string | undefined>;
                    } | null | undefined;
                    isTemplate?: boolean | null | undefined;
                    language?: string | null | undefined;
                    href?: string | null | undefined;
                    categoryIds?: (string | undefined)[] | null | undefined;
                    isShared?: boolean | null | undefined;
                    isResponseRequired?: boolean | null | undefined;
                    timerSeconds?: import("yup").Maybe<number | undefined>;
                    isAvailableForRecommendation?: boolean | null | undefined;
                    numberOfLikes?: number | null | undefined;
                    isSuggested?: boolean | undefined;
                    type: "phone";
                    title: string;
                    backgroundColor: string;
                    supportGroupId: string;
                    trigger: {};
                } | {
                    createdAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    profileId?: string | null | undefined;
                    sourceId?: string | undefined;
                    subtitle?: import("yup").Maybe<string | undefined>;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        storagePath?: import("yup").Maybe<string | undefined>;
                        uri?: import("yup").Maybe<string | undefined>;
                    } | null | undefined;
                    isTemplate?: boolean | null | undefined;
                    language?: string | null | undefined;
                    href?: string | null | undefined;
                    categoryIds?: (string | undefined)[] | null | undefined;
                    isShared?: boolean | null | undefined;
                    isResponseRequired?: boolean | null | undefined;
                    timerSeconds?: import("yup").Maybe<number | undefined>;
                    isAvailableForRecommendation?: boolean | null | undefined;
                    numberOfLikes?: number | null | undefined;
                    isSuggested?: boolean | undefined;
                    type: "steps";
                    title: string;
                    backgroundColor: string;
                    steps: number;
                } | {
                    createdAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    profileId?: string | null | undefined;
                    sourceId?: string | undefined;
                    subtitle?: import("yup").Maybe<string | undefined>;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        storagePath?: import("yup").Maybe<string | undefined>;
                        uri?: import("yup").Maybe<string | undefined>;
                    } | null | undefined;
                    isTemplate?: boolean | null | undefined;
                    language?: string | null | undefined;
                    href?: string | null | undefined;
                    categoryIds?: (string | undefined)[] | null | undefined;
                    isShared?: boolean | null | undefined;
                    isResponseRequired?: boolean | null | undefined;
                    timerSeconds?: import("yup").Maybe<number | undefined>;
                    isAvailableForRecommendation?: boolean | null | undefined;
                    numberOfLikes?: number | null | undefined;
                    isSuggested?: boolean | undefined;
                    type: "task";
                    title: string;
                    backgroundColor: string;
                } | {
                    createdAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    profileId?: string | null | undefined;
                    sourceId?: string | undefined;
                    subtitle?: import("yup").Maybe<string | undefined>;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        storagePath?: import("yup").Maybe<string | undefined>;
                        uri?: import("yup").Maybe<string | undefined>;
                    } | null | undefined;
                    isTemplate?: boolean | null | undefined;
                    language?: string | null | undefined;
                    href?: string | null | undefined;
                    categoryIds?: (string | undefined)[] | null | undefined;
                    isShared?: boolean | null | undefined;
                    isResponseRequired?: boolean | null | undefined;
                    timerSeconds?: import("yup").Maybe<number | undefined>;
                    isAvailableForRecommendation?: boolean | null | undefined;
                    numberOfLikes?: number | null | undefined;
                    isSuggested?: boolean | undefined;
                    type: "urge-surfing";
                    title: string;
                    backgroundColor: string;
                } | {
                    createdAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    profileId?: string | null | undefined;
                    sourceId?: string | undefined;
                    subtitle?: import("yup").Maybe<string | undefined>;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        storagePath?: import("yup").Maybe<string | undefined>;
                        uri?: import("yup").Maybe<string | undefined>;
                    } | null | undefined;
                    isTemplate?: boolean | null | undefined;
                    language?: string | null | undefined;
                    href?: string | null | undefined;
                    categoryIds?: (string | undefined)[] | null | undefined;
                    isShared?: boolean | null | undefined;
                    isResponseRequired?: boolean | null | undefined;
                    timerSeconds?: import("yup").Maybe<number | undefined>;
                    isAvailableForRecommendation?: boolean | null | undefined;
                    numberOfLikes?: number | null | undefined;
                    isSuggested?: boolean | undefined;
                    type: "video";
                    title: string;
                    backgroundColor: string;
                    video: {
                        storagePath?: string | null | undefined;
                        url?: string | null | undefined;
                        title: string;
                        description: string;
                        thumbnailUrl: string;
                        duration: number;
                    };
                };
            };
            tacticIds: string[];
            name: string;
            forIssueIds: string[];
        }[] | undefined;
        createdAt: {
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        };
        updatedAt: {
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        };
        name: string;
        synonyms: string[];
        measureTactic: {
            createdAt?: {
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            profileId?: string | null | undefined;
            sourceId?: string | undefined;
            subtitle?: import("yup").Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: import("yup").Maybe<string | undefined>;
                storagePath?: import("yup").Maybe<string | undefined>;
                uri?: import("yup").Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: import("yup").Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            isSuggested?: boolean | undefined;
            type: "question-counter";
            title: string;
            backgroundColor: string;
        } | {
            createdAt?: {
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            profileId?: string | null | undefined;
            sourceId?: string | undefined;
            subtitle?: import("yup").Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: import("yup").Maybe<string | undefined>;
                storagePath?: import("yup").Maybe<string | undefined>;
                uri?: import("yup").Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: import("yup").Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            isSuggested?: boolean | undefined;
            choices?: {
                [x: string]: {
                    text: string;
                    strategies: {
                        [x: string]: {} | undefined;
                    };
                    ordinal: number;
                };
            } | null | undefined;
            type: "question-multiple-choice";
            title: string;
            backgroundColor: string;
        } | {
            createdAt?: {
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            profileId?: string | null | undefined;
            sourceId?: string | undefined;
            subtitle?: import("yup").Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: import("yup").Maybe<string | undefined>;
                storagePath?: import("yup").Maybe<string | undefined>;
                uri?: import("yup").Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: import("yup").Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            isSuggested?: boolean | undefined;
            lowEmoji?: import("yup").Maybe<string | undefined>;
            highEmoji?: import("yup").Maybe<string | undefined>;
            type: "question-slider";
            title: string;
            backgroundColor: string;
        } | {
            createdAt?: {
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            profileId?: string | null | undefined;
            sourceId?: string | undefined;
            subtitle?: import("yup").Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: import("yup").Maybe<string | undefined>;
                storagePath?: import("yup").Maybe<string | undefined>;
                uri?: import("yup").Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: import("yup").Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            isSuggested?: boolean | undefined;
            type: "question-time";
            title: string;
            backgroundColor: string;
        };
        parentIds: string[];
        parentNames: string[];
        scheduledStrategies: {
            createdAt?: {
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            ordinal?: import("yup").Maybe<number | undefined>;
            type: "time";
            tacticsById: {
                [x: string]: {
                    createdAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    profileId?: string | null | undefined;
                    sourceId?: string | undefined;
                    subtitle?: import("yup").Maybe<string | undefined>;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        storagePath?: import("yup").Maybe<string | undefined>;
                        uri?: import("yup").Maybe<string | undefined>;
                    } | null | undefined;
                    isTemplate?: boolean | null | undefined;
                    language?: string | null | undefined;
                    href?: string | null | undefined;
                    categoryIds?: (string | undefined)[] | null | undefined;
                    isShared?: boolean | null | undefined;
                    isResponseRequired?: boolean | null | undefined;
                    timerSeconds?: import("yup").Maybe<number | undefined>;
                    isAvailableForRecommendation?: boolean | null | undefined;
                    numberOfLikes?: number | null | undefined;
                    isSuggested?: boolean | undefined;
                    type: "question-counter";
                    title: string;
                    backgroundColor: string;
                } | {
                    createdAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    profileId?: string | null | undefined;
                    sourceId?: string | undefined;
                    subtitle?: import("yup").Maybe<string | undefined>;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        storagePath?: import("yup").Maybe<string | undefined>;
                        uri?: import("yup").Maybe<string | undefined>;
                    } | null | undefined;
                    isTemplate?: boolean | null | undefined;
                    language?: string | null | undefined;
                    href?: string | null | undefined;
                    categoryIds?: (string | undefined)[] | null | undefined;
                    isShared?: boolean | null | undefined;
                    isResponseRequired?: boolean | null | undefined;
                    timerSeconds?: import("yup").Maybe<number | undefined>;
                    isAvailableForRecommendation?: boolean | null | undefined;
                    numberOfLikes?: number | null | undefined;
                    isSuggested?: boolean | undefined;
                    choices?: {
                        [x: string]: {
                            text: string;
                            strategies: {
                                [x: string]: {} | undefined;
                            };
                            ordinal: number;
                        };
                    } | null | undefined;
                    type: "question-multiple-choice";
                    title: string;
                    backgroundColor: string;
                } | {
                    createdAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    profileId?: string | null | undefined;
                    sourceId?: string | undefined;
                    subtitle?: import("yup").Maybe<string | undefined>;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        storagePath?: import("yup").Maybe<string | undefined>;
                        uri?: import("yup").Maybe<string | undefined>;
                    } | null | undefined;
                    isTemplate?: boolean | null | undefined;
                    language?: string | null | undefined;
                    href?: string | null | undefined;
                    categoryIds?: (string | undefined)[] | null | undefined;
                    isShared?: boolean | null | undefined;
                    isResponseRequired?: boolean | null | undefined;
                    timerSeconds?: import("yup").Maybe<number | undefined>;
                    isAvailableForRecommendation?: boolean | null | undefined;
                    numberOfLikes?: number | null | undefined;
                    isSuggested?: boolean | undefined;
                    lowEmoji?: import("yup").Maybe<string | undefined>;
                    highEmoji?: import("yup").Maybe<string | undefined>;
                    type: "question-slider";
                    title: string;
                    backgroundColor: string;
                } | {
                    createdAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    profileId?: string | null | undefined;
                    sourceId?: string | undefined;
                    subtitle?: import("yup").Maybe<string | undefined>;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        storagePath?: import("yup").Maybe<string | undefined>;
                        uri?: import("yup").Maybe<string | undefined>;
                    } | null | undefined;
                    isTemplate?: boolean | null | undefined;
                    language?: string | null | undefined;
                    href?: string | null | undefined;
                    categoryIds?: (string | undefined)[] | null | undefined;
                    isShared?: boolean | null | undefined;
                    isResponseRequired?: boolean | null | undefined;
                    timerSeconds?: import("yup").Maybe<number | undefined>;
                    isAvailableForRecommendation?: boolean | null | undefined;
                    numberOfLikes?: number | null | undefined;
                    isSuggested?: boolean | undefined;
                    type: "question-time";
                    title: string;
                    backgroundColor: string;
                } | {
                    createdAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    profileId?: string | null | undefined;
                    sourceId?: string | undefined;
                    subtitle?: import("yup").Maybe<string | undefined>;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        storagePath?: import("yup").Maybe<string | undefined>;
                        uri?: import("yup").Maybe<string | undefined>;
                    } | null | undefined;
                    isTemplate?: boolean | null | undefined;
                    language?: string | null | undefined;
                    href?: string | null | undefined;
                    categoryIds?: (string | undefined)[] | null | undefined;
                    isShared?: boolean | null | undefined;
                    isResponseRequired?: boolean | null | undefined;
                    timerSeconds?: import("yup").Maybe<number | undefined>;
                    isAvailableForRecommendation?: boolean | null | undefined;
                    numberOfLikes?: number | null | undefined;
                    isSuggested?: boolean | undefined;
                    recording: {
                        waveform?: string | null | undefined;
                        localFilePath: string;
                        remoteFilePath: string;
                    };
                    type: "audio";
                    title: string;
                    backgroundColor: string;
                } | {
                    createdAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    profileId?: string | null | undefined;
                    sourceId?: string | undefined;
                    subtitle?: import("yup").Maybe<string | undefined>;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        storagePath?: import("yup").Maybe<string | undefined>;
                        uri?: import("yup").Maybe<string | undefined>;
                    } | null | undefined;
                    isTemplate?: boolean | null | undefined;
                    language?: string | null | undefined;
                    href?: string | null | undefined;
                    categoryIds?: (string | undefined)[] | null | undefined;
                    isShared?: boolean | null | undefined;
                    isResponseRequired?: boolean | null | undefined;
                    timerSeconds?: import("yup").Maybe<number | undefined>;
                    isAvailableForRecommendation?: boolean | null | undefined;
                    numberOfLikes?: number | null | undefined;
                    isSuggested?: boolean | undefined;
                    repeat?: import("yup").Maybe<number | undefined>;
                    type: "breathe";
                    title: string;
                    backgroundColor: string;
                    inFor: number;
                    holdFor: number;
                    outFor: number;
                } | {
                    createdAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    profileId?: string | null | undefined;
                    sourceId?: string | undefined;
                    subtitle?: import("yup").Maybe<string | undefined>;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        storagePath?: import("yup").Maybe<string | undefined>;
                        uri?: import("yup").Maybe<string | undefined>;
                    } | null | undefined;
                    isTemplate?: boolean | null | undefined;
                    language?: string | null | undefined;
                    href?: string | null | undefined;
                    categoryIds?: (string | undefined)[] | null | undefined;
                    isShared?: boolean | null | undefined;
                    isResponseRequired?: boolean | null | undefined;
                    timerSeconds?: import("yup").Maybe<number | undefined>;
                    isAvailableForRecommendation?: boolean | null | undefined;
                    numberOfLikes?: number | null | undefined;
                    isSuggested?: boolean | undefined;
                    type: "emotions";
                    title: string;
                    backgroundColor: string;
                } | {
                    createdAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    profileId?: string | null | undefined;
                    sourceId?: string | undefined;
                    subtitle?: import("yup").Maybe<string | undefined>;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        storagePath?: import("yup").Maybe<string | undefined>;
                        uri?: import("yup").Maybe<string | undefined>;
                    } | null | undefined;
                    isTemplate?: boolean | null | undefined;
                    language?: string | null | undefined;
                    href?: string | null | undefined;
                    categoryIds?: (string | undefined)[] | null | undefined;
                    isShared?: boolean | null | undefined;
                    isResponseRequired?: boolean | null | undefined;
                    timerSeconds?: import("yup").Maybe<number | undefined>;
                    isAvailableForRecommendation?: boolean | null | undefined;
                    numberOfLikes?: number | null | undefined;
                    isSuggested?: boolean | undefined;
                    type: "link";
                    title: string;
                    backgroundColor: string;
                } | {
                    createdAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    profileId?: string | null | undefined;
                    sourceId?: string | undefined;
                    subtitle?: import("yup").Maybe<string | undefined>;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        storagePath?: import("yup").Maybe<string | undefined>;
                        uri?: import("yup").Maybe<string | undefined>;
                    } | null | undefined;
                    isTemplate?: boolean | null | undefined;
                    language?: string | null | undefined;
                    href?: string | null | undefined;
                    categoryIds?: (string | undefined)[] | null | undefined;
                    isShared?: boolean | null | undefined;
                    isResponseRequired?: boolean | null | undefined;
                    timerSeconds?: import("yup").Maybe<number | undefined>;
                    isAvailableForRecommendation?: boolean | null | undefined;
                    numberOfLikes?: number | null | undefined;
                    isSuggested?: boolean | undefined;
                    type: "phone";
                    title: string;
                    backgroundColor: string;
                    supportGroupId: string;
                    trigger: {};
                } | {
                    createdAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    profileId?: string | null | undefined;
                    sourceId?: string | undefined;
                    subtitle?: import("yup").Maybe<string | undefined>;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        storagePath?: import("yup").Maybe<string | undefined>;
                        uri?: import("yup").Maybe<string | undefined>;
                    } | null | undefined;
                    isTemplate?: boolean | null | undefined;
                    language?: string | null | undefined;
                    href?: string | null | undefined;
                    categoryIds?: (string | undefined)[] | null | undefined;
                    isShared?: boolean | null | undefined;
                    isResponseRequired?: boolean | null | undefined;
                    timerSeconds?: import("yup").Maybe<number | undefined>;
                    isAvailableForRecommendation?: boolean | null | undefined;
                    numberOfLikes?: number | null | undefined;
                    isSuggested?: boolean | undefined;
                    type: "steps";
                    title: string;
                    backgroundColor: string;
                    steps: number;
                } | {
                    createdAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    profileId?: string | null | undefined;
                    sourceId?: string | undefined;
                    subtitle?: import("yup").Maybe<string | undefined>;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        storagePath?: import("yup").Maybe<string | undefined>;
                        uri?: import("yup").Maybe<string | undefined>;
                    } | null | undefined;
                    isTemplate?: boolean | null | undefined;
                    language?: string | null | undefined;
                    href?: string | null | undefined;
                    categoryIds?: (string | undefined)[] | null | undefined;
                    isShared?: boolean | null | undefined;
                    isResponseRequired?: boolean | null | undefined;
                    timerSeconds?: import("yup").Maybe<number | undefined>;
                    isAvailableForRecommendation?: boolean | null | undefined;
                    numberOfLikes?: number | null | undefined;
                    isSuggested?: boolean | undefined;
                    type: "task";
                    title: string;
                    backgroundColor: string;
                } | {
                    createdAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    profileId?: string | null | undefined;
                    sourceId?: string | undefined;
                    subtitle?: import("yup").Maybe<string | undefined>;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        storagePath?: import("yup").Maybe<string | undefined>;
                        uri?: import("yup").Maybe<string | undefined>;
                    } | null | undefined;
                    isTemplate?: boolean | null | undefined;
                    language?: string | null | undefined;
                    href?: string | null | undefined;
                    categoryIds?: (string | undefined)[] | null | undefined;
                    isShared?: boolean | null | undefined;
                    isResponseRequired?: boolean | null | undefined;
                    timerSeconds?: import("yup").Maybe<number | undefined>;
                    isAvailableForRecommendation?: boolean | null | undefined;
                    numberOfLikes?: number | null | undefined;
                    isSuggested?: boolean | undefined;
                    type: "urge-surfing";
                    title: string;
                    backgroundColor: string;
                } | {
                    createdAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    profileId?: string | null | undefined;
                    sourceId?: string | undefined;
                    subtitle?: import("yup").Maybe<string | undefined>;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        storagePath?: import("yup").Maybe<string | undefined>;
                        uri?: import("yup").Maybe<string | undefined>;
                    } | null | undefined;
                    isTemplate?: boolean | null | undefined;
                    language?: string | null | undefined;
                    href?: string | null | undefined;
                    categoryIds?: (string | undefined)[] | null | undefined;
                    isShared?: boolean | null | undefined;
                    isResponseRequired?: boolean | null | undefined;
                    timerSeconds?: import("yup").Maybe<number | undefined>;
                    isAvailableForRecommendation?: boolean | null | undefined;
                    numberOfLikes?: number | null | undefined;
                    isSuggested?: boolean | undefined;
                    type: "video";
                    title: string;
                    backgroundColor: string;
                    video: {
                        storagePath?: string | null | undefined;
                        url?: string | null | undefined;
                        title: string;
                        description: string;
                        thumbnailUrl: string;
                        duration: number;
                    };
                };
            };
            tacticIds: string[];
            name: string;
            weekdays: number[];
            hour: number;
            minute: number;
        }[];
        locationStrategies: {
            createdAt?: {
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            ordinal?: import("yup").Maybe<number | undefined>;
            type: "location";
            tacticsById: {
                [x: string]: {
                    createdAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    profileId?: string | null | undefined;
                    sourceId?: string | undefined;
                    subtitle?: import("yup").Maybe<string | undefined>;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        storagePath?: import("yup").Maybe<string | undefined>;
                        uri?: import("yup").Maybe<string | undefined>;
                    } | null | undefined;
                    isTemplate?: boolean | null | undefined;
                    language?: string | null | undefined;
                    href?: string | null | undefined;
                    categoryIds?: (string | undefined)[] | null | undefined;
                    isShared?: boolean | null | undefined;
                    isResponseRequired?: boolean | null | undefined;
                    timerSeconds?: import("yup").Maybe<number | undefined>;
                    isAvailableForRecommendation?: boolean | null | undefined;
                    numberOfLikes?: number | null | undefined;
                    isSuggested?: boolean | undefined;
                    type: "question-counter";
                    title: string;
                    backgroundColor: string;
                } | {
                    createdAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    profileId?: string | null | undefined;
                    sourceId?: string | undefined;
                    subtitle?: import("yup").Maybe<string | undefined>;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        storagePath?: import("yup").Maybe<string | undefined>;
                        uri?: import("yup").Maybe<string | undefined>;
                    } | null | undefined;
                    isTemplate?: boolean | null | undefined;
                    language?: string | null | undefined;
                    href?: string | null | undefined;
                    categoryIds?: (string | undefined)[] | null | undefined;
                    isShared?: boolean | null | undefined;
                    isResponseRequired?: boolean | null | undefined;
                    timerSeconds?: import("yup").Maybe<number | undefined>;
                    isAvailableForRecommendation?: boolean | null | undefined;
                    numberOfLikes?: number | null | undefined;
                    isSuggested?: boolean | undefined;
                    choices?: {
                        [x: string]: {
                            text: string;
                            strategies: {
                                [x: string]: {} | undefined;
                            };
                            ordinal: number;
                        };
                    } | null | undefined;
                    type: "question-multiple-choice";
                    title: string;
                    backgroundColor: string;
                } | {
                    createdAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    profileId?: string | null | undefined;
                    sourceId?: string | undefined;
                    subtitle?: import("yup").Maybe<string | undefined>;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        storagePath?: import("yup").Maybe<string | undefined>;
                        uri?: import("yup").Maybe<string | undefined>;
                    } | null | undefined;
                    isTemplate?: boolean | null | undefined;
                    language?: string | null | undefined;
                    href?: string | null | undefined;
                    categoryIds?: (string | undefined)[] | null | undefined;
                    isShared?: boolean | null | undefined;
                    isResponseRequired?: boolean | null | undefined;
                    timerSeconds?: import("yup").Maybe<number | undefined>;
                    isAvailableForRecommendation?: boolean | null | undefined;
                    numberOfLikes?: number | null | undefined;
                    isSuggested?: boolean | undefined;
                    lowEmoji?: import("yup").Maybe<string | undefined>;
                    highEmoji?: import("yup").Maybe<string | undefined>;
                    type: "question-slider";
                    title: string;
                    backgroundColor: string;
                } | {
                    createdAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    profileId?: string | null | undefined;
                    sourceId?: string | undefined;
                    subtitle?: import("yup").Maybe<string | undefined>;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        storagePath?: import("yup").Maybe<string | undefined>;
                        uri?: import("yup").Maybe<string | undefined>;
                    } | null | undefined;
                    isTemplate?: boolean | null | undefined;
                    language?: string | null | undefined;
                    href?: string | null | undefined;
                    categoryIds?: (string | undefined)[] | null | undefined;
                    isShared?: boolean | null | undefined;
                    isResponseRequired?: boolean | null | undefined;
                    timerSeconds?: import("yup").Maybe<number | undefined>;
                    isAvailableForRecommendation?: boolean | null | undefined;
                    numberOfLikes?: number | null | undefined;
                    isSuggested?: boolean | undefined;
                    type: "question-time";
                    title: string;
                    backgroundColor: string;
                } | {
                    createdAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    profileId?: string | null | undefined;
                    sourceId?: string | undefined;
                    subtitle?: import("yup").Maybe<string | undefined>;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        storagePath?: import("yup").Maybe<string | undefined>;
                        uri?: import("yup").Maybe<string | undefined>;
                    } | null | undefined;
                    isTemplate?: boolean | null | undefined;
                    language?: string | null | undefined;
                    href?: string | null | undefined;
                    categoryIds?: (string | undefined)[] | null | undefined;
                    isShared?: boolean | null | undefined;
                    isResponseRequired?: boolean | null | undefined;
                    timerSeconds?: import("yup").Maybe<number | undefined>;
                    isAvailableForRecommendation?: boolean | null | undefined;
                    numberOfLikes?: number | null | undefined;
                    isSuggested?: boolean | undefined;
                    recording: {
                        waveform?: string | null | undefined;
                        localFilePath: string;
                        remoteFilePath: string;
                    };
                    type: "audio";
                    title: string;
                    backgroundColor: string;
                } | {
                    createdAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    profileId?: string | null | undefined;
                    sourceId?: string | undefined;
                    subtitle?: import("yup").Maybe<string | undefined>;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        storagePath?: import("yup").Maybe<string | undefined>;
                        uri?: import("yup").Maybe<string | undefined>;
                    } | null | undefined;
                    isTemplate?: boolean | null | undefined;
                    language?: string | null | undefined;
                    href?: string | null | undefined;
                    categoryIds?: (string | undefined)[] | null | undefined;
                    isShared?: boolean | null | undefined;
                    isResponseRequired?: boolean | null | undefined;
                    timerSeconds?: import("yup").Maybe<number | undefined>;
                    isAvailableForRecommendation?: boolean | null | undefined;
                    numberOfLikes?: number | null | undefined;
                    isSuggested?: boolean | undefined;
                    repeat?: import("yup").Maybe<number | undefined>;
                    type: "breathe";
                    title: string;
                    backgroundColor: string;
                    inFor: number;
                    holdFor: number;
                    outFor: number;
                } | {
                    createdAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    profileId?: string | null | undefined;
                    sourceId?: string | undefined;
                    subtitle?: import("yup").Maybe<string | undefined>;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        storagePath?: import("yup").Maybe<string | undefined>;
                        uri?: import("yup").Maybe<string | undefined>;
                    } | null | undefined;
                    isTemplate?: boolean | null | undefined;
                    language?: string | null | undefined;
                    href?: string | null | undefined;
                    categoryIds?: (string | undefined)[] | null | undefined;
                    isShared?: boolean | null | undefined;
                    isResponseRequired?: boolean | null | undefined;
                    timerSeconds?: import("yup").Maybe<number | undefined>;
                    isAvailableForRecommendation?: boolean | null | undefined;
                    numberOfLikes?: number | null | undefined;
                    isSuggested?: boolean | undefined;
                    type: "emotions";
                    title: string;
                    backgroundColor: string;
                } | {
                    createdAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    profileId?: string | null | undefined;
                    sourceId?: string | undefined;
                    subtitle?: import("yup").Maybe<string | undefined>;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        storagePath?: import("yup").Maybe<string | undefined>;
                        uri?: import("yup").Maybe<string | undefined>;
                    } | null | undefined;
                    isTemplate?: boolean | null | undefined;
                    language?: string | null | undefined;
                    href?: string | null | undefined;
                    categoryIds?: (string | undefined)[] | null | undefined;
                    isShared?: boolean | null | undefined;
                    isResponseRequired?: boolean | null | undefined;
                    timerSeconds?: import("yup").Maybe<number | undefined>;
                    isAvailableForRecommendation?: boolean | null | undefined;
                    numberOfLikes?: number | null | undefined;
                    isSuggested?: boolean | undefined;
                    type: "link";
                    title: string;
                    backgroundColor: string;
                } | {
                    createdAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    profileId?: string | null | undefined;
                    sourceId?: string | undefined;
                    subtitle?: import("yup").Maybe<string | undefined>;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        storagePath?: import("yup").Maybe<string | undefined>;
                        uri?: import("yup").Maybe<string | undefined>;
                    } | null | undefined;
                    isTemplate?: boolean | null | undefined;
                    language?: string | null | undefined;
                    href?: string | null | undefined;
                    categoryIds?: (string | undefined)[] | null | undefined;
                    isShared?: boolean | null | undefined;
                    isResponseRequired?: boolean | null | undefined;
                    timerSeconds?: import("yup").Maybe<number | undefined>;
                    isAvailableForRecommendation?: boolean | null | undefined;
                    numberOfLikes?: number | null | undefined;
                    isSuggested?: boolean | undefined;
                    type: "phone";
                    title: string;
                    backgroundColor: string;
                    supportGroupId: string;
                    trigger: {};
                } | {
                    createdAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    profileId?: string | null | undefined;
                    sourceId?: string | undefined;
                    subtitle?: import("yup").Maybe<string | undefined>;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        storagePath?: import("yup").Maybe<string | undefined>;
                        uri?: import("yup").Maybe<string | undefined>;
                    } | null | undefined;
                    isTemplate?: boolean | null | undefined;
                    language?: string | null | undefined;
                    href?: string | null | undefined;
                    categoryIds?: (string | undefined)[] | null | undefined;
                    isShared?: boolean | null | undefined;
                    isResponseRequired?: boolean | null | undefined;
                    timerSeconds?: import("yup").Maybe<number | undefined>;
                    isAvailableForRecommendation?: boolean | null | undefined;
                    numberOfLikes?: number | null | undefined;
                    isSuggested?: boolean | undefined;
                    type: "steps";
                    title: string;
                    backgroundColor: string;
                    steps: number;
                } | {
                    createdAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    profileId?: string | null | undefined;
                    sourceId?: string | undefined;
                    subtitle?: import("yup").Maybe<string | undefined>;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        storagePath?: import("yup").Maybe<string | undefined>;
                        uri?: import("yup").Maybe<string | undefined>;
                    } | null | undefined;
                    isTemplate?: boolean | null | undefined;
                    language?: string | null | undefined;
                    href?: string | null | undefined;
                    categoryIds?: (string | undefined)[] | null | undefined;
                    isShared?: boolean | null | undefined;
                    isResponseRequired?: boolean | null | undefined;
                    timerSeconds?: import("yup").Maybe<number | undefined>;
                    isAvailableForRecommendation?: boolean | null | undefined;
                    numberOfLikes?: number | null | undefined;
                    isSuggested?: boolean | undefined;
                    type: "task";
                    title: string;
                    backgroundColor: string;
                } | {
                    createdAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    profileId?: string | null | undefined;
                    sourceId?: string | undefined;
                    subtitle?: import("yup").Maybe<string | undefined>;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        storagePath?: import("yup").Maybe<string | undefined>;
                        uri?: import("yup").Maybe<string | undefined>;
                    } | null | undefined;
                    isTemplate?: boolean | null | undefined;
                    language?: string | null | undefined;
                    href?: string | null | undefined;
                    categoryIds?: (string | undefined)[] | null | undefined;
                    isShared?: boolean | null | undefined;
                    isResponseRequired?: boolean | null | undefined;
                    timerSeconds?: import("yup").Maybe<number | undefined>;
                    isAvailableForRecommendation?: boolean | null | undefined;
                    numberOfLikes?: number | null | undefined;
                    isSuggested?: boolean | undefined;
                    type: "urge-surfing";
                    title: string;
                    backgroundColor: string;
                } | {
                    createdAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    updatedAt?: {
                        seconds: number;
                        nanoseconds: number;
                        toDate: Function;
                    } | null | undefined;
                    profileId?: string | null | undefined;
                    sourceId?: string | undefined;
                    subtitle?: import("yup").Maybe<string | undefined>;
                    description?: string | null | undefined;
                    image?: {
                        localFilePath?: import("yup").Maybe<string | undefined>;
                        storagePath?: import("yup").Maybe<string | undefined>;
                        uri?: import("yup").Maybe<string | undefined>;
                    } | null | undefined;
                    isTemplate?: boolean | null | undefined;
                    language?: string | null | undefined;
                    href?: string | null | undefined;
                    categoryIds?: (string | undefined)[] | null | undefined;
                    isShared?: boolean | null | undefined;
                    isResponseRequired?: boolean | null | undefined;
                    timerSeconds?: import("yup").Maybe<number | undefined>;
                    isAvailableForRecommendation?: boolean | null | undefined;
                    numberOfLikes?: number | null | undefined;
                    isSuggested?: boolean | undefined;
                    type: "video";
                    title: string;
                    backgroundColor: string;
                    video: {
                        storagePath?: string | null | undefined;
                        url?: string | null | undefined;
                        title: string;
                        description: string;
                        thumbnailUrl: string;
                        duration: number;
                    };
                };
            };
            tacticIds: string[];
            name: string;
            locationId: string;
            mode: NonNullable<"enter" | "exit" | undefined>;
        }[];
    }, "createdAt" | "updatedAt" | "name" | "synonyms" | "measureTactic" | "parentIds" | "parentNames" | "scheduledStrategies" | "locationStrategies" | ("path" | "parentId" | "setbackThreshold" | "strategiesCount" | "profileCount" | "isFeatured" | "impulseStrategies")>;
    supportGroupFactory: import("factory.ts").Factory<{
        createdAt?: {
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        updatedAt?: {
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        isTemplate?: boolean | undefined;
        invitationCode?: string | undefined;
        slug?: string | undefined;
        templateId?: string | undefined;
        everythingPermissions?: boolean | undefined;
        memberTargetCount?: number | undefined;
        groupNameAliases?: {
            [x: string]: string;
            [x: number]: string;
            [x: symbol]: string;
        } | undefined;
        groupDescription?: string | undefined;
        lastMessagePreview?: string | undefined;
        invitationUrl?: string | undefined;
        lastMessageUid?: string | undefined;
        isSharingDisabled?: boolean | undefined;
        thumbnailUrl: string;
        participantUids: string[];
        groupName: string;
        creatorName: string;
        creatorUid: string;
        icon: {};
        unreadCounts: {
            [x: string]: number;
        };
        permissions: {};
        suggestedTacticIds: {};
    }, "thumbnailUrl" | "participantUids" | "groupName" | "creatorName" | "creatorUid" | "icon" | "unreadCounts" | "permissions" | "suggestedTacticIds" | ("createdAt" | "updatedAt" | "isTemplate" | "invitationCode" | "slug" | "templateId" | "everythingPermissions" | "memberTargetCount" | "groupNameAliases" | "groupDescription" | "lastMessagePreview" | "invitationUrl" | "lastMessageUid" | "isSharingDisabled")>;
    messageFactory: import("factory.ts").Factory<import("..").MessageValue, keyof import("..").MessageValue>;
    patternFactory: import("factory.ts").Factory<{
        createdAt?: {
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        updatedAt?: {
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        setbackThreshold?: import("yup").Maybe<number | undefined>;
        supportGroupIds?: string[] | undefined;
        notification?: import("yup").Maybe<{} | undefined> | {
            title: string;
            body: string;
        };
        dailySetbackThreshold?: import("yup").Maybe<number | undefined>;
        issueId?: import("yup").Maybe<string | undefined>;
        parentIssueIds?: string[] | undefined;
        sendWeeklyReports?: import("yup").Maybe<boolean | undefined>;
        profileId: string;
        ordinal: number;
        name: string;
        measureTactic: {
            createdAt?: {
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            profileId?: string | null | undefined;
            sourceId?: string | undefined;
            subtitle?: import("yup").Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: import("yup").Maybe<string | undefined>;
                storagePath?: import("yup").Maybe<string | undefined>;
                uri?: import("yup").Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: import("yup").Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            isSuggested?: boolean | undefined;
            type: "question-counter";
            title: string;
            backgroundColor: string;
        } | {
            createdAt?: {
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            profileId?: string | null | undefined;
            sourceId?: string | undefined;
            subtitle?: import("yup").Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: import("yup").Maybe<string | undefined>;
                storagePath?: import("yup").Maybe<string | undefined>;
                uri?: import("yup").Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: import("yup").Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            isSuggested?: boolean | undefined;
            choices?: {
                [x: string]: {
                    text: string;
                    strategies: {
                        [x: string]: {} | undefined;
                    };
                    ordinal: number;
                };
            } | null | undefined;
            type: "question-multiple-choice";
            title: string;
            backgroundColor: string;
        } | {
            createdAt?: {
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            profileId?: string | null | undefined;
            sourceId?: string | undefined;
            subtitle?: import("yup").Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: import("yup").Maybe<string | undefined>;
                storagePath?: import("yup").Maybe<string | undefined>;
                uri?: import("yup").Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: import("yup").Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            isSuggested?: boolean | undefined;
            lowEmoji?: import("yup").Maybe<string | undefined>;
            highEmoji?: import("yup").Maybe<string | undefined>;
            type: "question-slider";
            title: string;
            backgroundColor: string;
        } | {
            createdAt?: {
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            profileId?: string | null | undefined;
            sourceId?: string | undefined;
            subtitle?: import("yup").Maybe<string | undefined>;
            description?: string | null | undefined;
            image?: {
                localFilePath?: import("yup").Maybe<string | undefined>;
                storagePath?: import("yup").Maybe<string | undefined>;
                uri?: import("yup").Maybe<string | undefined>;
            } | null | undefined;
            isTemplate?: boolean | null | undefined;
            language?: string | null | undefined;
            href?: string | null | undefined;
            categoryIds?: (string | undefined)[] | null | undefined;
            isShared?: boolean | null | undefined;
            isResponseRequired?: boolean | null | undefined;
            timerSeconds?: import("yup").Maybe<number | undefined>;
            isAvailableForRecommendation?: boolean | null | undefined;
            numberOfLikes?: number | null | undefined;
            isSuggested?: boolean | undefined;
            type: "question-time";
            title: string;
            backgroundColor: string;
        };
    }, "profileId" | "ordinal" | "name" | "measureTactic" | ("createdAt" | "updatedAt" | "setbackThreshold" | "supportGroupIds" | "notification" | "dailySetbackThreshold" | "issueId" | "parentIssueIds" | "sendWeeklyReports")>;
    tacticFactory: import("factory.ts").Factory<import("..").TacticValue, "createdAt" | "updatedAt" | "profileId" | "type" | "sourceId" | "title" | "subtitle" | "description" | "image" | "backgroundColor" | "isTemplate" | "language" | "href" | "categoryIds" | "isShared" | "isResponseRequired" | "timerSeconds" | "isAvailableForRecommendation" | "numberOfLikes" | "isSuggested">;
    questionTimeTacticFactory: import("factory.ts").Factory<{
        createdAt?: {
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        updatedAt?: {
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        profileId?: string | null | undefined;
        sourceId?: string | undefined;
        subtitle?: import("yup").Maybe<string | undefined>;
        description?: string | null | undefined;
        image?: {
            localFilePath?: import("yup").Maybe<string | undefined>;
            storagePath?: import("yup").Maybe<string | undefined>;
            uri?: import("yup").Maybe<string | undefined>;
        } | null | undefined;
        isTemplate?: boolean | null | undefined;
        language?: string | null | undefined;
        href?: string | null | undefined;
        categoryIds?: (string | undefined)[] | null | undefined;
        isShared?: boolean | null | undefined;
        isResponseRequired?: boolean | null | undefined;
        timerSeconds?: import("yup").Maybe<number | undefined>;
        isAvailableForRecommendation?: boolean | null | undefined;
        numberOfLikes?: number | null | undefined;
        isSuggested?: boolean | undefined;
        type: "question-time";
        title: string;
        backgroundColor: string;
    }, "type" | "title" | "backgroundColor" | ("createdAt" | "updatedAt" | "profileId" | "sourceId" | "subtitle" | "description" | "image" | "isTemplate" | "language" | "href" | "categoryIds" | "isShared" | "isResponseRequired" | "timerSeconds" | "isAvailableForRecommendation" | "numberOfLikes" | "isSuggested")>;
    impulseStrategyFactory: import("factory.ts").Factory<{
        createdAt?: {
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        updatedAt?: {
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        ordinal?: import("yup").Maybe<number | undefined>;
        type: "impulse";
        tacticsById: {
            [x: string]: {
                createdAt?: {
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                profileId?: string | null | undefined;
                sourceId?: string | undefined;
                subtitle?: import("yup").Maybe<string | undefined>;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: import("yup").Maybe<string | undefined>;
                    storagePath?: import("yup").Maybe<string | undefined>;
                    uri?: import("yup").Maybe<string | undefined>;
                } | null | undefined;
                isTemplate?: boolean | null | undefined;
                language?: string | null | undefined;
                href?: string | null | undefined;
                categoryIds?: (string | undefined)[] | null | undefined;
                isShared?: boolean | null | undefined;
                isResponseRequired?: boolean | null | undefined;
                timerSeconds?: import("yup").Maybe<number | undefined>;
                isAvailableForRecommendation?: boolean | null | undefined;
                numberOfLikes?: number | null | undefined;
                isSuggested?: boolean | undefined;
                type: "question-counter";
                title: string;
                backgroundColor: string;
            } | {
                createdAt?: {
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                profileId?: string | null | undefined;
                sourceId?: string | undefined;
                subtitle?: import("yup").Maybe<string | undefined>;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: import("yup").Maybe<string | undefined>;
                    storagePath?: import("yup").Maybe<string | undefined>;
                    uri?: import("yup").Maybe<string | undefined>;
                } | null | undefined;
                isTemplate?: boolean | null | undefined;
                language?: string | null | undefined;
                href?: string | null | undefined;
                categoryIds?: (string | undefined)[] | null | undefined;
                isShared?: boolean | null | undefined;
                isResponseRequired?: boolean | null | undefined;
                timerSeconds?: import("yup").Maybe<number | undefined>;
                isAvailableForRecommendation?: boolean | null | undefined;
                numberOfLikes?: number | null | undefined;
                isSuggested?: boolean | undefined;
                choices?: {
                    [x: string]: {
                        text: string;
                        strategies: {
                            [x: string]: {} | undefined;
                        };
                        ordinal: number;
                    };
                } | null | undefined;
                type: "question-multiple-choice";
                title: string;
                backgroundColor: string;
            } | {
                createdAt?: {
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                profileId?: string | null | undefined;
                sourceId?: string | undefined;
                subtitle?: import("yup").Maybe<string | undefined>;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: import("yup").Maybe<string | undefined>;
                    storagePath?: import("yup").Maybe<string | undefined>;
                    uri?: import("yup").Maybe<string | undefined>;
                } | null | undefined;
                isTemplate?: boolean | null | undefined;
                language?: string | null | undefined;
                href?: string | null | undefined;
                categoryIds?: (string | undefined)[] | null | undefined;
                isShared?: boolean | null | undefined;
                isResponseRequired?: boolean | null | undefined;
                timerSeconds?: import("yup").Maybe<number | undefined>;
                isAvailableForRecommendation?: boolean | null | undefined;
                numberOfLikes?: number | null | undefined;
                isSuggested?: boolean | undefined;
                lowEmoji?: import("yup").Maybe<string | undefined>;
                highEmoji?: import("yup").Maybe<string | undefined>;
                type: "question-slider";
                title: string;
                backgroundColor: string;
            } | {
                createdAt?: {
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                profileId?: string | null | undefined;
                sourceId?: string | undefined;
                subtitle?: import("yup").Maybe<string | undefined>;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: import("yup").Maybe<string | undefined>;
                    storagePath?: import("yup").Maybe<string | undefined>;
                    uri?: import("yup").Maybe<string | undefined>;
                } | null | undefined;
                isTemplate?: boolean | null | undefined;
                language?: string | null | undefined;
                href?: string | null | undefined;
                categoryIds?: (string | undefined)[] | null | undefined;
                isShared?: boolean | null | undefined;
                isResponseRequired?: boolean | null | undefined;
                timerSeconds?: import("yup").Maybe<number | undefined>;
                isAvailableForRecommendation?: boolean | null | undefined;
                numberOfLikes?: number | null | undefined;
                isSuggested?: boolean | undefined;
                type: "question-time";
                title: string;
                backgroundColor: string;
            } | {
                createdAt?: {
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                profileId?: string | null | undefined;
                sourceId?: string | undefined;
                subtitle?: import("yup").Maybe<string | undefined>;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: import("yup").Maybe<string | undefined>;
                    storagePath?: import("yup").Maybe<string | undefined>;
                    uri?: import("yup").Maybe<string | undefined>;
                } | null | undefined;
                isTemplate?: boolean | null | undefined;
                language?: string | null | undefined;
                href?: string | null | undefined;
                categoryIds?: (string | undefined)[] | null | undefined;
                isShared?: boolean | null | undefined;
                isResponseRequired?: boolean | null | undefined;
                timerSeconds?: import("yup").Maybe<number | undefined>;
                isAvailableForRecommendation?: boolean | null | undefined;
                numberOfLikes?: number | null | undefined;
                isSuggested?: boolean | undefined;
                recording: {
                    waveform?: string | null | undefined;
                    localFilePath: string;
                    remoteFilePath: string;
                };
                type: "audio";
                title: string;
                backgroundColor: string;
            } | {
                createdAt?: {
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                profileId?: string | null | undefined;
                sourceId?: string | undefined;
                subtitle?: import("yup").Maybe<string | undefined>;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: import("yup").Maybe<string | undefined>;
                    storagePath?: import("yup").Maybe<string | undefined>;
                    uri?: import("yup").Maybe<string | undefined>;
                } | null | undefined;
                isTemplate?: boolean | null | undefined;
                language?: string | null | undefined;
                href?: string | null | undefined;
                categoryIds?: (string | undefined)[] | null | undefined;
                isShared?: boolean | null | undefined;
                isResponseRequired?: boolean | null | undefined;
                timerSeconds?: import("yup").Maybe<number | undefined>;
                isAvailableForRecommendation?: boolean | null | undefined;
                numberOfLikes?: number | null | undefined;
                isSuggested?: boolean | undefined;
                repeat?: import("yup").Maybe<number | undefined>;
                type: "breathe";
                title: string;
                backgroundColor: string;
                inFor: number;
                holdFor: number;
                outFor: number;
            } | {
                createdAt?: {
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                profileId?: string | null | undefined;
                sourceId?: string | undefined;
                subtitle?: import("yup").Maybe<string | undefined>;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: import("yup").Maybe<string | undefined>;
                    storagePath?: import("yup").Maybe<string | undefined>;
                    uri?: import("yup").Maybe<string | undefined>;
                } | null | undefined;
                isTemplate?: boolean | null | undefined;
                language?: string | null | undefined;
                href?: string | null | undefined;
                categoryIds?: (string | undefined)[] | null | undefined;
                isShared?: boolean | null | undefined;
                isResponseRequired?: boolean | null | undefined;
                timerSeconds?: import("yup").Maybe<number | undefined>;
                isAvailableForRecommendation?: boolean | null | undefined;
                numberOfLikes?: number | null | undefined;
                isSuggested?: boolean | undefined;
                type: "emotions";
                title: string;
                backgroundColor: string;
            } | {
                createdAt?: {
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                profileId?: string | null | undefined;
                sourceId?: string | undefined;
                subtitle?: import("yup").Maybe<string | undefined>;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: import("yup").Maybe<string | undefined>;
                    storagePath?: import("yup").Maybe<string | undefined>;
                    uri?: import("yup").Maybe<string | undefined>;
                } | null | undefined;
                isTemplate?: boolean | null | undefined;
                language?: string | null | undefined;
                href?: string | null | undefined;
                categoryIds?: (string | undefined)[] | null | undefined;
                isShared?: boolean | null | undefined;
                isResponseRequired?: boolean | null | undefined;
                timerSeconds?: import("yup").Maybe<number | undefined>;
                isAvailableForRecommendation?: boolean | null | undefined;
                numberOfLikes?: number | null | undefined;
                isSuggested?: boolean | undefined;
                type: "link";
                title: string;
                backgroundColor: string;
            } | {
                createdAt?: {
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                profileId?: string | null | undefined;
                sourceId?: string | undefined;
                subtitle?: import("yup").Maybe<string | undefined>;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: import("yup").Maybe<string | undefined>;
                    storagePath?: import("yup").Maybe<string | undefined>;
                    uri?: import("yup").Maybe<string | undefined>;
                } | null | undefined;
                isTemplate?: boolean | null | undefined;
                language?: string | null | undefined;
                href?: string | null | undefined;
                categoryIds?: (string | undefined)[] | null | undefined;
                isShared?: boolean | null | undefined;
                isResponseRequired?: boolean | null | undefined;
                timerSeconds?: import("yup").Maybe<number | undefined>;
                isAvailableForRecommendation?: boolean | null | undefined;
                numberOfLikes?: number | null | undefined;
                isSuggested?: boolean | undefined;
                type: "phone";
                title: string;
                backgroundColor: string;
                supportGroupId: string;
                trigger: {};
            } | {
                createdAt?: {
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                profileId?: string | null | undefined;
                sourceId?: string | undefined;
                subtitle?: import("yup").Maybe<string | undefined>;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: import("yup").Maybe<string | undefined>;
                    storagePath?: import("yup").Maybe<string | undefined>;
                    uri?: import("yup").Maybe<string | undefined>;
                } | null | undefined;
                isTemplate?: boolean | null | undefined;
                language?: string | null | undefined;
                href?: string | null | undefined;
                categoryIds?: (string | undefined)[] | null | undefined;
                isShared?: boolean | null | undefined;
                isResponseRequired?: boolean | null | undefined;
                timerSeconds?: import("yup").Maybe<number | undefined>;
                isAvailableForRecommendation?: boolean | null | undefined;
                numberOfLikes?: number | null | undefined;
                isSuggested?: boolean | undefined;
                type: "steps";
                title: string;
                backgroundColor: string;
                steps: number;
            } | {
                createdAt?: {
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                profileId?: string | null | undefined;
                sourceId?: string | undefined;
                subtitle?: import("yup").Maybe<string | undefined>;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: import("yup").Maybe<string | undefined>;
                    storagePath?: import("yup").Maybe<string | undefined>;
                    uri?: import("yup").Maybe<string | undefined>;
                } | null | undefined;
                isTemplate?: boolean | null | undefined;
                language?: string | null | undefined;
                href?: string | null | undefined;
                categoryIds?: (string | undefined)[] | null | undefined;
                isShared?: boolean | null | undefined;
                isResponseRequired?: boolean | null | undefined;
                timerSeconds?: import("yup").Maybe<number | undefined>;
                isAvailableForRecommendation?: boolean | null | undefined;
                numberOfLikes?: number | null | undefined;
                isSuggested?: boolean | undefined;
                type: "task";
                title: string;
                backgroundColor: string;
            } | {
                createdAt?: {
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                profileId?: string | null | undefined;
                sourceId?: string | undefined;
                subtitle?: import("yup").Maybe<string | undefined>;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: import("yup").Maybe<string | undefined>;
                    storagePath?: import("yup").Maybe<string | undefined>;
                    uri?: import("yup").Maybe<string | undefined>;
                } | null | undefined;
                isTemplate?: boolean | null | undefined;
                language?: string | null | undefined;
                href?: string | null | undefined;
                categoryIds?: (string | undefined)[] | null | undefined;
                isShared?: boolean | null | undefined;
                isResponseRequired?: boolean | null | undefined;
                timerSeconds?: import("yup").Maybe<number | undefined>;
                isAvailableForRecommendation?: boolean | null | undefined;
                numberOfLikes?: number | null | undefined;
                isSuggested?: boolean | undefined;
                type: "urge-surfing";
                title: string;
                backgroundColor: string;
            } | {
                createdAt?: {
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                profileId?: string | null | undefined;
                sourceId?: string | undefined;
                subtitle?: import("yup").Maybe<string | undefined>;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: import("yup").Maybe<string | undefined>;
                    storagePath?: import("yup").Maybe<string | undefined>;
                    uri?: import("yup").Maybe<string | undefined>;
                } | null | undefined;
                isTemplate?: boolean | null | undefined;
                language?: string | null | undefined;
                href?: string | null | undefined;
                categoryIds?: (string | undefined)[] | null | undefined;
                isShared?: boolean | null | undefined;
                isResponseRequired?: boolean | null | undefined;
                timerSeconds?: import("yup").Maybe<number | undefined>;
                isAvailableForRecommendation?: boolean | null | undefined;
                numberOfLikes?: number | null | undefined;
                isSuggested?: boolean | undefined;
                type: "video";
                title: string;
                backgroundColor: string;
                video: {
                    storagePath?: string | null | undefined;
                    url?: string | null | undefined;
                    title: string;
                    description: string;
                    thumbnailUrl: string;
                    duration: number;
                };
            };
        };
        tacticIds: string[];
        name: string;
        forIssueIds: string[];
    }, "type" | "tacticsById" | "tacticIds" | "name" | "forIssueIds" | ("createdAt" | "updatedAt" | "ordinal")>;
    timeStrategyFactory: import("factory.ts").Factory<{
        createdAt?: {
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        updatedAt?: {
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        ordinal?: import("yup").Maybe<number | undefined>;
        type: "time";
        tacticsById: {
            [x: string]: {
                createdAt?: {
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                profileId?: string | null | undefined;
                sourceId?: string | undefined;
                subtitle?: import("yup").Maybe<string | undefined>;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: import("yup").Maybe<string | undefined>;
                    storagePath?: import("yup").Maybe<string | undefined>;
                    uri?: import("yup").Maybe<string | undefined>;
                } | null | undefined;
                isTemplate?: boolean | null | undefined;
                language?: string | null | undefined;
                href?: string | null | undefined;
                categoryIds?: (string | undefined)[] | null | undefined;
                isShared?: boolean | null | undefined;
                isResponseRequired?: boolean | null | undefined;
                timerSeconds?: import("yup").Maybe<number | undefined>;
                isAvailableForRecommendation?: boolean | null | undefined;
                numberOfLikes?: number | null | undefined;
                isSuggested?: boolean | undefined;
                type: "question-counter";
                title: string;
                backgroundColor: string;
            } | {
                createdAt?: {
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                profileId?: string | null | undefined;
                sourceId?: string | undefined;
                subtitle?: import("yup").Maybe<string | undefined>;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: import("yup").Maybe<string | undefined>;
                    storagePath?: import("yup").Maybe<string | undefined>;
                    uri?: import("yup").Maybe<string | undefined>;
                } | null | undefined;
                isTemplate?: boolean | null | undefined;
                language?: string | null | undefined;
                href?: string | null | undefined;
                categoryIds?: (string | undefined)[] | null | undefined;
                isShared?: boolean | null | undefined;
                isResponseRequired?: boolean | null | undefined;
                timerSeconds?: import("yup").Maybe<number | undefined>;
                isAvailableForRecommendation?: boolean | null | undefined;
                numberOfLikes?: number | null | undefined;
                isSuggested?: boolean | undefined;
                choices?: {
                    [x: string]: {
                        text: string;
                        strategies: {
                            [x: string]: {} | undefined;
                        };
                        ordinal: number;
                    };
                } | null | undefined;
                type: "question-multiple-choice";
                title: string;
                backgroundColor: string;
            } | {
                createdAt?: {
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                profileId?: string | null | undefined;
                sourceId?: string | undefined;
                subtitle?: import("yup").Maybe<string | undefined>;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: import("yup").Maybe<string | undefined>;
                    storagePath?: import("yup").Maybe<string | undefined>;
                    uri?: import("yup").Maybe<string | undefined>;
                } | null | undefined;
                isTemplate?: boolean | null | undefined;
                language?: string | null | undefined;
                href?: string | null | undefined;
                categoryIds?: (string | undefined)[] | null | undefined;
                isShared?: boolean | null | undefined;
                isResponseRequired?: boolean | null | undefined;
                timerSeconds?: import("yup").Maybe<number | undefined>;
                isAvailableForRecommendation?: boolean | null | undefined;
                numberOfLikes?: number | null | undefined;
                isSuggested?: boolean | undefined;
                lowEmoji?: import("yup").Maybe<string | undefined>;
                highEmoji?: import("yup").Maybe<string | undefined>;
                type: "question-slider";
                title: string;
                backgroundColor: string;
            } | {
                createdAt?: {
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                profileId?: string | null | undefined;
                sourceId?: string | undefined;
                subtitle?: import("yup").Maybe<string | undefined>;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: import("yup").Maybe<string | undefined>;
                    storagePath?: import("yup").Maybe<string | undefined>;
                    uri?: import("yup").Maybe<string | undefined>;
                } | null | undefined;
                isTemplate?: boolean | null | undefined;
                language?: string | null | undefined;
                href?: string | null | undefined;
                categoryIds?: (string | undefined)[] | null | undefined;
                isShared?: boolean | null | undefined;
                isResponseRequired?: boolean | null | undefined;
                timerSeconds?: import("yup").Maybe<number | undefined>;
                isAvailableForRecommendation?: boolean | null | undefined;
                numberOfLikes?: number | null | undefined;
                isSuggested?: boolean | undefined;
                type: "question-time";
                title: string;
                backgroundColor: string;
            } | {
                createdAt?: {
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                profileId?: string | null | undefined;
                sourceId?: string | undefined;
                subtitle?: import("yup").Maybe<string | undefined>;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: import("yup").Maybe<string | undefined>;
                    storagePath?: import("yup").Maybe<string | undefined>;
                    uri?: import("yup").Maybe<string | undefined>;
                } | null | undefined;
                isTemplate?: boolean | null | undefined;
                language?: string | null | undefined;
                href?: string | null | undefined;
                categoryIds?: (string | undefined)[] | null | undefined;
                isShared?: boolean | null | undefined;
                isResponseRequired?: boolean | null | undefined;
                timerSeconds?: import("yup").Maybe<number | undefined>;
                isAvailableForRecommendation?: boolean | null | undefined;
                numberOfLikes?: number | null | undefined;
                isSuggested?: boolean | undefined;
                recording: {
                    waveform?: string | null | undefined;
                    localFilePath: string;
                    remoteFilePath: string;
                };
                type: "audio";
                title: string;
                backgroundColor: string;
            } | {
                createdAt?: {
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                profileId?: string | null | undefined;
                sourceId?: string | undefined;
                subtitle?: import("yup").Maybe<string | undefined>;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: import("yup").Maybe<string | undefined>;
                    storagePath?: import("yup").Maybe<string | undefined>;
                    uri?: import("yup").Maybe<string | undefined>;
                } | null | undefined;
                isTemplate?: boolean | null | undefined;
                language?: string | null | undefined;
                href?: string | null | undefined;
                categoryIds?: (string | undefined)[] | null | undefined;
                isShared?: boolean | null | undefined;
                isResponseRequired?: boolean | null | undefined;
                timerSeconds?: import("yup").Maybe<number | undefined>;
                isAvailableForRecommendation?: boolean | null | undefined;
                numberOfLikes?: number | null | undefined;
                isSuggested?: boolean | undefined;
                repeat?: import("yup").Maybe<number | undefined>;
                type: "breathe";
                title: string;
                backgroundColor: string;
                inFor: number;
                holdFor: number;
                outFor: number;
            } | {
                createdAt?: {
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                profileId?: string | null | undefined;
                sourceId?: string | undefined;
                subtitle?: import("yup").Maybe<string | undefined>;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: import("yup").Maybe<string | undefined>;
                    storagePath?: import("yup").Maybe<string | undefined>;
                    uri?: import("yup").Maybe<string | undefined>;
                } | null | undefined;
                isTemplate?: boolean | null | undefined;
                language?: string | null | undefined;
                href?: string | null | undefined;
                categoryIds?: (string | undefined)[] | null | undefined;
                isShared?: boolean | null | undefined;
                isResponseRequired?: boolean | null | undefined;
                timerSeconds?: import("yup").Maybe<number | undefined>;
                isAvailableForRecommendation?: boolean | null | undefined;
                numberOfLikes?: number | null | undefined;
                isSuggested?: boolean | undefined;
                type: "emotions";
                title: string;
                backgroundColor: string;
            } | {
                createdAt?: {
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                profileId?: string | null | undefined;
                sourceId?: string | undefined;
                subtitle?: import("yup").Maybe<string | undefined>;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: import("yup").Maybe<string | undefined>;
                    storagePath?: import("yup").Maybe<string | undefined>;
                    uri?: import("yup").Maybe<string | undefined>;
                } | null | undefined;
                isTemplate?: boolean | null | undefined;
                language?: string | null | undefined;
                href?: string | null | undefined;
                categoryIds?: (string | undefined)[] | null | undefined;
                isShared?: boolean | null | undefined;
                isResponseRequired?: boolean | null | undefined;
                timerSeconds?: import("yup").Maybe<number | undefined>;
                isAvailableForRecommendation?: boolean | null | undefined;
                numberOfLikes?: number | null | undefined;
                isSuggested?: boolean | undefined;
                type: "link";
                title: string;
                backgroundColor: string;
            } | {
                createdAt?: {
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                profileId?: string | null | undefined;
                sourceId?: string | undefined;
                subtitle?: import("yup").Maybe<string | undefined>;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: import("yup").Maybe<string | undefined>;
                    storagePath?: import("yup").Maybe<string | undefined>;
                    uri?: import("yup").Maybe<string | undefined>;
                } | null | undefined;
                isTemplate?: boolean | null | undefined;
                language?: string | null | undefined;
                href?: string | null | undefined;
                categoryIds?: (string | undefined)[] | null | undefined;
                isShared?: boolean | null | undefined;
                isResponseRequired?: boolean | null | undefined;
                timerSeconds?: import("yup").Maybe<number | undefined>;
                isAvailableForRecommendation?: boolean | null | undefined;
                numberOfLikes?: number | null | undefined;
                isSuggested?: boolean | undefined;
                type: "phone";
                title: string;
                backgroundColor: string;
                supportGroupId: string;
                trigger: {};
            } | {
                createdAt?: {
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                profileId?: string | null | undefined;
                sourceId?: string | undefined;
                subtitle?: import("yup").Maybe<string | undefined>;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: import("yup").Maybe<string | undefined>;
                    storagePath?: import("yup").Maybe<string | undefined>;
                    uri?: import("yup").Maybe<string | undefined>;
                } | null | undefined;
                isTemplate?: boolean | null | undefined;
                language?: string | null | undefined;
                href?: string | null | undefined;
                categoryIds?: (string | undefined)[] | null | undefined;
                isShared?: boolean | null | undefined;
                isResponseRequired?: boolean | null | undefined;
                timerSeconds?: import("yup").Maybe<number | undefined>;
                isAvailableForRecommendation?: boolean | null | undefined;
                numberOfLikes?: number | null | undefined;
                isSuggested?: boolean | undefined;
                type: "steps";
                title: string;
                backgroundColor: string;
                steps: number;
            } | {
                createdAt?: {
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                profileId?: string | null | undefined;
                sourceId?: string | undefined;
                subtitle?: import("yup").Maybe<string | undefined>;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: import("yup").Maybe<string | undefined>;
                    storagePath?: import("yup").Maybe<string | undefined>;
                    uri?: import("yup").Maybe<string | undefined>;
                } | null | undefined;
                isTemplate?: boolean | null | undefined;
                language?: string | null | undefined;
                href?: string | null | undefined;
                categoryIds?: (string | undefined)[] | null | undefined;
                isShared?: boolean | null | undefined;
                isResponseRequired?: boolean | null | undefined;
                timerSeconds?: import("yup").Maybe<number | undefined>;
                isAvailableForRecommendation?: boolean | null | undefined;
                numberOfLikes?: number | null | undefined;
                isSuggested?: boolean | undefined;
                type: "task";
                title: string;
                backgroundColor: string;
            } | {
                createdAt?: {
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                profileId?: string | null | undefined;
                sourceId?: string | undefined;
                subtitle?: import("yup").Maybe<string | undefined>;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: import("yup").Maybe<string | undefined>;
                    storagePath?: import("yup").Maybe<string | undefined>;
                    uri?: import("yup").Maybe<string | undefined>;
                } | null | undefined;
                isTemplate?: boolean | null | undefined;
                language?: string | null | undefined;
                href?: string | null | undefined;
                categoryIds?: (string | undefined)[] | null | undefined;
                isShared?: boolean | null | undefined;
                isResponseRequired?: boolean | null | undefined;
                timerSeconds?: import("yup").Maybe<number | undefined>;
                isAvailableForRecommendation?: boolean | null | undefined;
                numberOfLikes?: number | null | undefined;
                isSuggested?: boolean | undefined;
                type: "urge-surfing";
                title: string;
                backgroundColor: string;
            } | {
                createdAt?: {
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                updatedAt?: {
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                profileId?: string | null | undefined;
                sourceId?: string | undefined;
                subtitle?: import("yup").Maybe<string | undefined>;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: import("yup").Maybe<string | undefined>;
                    storagePath?: import("yup").Maybe<string | undefined>;
                    uri?: import("yup").Maybe<string | undefined>;
                } | null | undefined;
                isTemplate?: boolean | null | undefined;
                language?: string | null | undefined;
                href?: string | null | undefined;
                categoryIds?: (string | undefined)[] | null | undefined;
                isShared?: boolean | null | undefined;
                isResponseRequired?: boolean | null | undefined;
                timerSeconds?: import("yup").Maybe<number | undefined>;
                isAvailableForRecommendation?: boolean | null | undefined;
                numberOfLikes?: number | null | undefined;
                isSuggested?: boolean | undefined;
                type: "video";
                title: string;
                backgroundColor: string;
                video: {
                    storagePath?: string | null | undefined;
                    url?: string | null | undefined;
                    title: string;
                    description: string;
                    thumbnailUrl: string;
                    duration: number;
                };
            };
        };
        tacticIds: string[];
        name: string;
        weekdays: number[];
        hour: number;
        minute: number;
    }, "type" | "tacticsById" | "tacticIds" | "name" | "weekdays" | "hour" | "minute" | ("createdAt" | "updatedAt" | "ordinal")>;
};
