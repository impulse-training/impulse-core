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
}, "profileId" | "authorName" | ("createdAt" | "updatedAt" | "tacticId" | "tacticName" | "text" | "recording" | "isEdited" | "avatar")>, impulseFactory: import("factory.ts").Factory<import("..").ImpulseLogValue, "createdAt" | "updatedAt" | "profileId" | "type" | "steps" | "tacticsById" | "suggestedTacticIds" | "tacticIds" | "location" | "startTime" | "timezone" | "locationIsFetching" | "locationFormatted" | "commentCount" | "commentsById" | "commentsByTacticId" | "seenTacticIds" | "completedTacticIds" | "tacticLikes" | "tacticData" | "sharedWithSupportGroupIds" | "setAsActiveImpulse" | "pressCount" | "isDisplayable" | "buttonPressSecondsSinceEpoch" | "strategiesByPatternId" | "outcome" | "patternId" | "patternsById" | "debriefNotes" | "debriefReminderSentAt" | "debriefedAt">, timeLogFactory: import("factory.ts").Factory<import("..").TimeLogValue, "createdAt" | "updatedAt" | "profileId" | "type" | "steps" | "tacticsById" | "suggestedTacticIds" | "tacticIds" | "location" | "startTime" | "timezone" | "locationIsFetching" | "locationFormatted" | "commentCount" | "commentsById" | "commentsByTacticId" | "seenTacticIds" | "completedTacticIds" | "tacticLikes" | "tacticData" | "sharedWithSupportGroupIds" | "isDisplayable">, profileFactory: import("factory.ts").Factory<import("..").ProfileValue, "createdAt" | "updatedAt" | "tacticsById" | "parentIssueIds" | "timezone" | "scheduledStrategies" | "locationStrategies" | "activeImpulseId" | "currentAppState" | "lastActiveAt" | "expoPushToken" | "widgetInstalledAt" | "notificationPreferences" | "androidPermissions" | "region" | "invitationCode" | "programId" | "scheduledNotificationIds" | "impulseStrategiesByPatternId">, supportGroupFactory: import("factory.ts").Factory<{
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
    suggestedTacticIds: {};
    participantUids: string[];
    groupName: string;
    creatorName: string;
    creatorUid: string;
    icon: {};
    unreadCounts: {
        [x: string]: number;
    };
    permissions: {};
}, "thumbnailUrl" | "suggestedTacticIds" | "participantUids" | "groupName" | "creatorName" | "creatorUid" | "icon" | "unreadCounts" | "permissions" | ("createdAt" | "updatedAt" | "isTemplate" | "invitationCode" | "slug" | "templateId" | "everythingPermissions" | "memberTargetCount" | "groupNameAliases" | "groupDescription" | "lastMessagePreview" | "invitationUrl" | "lastMessageUid" | "isSharingDisabled")>, tacticFactory: import("factory.ts").Factory<import("..").TacticValue, "createdAt" | "updatedAt" | "profileId" | "type" | "sourceId" | "title" | "subtitle" | "description" | "image" | "backgroundColor" | "isTemplate" | "language" | "href" | "categoryIds" | "isShared" | "isResponseRequired" | "timerSeconds" | "isAvailableForRecommendation" | "numberOfLikes" | "isSuggested">, programFactory: import("factory.ts").Factory<import("..").ProgramValue, "createdAt" | "updatedAt" | "title" | "tacticsById" | "forIssueIds" | "issueNames" | "issueNamesSummary" | "recommendationSummary" | "impulseStrategies" | "scheduledStrategies" | "locationStrategies">;
