export declare const applicationFactory: import("factory.ts").Factory<import("..").ApplicationValue, keyof import("..").ApplicationValue>, commentFactory: import("factory.ts").Factory<{
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
}, "profileId" | ("createdAt" | "updatedAt" | "tacticId" | "tacticTitle" | "text" | "recording" | "isEdited" | "avatar")>, impulseFactory: import("factory.ts").Factory<import("..").ImpulseLogValue, "createdAt" | "updatedAt" | "profileId" | "type" | "tacticsById" | "startTime" | "timezone" | "issueId" | "folders" | "parentIssueIds" | "tacticIds" | "tacticLikes" | "tacticData" | "debriefAfter" | "debriefReminderSentAt" | "debriefedAt">, timeLogFactory: import("factory.ts").Factory<import("..").TimeLogValue, "createdAt" | "updatedAt" | "profileId" | "type" | "tacticsById" | "startTime" | "timezone" | "issueId" | "folders" | "parentIssueIds" | "tacticIds" | "tacticLikes" | "tacticData">, profileFactory: import("factory.ts").Factory<{
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
}, "timezone" | "issueId" | "uids" | ("createdAt" | "updatedAt" | "setbackThreshold" | "parentIssueIds" | "lastActiveAt" | "widgetInstalledAt" | "activeImpulseId" | "currentAppState" | "expoPushToken" | "notificationPreferences" | "issueName" | "isTourCompleted" | "androidPermissions" | "region" | "scheduledNotificationIds")>, folderFactory: import("factory.ts").Factory<{
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
    recommendedForIssueIds?: string[] | undefined;
    recommendedForIssueOrdinals?: {
        [x: string]: number;
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
        title: string;
        type: NonNullable<"audio" | "breathe" | "contacts" | import("..").QuestionKeyType | "steps" | "task" | "video" | undefined>;
    }[] | undefined;
    ordinal: number;
    title: string;
    type: "folder";
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
            title: string;
            type: NonNullable<"audio" | "breathe" | "contacts" | import("..").QuestionKeyType | "steps" | "task" | "video" | undefined>;
        };
    };
}, "ordinal" | "title" | "type" | "invitationCode" | "invitationUrl" | "tacticPreviewsById" | ("createdAt" | "updatedAt" | "recommendedForIssueIds" | "recommendedForIssueOrdinals" | "slug" | "creatorProfileId" | "last3TacticPreviews")>, tacticFactory: import("factory.ts").Factory<import("..").TacticValue, "createdAt" | "updatedAt" | "profileId" | "recommendedForIssueIds" | "recommendedForIssueOrdinals" | "ordinal" | "title" | "type" | "pastTenseTitle" | "commentCount" | "description" | "debriefAfterMinutes" | "image" | "backgroundColor" | "setbackThreshold" | "likesCount" | "timerSeconds" | "isSuggested">;
