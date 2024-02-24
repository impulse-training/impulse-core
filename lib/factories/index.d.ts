import { TimestampLike } from '../utils/TimestampLike';
export declare function makeFactories(TimestampKlass: typeof TimestampLike): {
    applicationFactory: import("factory.ts").Factory<import("..").ApplicationValue, keyof import("..").ApplicationValue>;
    commentFactory: import("factory.ts").Factory<import("..").CommentValue, keyof import("..").CommentValue>;
    impulseFactory: import("factory.ts").Factory<import("..").ImpulseLogValue, "type" | "uid" | "createdAt" | "updatedAt" | "tacticIds" | "timezone" | "patternId" | "location" | "startTime" | "locationIsFetching" | "seenTacticIds" | "gameplan" | "gameplans" | "isDisplayable" | "patterns" | "patternIds" | ("tacticsById" | "steps" | "suggestedTacticIds" | "locationFormatted" | "commentCount" | "commentsById" | "commentsByTacticId" | "isUpdatingSuggestions" | "supportGroupSuggestedTacticIds" | "tacticLikes" | "tacticData" | "sharedWithSupportGroupIds" | "setAsActiveImpulse" | "pressCount" | "buttonPressSecondsSinceEpoch" | "outcome" | "debriefNotes" | "debriefReminderSentAt" | "debriefedAt")>;
    timeLogFactory: import("factory.ts").Factory<import("..").TimeLogValue, "type" | "uid" | "createdAt" | "updatedAt" | "tacticIds" | "timezone" | "location" | "gameplanId" | "startTime" | "locationIsFetching" | "seenTacticIds" | "gameplan" | "gameplans" | "isDisplayable" | ("tacticsById" | "steps" | "suggestedTacticIds" | "locationFormatted" | "commentCount" | "commentsById" | "commentsByTacticId" | "isUpdatingSuggestions" | "supportGroupSuggestedTacticIds" | "tacticLikes" | "tacticData" | "sharedWithSupportGroupIds")>;
    motionLogFactory: import("factory.ts").Factory<import("..").MotionLogValue, "type" | "uid" | "createdAt" | "updatedAt" | "tacticIds" | "timezone" | "location" | "startTime" | "locationIsFetching" | "seenTacticIds" | "gameplan" | "gameplans" | "isDisplayable" | ("tacticsById" | "steps" | "suggestedTacticIds" | "locationFormatted" | "commentCount" | "commentsById" | "commentsByTacticId" | "isUpdatingSuggestions" | "supportGroupSuggestedTacticIds" | "tacticLikes" | "tacticData" | "sharedWithSupportGroupIds")>;
    locationLogFactory: import("factory.ts").Factory<import("..").LocationLogValue, "type" | "uid" | "createdAt" | "updatedAt" | "tacticIds" | "timezone" | "location" | "locationId" | "startTime" | "locationIsFetching" | "seenTacticIds" | "gameplan" | "gameplans" | "isDisplayable" | "locationName" | "locationMode" | ("tacticsById" | "steps" | "suggestedTacticIds" | "locationFormatted" | "commentCount" | "commentsById" | "commentsByTacticId" | "isUpdatingSuggestions" | "supportGroupSuggestedTacticIds" | "tacticLikes" | "tacticData" | "sharedWithSupportGroupIds")>;
    debriefLogFactory: import("factory.ts").Factory<import("..").DebriefLogValue, "type" | "uid" | "createdAt" | "updatedAt" | "tacticIds" | "timezone" | "location" | "gameplanId" | "startTime" | "locationIsFetching" | "seenTacticIds" | "gameplan" | "gameplans" | "isDisplayable" | "patterns" | "patternIds" | "tacticDataEntries" | ("tacticsById" | "steps" | "suggestedTacticIds" | "locationFormatted" | "commentCount" | "commentsById" | "commentsByTacticId" | "isUpdatingSuggestions" | "supportGroupSuggestedTacticIds" | "tacticLikes" | "tacticData" | "sharedWithSupportGroupIds")>;
    locationFactory: import("factory.ts").Factory<import("..").LocationValue, keyof import("..").LocationValue>;
    profileFactory: import("factory.ts").Factory<import("..").ProfileValue, keyof import("..").ProfileValue>;
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
    impulseGameplanFactory: import("factory.ts").Factory<import("..").ImpulseGameplanValue, "type" | "uid" | "createdAt" | "updatedAt" | "tacticIds" | "tacticsById" | "suggestedTacticIds" | "patternId" | ("title" | "isTemplate" | "navigationTitle" | "timezone" | "patternName" | "issueId" | "parentIssueIds")>;
    debriefGameplanFactory: import("factory.ts").Factory<import("..").DayDebriefGameplanValue, "type" | "uid" | "createdAt" | "updatedAt" | "tacticIds" | "tacticsById" | "suggestedTacticIds" | ("title" | "isTemplate" | "navigationTitle" | "timezone" | "patternName" | "issueId" | "parentIssueIds")>;
    messageFactory: import("factory.ts").Factory<import("..").MessageValue, keyof import("..").MessageValue>;
    timeGameplanFactory: import("factory.ts").Factory<import("..").TimeGameplanValue, "type" | "uid" | "createdAt" | "updatedAt" | "tacticIds" | "tacticsById" | "suggestedTacticIds" | "timezone" | "weekdays" | "hour" | "minute" | ("title" | "isTemplate" | "navigationTitle" | "patternName" | "issueId" | "parentIssueIds" | "scheduledNotificationIds")>;
    patternFactory: import("factory.ts").Factory<{
        issueId?: import("yup").Maybe<string | undefined>;
        supportGroupIds?: import("yup").Maybe<(string | undefined)[] | undefined>;
        notification?: {
            title: string;
            body: string;
        } | null | undefined;
        setbackTacticId?: import("yup").Maybe<string | undefined>;
        gameplanId?: import("yup").Maybe<string | undefined>;
        debriefGameplanId?: import("yup").Maybe<string | undefined>;
        uid: string;
        ordinal: number;
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
        impulse: {
            tacticIds: string[];
            tacticsById: {
                [x: string]: {
                    uid?: string | null | undefined;
                    ordinal?: number | null | undefined;
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
                    impulseOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    debriefOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    emotionOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    scheduledMinuteOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    scheduledLocationOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    nextId?: string | undefined;
                    autogenerate?: boolean | undefined;
                    type: "folder";
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
                    title: string;
                    backgroundColor: string;
                    tacticIds: string[];
                    currentTacticIndex: number;
                    tacticsById: {};
                } | {
                    uid?: string | null | undefined;
                    ordinal?: number | null | undefined;
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
                    impulseOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    debriefOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    emotionOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    scheduledMinuteOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    scheduledLocationOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    type: "steps";
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
                    title: string;
                    backgroundColor: string;
                    steps: number;
                } | {
                    uid?: string | null | undefined;
                    ordinal?: number | null | undefined;
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
                    impulseOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    debriefOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    emotionOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    scheduledMinuteOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    scheduledLocationOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    type: "emotions";
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
                    title: string;
                    backgroundColor: string;
                } | {
                    uid?: string | null | undefined;
                    ordinal?: number | null | undefined;
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
                    impulseOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    debriefOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    emotionOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    scheduledMinuteOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    scheduledLocationOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    type: "audio";
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
                    title: string;
                    backgroundColor: string;
                    metadata: {
                        waveform?: string | null | undefined;
                        localFilePath: string;
                        remoteFilePath: string;
                    };
                    recording: {
                        waveform?: string | null | undefined;
                        localFilePath: string;
                        remoteFilePath: string;
                    } | null;
                } | {
                    uid?: string | null | undefined;
                    ordinal?: number | null | undefined;
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
                    impulseOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    debriefOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    emotionOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    scheduledMinuteOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    scheduledLocationOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    type: "video";
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
                    title: string;
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
                    uid?: string | null | undefined;
                    ordinal?: number | null | undefined;
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
                    impulseOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    debriefOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    emotionOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    scheduledMinuteOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    scheduledLocationOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    type: "measure-slider";
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
                    title: string;
                    backgroundColor: string;
                    lowEmoji: string;
                    highEmoji: string;
                } | {
                    uid?: string | null | undefined;
                    ordinal?: number | null | undefined;
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
                    impulseOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    debriefOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    emotionOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    scheduledMinuteOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    scheduledLocationOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    type: "measure-time";
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
                    title: string;
                    backgroundColor: string;
                } | {
                    uid?: string | null | undefined;
                    ordinal?: number | null | undefined;
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
                    impulseOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    debriefOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    emotionOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    scheduledMinuteOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    scheduledLocationOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    type: "measure-counter";
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
                    title: string;
                    backgroundColor: string;
                } | {
                    uid?: string | null | undefined;
                    ordinal?: number | null | undefined;
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
                    impulseOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    debriefOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    emotionOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    scheduledMinuteOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    scheduledLocationOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    type: "phone";
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
                    title: string;
                    backgroundColor: string;
                    supportGroupId: string;
                    trigger: {};
                } | {
                    uid?: string | null | undefined;
                    ordinal?: number | null | undefined;
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
                    impulseOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    debriefOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    emotionOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    scheduledMinuteOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    scheduledLocationOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    type: "breathe";
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
                    title: string;
                    backgroundColor: string;
                    inFor: number;
                    holdFor: number;
                    outFor: number;
                    repeat: number;
                } | {
                    uid?: string | null | undefined;
                    ordinal?: number | null | undefined;
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
                    impulseOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    debriefOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    emotionOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    scheduledMinuteOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    scheduledLocationOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    type: "urge-surfing";
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
                    title: string;
                    backgroundColor: string;
                } | {
                    uid?: string | null | undefined;
                    ordinal?: number | null | undefined;
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
                    impulseOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    debriefOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    emotionOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    scheduledMinuteOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    scheduledLocationOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    type: "task";
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
                    title: string;
                    backgroundColor: string;
                } | {
                    uid?: string | null | undefined;
                    ordinal?: number | null | undefined;
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
                    impulseOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    debriefOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    emotionOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    scheduledMinuteOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    scheduledLocationOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    type: "question";
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
                    title: string;
                    backgroundColor: string;
                };
            };
            suggestedTacticIds: string[];
        };
        name: string;
        setbackThreshold: number;
        sendWeeklyReports: NonNullable<boolean | undefined>;
        debrief: {
            tacticIds: string[];
            tacticsById: {
                [x: string]: {
                    uid?: string | null | undefined;
                    ordinal?: number | null | undefined;
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
                    impulseOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    debriefOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    emotionOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    scheduledMinuteOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    scheduledLocationOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    nextId?: string | undefined;
                    autogenerate?: boolean | undefined;
                    type: "folder";
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
                    title: string;
                    backgroundColor: string;
                    tacticIds: string[];
                    currentTacticIndex: number;
                    tacticsById: {};
                } | {
                    uid?: string | null | undefined;
                    ordinal?: number | null | undefined;
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
                    impulseOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    debriefOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    emotionOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    scheduledMinuteOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    scheduledLocationOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    type: "steps";
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
                    title: string;
                    backgroundColor: string;
                    steps: number;
                } | {
                    uid?: string | null | undefined;
                    ordinal?: number | null | undefined;
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
                    impulseOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    debriefOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    emotionOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    scheduledMinuteOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    scheduledLocationOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    type: "emotions";
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
                    title: string;
                    backgroundColor: string;
                } | {
                    uid?: string | null | undefined;
                    ordinal?: number | null | undefined;
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
                    impulseOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    debriefOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    emotionOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    scheduledMinuteOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    scheduledLocationOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    type: "audio";
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
                    title: string;
                    backgroundColor: string;
                    metadata: {
                        waveform?: string | null | undefined;
                        localFilePath: string;
                        remoteFilePath: string;
                    };
                    recording: {
                        waveform?: string | null | undefined;
                        localFilePath: string;
                        remoteFilePath: string;
                    } | null;
                } | {
                    uid?: string | null | undefined;
                    ordinal?: number | null | undefined;
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
                    impulseOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    debriefOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    emotionOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    scheduledMinuteOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    scheduledLocationOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    type: "video";
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
                    title: string;
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
                    uid?: string | null | undefined;
                    ordinal?: number | null | undefined;
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
                    impulseOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    debriefOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    emotionOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    scheduledMinuteOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    scheduledLocationOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    type: "measure-slider";
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
                    title: string;
                    backgroundColor: string;
                    lowEmoji: string;
                    highEmoji: string;
                } | {
                    uid?: string | null | undefined;
                    ordinal?: number | null | undefined;
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
                    impulseOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    debriefOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    emotionOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    scheduledMinuteOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    scheduledLocationOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    type: "measure-time";
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
                    title: string;
                    backgroundColor: string;
                } | {
                    uid?: string | null | undefined;
                    ordinal?: number | null | undefined;
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
                    impulseOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    debriefOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    emotionOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    scheduledMinuteOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    scheduledLocationOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    type: "measure-counter";
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
                    title: string;
                    backgroundColor: string;
                } | {
                    uid?: string | null | undefined;
                    ordinal?: number | null | undefined;
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
                    impulseOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    debriefOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    emotionOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    scheduledMinuteOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    scheduledLocationOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    type: "phone";
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
                    title: string;
                    backgroundColor: string;
                    supportGroupId: string;
                    trigger: {};
                } | {
                    uid?: string | null | undefined;
                    ordinal?: number | null | undefined;
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
                    impulseOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    debriefOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    emotionOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    scheduledMinuteOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    scheduledLocationOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    type: "breathe";
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
                    title: string;
                    backgroundColor: string;
                    inFor: number;
                    holdFor: number;
                    outFor: number;
                    repeat: number;
                } | {
                    uid?: string | null | undefined;
                    ordinal?: number | null | undefined;
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
                    impulseOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    debriefOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    emotionOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    scheduledMinuteOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    scheduledLocationOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    type: "urge-surfing";
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
                    title: string;
                    backgroundColor: string;
                } | {
                    uid?: string | null | undefined;
                    ordinal?: number | null | undefined;
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
                    impulseOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    debriefOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    emotionOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    scheduledMinuteOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    scheduledLocationOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    type: "task";
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
                    title: string;
                    backgroundColor: string;
                } | {
                    uid?: string | null | undefined;
                    ordinal?: number | null | undefined;
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
                    impulseOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    debriefOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    emotionOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    scheduledMinuteOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    scheduledLocationOrdinals?: {
                        [x: string]: number;
                    } | null | undefined;
                    type: "question";
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
                    title: string;
                    backgroundColor: string;
                };
            };
            suggestedTacticIds: string[];
        };
    }, "uid" | "ordinal" | "createdAt" | "updatedAt" | "impulse" | "name" | "setbackThreshold" | "sendWeeklyReports" | "debrief" | ("issueId" | "supportGroupIds" | "notification" | "setbackTacticId" | "gameplanId" | "debriefGameplanId")>;
    locationGameplanFactory: import("factory.ts").Factory<import("..").LocationGameplanValue, "type" | "uid" | "createdAt" | "updatedAt" | "tacticIds" | "tacticsById" | "suggestedTacticIds" | "mode" | ("title" | "isTemplate" | "navigationTitle" | "timezone" | "patternName" | "issueId" | "parentIssueIds" | "locationId")>;
    recommendationFactory: import("factory.ts").Factory<import("..").RecommendationValue, "uid" | "ordinal" | "createdAt" | "updatedAt" | "title" | "tacticIds" | "tacticsById" | "appliedAt" | "dismissedAt" | "explanation" | "gameplanExplanation" | "recommenderUid" | "recommenderName" | "ruleId" | "gameplanIds" | "defaultSelected">;
    recommendationRuleFactory: import("factory.ts").Factory<import("..").RecommendationRuleValue, keyof import("..").RecommendationRuleValue>;
    newGameplanRecommendationRuleFactory: import("factory.ts").Factory<import("..").RecommendationRuleValue, keyof import("..").RecommendationRuleValue>;
    tacticFactory: import("factory.ts").Factory<import("..").TacticValue, "type" | "uid" | "ordinal" | "createdAt" | "updatedAt" | "title" | "subtitle" | "description" | "image" | "backgroundColor" | "isTemplate" | "language" | "href" | "categoryIds" | "isShared" | "isResponseRequired" | "timerSeconds" | "isAvailableForRecommendation" | "numberOfLikes" | "impulseOrdinals" | "debriefOrdinals" | "emotionOrdinals" | "scheduledMinuteOrdinals" | "scheduledLocationOrdinals">;
};
