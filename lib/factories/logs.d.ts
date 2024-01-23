import * as Factory from 'factory.ts';
import { FakeTimestamp } from '../utils/FakeTimestamp';
export declare const makeImpulseFactory: (TimestampKlass: typeof FakeTimestamp) => Factory.Sync.Factory<{
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
export declare const makeTimeLogFactory: (TimestampKlass: typeof FakeTimestamp) => Factory.Sync.Factory<{
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
export declare const makeDebriefLogFactory: (TimestampKlass: typeof FakeTimestamp) => Factory.Sync.Factory<{
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
export declare const makeMotionLogFactory: (TimestampKlass: typeof FakeTimestamp) => Factory.Sync.Factory<{
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
export declare const makeLocationLogFactory: (TimestampKlass: typeof FakeTimestamp) => Factory.Sync.Factory<{
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
