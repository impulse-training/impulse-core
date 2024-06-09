import { TimestampLike } from '../utils/firestore/TimestampLike';
export declare function makeFactories(TimestampKlass: typeof TimestampLike): {
    dayLogsSummaryFactory: import("factory.ts").Factory<{
        [x: string]: {
            type: NonNullable<"time" | "impulse" | undefined>;
            optionsById: {
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
                    label?: string | undefined;
                    text: string;
                    type: "question-multiple-choice";
                    color: string;
                    textColor: string;
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
                    label?: string | undefined;
                    setbackThreshold?: number | undefined;
                    greaterThan?: number | undefined;
                    lessThanOrEqualTo?: number | undefined;
                    text: string;
                    type: "question-time";
                    color: string;
                    textColor: string;
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
                    label?: string | undefined;
                    setbackThreshold?: number | undefined;
                    greaterThan?: number | undefined;
                    lessThanOrEqualTo?: number | undefined;
                    text: string;
                    type: "question-counter";
                    color: string;
                    textColor: string;
                };
            };
            hour: number;
            minute: number;
            tacticDataById: {
                [x: string]: {
                    value?: number | undefined;
                    customUnit?: string | undefined;
                    optionId?: string | null | undefined;
                    optionLabel?: string | undefined;
                    optionColor?: string | undefined;
                    optionTextColor?: string | undefined;
                    isCompleted?: boolean | undefined;
                    nextStrategiesPath?: string | undefined;
                    lowEmoji?: import("yup").Maybe<string | undefined>;
                    highEmoji?: import("yup").Maybe<string | undefined>;
                    unit: NonNullable<"time" | "custom" | "impulse" | undefined>;
                    formattedValue: string;
                };
            };
        };
    }, string | number>;
    profileLogsSummaryFactory: import("factory.ts").Factory<{
        [x: string]: {
            [x: string]: {
                value?: number | undefined;
                customUnit?: string | undefined;
                optionId?: string | null | undefined;
                optionLabel?: string | undefined;
                optionColor?: string | undefined;
                optionTextColor?: string | undefined;
                isCompleted?: boolean | undefined;
                nextStrategiesPath?: string | undefined;
                lowEmoji?: import("yup").Maybe<string | undefined>;
                highEmoji?: import("yup").Maybe<string | undefined>;
                unit: NonNullable<"time" | "custom" | "impulse" | undefined>;
                formattedValue: string;
            };
        };
    }, string | number>;
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
        tacticTitle?: string | null | undefined;
        text?: string | undefined;
        recording?: {
            localFilePath?: string | undefined;
            waveform?: string | null | undefined;
            remoteFilePath: string;
        } | undefined;
        isEdited?: boolean | undefined;
        avatar?: {
            localFilePath?: import("yup").Maybe<string | undefined>;
            storagePath?: import("yup").Maybe<string | undefined>;
            uri?: import("yup").Maybe<string | undefined>;
        } | undefined;
        profileId: string;
    }, "profileId" | ("createdAt" | "updatedAt" | "tacticId" | "tacticTitle" | "text" | "recording" | "isEdited" | "avatar")>;
    impulseFactory: import("factory.ts").Factory<import("..").ImpulseLogValue, "createdAt" | "updatedAt" | "profileId" | "type" | "tacticsById" | "startTime" | "timezone" | "issueId" | "folders" | "parentIssueIds" | "tacticIds" | "tacticLikes" | "tacticData" | "debriefAfter" | "debriefReminderSentAt" | "debriefedAt">;
    timeLogFactory: import("factory.ts").Factory<import("..").TimeLogValue, "createdAt" | "updatedAt" | "profileId" | "type" | "tacticsById" | "startTime" | "timezone" | "issueId" | "folders" | "parentIssueIds" | "tacticIds" | "tacticLikes" | "tacticData">;
    locationLogFactory: import("factory.ts").Factory<import("..").LocationLogValue, "createdAt" | "updatedAt" | "profileId" | "type" | "tacticsById" | "startTime" | "timezone" | "issueId" | "folders" | "parentIssueIds" | "tacticIds" | "tacticLikes" | "tacticData" | "locationId" | "isDisplayable" | "locationName" | "locationMode">;
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
        setbackThreshold?: number | undefined;
        parentIssueIds?: string[] | undefined;
        lastActiveAt?: {
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        widgetInstalledAt?: {
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        activeImpulseId?: string | undefined;
        currentAppState?: import("react-native/types").AppStateStatus | undefined;
        expoPushToken?: string | undefined;
        notificationPreferences?: {
            [x: string]: NonNullable<"push" | "email" | undefined>[] | undefined;
        } | null | undefined;
        issueName?: string | undefined;
        isTourCompleted?: boolean | undefined;
        androidPermissions?: {
            [x: string]: NonNullable<boolean | undefined>;
        } | null | undefined;
        region?: string | null | undefined;
        scheduledNotificationIds?: string[] | undefined;
        timezone: string;
        issueId: string | null;
        uids: string[];
    }, "timezone" | "issueId" | "uids" | ("createdAt" | "updatedAt" | "setbackThreshold" | "parentIssueIds" | "lastActiveAt" | "widgetInstalledAt" | "activeImpulseId" | "currentAppState" | "expoPushToken" | "notificationPreferences" | "issueName" | "isTourCompleted" | "androidPermissions" | "region" | "scheduledNotificationIds")>;
    issueFactory: import("factory.ts").Factory<{
        path?: string | null | undefined;
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
        parentId?: string | null | undefined;
        profileCount?: number | null | undefined;
        isFeatured?: boolean | null | undefined;
        ordinal: number;
        name: string;
        synonyms: string[];
        parentIds: string[];
        parentNames: string[];
        therapistProfileIds: string[];
    }, "ordinal" | "name" | "synonyms" | "parentIds" | "parentNames" | "therapistProfileIds" | ("path" | "createdAt" | "updatedAt" | "parentId" | "profileCount" | "isFeatured")>;
    folderFactory: import("factory.ts").Factory<{
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
        slug?: string | undefined;
        creatorProfileId?: string | undefined;
        last3TacticPreviews?: {
            updatedAt?: {
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            image?: {
                localFilePath?: import("yup").Maybe<string | undefined>;
                storagePath?: import("yup").Maybe<string | undefined>;
                uri?: import("yup").Maybe<string | undefined>;
            } | null | undefined;
            backgroundColor?: string | undefined;
            type: NonNullable<import("..").QuestionKeyType | "audio" | "breathe" | "contacts" | "steps" | "task" | "video" | undefined>;
            title: string;
        }[] | undefined;
        defaultFor?: "trackTactics" | "debriefTactics" | "reflectionTactics" | undefined;
        recommendedFor?: "time" | "impulse" | null | undefined;
        recommendedForIssueIds?: string[] | undefined;
        recommendedForIssueOrdinals?: {
            [x: string]: number;
        } | null | undefined;
        name: string;
        invitationCode: string;
        invitationUrl: string;
        tacticPreviewsById: {
            [x: string]: {
                updatedAt?: {
                    seconds: number;
                    nanoseconds: number;
                    toDate: Function;
                } | null | undefined;
                image?: {
                    localFilePath?: import("yup").Maybe<string | undefined>;
                    storagePath?: import("yup").Maybe<string | undefined>;
                    uri?: import("yup").Maybe<string | undefined>;
                } | null | undefined;
                backgroundColor?: string | undefined;
                type: NonNullable<import("..").QuestionKeyType | "audio" | "breathe" | "contacts" | "steps" | "task" | "video" | undefined>;
                title: string;
            };
        };
    }, "name" | "invitationCode" | "invitationUrl" | "tacticPreviewsById" | ("createdAt" | "updatedAt" | "slug" | "creatorProfileId" | "last3TacticPreviews" | "defaultFor" | "recommendedFor" | "recommendedForIssueIds" | "recommendedForIssueOrdinals")>;
    folderStrategyFactory: import("factory.ts").Factory<import("..").StrategyValue, "createdAt" | "updatedAt" | "type" | "ordinal" | "docData" | "docRef">;
    tacticStrategyFactory: import("factory.ts").Factory<import("..").StrategyValue, "createdAt" | "updatedAt" | "type" | "ordinal" | "docData" | "docRef">;
    tacticFactory: import("factory.ts").Factory<import("..").TacticValue, "createdAt" | "updatedAt" | "profileId" | "type" | "setbackThreshold" | "ordinal" | "title" | "pastTenseTitle" | "commentCount" | "description" | "debriefAfterMinutes" | "image" | "optionsById" | "backgroundColor" | "language" | "linkUrl" | "likesCount" | "timerSeconds" | "isSuggested">;
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
        setbackThreshold?: number | null | undefined;
        pastTenseTitle?: string | undefined;
        commentCount?: number | undefined;
        description?: string | null | undefined;
        debriefAfterMinutes?: number | null | undefined;
        image?: {
            localFilePath?: import("yup").Maybe<string | undefined>;
            storagePath?: import("yup").Maybe<string | undefined>;
            uri?: import("yup").Maybe<string | undefined>;
        } | null | undefined;
        optionsById?: {
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
                label?: string | undefined;
                text: string;
                type: "question-multiple-choice";
                color: string;
                textColor: string;
                strategiesPath: string;
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
                label?: string | undefined;
                setbackThreshold?: number | undefined;
                greaterThan?: number | undefined;
                lessThanOrEqualTo?: number | undefined;
                text: string;
                type: "question-time";
                color: string;
                textColor: string;
                strategiesPath: string;
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
                label?: string | undefined;
                setbackThreshold?: number | undefined;
                greaterThan?: number | undefined;
                lessThanOrEqualTo?: number | undefined;
                text: string;
                type: "question-counter";
                color: string;
                textColor: string;
                strategiesPath: string;
            };
        } | null | undefined;
        backgroundColor?: string | undefined;
        language?: string | null | undefined;
        linkUrl?: string | null | undefined;
        likesCount?: number | null | undefined;
        timerSeconds?: import("yup").Maybe<number | undefined>;
        isSuggested?: boolean | undefined;
        options?: ({
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
            label?: string | undefined;
            text: string;
            type: "question-multiple-choice";
            color: string;
            textColor: string;
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
            label?: string | undefined;
            setbackThreshold?: number | undefined;
            greaterThan?: number | undefined;
            lessThanOrEqualTo?: number | undefined;
            text: string;
            type: "question-time";
            color: string;
            textColor: string;
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
            label?: string | undefined;
            setbackThreshold?: number | undefined;
            greaterThan?: number | undefined;
            lessThanOrEqualTo?: number | undefined;
            text: string;
            type: "question-counter";
            color: string;
            textColor: string;
        })[] | undefined;
        type: import("..").QuestionKeyType;
        ordinal: number;
        title: string;
    }, "type" | "ordinal" | "title" | ("createdAt" | "updatedAt" | "profileId" | "setbackThreshold" | "pastTenseTitle" | "commentCount" | "description" | "debriefAfterMinutes" | "image" | "optionsById" | "backgroundColor" | "language" | "linkUrl" | "likesCount" | "timerSeconds" | "isSuggested" | "options")>;
    timeRoutineFactory: import("factory.ts").Factory<{
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
        profileId: string;
        type: "time";
        name: string;
        folders: import("../schema/utils/firestore").DocumentReferenceLike<unknown>[];
        hour: number;
        minute: number;
        weekdays: number[];
    }, "profileId" | "type" | "name" | "folders" | "hour" | "minute" | "weekdays" | ("createdAt" | "updatedAt")>;
};
