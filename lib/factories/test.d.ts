export declare const applicationFactory: import("factory.ts").Factory<import("..").ApplicationValue, keyof import("..").ApplicationValue>, commentFactory: import("factory.ts").Factory<import("..").CommentValue, keyof import("..").CommentValue>, impulseFactory: import("factory.ts").Factory<import("..").ImpulseLogValue, "uid" | "timezone" | "location" | "type" | "tacticsById" | "patternsById" | "startTime" | "locationIsFetching" | "strategy" | "seenTacticIds" | "completedTacticIds" | "isDisplayable" | "gameplan" | "patternId" | ("updatedAt" | "createdAt" | "steps" | "locationFormatted" | "commentCount" | "commentsById" | "commentsByTacticId" | "tacticLikes" | "tacticData" | "sharedWithSupportGroupIds" | "setAsActiveImpulse" | "pressCount" | "buttonPressSecondsSinceEpoch" | "outcome" | "debriefNotes" | "debriefReminderSentAt" | "debriefedAt")>, timeLogFactory: import("factory.ts").Factory<import("..").TimeLogValue, "uid" | "timezone" | "location" | "type" | "tacticsById" | "startTime" | "locationIsFetching" | "strategy" | "seenTacticIds" | "completedTacticIds" | "isDisplayable" | "routineId" | ("updatedAt" | "createdAt" | "steps" | "locationFormatted" | "commentCount" | "commentsById" | "commentsByTacticId" | "tacticLikes" | "tacticData" | "sharedWithSupportGroupIds")>, motionLogFactory: import("factory.ts").Factory<import("..").MotionLogValue, "uid" | "timezone" | "location" | "type" | "tacticsById" | "startTime" | "locationIsFetching" | "strategy" | "seenTacticIds" | "completedTacticIds" | "isDisplayable" | ("updatedAt" | "createdAt" | "steps" | "locationFormatted" | "commentCount" | "commentsById" | "commentsByTacticId" | "tacticLikes" | "tacticData" | "sharedWithSupportGroupIds")>, recommendationFactory: import("factory.ts").Factory<import("..").RecommendationValue, "uid" | "updatedAt" | "createdAt" | "ordinal" | "title" | "tacticIds" | "tacticsById" | "appliedAt" | "dismissedAt" | "explanation" | "gameplanExplanation" | "recommenderUid" | "recommenderName" | "ruleId" | "gameplanIds" | "defaultSelected">, debriefLogFactory: import("factory.ts").Factory<import("..").DebriefLogValue, "uid" | "timezone" | "location" | "type" | "tacticsById" | "patternsById" | "startTime" | "locationIsFetching" | "strategy" | "seenTacticIds" | "completedTacticIds" | "isDisplayable" | "routineId" | "tacticDataEntries" | ("updatedAt" | "createdAt" | "steps" | "locationFormatted" | "commentCount" | "commentsById" | "commentsByTacticId" | "tacticLikes" | "tacticData" | "sharedWithSupportGroupIds")>, debriefRoutineFactory: import("factory.ts").Factory<{
    updatedAt?: import("yup").Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    createdAt?: import("yup").Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    title?: string | null | undefined;
    navigationTitle?: string | null | undefined;
    isTemplate?: boolean | null | undefined;
    uid: string;
    timezone: string;
    type: "dayDebrief";
}, "uid" | "timezone" | "type" | ("updatedAt" | "createdAt" | "title" | "navigationTitle" | "isTemplate")>, profileFactory: import("factory.ts").Factory<import("..").ProfileValue, keyof import("..").ProfileValue>, supportGroupFactory: import("factory.ts").Factory<{
    updatedAt?: import("yup").Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    createdAt?: import("yup").Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
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
}, "thumbnailUrl" | "suggestedTacticIds" | "participantUids" | "groupName" | "creatorName" | "creatorUid" | "icon" | "unreadCounts" | "permissions" | ("updatedAt" | "createdAt" | "isTemplate" | "slug" | "templateId" | "everythingPermissions" | "memberTargetCount" | "groupNameAliases" | "groupDescription" | "lastMessagePreview" | "invitationCode" | "invitationUrl" | "lastMessageUid" | "isSharingDisabled")>, tacticFactory: import("factory.ts").Factory<import("..").TacticValue, "uid" | "updatedAt" | "createdAt" | "ordinal" | "title" | "isTemplate" | "type" | "sourceId" | "subtitle" | "description" | "image" | "backgroundColor" | "language" | "href" | "categoryIds" | "isShared" | "isResponseRequired" | "timerSeconds" | "isAvailableForRecommendation" | "numberOfLikes" | "isSuggested">, recommendationRuleFactory: import("factory.ts").Factory<import("..").RecommendationRuleValue, keyof import("..").RecommendationRuleValue>;
