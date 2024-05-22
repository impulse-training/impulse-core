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
}, "profileId" | ("createdAt" | "updatedAt" | "tacticId" | "tacticTitle" | "text" | "recording" | "isEdited" | "avatar")>, impulseFactory: import("factory.ts").Factory<import("..").ImpulseLogValue, "createdAt" | "updatedAt" | "profileId" | "type" | "tacticsById" | "startTime" | "timezone" | "location" | "locationIsFetching" | "locationFormatted" | "commentCount" | "commentsById" | "commentsByTacticId" | "tacticIds" | "tacticLikes" | "tacticData" | "supportGroups" | "setAsActiveImpulse" | "isDisplayable" | "debriefTactic" | "debriefAfter" | "debriefReminderSentAt" | "debriefedAt">, timeLogFactory: import("factory.ts").Factory<import("..").TimeLogValue, "createdAt" | "updatedAt" | "profileId" | "type" | "tacticsById" | "startTime" | "timezone" | "location" | "locationIsFetching" | "locationFormatted" | "commentCount" | "commentsById" | "commentsByTacticId" | "tacticIds" | "tacticLikes" | "tacticData" | "supportGroups" | "isDisplayable">, profileFactory: import("factory.ts").Factory<{
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
    debriefAfterMinutes?: number | undefined;
    activeImpulseId?: string | undefined;
    currentAppState?: import("react-native/types").AppStateStatus | undefined;
    lastActiveAt?: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    expoPushToken?: string | undefined;
    widgetInstalledAt?: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    notificationPreferences?: {
        [x: string]: NonNullable<"push" | "email" | undefined>[] | undefined;
    } | null | undefined;
    issueName?: string | undefined;
    isTourCompleted?: boolean | undefined;
    androidPermissions?: {
        [x: string]: NonNullable<boolean | undefined>;
    } | null | undefined;
    parentIssueIds?: string[] | undefined;
    region?: string | null | undefined;
    scheduledNotificationIds?: string[] | undefined;
    timezone: string;
    supportGroups: import("../schema/utils/firestore").DocumentReferenceLike<unknown>[];
    invitationCode: string;
    uids: string[];
}, "timezone" | "supportGroups" | "invitationCode" | "uids" | ("createdAt" | "updatedAt" | "setbackThreshold" | "debriefAfterMinutes" | "activeImpulseId" | "currentAppState" | "lastActiveAt" | "expoPushToken" | "widgetInstalledAt" | "notificationPreferences" | "issueName" | "isTourCompleted" | "androidPermissions" | "parentIssueIds" | "region" | "scheduledNotificationIds")>, supportGroupFactory: import("factory.ts").Factory<{
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
    templateId?: string | undefined;
    everythingPermissions?: boolean | undefined;
    memberTargetCount?: number | undefined;
    groupNameAliases?: {
        [x: string]: string;
        [x: number]: string;
        [x: symbol]: string;
    } | undefined;
    groupDescription?: string | undefined;
    creatorProfileId?: string | undefined;
    lastMessagePreview?: string | undefined;
    lastMessageProfileId?: string | undefined;
    isSharingDisabled?: boolean | undefined;
    tacticPreviewsById?: {
        updatedAt?: {
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        image?: {
            localFilePath?: import("yup").Maybe<string | undefined>;
            storagePath?: import("yup").Maybe<string | undefined>;
            uri?: import("yup").Maybe<string | undefined>;
        } | undefined;
        backgroundColor?: string | undefined;
        title: string;
    }[] | undefined;
    unreadCounts?: {
        [x: string]: number;
    } | null | undefined;
    permissions?: {} | undefined;
    invitationCode: string;
    participantProfileIds: string[];
    groupName: string;
    invitationUrl: string;
}, "invitationCode" | "participantProfileIds" | "groupName" | "invitationUrl" | ("createdAt" | "updatedAt" | "slug" | "templateId" | "everythingPermissions" | "memberTargetCount" | "groupNameAliases" | "groupDescription" | "creatorProfileId" | "lastMessagePreview" | "lastMessageProfileId" | "isSharingDisabled" | "tacticPreviewsById" | "unreadCounts" | "permissions")>, tacticFactory: import("factory.ts").Factory<import("..").TacticValue, "createdAt" | "updatedAt" | "profileId" | "type" | "setbackThreshold" | "title" | "subtitle" | "description" | "debriefAfterMinutes" | "image" | "optionsById" | "backgroundColor" | "isTemplate" | "language" | "linkUrl" | "categoryIds" | "isShared" | "isResponseRequired" | "timerSeconds" | "isAvailableForRecommendation" | "numberOfLikes" | "isSuggested">;
