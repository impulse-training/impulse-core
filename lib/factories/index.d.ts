import { TimestampLike } from '../utils/TimestampLike';
export declare function makeFactories(TimestampKlass: typeof TimestampLike): {
    applicationFactory: import("factory.ts").Factory<import("..").ApplicationValue, keyof import("..").ApplicationValue>;
    commentFactory: import("factory.ts").Factory<import("..").CommentValue, keyof import("..").CommentValue>;
    impulseFactory: import("factory.ts").Factory<import("..").ImpulseLogValue, "uid" | "timezone" | "type" | "location" | "tacticsById" | "patternsById" | "startTime" | "locationIsFetching" | "strategy" | "seenTacticIds" | "completedTacticIds" | "isDisplayable" | "gameplan" | "patternId" | ("updatedAt" | "createdAt" | "steps" | "locationFormatted" | "commentCount" | "commentsById" | "commentsByTacticId" | "tacticLikes" | "tacticData" | "sharedWithSupportGroupIds" | "setAsActiveImpulse" | "pressCount" | "buttonPressSecondsSinceEpoch" | "outcome" | "debriefNotes" | "debriefReminderSentAt" | "debriefedAt")>;
    timeLogFactory: import("factory.ts").Factory<import("..").TimeLogValue, "uid" | "timezone" | "type" | "location" | "tacticsById" | "startTime" | "locationIsFetching" | "strategy" | "seenTacticIds" | "completedTacticIds" | "isDisplayable" | "gameplanId" | ("updatedAt" | "createdAt" | "steps" | "locationFormatted" | "commentCount" | "commentsById" | "commentsByTacticId" | "tacticLikes" | "tacticData" | "sharedWithSupportGroupIds")>;
    motionLogFactory: import("factory.ts").Factory<import("..").MotionLogValue, "uid" | "timezone" | "type" | "location" | "tacticsById" | "startTime" | "locationIsFetching" | "strategy" | "seenTacticIds" | "completedTacticIds" | "isDisplayable" | ("updatedAt" | "createdAt" | "steps" | "locationFormatted" | "commentCount" | "commentsById" | "commentsByTacticId" | "tacticLikes" | "tacticData" | "sharedWithSupportGroupIds")>;
    locationLogFactory: import("factory.ts").Factory<import("..").LocationLogValue, "uid" | "timezone" | "type" | "location" | "locationId" | "tacticsById" | "startTime" | "locationIsFetching" | "strategy" | "seenTacticIds" | "completedTacticIds" | "isDisplayable" | "locationName" | "locationMode" | ("updatedAt" | "createdAt" | "steps" | "locationFormatted" | "commentCount" | "commentsById" | "commentsByTacticId" | "tacticLikes" | "tacticData" | "sharedWithSupportGroupIds")>;
    debriefLogFactory: import("factory.ts").Factory<import("..").DebriefLogValue, "uid" | "timezone" | "type" | "location" | "tacticsById" | "patternsById" | "startTime" | "locationIsFetching" | "strategy" | "seenTacticIds" | "completedTacticIds" | "isDisplayable" | "gameplanId" | "tacticDataEntries" | ("updatedAt" | "createdAt" | "steps" | "locationFormatted" | "commentCount" | "commentsById" | "commentsByTacticId" | "tacticLikes" | "tacticData" | "sharedWithSupportGroupIds")>;
    locationFactory: import("factory.ts").Factory<import("..").LocationValue, keyof import("..").LocationValue>;
    profileFactory: import("factory.ts").Factory<import("..").ProfileValue, keyof import("..").ProfileValue>;
    gameplanFactory: import("factory.ts").Factory<import("..").GameplanValue, "uid" | "tacticsById" | "impulse" | "impulseDebrief" | "routine" | "routinesById" | "patternsById" | ("updatedAt" | "createdAt")>;
    issueFactory: import("factory.ts").Factory<import("..").IssueValue, keyof import("..").IssueValue>;
    adminProfileFactory: import("factory.ts").Factory<import("..").ProfileValue, keyof import("..").ProfileValue>;
    supportGroupFactory: import("factory.ts").Factory<{
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
    }, "thumbnailUrl" | "suggestedTacticIds" | "participantUids" | "groupName" | "creatorName" | "creatorUid" | "icon" | "unreadCounts" | "permissions" | ("updatedAt" | "createdAt" | "isTemplate" | "slug" | "templateId" | "everythingPermissions" | "memberTargetCount" | "groupNameAliases" | "groupDescription" | "lastMessagePreview" | "invitationCode" | "invitationUrl" | "lastMessageUid" | "isSharingDisabled")>;
    debriefRoutineFactory: import("factory.ts").Factory<{
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
        timezone?: string | null | undefined;
        uid: string;
        type: "dayDebrief";
    }, "uid" | "type" | ("updatedAt" | "createdAt" | "title" | "navigationTitle" | "isTemplate" | "timezone")>;
    messageFactory: import("factory.ts").Factory<import("..").MessageValue, keyof import("..").MessageValue>;
    timeRoutineFactory: import("factory.ts").Factory<{
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
        scheduledNotificationIds?: string[] | null | undefined;
        uid: string;
        timezone: string;
        weekdays: number[];
        hour: number;
        minute: number;
        type: "time";
    }, "uid" | "timezone" | "weekdays" | "hour" | "minute" | "type" | ("updatedAt" | "createdAt" | "title" | "navigationTitle" | "isTemplate" | "scheduledNotificationIds")>;
    patternFactory: import("factory.ts").Factory<{
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
        supportGroupIds?: import("yup").Maybe<(string | undefined)[] | undefined>;
        notification?: {
            title: string;
            body: string;
        } | null | undefined;
        setbackTacticId?: import("yup").Maybe<string | undefined>;
        issueId?: import("yup").Maybe<string | undefined>;
        uid: string;
        name: string;
        ordinal: number;
        setbackThreshold: number;
        sendWeeklyReports: NonNullable<boolean | undefined>;
    }, "uid" | "name" | "ordinal" | "setbackThreshold" | "sendWeeklyReports" | ("updatedAt" | "createdAt" | "supportGroupIds" | "notification" | "setbackTacticId" | "issueId")>;
    locationRoutineFactory: import("factory.ts").Factory<{
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
        timezone?: string | null | undefined;
        locationId?: string | null | undefined;
        uid: string;
        type: "location";
        mode: {};
    }, "uid" | "type" | "mode" | ("updatedAt" | "createdAt" | "title" | "navigationTitle" | "isTemplate" | "timezone" | "locationId")>;
    recommendationFactory: import("factory.ts").Factory<import("..").RecommendationValue, "uid" | "updatedAt" | "createdAt" | "ordinal" | "title" | "tacticIds" | "tacticsById" | "appliedAt" | "dismissedAt" | "explanation" | "gameplanExplanation" | "recommenderUid" | "recommenderName" | "ruleId" | "gameplanIds" | "defaultSelected">;
    recommendationRuleFactory: import("factory.ts").Factory<import("..").RecommendationRuleValue, keyof import("..").RecommendationRuleValue>;
    newRoutineRecommendationRuleFactory: import("factory.ts").Factory<import("..").RecommendationRuleValue, keyof import("..").RecommendationRuleValue>;
    tacticFactory: import("factory.ts").Factory<import("..").TacticValue, "uid" | "updatedAt" | "createdAt" | "ordinal" | "title" | "isTemplate" | "type" | "sourceId" | "subtitle" | "description" | "image" | "backgroundColor" | "language" | "href" | "categoryIds" | "isShared" | "isResponseRequired" | "timerSeconds" | "isAvailableForRecommendation" | "numberOfLikes" | "isSuggested">;
};
