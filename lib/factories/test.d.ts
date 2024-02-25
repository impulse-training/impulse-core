export declare const applicationFactory: import("factory.ts").Factory<import("..").ApplicationValue, keyof import("..").ApplicationValue>, commentFactory: import("factory.ts").Factory<import("..").CommentValue, keyof import("..").CommentValue>, impulseFactory: import("factory.ts").Factory<import("..").ImpulseLogValue, "uid" | "createdAt" | "updatedAt" | "type" | "tacticsById" | "startTime" | "timezone" | "location" | "locationIsFetching" | "gameplan" | "seenGameplan" | "isDisplayable" | "gameplans" | "seenGameplans" | "patterns" | "patternId" | "patternIds" | ("steps" | "locationFormatted" | "commentCount" | "commentsById" | "commentsByTacticId" | "tacticLikes" | "tacticData" | "sharedWithSupportGroupIds" | "setAsActiveImpulse" | "pressCount" | "buttonPressSecondsSinceEpoch" | "outcome" | "debriefNotes" | "debriefReminderSentAt" | "debriefedAt")>, timeLogFactory: import("factory.ts").Factory<import("..").TimeLogValue, "uid" | "createdAt" | "updatedAt" | "type" | "tacticsById" | "startTime" | "timezone" | "location" | "locationIsFetching" | "gameplan" | "seenGameplan" | "isDisplayable" | "gameplanId" | ("steps" | "locationFormatted" | "commentCount" | "commentsById" | "commentsByTacticId" | "tacticLikes" | "tacticData" | "sharedWithSupportGroupIds")>, motionLogFactory: import("factory.ts").Factory<import("..").MotionLogValue, "uid" | "createdAt" | "updatedAt" | "type" | "tacticsById" | "startTime" | "timezone" | "location" | "locationIsFetching" | "gameplan" | "seenGameplan" | "isDisplayable" | ("steps" | "locationFormatted" | "commentCount" | "commentsById" | "commentsByTacticId" | "tacticLikes" | "tacticData" | "sharedWithSupportGroupIds")>, recommendationFactory: import("factory.ts").Factory<import("..").RecommendationValue, "uid" | "createdAt" | "updatedAt" | "ordinal" | "title" | "tacticIds" | "tacticsById" | "appliedAt" | "dismissedAt" | "explanation" | "gameplanExplanation" | "recommenderUid" | "recommenderName" | "ruleId" | "gameplanIds" | "defaultSelected">, debriefLogFactory: import("factory.ts").Factory<import("..").DebriefLogValue, "uid" | "createdAt" | "updatedAt" | "type" | "tacticsById" | "startTime" | "timezone" | "location" | "locationIsFetching" | "gameplan" | "seenGameplan" | "isDisplayable" | "patterns" | "patternIds" | "gameplanId" | "tacticDataEntries" | ("steps" | "locationFormatted" | "commentCount" | "commentsById" | "commentsByTacticId" | "tacticLikes" | "tacticData" | "sharedWithSupportGroupIds")>, debriefRoutineFactory: import("factory.ts").Factory<{
    title?: string | null | undefined;
    isTemplate?: boolean | null | undefined;
    timezone?: string | null | undefined;
    navigationTitle?: string | null | undefined;
    uid: string;
    createdAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    type: "dayDebrief";
}, "uid" | "createdAt" | "updatedAt" | "type" | ("title" | "isTemplate" | "timezone" | "navigationTitle")>, profileFactory: import("factory.ts").Factory<import("..").ProfileValue, keyof import("..").ProfileValue>, supportGroupFactory: import("factory.ts").Factory<{
    isTemplate?: boolean | undefined;
    slug?: string | undefined;
    templateId?: string | undefined;
    everythingPermissions?: boolean | undefined;
    memberTargetCount?: number | undefined;
    groupNameAliases?: {
        [x: string]: string | undefined;
    } | undefined;
    groupDescription?: string | undefined;
    lastMessagePreview?: string | undefined;
    invitationCode?: string | undefined;
    invitationUrl?: string | undefined;
    lastMessageUid?: string | undefined;
    isSharingDisabled?: boolean | undefined;
    createdAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
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
}, "createdAt" | "updatedAt" | "thumbnailUrl" | "participantUids" | "groupName" | "creatorName" | "creatorUid" | "icon" | "unreadCounts" | "permissions" | "suggestedTacticIds" | ("isTemplate" | "slug" | "templateId" | "everythingPermissions" | "memberTargetCount" | "groupNameAliases" | "groupDescription" | "lastMessagePreview" | "invitationCode" | "invitationUrl" | "lastMessageUid" | "isSharingDisabled")>, tacticFactory: import("factory.ts").Factory<import("..").TacticValue, "uid" | "createdAt" | "updatedAt" | "ordinal" | "title" | "type" | "sourceId" | "subtitle" | "description" | "image" | "backgroundColor" | "isTemplate" | "language" | "href" | "categoryIds" | "isShared" | "isResponseRequired" | "timerSeconds" | "isAvailableForRecommendation" | "numberOfLikes" | "isSuggested" | "ordinals">, recommendationRuleFactory: import("factory.ts").Factory<import("..").RecommendationRuleValue, keyof import("..").RecommendationRuleValue>;
