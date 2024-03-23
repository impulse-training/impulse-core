export declare const factories: {
    applicationFactory: import("factory.ts").Factory<import("..").ApplicationValue, keyof import("..").ApplicationValue>;
    commentFactory: import("factory.ts").Factory<{
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
        uids: string[];
        authorName: string;
    }, "profileId" | "uids" | "authorName" | ("createdAt" | "updatedAt" | "tacticId" | "tacticName" | "text" | "recording" | "isEdited" | "avatar")>;
    impulseFactory: import("factory.ts").Factory<import("..").ImpulseLogValue, "createdAt" | "updatedAt" | "profileId" | "uids" | "type" | "tacticsById" | "steps" | "startTime" | "timezone" | "location" | "locationIsFetching" | "locationFormatted" | "commentCount" | "commentsById" | "commentsByTacticId" | "strategy" | "seenStrategy" | "completedTacticIds" | "tacticLikes" | "tacticData" | "sharedWithSupportGroupIds" | "setAsActiveImpulse" | "pressCount" | "isDisplayable" | "buttonPressSecondsSinceEpoch" | "outcome" | "patternId" | "patternsById" | "debriefNotes" | "debriefReminderSentAt" | "debriefedAt">;
    timeLogFactory: import("factory.ts").Factory<import("..").TimeLogValue, "createdAt" | "updatedAt" | "profileId" | "uids" | "type" | "tacticsById" | "steps" | "startTime" | "timezone" | "location" | "locationIsFetching" | "locationFormatted" | "commentCount" | "commentsById" | "commentsByTacticId" | "strategy" | "seenStrategy" | "completedTacticIds" | "tacticLikes" | "tacticData" | "sharedWithSupportGroupIds" | "isDisplayable">;
    locationLogFactory: import("factory.ts").Factory<import("..").LocationLogValue, "createdAt" | "updatedAt" | "profileId" | "uids" | "type" | "tacticsById" | "steps" | "locationId" | "startTime" | "timezone" | "location" | "locationIsFetching" | "locationFormatted" | "commentCount" | "commentsById" | "commentsByTacticId" | "strategy" | "seenStrategy" | "completedTacticIds" | "tacticLikes" | "tacticData" | "sharedWithSupportGroupIds" | "isDisplayable" | "locationName" | "locationMode">;
    locationFactory: import("factory.ts").Factory<{
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
        latitude?: number | undefined;
        longitude?: number | undefined;
        profileId: string;
        uids: string[];
        name: string;
        address: string;
    }, "profileId" | "uids" | "name" | "address" | ("createdAt" | "updatedAt" | "latitude" | "longitude")>;
    profileFactory: import("factory.ts").Factory<import("..").ProfileValue, "createdAt" | "updatedAt" | "uids" | "tacticsById" | "parentIssueIds" | "timezone" | "timeStrategies" | "locationStrategies" | "activeImpulseId" | "currentAppState" | "lastActiveAt" | "expoPushToken" | "widgetInstalledAt" | "notificationPreferences" | "androidPermissions" | "region" | "invitationCode" | "programId" | "scheduledNotificationIds" | "impulseStrategies">;
    issueFactory: import("factory.ts").Factory<{
        path?: string | null | undefined;
        parentId?: string | null | undefined;
        setbackThreshold?: number | undefined;
        programsCount?: number | null | undefined;
        profileCount?: number | null | undefined;
        isFeatured?: boolean | null | undefined;
        main?: {
            suggestedTacticIds: string[];
            llmPrompt: string;
        } | null | undefined;
        success?: {
            suggestedTacticIds: string[];
            llmPrompt: string;
        } | null | undefined;
        setback?: {
            suggestedTacticIds: string[];
            llmPrompt: string;
        } | null | undefined;
        createdAt: {
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        };
        updatedAt: {
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        };
        name: string;
        synonyms: string[];
        measureTactic: {
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
            profileId?: string | null | undefined;
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
            lowEmoji?: import("yup").Maybe<string | undefined>;
            highEmoji?: import("yup").Maybe<string | undefined>;
            type: "measure-slider";
            title: string;
            backgroundColor: string;
        } | {
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
            profileId?: string | null | undefined;
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
            type: "measure-time";
            title: string;
            backgroundColor: string;
        } | {
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
            profileId?: string | null | undefined;
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
            type: "measure-counter";
            title: string;
            backgroundColor: string;
        };
        parentIds: string[];
        parentNames: string[];
    }, "createdAt" | "updatedAt" | "name" | "synonyms" | "measureTactic" | "parentIds" | "parentNames" | ("path" | "parentId" | "setbackThreshold" | "programsCount" | "profileCount" | "isFeatured" | "main" | "success" | "setback")>;
    supportGroupFactory: import("factory.ts").Factory<{
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
    }, "thumbnailUrl" | "suggestedTacticIds" | "participantUids" | "groupName" | "creatorName" | "creatorUid" | "icon" | "unreadCounts" | "permissions" | ("createdAt" | "updatedAt" | "isTemplate" | "invitationCode" | "slug" | "templateId" | "everythingPermissions" | "memberTargetCount" | "groupNameAliases" | "groupDescription" | "lastMessagePreview" | "invitationUrl" | "lastMessageUid" | "isSharingDisabled")>;
    messageFactory: import("factory.ts").Factory<import("..").MessageValue, keyof import("..").MessageValue>;
    patternFactory: import("factory.ts").Factory<{
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
        setbackThreshold?: import("yup").Maybe<number | undefined>;
        supportGroupIds?: string[] | undefined;
        notification?: {
            title: string;
            body: string;
        } | import("yup").Maybe<{} | undefined>;
        dailySetbackThreshold?: import("yup").Maybe<number | undefined>;
        issueId?: import("yup").Maybe<string | undefined>;
        parentIssueIds?: string[] | undefined;
        sendWeeklyReports?: import("yup").Maybe<boolean | undefined>;
        profileId: string;
        uids: string[];
        name: string;
        measureTactic: {
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
            profileId?: string | null | undefined;
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
            lowEmoji?: import("yup").Maybe<string | undefined>;
            highEmoji?: import("yup").Maybe<string | undefined>;
            type: "measure-slider";
            title: string;
            backgroundColor: string;
        } | {
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
            profileId?: string | null | undefined;
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
            type: "measure-time";
            title: string;
            backgroundColor: string;
        } | {
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
            profileId?: string | null | undefined;
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
            type: "measure-counter";
            title: string;
            backgroundColor: string;
        };
        ordinal: number;
    }, "profileId" | "uids" | "name" | "measureTactic" | "ordinal" | ("createdAt" | "updatedAt" | "setbackThreshold" | "supportGroupIds" | "notification" | "dailySetbackThreshold" | "issueId" | "parentIssueIds" | "sendWeeklyReports")>;
    programFactory: import("factory.ts").Factory<import("..").ProgramValue, "createdAt" | "updatedAt" | "title" | "tacticsById" | "forIssueIds" | "issueNames" | "issueNamesSummary" | "recommendationSummary" | "impulseStrategy" | "timeStrategies" | "locationStrategies">;
    tacticFactory: import("factory.ts").Factory<import("..").NonRecursiveTactic, "createdAt" | "updatedAt" | "profileId" | "type" | "sourceId" | "title" | "subtitle" | "description" | "image" | "backgroundColor" | "isTemplate" | "language" | "href" | "categoryIds" | "isShared" | "isResponseRequired" | "timerSeconds" | "isAvailableForRecommendation" | "numberOfLikes" | "isSuggested">;
    measureTimeTacticFactory: import("factory.ts").Factory<{
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
        profileId?: string | null | undefined;
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
        type: "measure-time";
        title: string;
        backgroundColor: string;
    }, "type" | "title" | "backgroundColor" | ("createdAt" | "updatedAt" | "profileId" | "sourceId" | "subtitle" | "description" | "image" | "isTemplate" | "language" | "href" | "categoryIds" | "isShared" | "isResponseRequired" | "timerSeconds" | "isAvailableForRecommendation" | "numberOfLikes" | "isSuggested")>;
    folderTacticFactory: import("factory.ts").Factory<import("..").FolderTacticValue, "type" | "title" | "backgroundColor" | "tacticIds" | "currentTacticIndex" | "tacticsById" | ("createdAt" | "updatedAt" | "profileId" | "sourceId" | "subtitle" | "description" | "image" | "isTemplate" | "language" | "href" | "categoryIds" | "isShared" | "isResponseRequired" | "timerSeconds" | "isAvailableForRecommendation" | "numberOfLikes" | "isSuggested" | "suggestedTacticIds" | "autogenerate")>;
};
