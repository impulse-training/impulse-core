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
}, "profileId" | ("createdAt" | "updatedAt" | "tacticId" | "tacticTitle" | "text" | "recording" | "isEdited" | "avatar")>, impulseFactory: import("factory.ts").Factory<import("..").ImpulseLogValue, "createdAt" | "updatedAt" | "profileId" | "type" | "strategiesPath" | "tacticsById" | "startTime" | "timezone" | "location" | "locationIsFetching" | "locationFormatted" | "commentCount" | "commentsById" | "commentsByTacticId" | "tacticIds" | "tacticLikes" | "tacticData" | "sharedWithSupportGroupIds" | "setAsActiveImpulse" | "isDisplayable" | "debriefTactic" | "debriefAfter" | "debriefReminderSentAt" | "debriefedAt">, timeLogFactory: import("factory.ts").Factory<import("..").TimeLogValue, "createdAt" | "updatedAt" | "profileId" | "type" | "strategiesPath" | "tacticsById" | "startTime" | "timezone" | "location" | "locationIsFetching" | "locationFormatted" | "commentCount" | "commentsById" | "commentsByTacticId" | "tacticIds" | "tacticLikes" | "tacticData" | "sharedWithSupportGroupIds" | "isDisplayable">, profileFactory: import("factory.ts").Factory<{
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
    debriefTactic?: import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined;
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
    invitationCode: string;
}, "timezone" | "invitationCode" | ("createdAt" | "updatedAt" | "setbackThreshold" | "debriefAfterMinutes" | "debriefTactic" | "activeImpulseId" | "currentAppState" | "lastActiveAt" | "expoPushToken" | "widgetInstalledAt" | "notificationPreferences" | "issueName" | "isTourCompleted" | "androidPermissions" | "parentIssueIds" | "region" | "scheduledNotificationIds")>, supportGroupFactory: import("factory.ts").Factory<{
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
    profileNicknames?: {
        [x: string]: string;
    } | null | undefined;
    lastMessagePreview?: string | undefined;
    invitationUrl?: string | undefined;
    lastMessageProfileId?: string | undefined;
    isSharingDisabled?: boolean | undefined;
    thumbnailUrl: string;
    participantProfileIds: string[];
    groupName: string;
    creatorProfileId: string;
    icon: {};
    unreadCounts: {
        [x: string]: number;
    };
    permissions: {};
    suggestedTacticIds: {};
}, "thumbnailUrl" | "participantProfileIds" | "groupName" | "creatorProfileId" | "icon" | "unreadCounts" | "permissions" | "suggestedTacticIds" | ("createdAt" | "updatedAt" | "isTemplate" | "invitationCode" | "slug" | "templateId" | "everythingPermissions" | "memberTargetCount" | "groupNameAliases" | "groupDescription" | "profileNicknames" | "lastMessagePreview" | "invitationUrl" | "lastMessageProfileId" | "isSharingDisabled")>, tacticFactory: import("factory.ts").Factory<import("..").TacticValue, "createdAt" | "updatedAt" | "profileId" | "type" | "setbackThreshold" | "title" | "subtitle" | "description" | "debriefAfterMinutes" | "image" | "optionsById" | "backgroundColor" | "isTemplate" | "language" | "href" | "categoryIds" | "isShared" | "isResponseRequired" | "timerSeconds" | "isAvailableForRecommendation" | "numberOfLikes" | "isSuggested">;
