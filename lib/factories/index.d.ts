import { TimestampLike } from '../utils/TimestampLike';
export declare function makeFactories(TimestampKlass: typeof TimestampLike): {
    applicationFactory: import("factory.ts").Factory<import("..").ApplicationValue, keyof import("..").ApplicationValue>;
    commentFactory: import("factory.ts").Factory<import("..").CommentValue, keyof import("..").CommentValue>;
    impulseFactory: import("factory.ts").Factory<import("..").ImpulseLogValue, "uid" | "createdAt" | "updatedAt" | "timezone" | "type" | "location" | "tacticsById" | "patternsById" | "startTime" | "locationIsFetching" | "strategy" | "seenTacticIds" | "completedTacticIds" | "isDisplayable" | "gameplan" | "patternId" | ("steps" | "locationFormatted" | "commentCount" | "commentsById" | "commentsByTacticId" | "tacticLikes" | "tacticData" | "sharedWithSupportGroupIds" | "setAsActiveImpulse" | "pressCount" | "buttonPressSecondsSinceEpoch" | "outcome" | "debriefNotes" | "debriefReminderSentAt" | "debriefedAt")>;
    timeLogFactory: import("factory.ts").Factory<import("..").TimeLogValue, "uid" | "createdAt" | "updatedAt" | "timezone" | "type" | "location" | "tacticsById" | "startTime" | "locationIsFetching" | "strategy" | "seenTacticIds" | "completedTacticIds" | "isDisplayable" | "gameplanId" | ("steps" | "locationFormatted" | "commentCount" | "commentsById" | "commentsByTacticId" | "tacticLikes" | "tacticData" | "sharedWithSupportGroupIds")>;
    motionLogFactory: import("factory.ts").Factory<import("..").MotionLogValue, "uid" | "createdAt" | "updatedAt" | "timezone" | "type" | "location" | "tacticsById" | "startTime" | "locationIsFetching" | "strategy" | "seenTacticIds" | "completedTacticIds" | "isDisplayable" | ("steps" | "locationFormatted" | "commentCount" | "commentsById" | "commentsByTacticId" | "tacticLikes" | "tacticData" | "sharedWithSupportGroupIds")>;
    locationLogFactory: import("factory.ts").Factory<import("..").LocationLogValue, "uid" | "createdAt" | "updatedAt" | "timezone" | "type" | "location" | "locationId" | "tacticsById" | "startTime" | "locationIsFetching" | "strategy" | "seenTacticIds" | "completedTacticIds" | "isDisplayable" | "locationName" | "locationMode" | ("steps" | "locationFormatted" | "commentCount" | "commentsById" | "commentsByTacticId" | "tacticLikes" | "tacticData" | "sharedWithSupportGroupIds")>;
    debriefLogFactory: import("factory.ts").Factory<import("..").DebriefLogValue, "uid" | "createdAt" | "updatedAt" | "timezone" | "type" | "location" | "tacticsById" | "patternsById" | "startTime" | "locationIsFetching" | "strategy" | "seenTacticIds" | "completedTacticIds" | "isDisplayable" | "gameplanId" | "tacticDataEntries" | ("steps" | "locationFormatted" | "commentCount" | "commentsById" | "commentsByTacticId" | "tacticLikes" | "tacticData" | "sharedWithSupportGroupIds")>;
    locationFactory: import("factory.ts").Factory<import("..").LocationValue, keyof import("..").LocationValue>;
    profileFactory: import("factory.ts").Factory<import("..").ProfileValue, keyof import("..").ProfileValue>;
    gameplanFactory: import("factory.ts").Factory<import("..").GameplanValue, "uid" | "createdAt" | "updatedAt" | "tacticsById" | "impulse" | "impulseDebrief" | "routine" | "routinesById" | "patternsById">;
    issueFactory: import("factory.ts").Factory<import("..").IssueValue, keyof import("..").IssueValue>;
    adminProfileFactory: import("factory.ts").Factory<import("..").ProfileValue, keyof import("..").ProfileValue>;
    supportGroupFactory: import("factory.ts").Factory<{
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
    }, "createdAt" | "updatedAt" | "thumbnailUrl" | "suggestedTacticIds" | "participantUids" | "groupName" | "creatorName" | "creatorUid" | "icon" | "unreadCounts" | "permissions" | ("isTemplate" | "slug" | "templateId" | "everythingPermissions" | "memberTargetCount" | "groupNameAliases" | "groupDescription" | "lastMessagePreview" | "invitationCode" | "invitationUrl" | "lastMessageUid" | "isSharingDisabled")>;
    debriefRoutineFactory: import("factory.ts").Factory<{
        title?: string | null | undefined;
        navigationTitle?: string | null | undefined;
        isTemplate?: boolean | null | undefined;
        timezone?: string | null | undefined;
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
    }, "uid" | "createdAt" | "updatedAt" | "type" | ("title" | "navigationTitle" | "isTemplate" | "timezone")>;
    messageFactory: import("factory.ts").Factory<import("..").MessageValue, keyof import("..").MessageValue>;
    timeRoutineFactory: import("factory.ts").Factory<{
        title?: string | null | undefined;
        navigationTitle?: string | null | undefined;
        isTemplate?: boolean | null | undefined;
        scheduledNotificationIds?: string[] | null | undefined;
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
        timezone: string;
        weekdays: number[];
        hour: number;
        minute: number;
        type: "time";
    }, "uid" | "createdAt" | "updatedAt" | "timezone" | "weekdays" | "hour" | "minute" | "type" | ("title" | "navigationTitle" | "isTemplate" | "scheduledNotificationIds")>;
    patternFactory: import("factory.ts").Factory<{
        supportGroupIds?: import("yup").Maybe<(string | undefined)[] | undefined>;
        notification?: {
            title: string;
            body: string;
        } | null | undefined;
        setbackTacticId?: import("yup").Maybe<string | undefined>;
        issueId?: import("yup").Maybe<string | undefined>;
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
        name: string;
        ordinal: number;
        setbackThreshold: number;
        sendWeeklyReports: NonNullable<boolean | undefined>;
    }, "uid" | "createdAt" | "updatedAt" | "name" | "ordinal" | "setbackThreshold" | "sendWeeklyReports" | ("supportGroupIds" | "notification" | "setbackTacticId" | "issueId")>;
    locationRoutineFactory: import("factory.ts").Factory<{
        title?: string | null | undefined;
        navigationTitle?: string | null | undefined;
        isTemplate?: boolean | null | undefined;
        timezone?: string | null | undefined;
        locationId?: string | null | undefined;
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
        type: "location";
        mode: {};
    }, "uid" | "createdAt" | "updatedAt" | "type" | "mode" | ("title" | "navigationTitle" | "isTemplate" | "timezone" | "locationId")>;
    recommendationFactory: import("factory.ts").Factory<import("..").RecommendationValue, "uid" | "createdAt" | "updatedAt" | "ordinal" | "title" | "tacticIds" | "tacticsById" | "appliedAt" | "dismissedAt" | "explanation" | "gameplanExplanation" | "recommenderUid" | "recommenderName" | "ruleId" | "gameplanIds" | "defaultSelected">;
    recommendationRuleFactory: import("factory.ts").Factory<import("..").RecommendationRuleValue, keyof import("..").RecommendationRuleValue>;
    newRoutineRecommendationRuleFactory: import("factory.ts").Factory<import("..").RecommendationRuleValue, keyof import("..").RecommendationRuleValue>;
    tacticFactory: import("factory.ts").Factory<import("..").TacticValue, "uid" | "createdAt" | "updatedAt" | "ordinal" | "title" | "isTemplate" | "type" | "sourceId" | "subtitle" | "description" | "image" | "backgroundColor" | "language" | "href" | "categoryIds" | "isShared" | "isResponseRequired" | "timerSeconds" | "isAvailableForRecommendation" | "numberOfLikes" | "isSuggested">;
};
