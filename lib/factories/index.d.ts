import { TimestampLike } from '../utils/TimestampLike';
export declare function makeFactories(TimestampKlass: typeof TimestampLike): {
    applicationFactory: import("factory.ts").Factory<import("..").ApplicationValue, keyof import("..").ApplicationValue>;
    commentFactory: import("factory.ts").Factory<import("..").CommentValue, keyof import("..").CommentValue>;
    impulseFactory: import("factory.ts").Factory<import("..").ImpulseLogValue, "type" | "uid" | "createdAt" | "updatedAt" | "tacticIds" | "timezone" | "patternId" | "location" | "startTime" | "locationIsFetching" | "allTacticIds" | "gameplan" | "tactics" | "patterns" | "outcome" | "isDisplayable" | "gameplans" | "patternIds" | "patternUsage" | ("steps" | "suggestedTacticIds" | "locationFormatted" | "commentCount" | "commentsById" | "commentsByTacticId" | "isUpdatingSuggestions" | "supportGroupSuggestedTacticIds" | "tacticUsage" | "tacticData" | "sharedWithSupportGroupIds" | "setAsActiveImpulse" | "pressCount" | "buttonPressSecondsSinceEpoch" | "debriefNotes" | "debriefReminderSentAt" | "debriefedAt")>;
    timeLogFactory: import("factory.ts").Factory<import("..").TimeLogValue, "type" | "uid" | "createdAt" | "updatedAt" | "tacticIds" | "timezone" | "location" | "gameplanId" | "startTime" | "locationIsFetching" | "allTacticIds" | "gameplan" | "tactics" | "isDisplayable" | ("steps" | "suggestedTacticIds" | "locationFormatted" | "commentCount" | "commentsById" | "commentsByTacticId" | "isUpdatingSuggestions" | "supportGroupSuggestedTacticIds" | "tacticUsage" | "tacticData" | "sharedWithSupportGroupIds")>;
    motionLogFactory: import("factory.ts").Factory<import("..").MotionLogValue, "type" | "uid" | "createdAt" | "updatedAt" | "tacticIds" | "timezone" | "location" | "startTime" | "locationIsFetching" | "allTacticIds" | "gameplan" | "tactics" | "isDisplayable" | ("steps" | "suggestedTacticIds" | "locationFormatted" | "commentCount" | "commentsById" | "commentsByTacticId" | "isUpdatingSuggestions" | "supportGroupSuggestedTacticIds" | "tacticUsage" | "tacticData" | "sharedWithSupportGroupIds")>;
    locationLogFactory: import("factory.ts").Factory<import("..").LocationLogValue, "type" | "uid" | "createdAt" | "updatedAt" | "tacticIds" | "timezone" | "location" | "locationId" | "startTime" | "locationIsFetching" | "allTacticIds" | "gameplan" | "tactics" | "isDisplayable" | "locationName" | "locationMode" | ("steps" | "suggestedTacticIds" | "locationFormatted" | "commentCount" | "commentsById" | "commentsByTacticId" | "isUpdatingSuggestions" | "supportGroupSuggestedTacticIds" | "tacticUsage" | "tacticData" | "sharedWithSupportGroupIds")>;
    debriefLogFactory: import("factory.ts").Factory<import("..").DebriefLogValue, "type" | "uid" | "createdAt" | "updatedAt" | "tacticIds" | "timezone" | "location" | "gameplanId" | "startTime" | "locationIsFetching" | "allTacticIds" | "gameplan" | "tactics" | "patterns" | "outcome" | "isDisplayable" | "patternIds" | "patternUsage" | "patternUsageEntries" | ("steps" | "suggestedTacticIds" | "locationFormatted" | "commentCount" | "commentsById" | "commentsByTacticId" | "isUpdatingSuggestions" | "supportGroupSuggestedTacticIds" | "tacticUsage" | "tacticData" | "sharedWithSupportGroupIds")>;
    locationFactory: import("factory.ts").Factory<import("..").LocationValue, keyof import("..").LocationValue>;
    logSummaryFactory: import("factory.ts").Factory<import("..").LogSummaryValue, keyof import("..").LogSummaryValue>;
    profileFactory: import("factory.ts").Factory<import("..").ProfileValue, keyof import("..").ProfileValue>;
    issueFactory: import("factory.ts").Factory<import("..").IssueValue, keyof import("..").IssueValue>;
    adminProfileFactory: import("factory.ts").Factory<import("..").ProfileValue, keyof import("..").ProfileValue>;
    supportGroupFactory: import("factory.ts").Factory<{
        isTemplate?: boolean | undefined;
        templateId?: string | undefined;
        everythingPermissions?: boolean | undefined;
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
        suggestedTacticIds: {};
        participantUids: (string | undefined)[];
        groupName: string;
        creatorName: string;
        creatorUid: string;
        icon: {};
        unreadCounts: {};
        permissions: {};
    }, "createdAt" | "updatedAt" | "thumbnailUrl" | "suggestedTacticIds" | "participantUids" | "groupName" | "creatorName" | "creatorUid" | "icon" | "unreadCounts" | "permissions" | ("isTemplate" | "templateId" | "everythingPermissions" | "groupNameAliases" | "groupDescription" | "lastMessagePreview" | "invitationCode" | "invitationUrl" | "lastMessageUid" | "isSharingDisabled")>;
    impulseGameplanFactory: import("factory.ts").Factory<import("..").ImpulseGameplanValue, "type" | "uid" | "createdAt" | "updatedAt" | "tacticIds" | "tacticsById" | "suggestedTacticIds" | "patternId" | ("title" | "isTemplate" | "navigationTitle" | "tacticsUpdatedAt" | "timezone" | "patternName" | "issueId" | "parentIssueIds")>;
    successGameplanFactory: import("factory.ts").Factory<import("..").ImpulseGameplanValue, "type" | "uid" | "createdAt" | "updatedAt" | "tacticIds" | "tacticsById" | "suggestedTacticIds" | "patternId" | ("title" | "isTemplate" | "navigationTitle" | "tacticsUpdatedAt" | "timezone" | "patternName" | "issueId" | "parentIssueIds")>;
    setbackGameplanFactory: import("factory.ts").Factory<import("..").ImpulseGameplanValue, "type" | "uid" | "createdAt" | "updatedAt" | "tacticIds" | "tacticsById" | "suggestedTacticIds" | "patternId" | ("title" | "isTemplate" | "navigationTitle" | "tacticsUpdatedAt" | "timezone" | "patternName" | "issueId" | "parentIssueIds")>;
    messageFactory: import("factory.ts").Factory<import("..").MessageValue, keyof import("..").MessageValue>;
    timeGameplanFactory: import("factory.ts").Factory<import("..").TimeGameplanValue, "type" | "uid" | "createdAt" | "updatedAt" | "tacticIds" | "tacticsById" | "suggestedTacticIds" | "timezone" | "weekdays" | "hour" | "minute" | ("title" | "isTemplate" | "navigationTitle" | "tacticsUpdatedAt" | "patternName" | "issueId" | "parentIssueIds" | "scheduledNotificationIds")>;
    patternFactory: import("factory.ts").Factory<{
        issueId?: import("yup").Maybe<string | undefined>;
        customUnit?: string | undefined;
        supportGroupIds?: import("yup").Maybe<(string | undefined)[] | undefined>;
        notification?: {
            title: string;
            body: string;
        } | null | undefined;
        gameplanId?: import("yup").Maybe<string | undefined>;
        successGameplanId?: import("yup").Maybe<string | undefined>;
        setbackGameplanId?: import("yup").Maybe<string | undefined>;
        uid: string;
        ordinal: number;
        createdAt: {};
        updatedAt: {};
        name: string;
        unit: NonNullable<"time" | "custom" | undefined>;
        sendWeeklyReports: NonNullable<boolean | undefined>;
        setbackThreshold: number;
    }, "uid" | "ordinal" | "createdAt" | "updatedAt" | "name" | "unit" | "sendWeeklyReports" | "setbackThreshold" | ("issueId" | "customUnit" | "supportGroupIds" | "notification" | "gameplanId" | "successGameplanId" | "setbackGameplanId")>;
    locationGameplanFactory: import("factory.ts").Factory<import("..").LocationGameplanValue, "type" | "uid" | "createdAt" | "updatedAt" | "tacticIds" | "tacticsById" | "suggestedTacticIds" | "mode" | ("title" | "isTemplate" | "navigationTitle" | "tacticsUpdatedAt" | "timezone" | "patternName" | "issueId" | "parentIssueIds" | "locationId")>;
    recommendationFactory: import("factory.ts").Factory<import("..").RecommendationValue, "uid" | "ordinal" | "createdAt" | "updatedAt" | "title" | "tacticIds" | "tacticsById" | "appliedAt" | "dismissedAt" | "explanation" | "gameplanExplanation" | "recommenderUid" | "recommenderName" | "ruleId" | "gameplanIds" | "defaultSelected">;
    recommendationRuleFactory: import("factory.ts").Factory<import("..").RecommendationRuleValue, keyof import("..").RecommendationRuleValue>;
    newGameplanRecommendationRuleFactory: import("factory.ts").Factory<import("..").RecommendationRuleValue, keyof import("..").RecommendationRuleValue>;
    tacticFactory: import("factory.ts").Factory<import("..").TacticValue, "type" | "uid" | "ordinal" | "isSuggested" | "createdAt" | "updatedAt" | "title" | "description" | "image" | "backgroundColor" | "isTemplate" | "language" | "href" | "categoryIds" | "isShared" | "isResponseRequired" | "isAvailableForRecommendation">;
};
