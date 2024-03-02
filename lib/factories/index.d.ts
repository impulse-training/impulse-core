import { TimestampLike } from '../utils/TimestampLike';
export declare function makeFactories(TimestampKlass: typeof TimestampLike): {
    applicationFactory: import("factory.ts").Factory<import("..").ApplicationValue, keyof import("..").ApplicationValue>;
    commentFactory: import("factory.ts").Factory<{
        createdAt?: import("yup").Maybe<{} | undefined> | {
            seconds: number;
            nanoseconds: number;
            toDate: {};
        };
        updatedAt?: import("yup").Maybe<{} | undefined> | {
            seconds: number;
            nanoseconds: number;
            toDate: {};
        };
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
        uid: string;
        authorName: string;
    }, "uid" | "authorName" | ("createdAt" | "updatedAt" | "tacticId" | "tacticName" | "text" | "recording" | "isEdited" | "avatar")>;
    impulseFactory: import("factory.ts").Factory<import("..").ImpulseLogValue, "createdAt" | "updatedAt" | "uid" | "type" | "tacticsById" | "steps" | "location" | "patternsById" | "startTime" | "timezone" | "locationIsFetching" | "locationFormatted" | "commentCount" | "commentsById" | "commentsByTacticId" | "strategy" | "seenTacticIds" | "completedTacticIds" | "tacticLikes" | "tacticData" | "sharedWithSupportGroupIds" | "setAsActiveImpulse" | "pressCount" | "isDisplayable" | "buttonPressSecondsSinceEpoch" | "gameplan" | "outcome" | "patternId" | "debriefNotes" | "debriefReminderSentAt" | "debriefedAt">;
    timeLogFactory: import("factory.ts").Factory<import("..").TimeLogValue, "createdAt" | "updatedAt" | "uid" | "type" | "tacticsById" | "steps" | "location" | "startTime" | "timezone" | "locationIsFetching" | "locationFormatted" | "commentCount" | "commentsById" | "commentsByTacticId" | "strategy" | "seenTacticIds" | "completedTacticIds" | "tacticLikes" | "tacticData" | "sharedWithSupportGroupIds" | "isDisplayable" | "routineId">;
    motionLogFactory: import("factory.ts").Factory<import("..").MotionLogValue, "createdAt" | "updatedAt" | "uid" | "type" | "tacticsById" | "steps" | "location" | "startTime" | "timezone" | "locationIsFetching" | "locationFormatted" | "commentCount" | "commentsById" | "commentsByTacticId" | "strategy" | "seenTacticIds" | "completedTacticIds" | "tacticLikes" | "tacticData" | "sharedWithSupportGroupIds" | "isDisplayable">;
    locationLogFactory: import("factory.ts").Factory<import("..").LocationLogValue, "createdAt" | "updatedAt" | "uid" | "type" | "tacticsById" | "steps" | "location" | "startTime" | "timezone" | "locationIsFetching" | "locationFormatted" | "commentCount" | "commentsById" | "commentsByTacticId" | "strategy" | "seenTacticIds" | "completedTacticIds" | "tacticLikes" | "tacticData" | "sharedWithSupportGroupIds" | "isDisplayable" | "locationId" | "locationName" | "locationMode">;
    debriefLogFactory: import("factory.ts").Factory<import("..").DebriefLogValue, "createdAt" | "updatedAt" | "uid" | "type" | "tacticsById" | "steps" | "location" | "patternsById" | "startTime" | "timezone" | "locationIsFetching" | "locationFormatted" | "commentCount" | "commentsById" | "commentsByTacticId" | "strategy" | "seenTacticIds" | "completedTacticIds" | "tacticLikes" | "tacticData" | "sharedWithSupportGroupIds" | "isDisplayable" | "routineId" | "tacticDataEntries">;
    locationFactory: import("factory.ts").Factory<import("..").LocationValue, keyof import("..").LocationValue>;
    profileFactory: import("factory.ts").Factory<import("..").ProfileValue, keyof import("..").ProfileValue>;
    gameplanFactory: import("factory.ts").Factory<import("..").GameplanValue, "createdAt" | "updatedAt" | "uid" | "parentIssueIds" | "tacticsById" | "recommendationsCount" | "impulse" | "impulseDebrief" | "dayDebrief" | "time" | "location" | "patternsById" | "scheduledNotificationIds">;
    issueFactory: import("factory.ts").Factory<import("..").IssueValue, keyof import("..").IssueValue>;
    adminProfileFactory: import("factory.ts").Factory<import("..").ProfileValue, keyof import("..").ProfileValue>;
    supportGroupFactory: import("factory.ts").Factory<{
        createdAt?: import("yup").Maybe<{} | undefined> | {
            seconds: number;
            nanoseconds: number;
            toDate: {};
        };
        updatedAt?: import("yup").Maybe<{} | undefined> | {
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
            [x: string]: string;
            [x: number]: string;
            [x: symbol]: string;
        } | undefined;
        groupDescription?: string | undefined;
        lastMessagePreview?: string | undefined;
        invitationCode?: string | undefined;
        invitationUrl?: string | undefined;
        lastMessageUid?: string | undefined;
        isSharingDisabled?: boolean | undefined;
        suggestedTacticIds: {};
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
    }, "suggestedTacticIds" | "thumbnailUrl" | "participantUids" | "groupName" | "creatorName" | "creatorUid" | "icon" | "unreadCounts" | "permissions" | ("createdAt" | "updatedAt" | "isTemplate" | "slug" | "templateId" | "everythingPermissions" | "memberTargetCount" | "groupNameAliases" | "groupDescription" | "lastMessagePreview" | "invitationCode" | "invitationUrl" | "lastMessageUid" | "isSharingDisabled")>;
    messageFactory: import("factory.ts").Factory<import("..").MessageValue, keyof import("..").MessageValue>;
    patternFactory: import("factory.ts").Factory<{
        createdAt?: import("yup").Maybe<{} | undefined> | {
            seconds: number;
            nanoseconds: number;
            toDate: {};
        };
        updatedAt?: import("yup").Maybe<{} | undefined> | {
            seconds: number;
            nanoseconds: number;
            toDate: {};
        };
        supportGroupIds?: string[] | undefined;
        notification?: {
            title: string;
            body: string;
        } | null | undefined;
        setbackTacticId?: import("yup").Maybe<string | undefined>;
        issueId?: import("yup").Maybe<string | undefined>;
        parentIssueIds?: string[] | undefined;
        uid: string;
        name: string;
        ordinal: number;
        setbackThreshold: number;
        sendWeeklyReports: NonNullable<boolean | undefined>;
    }, "uid" | "name" | "ordinal" | "setbackThreshold" | "sendWeeklyReports" | ("createdAt" | "updatedAt" | "supportGroupIds" | "notification" | "setbackTacticId" | "issueId" | "parentIssueIds")>;
    impulseRecommendationFactory: import("factory.ts").Factory<{
        tacticsById?: any;
        explanation?: string | null | undefined;
        appliedAt?: import("yup").Maybe<{} | undefined> | {
            seconds: number;
            nanoseconds: number;
            toDate: {};
        };
        dismissedAt?: import("yup").Maybe<{} | undefined> | {
            seconds: number;
            nanoseconds: number;
            toDate: {};
        };
        ruleId?: string | null | undefined;
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
        uid: string;
        ordinal: number;
        title: string;
        type: "impulse";
        tacticIds: string[];
        recommenderUid: string;
        recommenderName: string;
        patternIds: string[];
    }, "createdAt" | "updatedAt" | "uid" | "ordinal" | "title" | "type" | "tacticIds" | "recommenderUid" | "recommenderName" | "patternIds" | ("tacticsById" | "explanation" | "appliedAt" | "dismissedAt" | "ruleId")>;
    impulseRecommendationRuleFactory: import("factory.ts").Factory<import("..").RecommendationRuleValue, "createdAt" | "updatedAt" | "uid" | "ordinal" | "type" | "recommendation" | "forIssueIds" | "issueNames" | "issueNamesSummary" | "recommendationSummary">;
    impulseDebriefRecommendationRuleFactory: import("factory.ts").Factory<import("..").RecommendationRuleValue, "createdAt" | "updatedAt" | "uid" | "ordinal" | "type" | "recommendation" | "forIssueIds" | "issueNames" | "issueNamesSummary" | "recommendationSummary">;
    tacticFactory: import("factory.ts").Factory<{
        createdAt?: import("yup").Maybe<{} | undefined> | {
            seconds: number;
            nanoseconds: number;
            toDate: {};
        };
        updatedAt?: import("yup").Maybe<{} | undefined> | {
            seconds: number;
            nanoseconds: number;
            toDate: {};
        };
        uid?: string | null | undefined;
        ordinal?: number | null | undefined;
        sourceId?: string | undefined;
        subtitle?: import("yup").Maybe<string | undefined>;
        description?: string | null | undefined;
        image?: {
            localFilePath?: import("yup").Maybe<string | undefined>;
            storagePath?: import("yup").Maybe<string | undefined>;
            uri?: import("yup").Maybe<string | undefined>;
        } | null | undefined;
        isTemplate?: boolean | null | undefined;
        language?: string | null | undefined;
        href?: string | null | undefined;
        categoryIds?: (string | undefined)[] | null | undefined;
        isShared?: boolean | null | undefined;
        isResponseRequired?: boolean | null | undefined;
        timerSeconds?: import("yup").Maybe<number | undefined>;
        isAvailableForRecommendation?: boolean | null | undefined;
        numberOfLikes?: number | null | undefined;
        isSuggested?: boolean | undefined;
        title: string;
        type: "phone";
        backgroundColor: string;
        supportGroupId: string;
        trigger: {};
    } | {
        createdAt?: import("yup").Maybe<{} | undefined> | {
            seconds: number;
            nanoseconds: number;
            toDate: {};
        };
        updatedAt?: import("yup").Maybe<{} | undefined> | {
            seconds: number;
            nanoseconds: number;
            toDate: {};
        };
        uid?: string | null | undefined;
        ordinal?: number | null | undefined;
        sourceId?: string | undefined;
        subtitle?: import("yup").Maybe<string | undefined>;
        description?: string | null | undefined;
        image?: {
            localFilePath?: import("yup").Maybe<string | undefined>;
            storagePath?: import("yup").Maybe<string | undefined>;
            uri?: import("yup").Maybe<string | undefined>;
        } | null | undefined;
        isTemplate?: boolean | null | undefined;
        language?: string | null | undefined;
        href?: string | null | undefined;
        categoryIds?: (string | undefined)[] | null | undefined;
        isShared?: boolean | null | undefined;
        isResponseRequired?: boolean | null | undefined;
        timerSeconds?: import("yup").Maybe<number | undefined>;
        isAvailableForRecommendation?: boolean | null | undefined;
        numberOfLikes?: number | null | undefined;
        isSuggested?: boolean | undefined;
        recording: {
            waveform?: string | null | undefined;
            localFilePath: string;
            remoteFilePath: string;
        };
        title: string;
        type: "audio";
        backgroundColor: string;
    } | {
        createdAt?: import("yup").Maybe<{} | undefined> | {
            seconds: number;
            nanoseconds: number;
            toDate: {};
        };
        updatedAt?: import("yup").Maybe<{} | undefined> | {
            seconds: number;
            nanoseconds: number;
            toDate: {};
        };
        uid?: string | null | undefined;
        ordinal?: number | null | undefined;
        sourceId?: string | undefined;
        subtitle?: import("yup").Maybe<string | undefined>;
        description?: string | null | undefined;
        image?: {
            localFilePath?: import("yup").Maybe<string | undefined>;
            storagePath?: import("yup").Maybe<string | undefined>;
            uri?: import("yup").Maybe<string | undefined>;
        } | null | undefined;
        isTemplate?: boolean | null | undefined;
        language?: string | null | undefined;
        href?: string | null | undefined;
        categoryIds?: (string | undefined)[] | null | undefined;
        isShared?: boolean | null | undefined;
        isResponseRequired?: boolean | null | undefined;
        timerSeconds?: import("yup").Maybe<number | undefined>;
        isAvailableForRecommendation?: boolean | null | undefined;
        numberOfLikes?: number | null | undefined;
        isSuggested?: boolean | undefined;
        title: string;
        type: "urge-surfing";
        backgroundColor: string;
    } | {
        createdAt?: import("yup").Maybe<{} | undefined> | {
            seconds: number;
            nanoseconds: number;
            toDate: {};
        };
        updatedAt?: import("yup").Maybe<{} | undefined> | {
            seconds: number;
            nanoseconds: number;
            toDate: {};
        };
        uid?: string | null | undefined;
        ordinal?: number | null | undefined;
        sourceId?: string | undefined;
        subtitle?: import("yup").Maybe<string | undefined>;
        description?: string | null | undefined;
        image?: {
            localFilePath?: import("yup").Maybe<string | undefined>;
            storagePath?: import("yup").Maybe<string | undefined>;
            uri?: import("yup").Maybe<string | undefined>;
        } | null | undefined;
        isTemplate?: boolean | null | undefined;
        language?: string | null | undefined;
        href?: string | null | undefined;
        categoryIds?: (string | undefined)[] | null | undefined;
        isShared?: boolean | null | undefined;
        isResponseRequired?: boolean | null | undefined;
        timerSeconds?: import("yup").Maybe<number | undefined>;
        isAvailableForRecommendation?: boolean | null | undefined;
        numberOfLikes?: number | null | undefined;
        isSuggested?: boolean | undefined;
        title: string;
        type: "video";
        backgroundColor: string;
        video: {
            storagePath?: string | null | undefined;
            url?: string | null | undefined;
            title: string;
            description: string;
            thumbnailUrl: string;
            duration: number;
        };
    } | {
        createdAt?: import("yup").Maybe<{} | undefined> | {
            seconds: number;
            nanoseconds: number;
            toDate: {};
        };
        updatedAt?: import("yup").Maybe<{} | undefined> | {
            seconds: number;
            nanoseconds: number;
            toDate: {};
        };
        uid?: string | null | undefined;
        ordinal?: number | null | undefined;
        sourceId?: string | undefined;
        subtitle?: import("yup").Maybe<string | undefined>;
        description?: string | null | undefined;
        image?: {
            localFilePath?: import("yup").Maybe<string | undefined>;
            storagePath?: import("yup").Maybe<string | undefined>;
            uri?: import("yup").Maybe<string | undefined>;
        } | null | undefined;
        isTemplate?: boolean | null | undefined;
        language?: string | null | undefined;
        href?: string | null | undefined;
        categoryIds?: (string | undefined)[] | null | undefined;
        isShared?: boolean | null | undefined;
        isResponseRequired?: boolean | null | undefined;
        timerSeconds?: import("yup").Maybe<number | undefined>;
        isAvailableForRecommendation?: boolean | null | undefined;
        numberOfLikes?: number | null | undefined;
        isSuggested?: boolean | undefined;
        title: string;
        type: "question";
        backgroundColor: string;
    } | {
        createdAt?: import("yup").Maybe<{} | undefined> | {
            seconds: number;
            nanoseconds: number;
            toDate: {};
        };
        updatedAt?: import("yup").Maybe<{} | undefined> | {
            seconds: number;
            nanoseconds: number;
            toDate: {};
        };
        uid?: string | null | undefined;
        ordinal?: number | null | undefined;
        sourceId?: string | undefined;
        subtitle?: import("yup").Maybe<string | undefined>;
        description?: string | null | undefined;
        image?: {
            localFilePath?: import("yup").Maybe<string | undefined>;
            storagePath?: import("yup").Maybe<string | undefined>;
            uri?: import("yup").Maybe<string | undefined>;
        } | null | undefined;
        isTemplate?: boolean | null | undefined;
        language?: string | null | undefined;
        href?: string | null | undefined;
        categoryIds?: (string | undefined)[] | null | undefined;
        isShared?: boolean | null | undefined;
        isResponseRequired?: boolean | null | undefined;
        timerSeconds?: import("yup").Maybe<number | undefined>;
        isAvailableForRecommendation?: boolean | null | undefined;
        numberOfLikes?: number | null | undefined;
        isSuggested?: boolean | undefined;
        title: string;
        type: "task";
        backgroundColor: string;
    } | import("..").MeasureTacticValue | {
        createdAt?: import("yup").Maybe<{} | undefined> | {
            seconds: number;
            nanoseconds: number;
            toDate: {};
        };
        updatedAt?: import("yup").Maybe<{} | undefined> | {
            seconds: number;
            nanoseconds: number;
            toDate: {};
        };
        uid?: string | null | undefined;
        ordinal?: number | null | undefined;
        sourceId?: string | undefined;
        subtitle?: import("yup").Maybe<string | undefined>;
        description?: string | null | undefined;
        image?: {
            localFilePath?: import("yup").Maybe<string | undefined>;
            storagePath?: import("yup").Maybe<string | undefined>;
            uri?: import("yup").Maybe<string | undefined>;
        } | null | undefined;
        isTemplate?: boolean | null | undefined;
        language?: string | null | undefined;
        href?: string | null | undefined;
        categoryIds?: (string | undefined)[] | null | undefined;
        isShared?: boolean | null | undefined;
        isResponseRequired?: boolean | null | undefined;
        timerSeconds?: import("yup").Maybe<number | undefined>;
        isAvailableForRecommendation?: boolean | null | undefined;
        numberOfLikes?: number | null | undefined;
        isSuggested?: boolean | undefined;
        repeat?: import("yup").Maybe<number | undefined>;
        title: string;
        type: "breathe";
        backgroundColor: string;
        inFor: number;
        holdFor: number;
        outFor: number;
    } | {
        createdAt?: import("yup").Maybe<{} | undefined> | {
            seconds: number;
            nanoseconds: number;
            toDate: {};
        };
        updatedAt?: import("yup").Maybe<{} | undefined> | {
            seconds: number;
            nanoseconds: number;
            toDate: {};
        };
        uid?: string | null | undefined;
        ordinal?: number | null | undefined;
        sourceId?: string | undefined;
        subtitle?: import("yup").Maybe<string | undefined>;
        description?: string | null | undefined;
        image?: {
            localFilePath?: import("yup").Maybe<string | undefined>;
            storagePath?: import("yup").Maybe<string | undefined>;
            uri?: import("yup").Maybe<string | undefined>;
        } | null | undefined;
        isTemplate?: boolean | null | undefined;
        language?: string | null | undefined;
        href?: string | null | undefined;
        categoryIds?: (string | undefined)[] | null | undefined;
        isShared?: boolean | null | undefined;
        isResponseRequired?: boolean | null | undefined;
        timerSeconds?: import("yup").Maybe<number | undefined>;
        isAvailableForRecommendation?: boolean | null | undefined;
        numberOfLikes?: number | null | undefined;
        isSuggested?: boolean | undefined;
        title: string;
        type: "steps";
        backgroundColor: string;
        steps: number;
    } | {
        createdAt?: import("yup").Maybe<{} | undefined> | {
            seconds: number;
            nanoseconds: number;
            toDate: {};
        };
        updatedAt?: import("yup").Maybe<{} | undefined> | {
            seconds: number;
            nanoseconds: number;
            toDate: {};
        };
        uid?: string | null | undefined;
        ordinal?: number | null | undefined;
        sourceId?: string | undefined;
        subtitle?: import("yup").Maybe<string | undefined>;
        description?: string | null | undefined;
        image?: {
            localFilePath?: import("yup").Maybe<string | undefined>;
            storagePath?: import("yup").Maybe<string | undefined>;
            uri?: import("yup").Maybe<string | undefined>;
        } | null | undefined;
        isTemplate?: boolean | null | undefined;
        language?: string | null | undefined;
        href?: string | null | undefined;
        categoryIds?: (string | undefined)[] | null | undefined;
        isShared?: boolean | null | undefined;
        isResponseRequired?: boolean | null | undefined;
        timerSeconds?: import("yup").Maybe<number | undefined>;
        isAvailableForRecommendation?: boolean | null | undefined;
        numberOfLikes?: number | null | undefined;
        isSuggested?: boolean | undefined;
        title: string;
        type: "emotions";
        backgroundColor: string;
    }, "createdAt" | "updatedAt" | "uid" | "ordinal" | "title" | "type" | "sourceId" | "subtitle" | "description" | "image" | "backgroundColor" | "isTemplate" | "language" | "href" | "categoryIds" | "isShared" | "isResponseRequired" | "timerSeconds" | "isAvailableForRecommendation" | "numberOfLikes" | "isSuggested">;
    folderTacticFactory: import("factory.ts").Factory<import("..").FolderTacticValue, "title" | "type" | "backgroundColor" | "tacticIds" | "currentTacticIndex" | "tacticsById" | ("createdAt" | "updatedAt" | "uid" | "ordinal" | "sourceId" | "subtitle" | "description" | "image" | "isTemplate" | "language" | "href" | "categoryIds" | "isShared" | "isResponseRequired" | "timerSeconds" | "isAvailableForRecommendation" | "numberOfLikes" | "isSuggested" | "suggestedTacticIds" | "autogenerate")>;
};
