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
        uid: string;
        authorName: string;
    }, "uid" | "authorName" | ("createdAt" | "updatedAt" | "tacticId" | "tacticName" | "text" | "recording" | "isEdited" | "avatar")>;
    impulseFactory: import("factory.ts").Factory<import("..").ImpulseLogValue, "createdAt" | "updatedAt" | "uid" | "type" | "tacticsById" | "steps" | "location" | "startTime" | "timezone" | "locationIsFetching" | "locationFormatted" | "commentCount" | "commentsById" | "commentsByTacticId" | "strategy" | "seenStrategy" | "completedTacticIds" | "tacticLikes" | "tacticData" | "sharedWithSupportGroupIds" | "setAsActiveImpulse" | "pressCount" | "isDisplayable" | "buttonPressSecondsSinceEpoch" | "gameplan" | "outcome" | "patternId" | "patternsById" | "debriefNotes" | "debriefReminderSentAt" | "debriefedAt">;
    timeLogFactory: import("factory.ts").Factory<import("..").TimeLogValue, "createdAt" | "updatedAt" | "uid" | "type" | "tacticsById" | "steps" | "location" | "startTime" | "timezone" | "locationIsFetching" | "locationFormatted" | "commentCount" | "commentsById" | "commentsByTacticId" | "strategy" | "seenStrategy" | "completedTacticIds" | "tacticLikes" | "tacticData" | "sharedWithSupportGroupIds" | "isDisplayable">;
    motionLogFactory: import("factory.ts").Factory<import("..").MotionLogValue, "createdAt" | "updatedAt" | "uid" | "type" | "tacticsById" | "steps" | "location" | "startTime" | "timezone" | "locationIsFetching" | "locationFormatted" | "commentCount" | "commentsById" | "commentsByTacticId" | "strategy" | "seenStrategy" | "completedTacticIds" | "tacticLikes" | "tacticData" | "sharedWithSupportGroupIds" | "isDisplayable">;
    locationLogFactory: import("factory.ts").Factory<import("..").LocationLogValue, "createdAt" | "updatedAt" | "uid" | "type" | "tacticsById" | "steps" | "locationId" | "location" | "startTime" | "timezone" | "locationIsFetching" | "locationFormatted" | "commentCount" | "commentsById" | "commentsByTacticId" | "strategy" | "seenStrategy" | "completedTacticIds" | "tacticLikes" | "tacticData" | "sharedWithSupportGroupIds" | "isDisplayable" | "locationName" | "locationMode">;
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
        uid: string;
        name: string;
        address: string;
    }, "uid" | "name" | "address" | ("createdAt" | "updatedAt" | "latitude" | "longitude")>;
    profileFactory: import("factory.ts").Factory<{
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
        avatar?: {
            localFilePath?: import("yup").Maybe<string | undefined>;
            storagePath?: import("yup").Maybe<string | undefined>;
            uri?: import("yup").Maybe<string | undefined>;
        } | undefined;
        parentIssueIds?: (string | undefined)[] | undefined;
        email?: import("yup").Maybe<string | undefined>;
        buttonId?: string | undefined;
        isAdmin?: boolean | undefined;
        isSuperAdmin?: boolean | undefined;
        activeImpulseId?: string | undefined;
        currentAppState?: import("react-native/types").AppStateStatus | undefined;
        showStorybook?: boolean | undefined;
        lastActiveAt?: Date | undefined;
        expoPushToken?: string | undefined;
        releaseChannel?: "default" | "canary" | undefined;
        widgetInstalledAt?: {
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        notificationPreferences?: {
            [x: string]: NonNullable<"push" | "email" | undefined>[] | undefined;
        } | null | undefined;
        isCurrentlyTrackingMotion?: boolean | undefined;
        showTacticsFromSupportGroups?: boolean | undefined;
        androidPermissions?: {
            [x: string]: NonNullable<boolean | undefined>;
        } | null | undefined;
        stepTrackingEnabled?: boolean | undefined;
        displayName?: string | undefined;
        firstName?: string | undefined;
        lastName?: string | undefined;
        nickName?: string | undefined;
        region?: string | null | undefined;
        phoneNumber?: string | undefined;
        isTourCompleted?: boolean | undefined;
        isButtonSetupSkipped?: boolean | undefined;
        uid: string;
        timezone: string;
        invitationCode: string;
    }, "uid" | "timezone" | "invitationCode" | ("createdAt" | "updatedAt" | "avatar" | "parentIssueIds" | "email" | "buttonId" | "isAdmin" | "isSuperAdmin" | "activeImpulseId" | "currentAppState" | "showStorybook" | "lastActiveAt" | "expoPushToken" | "releaseChannel" | "widgetInstalledAt" | "notificationPreferences" | "isCurrentlyTrackingMotion" | "showTacticsFromSupportGroups" | "androidPermissions" | "stepTrackingEnabled" | "displayName" | "firstName" | "lastName" | "nickName" | "region" | "phoneNumber" | "isTourCompleted" | "isButtonSetupSkipped")>;
    gameplanFactory: import("factory.ts").Factory<import("..").GameplanValue, "createdAt" | "updatedAt" | "uid" | "tacticsById" | "main" | "success" | "setback" | "name" | "programId" | "parentIssueIds" | "measureTacticIds" | "time" | "location" | "scheduledNotificationIds">;
    issueFactory: import("factory.ts").Factory<{
        path?: string | null | undefined;
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
        parentId?: string | null | undefined;
        setbackThreshold?: number | undefined;
        programsCount?: number | null | undefined;
        profileCount?: number | null | undefined;
        isFeatured?: boolean | null | undefined;
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
            uid?: string | null | undefined;
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
            uid?: string | null | undefined;
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
            uid?: string | null | undefined;
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
    }, "createdAt" | "updatedAt" | "name" | "synonyms" | "measureTactic" | "parentIds" | "parentNames" | ("path" | "main" | "success" | "setback" | "parentId" | "setbackThreshold" | "programsCount" | "profileCount" | "isFeatured")>;
    adminProfileFactory: import("factory.ts").Factory<{
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
        avatar?: {
            localFilePath?: import("yup").Maybe<string | undefined>;
            storagePath?: import("yup").Maybe<string | undefined>;
            uri?: import("yup").Maybe<string | undefined>;
        } | undefined;
        parentIssueIds?: (string | undefined)[] | undefined;
        email?: import("yup").Maybe<string | undefined>;
        buttonId?: string | undefined;
        isAdmin?: boolean | undefined;
        isSuperAdmin?: boolean | undefined;
        activeImpulseId?: string | undefined;
        currentAppState?: import("react-native/types").AppStateStatus | undefined;
        showStorybook?: boolean | undefined;
        lastActiveAt?: Date | undefined;
        expoPushToken?: string | undefined;
        releaseChannel?: "default" | "canary" | undefined;
        widgetInstalledAt?: {
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        } | null | undefined;
        notificationPreferences?: {
            [x: string]: NonNullable<"push" | "email" | undefined>[] | undefined;
        } | null | undefined;
        isCurrentlyTrackingMotion?: boolean | undefined;
        showTacticsFromSupportGroups?: boolean | undefined;
        androidPermissions?: {
            [x: string]: NonNullable<boolean | undefined>;
        } | null | undefined;
        stepTrackingEnabled?: boolean | undefined;
        displayName?: string | undefined;
        firstName?: string | undefined;
        lastName?: string | undefined;
        nickName?: string | undefined;
        region?: string | null | undefined;
        phoneNumber?: string | undefined;
        isTourCompleted?: boolean | undefined;
        isButtonSetupSkipped?: boolean | undefined;
        uid: string;
        timezone: string;
        invitationCode: string;
    }, "uid" | "timezone" | "invitationCode" | ("createdAt" | "updatedAt" | "avatar" | "parentIssueIds" | "email" | "buttonId" | "isAdmin" | "isSuperAdmin" | "activeImpulseId" | "currentAppState" | "showStorybook" | "lastActiveAt" | "expoPushToken" | "releaseChannel" | "widgetInstalledAt" | "notificationPreferences" | "isCurrentlyTrackingMotion" | "showTacticsFromSupportGroups" | "androidPermissions" | "stepTrackingEnabled" | "displayName" | "firstName" | "lastName" | "nickName" | "region" | "phoneNumber" | "isTourCompleted" | "isButtonSetupSkipped")>;
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
        parentIssueIds?: string[] | undefined;
        setbackThreshold?: import("yup").Maybe<number | undefined>;
        supportGroupIds?: string[] | undefined;
        notification?: {
            title: string;
            body: string;
        } | import("yup").Maybe<{} | undefined>;
        dailySetbackThreshold?: import("yup").Maybe<number | undefined>;
        issueId?: import("yup").Maybe<string | undefined>;
        sendWeeklyReports?: import("yup").Maybe<boolean | undefined>;
        uid: string;
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
            uid?: string | null | undefined;
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
            uid?: string | null | undefined;
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
            uid?: string | null | undefined;
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
    }, "uid" | "name" | "measureTactic" | "ordinal" | ("createdAt" | "updatedAt" | "parentIssueIds" | "setbackThreshold" | "supportGroupIds" | "notification" | "dailySetbackThreshold" | "issueId" | "sendWeeklyReports")>;
    programFactory: import("factory.ts").Factory<import("..").ProgramValue, "createdAt" | "updatedAt" | "uid" | "title" | "tacticsById" | "main" | "success" | "setback" | "time" | "location" | "forIssueIds" | "issueNames" | "issueNamesSummary" | "recommendationSummary">;
    tacticFactory: import("factory.ts").Factory<import("..").NonRecursiveTactic, "createdAt" | "updatedAt" | "uid" | "type" | "sourceId" | "title" | "subtitle" | "description" | "image" | "backgroundColor" | "isTemplate" | "language" | "href" | "categoryIds" | "isShared" | "isResponseRequired" | "timerSeconds" | "isAvailableForRecommendation" | "numberOfLikes" | "isSuggested">;
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
        uid?: string | null | undefined;
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
    }, "type" | "title" | "backgroundColor" | ("createdAt" | "updatedAt" | "uid" | "sourceId" | "subtitle" | "description" | "image" | "isTemplate" | "language" | "href" | "categoryIds" | "isShared" | "isResponseRequired" | "timerSeconds" | "isAvailableForRecommendation" | "numberOfLikes" | "isSuggested")>;
    folderTacticFactory: import("factory.ts").Factory<import("..").FolderTacticValue, "type" | "title" | "backgroundColor" | "tacticIds" | "currentTacticIndex" | "tacticsById" | ("createdAt" | "updatedAt" | "uid" | "sourceId" | "subtitle" | "description" | "image" | "isTemplate" | "language" | "href" | "categoryIds" | "isShared" | "isResponseRequired" | "timerSeconds" | "isAvailableForRecommendation" | "numberOfLikes" | "isSuggested" | "suggestedTacticIds" | "autogenerate")>;
};
