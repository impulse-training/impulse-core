import { FakeTimestamp } from '../utils/FakeTimestamp';
export declare function makeFactories(TimestampKlass: typeof FakeTimestamp): {
    applicationFactory: import("factory.ts").Factory<import("..").ApplicationValue, keyof import("..").ApplicationValue>;
    commentFactory: import("factory.ts").Factory<import("..").CommentValue, keyof import("..").CommentValue>;
    impulseFactory: import("factory.ts").Factory<{
        locationFormatted?: import("yup").Maybe<string | undefined>;
        commentCount?: import("yup").Maybe<number | undefined>;
        commentsById?: {} | null | undefined;
        commentsByTacticId?: {} | null | undefined;
        steps?: import("yup").Maybe<number | undefined>;
        suggestedTacticIds?: import("yup").Maybe<(string | undefined)[] | undefined>;
        isUpdatingSuggestions?: import("yup").Maybe<boolean | undefined>;
        supportGroupSuggestedTacticIds?: {
            success: {};
            setback: {};
            impulse: {};
            all: {};
        } | null | undefined;
        tacticUsage?: {} | null | undefined;
        tacticData?: {} | null | undefined;
        sharedWithSupportGroupIds?: import("yup").Maybe<(string | undefined)[] | undefined>;
        setAsActiveImpulse?: import("yup").Maybe<boolean | undefined>;
        pressCount?: import("yup").Maybe<number | undefined>;
        buttonPressSecondsSinceEpoch?: import("yup").Maybe<number | undefined>;
        debriefNotes?: import("yup").Maybe<string | undefined>;
        debriefReminderSentAt?: import("yup").Maybe<{} | undefined>;
        debriefedAt?: import("yup").Maybe<{} | undefined>;
        uid: string;
        createdAt: {};
        updatedAt: {};
        startTime: {};
        timezone: string;
        location: {
            latitude?: number | undefined;
            longitude?: number | undefined;
            altitude?: number | undefined;
            accuracy?: number | undefined;
            altitudeAccuracy?: number | undefined;
            heading?: number | undefined;
            speed?: number | undefined;
        };
        locationIsFetching: NonNullable<boolean | undefined>;
        allTacticIds: (string | undefined)[];
        tacticIds: (string | undefined)[];
        gameplan: {
            success?: import("yup").Maybe<{} | undefined>;
            setback?: import("yup").Maybe<{} | undefined>;
            main: {};
        };
        tactics: {};
        type: {};
        outcome: {};
        isDisplayable: NonNullable<boolean | undefined>;
        gameplans: {};
        patterns: {
            [x: string]: {
                customUnit?: string | undefined;
                supportGroupIds?: import("yup").Maybe<(string | undefined)[] | undefined>;
                notification?: {
                    title: string;
                    body: string;
                } | null | undefined;
                issueId?: import("yup").Maybe<string | undefined>;
                gameplanId?: import("yup").Maybe<string | undefined>;
                successGameplanId?: import("yup").Maybe<string | undefined>;
                setbackGameplanId?: import("yup").Maybe<string | undefined>;
                uid: string;
                createdAt: {};
                updatedAt: {};
                name: string;
                ordinal: number;
                unit: NonNullable<"time" | "custom" | undefined>;
                sendWeeklyReports: NonNullable<boolean | undefined>;
                setbackThreshold: number;
            };
            [x: number]: {
                customUnit?: string | undefined;
                supportGroupIds?: import("yup").Maybe<(string | undefined)[] | undefined>;
                notification?: {
                    title: string;
                    body: string;
                } | null | undefined;
                issueId?: import("yup").Maybe<string | undefined>;
                gameplanId?: import("yup").Maybe<string | undefined>;
                successGameplanId?: import("yup").Maybe<string | undefined>;
                setbackGameplanId?: import("yup").Maybe<string | undefined>;
                uid: string;
                createdAt: {};
                updatedAt: {};
                name: string;
                ordinal: number;
                unit: NonNullable<"time" | "custom" | undefined>;
                sendWeeklyReports: NonNullable<boolean | undefined>;
                setbackThreshold: number;
            };
        };
        patternId: string;
        patternIds: (string | undefined)[];
        patternUsage: {
            [x: string]: {
                customUnit?: string | undefined;
                unit: NonNullable<"time" | "custom" | undefined>;
                formattedValue: string;
                value: number;
            };
            [x: number]: {
                customUnit?: string | undefined;
                unit: NonNullable<"time" | "custom" | undefined>;
                formattedValue: string;
                value: number;
            };
        };
    }, "uid" | "createdAt" | "updatedAt" | "startTime" | "timezone" | "location" | "locationIsFetching" | "allTacticIds" | "tacticIds" | "gameplan" | "tactics" | "type" | "outcome" | "isDisplayable" | "gameplans" | "patterns" | "patternId" | "patternIds" | "patternUsage" | ("locationFormatted" | "commentCount" | "commentsById" | "commentsByTacticId" | "steps" | "suggestedTacticIds" | "isUpdatingSuggestions" | "supportGroupSuggestedTacticIds" | "tacticUsage" | "tacticData" | "sharedWithSupportGroupIds" | "setAsActiveImpulse" | "pressCount" | "buttonPressSecondsSinceEpoch" | "debriefNotes" | "debriefReminderSentAt" | "debriefedAt")>;
    timeLogFactory: import("factory.ts").Factory<{
        locationFormatted?: import("yup").Maybe<string | undefined>;
        commentCount?: import("yup").Maybe<number | undefined>;
        commentsById?: {} | null | undefined;
        commentsByTacticId?: {} | null | undefined;
        steps?: import("yup").Maybe<number | undefined>;
        suggestedTacticIds?: import("yup").Maybe<(string | undefined)[] | undefined>;
        isUpdatingSuggestions?: import("yup").Maybe<boolean | undefined>;
        supportGroupSuggestedTacticIds?: {
            success: {};
            setback: {};
            impulse: {};
            all: {};
        } | null | undefined;
        tacticUsage?: {} | null | undefined;
        tacticData?: {} | null | undefined;
        sharedWithSupportGroupIds?: import("yup").Maybe<(string | undefined)[] | undefined>;
        uid: string;
        createdAt: {};
        updatedAt: {};
        gameplanId: string;
        startTime: {};
        timezone: string;
        location: {
            latitude?: number | undefined;
            longitude?: number | undefined;
            altitude?: number | undefined;
            accuracy?: number | undefined;
            altitudeAccuracy?: number | undefined;
            heading?: number | undefined;
            speed?: number | undefined;
        };
        locationIsFetching: NonNullable<boolean | undefined>;
        allTacticIds: (string | undefined)[];
        tacticIds: (string | undefined)[];
        gameplan: {
            success?: import("yup").Maybe<{} | undefined>;
            setback?: import("yup").Maybe<{} | undefined>;
            main: {};
        };
        tactics: {};
        type: {};
        isDisplayable: NonNullable<boolean | undefined>;
    }, "uid" | "createdAt" | "updatedAt" | "gameplanId" | "startTime" | "timezone" | "location" | "locationIsFetching" | "allTacticIds" | "tacticIds" | "gameplan" | "tactics" | "type" | "isDisplayable" | ("locationFormatted" | "commentCount" | "commentsById" | "commentsByTacticId" | "steps" | "suggestedTacticIds" | "isUpdatingSuggestions" | "supportGroupSuggestedTacticIds" | "tacticUsage" | "tacticData" | "sharedWithSupportGroupIds")>;
    motionLogFactory: import("factory.ts").Factory<{
        locationFormatted?: import("yup").Maybe<string | undefined>;
        commentCount?: import("yup").Maybe<number | undefined>;
        commentsById?: {} | null | undefined;
        commentsByTacticId?: {} | null | undefined;
        steps?: import("yup").Maybe<number | undefined>;
        suggestedTacticIds?: import("yup").Maybe<(string | undefined)[] | undefined>;
        isUpdatingSuggestions?: import("yup").Maybe<boolean | undefined>;
        supportGroupSuggestedTacticIds?: {
            success: {};
            setback: {};
            impulse: {};
            all: {};
        } | null | undefined;
        tacticUsage?: {} | null | undefined;
        tacticData?: {} | null | undefined;
        sharedWithSupportGroupIds?: import("yup").Maybe<(string | undefined)[] | undefined>;
        uid: string;
        createdAt: {};
        updatedAt: {};
        startTime: {};
        timezone: string;
        location: {
            latitude?: number | undefined;
            longitude?: number | undefined;
            altitude?: number | undefined;
            accuracy?: number | undefined;
            altitudeAccuracy?: number | undefined;
            heading?: number | undefined;
            speed?: number | undefined;
        };
        locationIsFetching: NonNullable<boolean | undefined>;
        allTacticIds: (string | undefined)[];
        tacticIds: (string | undefined)[];
        gameplan: {
            success?: import("yup").Maybe<{} | undefined>;
            setback?: import("yup").Maybe<{} | undefined>;
            main: {};
        };
        tactics: {};
        type: {};
        isDisplayable: NonNullable<boolean | undefined>;
    }, "uid" | "createdAt" | "updatedAt" | "startTime" | "timezone" | "location" | "locationIsFetching" | "allTacticIds" | "tacticIds" | "gameplan" | "tactics" | "type" | "isDisplayable" | ("locationFormatted" | "commentCount" | "commentsById" | "commentsByTacticId" | "steps" | "suggestedTacticIds" | "isUpdatingSuggestions" | "supportGroupSuggestedTacticIds" | "tacticUsage" | "tacticData" | "sharedWithSupportGroupIds")>;
    locationLogFactory: import("factory.ts").Factory<{
        locationFormatted?: import("yup").Maybe<string | undefined>;
        commentCount?: import("yup").Maybe<number | undefined>;
        commentsById?: {} | null | undefined;
        commentsByTacticId?: {} | null | undefined;
        steps?: import("yup").Maybe<number | undefined>;
        suggestedTacticIds?: import("yup").Maybe<(string | undefined)[] | undefined>;
        isUpdatingSuggestions?: import("yup").Maybe<boolean | undefined>;
        supportGroupSuggestedTacticIds?: {
            success: {};
            setback: {};
            impulse: {};
            all: {};
        } | null | undefined;
        tacticUsage?: {} | null | undefined;
        tacticData?: {} | null | undefined;
        sharedWithSupportGroupIds?: import("yup").Maybe<(string | undefined)[] | undefined>;
        uid: string;
        createdAt: {};
        updatedAt: {};
        startTime: {};
        timezone: string;
        location: {
            latitude?: number | undefined;
            longitude?: number | undefined;
            altitude?: number | undefined;
            accuracy?: number | undefined;
            altitudeAccuracy?: number | undefined;
            heading?: number | undefined;
            speed?: number | undefined;
        };
        locationIsFetching: NonNullable<boolean | undefined>;
        allTacticIds: (string | undefined)[];
        tacticIds: (string | undefined)[];
        gameplan: {
            success?: import("yup").Maybe<{} | undefined>;
            setback?: import("yup").Maybe<{} | undefined>;
            main: {};
        };
        tactics: {};
        type: {};
        isDisplayable: NonNullable<boolean | undefined>;
        locationId: string;
        locationName: string;
        locationMode: {};
    }, "uid" | "createdAt" | "updatedAt" | "startTime" | "timezone" | "location" | "locationIsFetching" | "allTacticIds" | "tacticIds" | "gameplan" | "tactics" | "type" | "isDisplayable" | "locationId" | "locationName" | "locationMode" | ("locationFormatted" | "commentCount" | "commentsById" | "commentsByTacticId" | "steps" | "suggestedTacticIds" | "isUpdatingSuggestions" | "supportGroupSuggestedTacticIds" | "tacticUsage" | "tacticData" | "sharedWithSupportGroupIds")>;
    debriefLogFactory: import("factory.ts").Factory<{
        locationFormatted?: import("yup").Maybe<string | undefined>;
        commentCount?: import("yup").Maybe<number | undefined>;
        commentsById?: {} | null | undefined;
        commentsByTacticId?: {} | null | undefined;
        steps?: import("yup").Maybe<number | undefined>;
        suggestedTacticIds?: import("yup").Maybe<(string | undefined)[] | undefined>;
        isUpdatingSuggestions?: import("yup").Maybe<boolean | undefined>;
        supportGroupSuggestedTacticIds?: {
            success: {};
            setback: {};
            impulse: {};
            all: {};
        } | null | undefined;
        tacticUsage?: {} | null | undefined;
        tacticData?: {} | null | undefined;
        sharedWithSupportGroupIds?: import("yup").Maybe<(string | undefined)[] | undefined>;
        uid: string;
        createdAt: {};
        updatedAt: {};
        gameplanId: string;
        startTime: {};
        timezone: string;
        location: {
            latitude?: number | undefined;
            longitude?: number | undefined;
            altitude?: number | undefined;
            accuracy?: number | undefined;
            altitudeAccuracy?: number | undefined;
            heading?: number | undefined;
            speed?: number | undefined;
        };
        locationIsFetching: NonNullable<boolean | undefined>;
        allTacticIds: (string | undefined)[];
        tacticIds: (string | undefined)[];
        gameplan: {
            success?: import("yup").Maybe<{} | undefined>;
            setback?: import("yup").Maybe<{} | undefined>;
            main: {};
        };
        tactics: {};
        type: {};
        outcome: {};
        isDisplayable: NonNullable<boolean | undefined>;
        patterns: {
            [x: string]: {
                customUnit?: string | undefined;
                supportGroupIds?: import("yup").Maybe<(string | undefined)[] | undefined>;
                notification?: {
                    title: string;
                    body: string;
                } | null | undefined;
                issueId?: import("yup").Maybe<string | undefined>;
                gameplanId?: import("yup").Maybe<string | undefined>;
                successGameplanId?: import("yup").Maybe<string | undefined>;
                setbackGameplanId?: import("yup").Maybe<string | undefined>;
                uid: string;
                createdAt: {};
                updatedAt: {};
                name: string;
                ordinal: number;
                unit: NonNullable<"time" | "custom" | undefined>;
                sendWeeklyReports: NonNullable<boolean | undefined>;
                setbackThreshold: number;
            };
            [x: number]: {
                customUnit?: string | undefined;
                supportGroupIds?: import("yup").Maybe<(string | undefined)[] | undefined>;
                notification?: {
                    title: string;
                    body: string;
                } | null | undefined;
                issueId?: import("yup").Maybe<string | undefined>;
                gameplanId?: import("yup").Maybe<string | undefined>;
                successGameplanId?: import("yup").Maybe<string | undefined>;
                setbackGameplanId?: import("yup").Maybe<string | undefined>;
                uid: string;
                createdAt: {};
                updatedAt: {};
                name: string;
                ordinal: number;
                unit: NonNullable<"time" | "custom" | undefined>;
                sendWeeklyReports: NonNullable<boolean | undefined>;
                setbackThreshold: number;
            };
        };
        patternIds: (string | undefined)[];
        patternUsage: {};
        patternUsageEntries: {};
    }, "uid" | "createdAt" | "updatedAt" | "gameplanId" | "startTime" | "timezone" | "location" | "locationIsFetching" | "allTacticIds" | "tacticIds" | "gameplan" | "tactics" | "type" | "outcome" | "isDisplayable" | "patterns" | "patternIds" | "patternUsage" | "patternUsageEntries" | ("locationFormatted" | "commentCount" | "commentsById" | "commentsByTacticId" | "steps" | "suggestedTacticIds" | "isUpdatingSuggestions" | "supportGroupSuggestedTacticIds" | "tacticUsage" | "tacticData" | "sharedWithSupportGroupIds")>;
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
        };
        updatedAt: {
            seconds: number;
            nanoseconds: number;
        };
        suggestedTacticIds: {};
        thumbnailUrl: string;
        participantUids: (string | undefined)[];
        groupName: string;
        creatorName: string;
        creatorUid: string;
        icon: {};
        unreadCounts: {};
        permissions: {};
    }, "createdAt" | "updatedAt" | "suggestedTacticIds" | "thumbnailUrl" | "participantUids" | "groupName" | "creatorName" | "creatorUid" | "icon" | "unreadCounts" | "permissions" | ("isTemplate" | "templateId" | "everythingPermissions" | "groupNameAliases" | "groupDescription" | "lastMessagePreview" | "invitationCode" | "invitationUrl" | "lastMessageUid" | "isSharingDisabled")>;
    impulseGameplanFactory: import("factory.ts").Factory<import("..").ImpulseGameplanValue, "uid" | "createdAt" | "updatedAt" | "title" | "issueId" | "timezone" | "type" | "patternId" | "isTemplate" | keyof import("..").Gameplan | "navigationTitle" | "tacticsUpdatedAt" | "patternName" | "parentIssueIds">;
    successGameplanFactory: import("factory.ts").Factory<import("..").ImpulseGameplanValue, "uid" | "createdAt" | "updatedAt" | "title" | "issueId" | "timezone" | "type" | "patternId" | "isTemplate" | keyof import("..").Gameplan | "navigationTitle" | "tacticsUpdatedAt" | "patternName" | "parentIssueIds">;
    setbackGameplanFactory: import("factory.ts").Factory<import("..").ImpulseGameplanValue, "uid" | "createdAt" | "updatedAt" | "title" | "issueId" | "timezone" | "type" | "patternId" | "isTemplate" | keyof import("..").Gameplan | "navigationTitle" | "tacticsUpdatedAt" | "patternName" | "parentIssueIds">;
    messageFactory: import("factory.ts").Factory<import("..").MessageValue, keyof import("..").MessageValue>;
    timeGameplanFactory: import("factory.ts").Factory<import("..").TimeGameplanValue, "uid" | "createdAt" | "updatedAt" | "title" | "issueId" | "timezone" | "type" | "isTemplate" | "hour" | "minute" | keyof import("..").Gameplan | "navigationTitle" | "tacticsUpdatedAt" | "patternName" | "parentIssueIds" | "weekdays" | "scheduledNotificationIds">;
    patternFactory: import("factory.ts").Factory<{
        customUnit?: string | undefined;
        supportGroupIds?: import("yup").Maybe<(string | undefined)[] | undefined>;
        notification?: {
            title: string;
            body: string;
        } | null | undefined;
        issueId?: import("yup").Maybe<string | undefined>;
        gameplanId?: import("yup").Maybe<string | undefined>;
        successGameplanId?: import("yup").Maybe<string | undefined>;
        setbackGameplanId?: import("yup").Maybe<string | undefined>;
        uid: string;
        createdAt: {};
        updatedAt: {};
        name: string;
        ordinal: number;
        unit: NonNullable<"time" | "custom" | undefined>;
        sendWeeklyReports: NonNullable<boolean | undefined>;
        setbackThreshold: number;
    }, "uid" | "createdAt" | "updatedAt" | "name" | "ordinal" | "unit" | "sendWeeklyReports" | "setbackThreshold" | ("customUnit" | "supportGroupIds" | "notification" | "issueId" | "gameplanId" | "successGameplanId" | "setbackGameplanId")>;
    locationGameplanFactory: import("factory.ts").Factory<import("..").LocationGameplanValue, "uid" | "createdAt" | "updatedAt" | "title" | "issueId" | "timezone" | "type" | "locationId" | "isTemplate" | keyof import("..").Gameplan | "navigationTitle" | "tacticsUpdatedAt" | "patternName" | "parentIssueIds" | "mode">;
    recommendationFactory: import("factory.ts").Factory<import("..").RecommendationValue, "uid" | "createdAt" | "updatedAt" | "ordinal" | "title" | "tacticIds" | "tacticsById" | "appliedAt" | "dismissedAt" | "explanation" | "gameplanExplanation" | "recommenderUid" | "recommenderName" | "ruleId" | "gameplanIds" | "defaultSelected">;
    recommendationRuleFactory: import("factory.ts").Factory<import("..").RecommendationRuleValue, keyof import("..").RecommendationRuleValue>;
    newGameplanRecommendationRuleFactory: import("factory.ts").Factory<import("..").RecommendationRuleValue, keyof import("..").RecommendationRuleValue>;
    tacticFactory: import("factory.ts").Factory<import("..").TacticValue, "uid" | "createdAt" | "updatedAt" | "ordinal" | "title" | "type" | "isSuggested" | "description" | "image" | "backgroundColor" | "isTemplate" | "language" | "href" | "categoryIds" | "isShared" | "isResponseRequired" | "isAvailableForRecommendation">;
};
