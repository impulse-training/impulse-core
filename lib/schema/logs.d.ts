export type Outcome = 'success' | 'setback' | 'indeterminate';
import * as yup from 'yup';
export type BaseLogValue = yup.InferType<typeof BaseLogValueSchema>;
declare const BaseLogValueSchema: yup.ObjectSchema<{
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
    locationFormatted: yup.Maybe<string | undefined>;
    allTacticIds: (string | undefined)[];
    commentCount: yup.Maybe<number | undefined>;
    commentsById: {} | null | undefined;
    commentsByTacticId: {} | null | undefined;
    steps: yup.Maybe<number | undefined>;
    tacticIds: (string | undefined)[];
    gameplan: {
        success?: yup.Maybe<{} | undefined>;
        setback?: yup.Maybe<{} | undefined>;
        main: {};
    };
    tactics: {};
    suggestedTacticIds: yup.Maybe<(string | undefined)[] | undefined>;
    isUpdatingSuggestions: yup.Maybe<boolean | undefined>;
    supportGroupSuggestedTacticIds: {
        success: {};
        setback: {};
        impulse: {};
        all: {};
    } | null | undefined;
    tacticUsage: {} | null | undefined;
    tacticData: {} | null | undefined;
    sharedWithSupportGroupIds: yup.Maybe<(string | undefined)[] | undefined>;
}, yup.AnyObject, {
    uid: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    startTime: undefined;
    timezone: undefined;
    location: {
        latitude: undefined;
        longitude: undefined;
        altitude: undefined;
        accuracy: undefined;
        altitudeAccuracy: undefined;
        heading: undefined;
        speed: undefined;
    };
    locationIsFetching: undefined;
    locationFormatted: undefined;
    allTacticIds: "";
    commentCount: undefined;
    commentsById: {};
    commentsByTacticId: {};
    steps: undefined;
    tacticIds: "";
    gameplan: {
        main: undefined;
        success: undefined;
        setback: undefined;
    };
    tactics: {};
    suggestedTacticIds: "";
    isUpdatingSuggestions: undefined;
    supportGroupSuggestedTacticIds: {
        impulse: {};
        success: {};
        setback: {};
        all: {};
    };
    tacticUsage: {};
    tacticData: {};
    sharedWithSupportGroupIds: "";
}, "">;
export type ImpulseLogValue = yup.InferType<typeof impulseLogValueSchema>;
export declare function logIsImpulseLog(log: LogValue): log is ImpulseLogValue;
declare const impulseLogValueSchema: yup.ObjectSchema<{
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
    locationFormatted: yup.Maybe<string | undefined>;
    allTacticIds: (string | undefined)[];
    commentCount: yup.Maybe<number | undefined>;
    commentsById: {} | null | undefined;
    commentsByTacticId: {} | null | undefined;
    steps: yup.Maybe<number | undefined>;
    tacticIds: (string | undefined)[];
    gameplan: {
        success?: yup.Maybe<{} | undefined>;
        setback?: yup.Maybe<{} | undefined>;
        main: {};
    };
    tactics: {};
    suggestedTacticIds: yup.Maybe<(string | undefined)[] | undefined>;
    isUpdatingSuggestions: yup.Maybe<boolean | undefined>;
    supportGroupSuggestedTacticIds: {
        success: {};
        setback: {};
        impulse: {};
        all: {};
    } | null | undefined;
    tacticUsage: {} | null | undefined;
    tacticData: {} | null | undefined;
    sharedWithSupportGroupIds: yup.Maybe<(string | undefined)[] | undefined>;
} & {
    type: {};
    setAsActiveImpulse: yup.Maybe<boolean | undefined>;
    pressCount: yup.Maybe<number | undefined>;
    outcome: {};
    isDisplayable: NonNullable<boolean | undefined>;
    buttonPressSecondsSinceEpoch: yup.Maybe<number | undefined>;
    gameplans: {};
    patterns: {
        [x: string]: {
            customUnit?: string | undefined;
            supportGroupIds?: yup.Maybe<(string | undefined)[] | undefined>;
            notification?: {
                title: string;
                body: string;
            } | null | undefined;
            issueId?: yup.Maybe<string | undefined>;
            gameplanId?: yup.Maybe<string | undefined>;
            successGameplanId?: yup.Maybe<string | undefined>;
            setbackGameplanId?: yup.Maybe<string | undefined>;
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
            supportGroupIds?: yup.Maybe<(string | undefined)[] | undefined>;
            notification?: {
                title: string;
                body: string;
            } | null | undefined;
            issueId?: yup.Maybe<string | undefined>;
            gameplanId?: yup.Maybe<string | undefined>;
            successGameplanId?: yup.Maybe<string | undefined>;
            setbackGameplanId?: yup.Maybe<string | undefined>;
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
    debriefNotes: yup.Maybe<string | undefined>;
    debriefReminderSentAt: yup.Maybe<{} | undefined>;
    debriefedAt: yup.Maybe<{} | undefined>;
}, yup.AnyObject, {
    uid: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    startTime: undefined;
    timezone: undefined;
    location: {
        latitude: undefined;
        longitude: undefined;
        altitude: undefined;
        accuracy: undefined;
        altitudeAccuracy: undefined;
        heading: undefined;
        speed: undefined;
    };
    locationIsFetching: undefined;
    locationFormatted: undefined;
    allTacticIds: "";
    commentCount: undefined;
    commentsById: {};
    commentsByTacticId: {};
    steps: undefined;
    tacticIds: "";
    gameplan: {
        main: undefined;
        success: undefined;
        setback: undefined;
    };
    tactics: {};
    suggestedTacticIds: "";
    isUpdatingSuggestions: undefined;
    supportGroupSuggestedTacticIds: {
        impulse: {};
        success: {};
        setback: {};
        all: {};
    };
    tacticUsage: {};
    tacticData: {};
    sharedWithSupportGroupIds: "";
    type: undefined;
    setAsActiveImpulse: undefined;
    pressCount: undefined;
    outcome: undefined;
    isDisplayable: undefined;
    buttonPressSecondsSinceEpoch: undefined;
    gameplans: {};
    patterns: {
        [x: string]: {
            uid: undefined;
            createdAt: undefined;
            updatedAt: undefined;
            name: undefined;
            ordinal: undefined;
            unit: undefined;
            customUnit: undefined;
            supportGroupIds: "";
            notification: {
                title: undefined;
                body: undefined;
            };
            issueId: undefined;
            sendWeeklyReports: undefined;
            setbackThreshold: undefined;
            gameplanId: undefined;
            successGameplanId: undefined;
            setbackGameplanId: undefined;
        };
    };
    patternId: undefined;
    patternIds: "";
    patternUsage: {
        [x: string]: {
            unit: undefined;
            customUnit: undefined;
            formattedValue: undefined;
            value: undefined;
        };
    };
    debriefNotes: undefined;
    debriefReminderSentAt: undefined;
    debriefedAt: undefined;
}, "">;
export type LocationLogValue = yup.InferType<typeof locationLogValueSchema>;
export declare function logIsLocationLog(log: LogValue): log is LocationLogValue;
declare const locationLogValueSchema: yup.ObjectSchema<{
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
    locationFormatted: yup.Maybe<string | undefined>;
    allTacticIds: (string | undefined)[];
    commentCount: yup.Maybe<number | undefined>;
    commentsById: {} | null | undefined;
    commentsByTacticId: {} | null | undefined;
    steps: yup.Maybe<number | undefined>;
    tacticIds: (string | undefined)[];
    gameplan: {
        success?: yup.Maybe<{} | undefined>;
        setback?: yup.Maybe<{} | undefined>;
        main: {};
    };
    tactics: {};
    suggestedTacticIds: yup.Maybe<(string | undefined)[] | undefined>;
    isUpdatingSuggestions: yup.Maybe<boolean | undefined>;
    supportGroupSuggestedTacticIds: {
        success: {};
        setback: {};
        impulse: {};
        all: {};
    } | null | undefined;
    tacticUsage: {} | null | undefined;
    tacticData: {} | null | undefined;
    sharedWithSupportGroupIds: yup.Maybe<(string | undefined)[] | undefined>;
} & {
    type: {};
    locationId: string;
    isDisplayable: NonNullable<boolean | undefined>;
    locationName: string;
    locationMode: {};
}, yup.AnyObject, {
    uid: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    startTime: undefined;
    timezone: undefined;
    location: {
        latitude: undefined;
        longitude: undefined;
        altitude: undefined;
        accuracy: undefined;
        altitudeAccuracy: undefined;
        heading: undefined;
        speed: undefined;
    };
    locationIsFetching: undefined;
    locationFormatted: undefined;
    allTacticIds: "";
    commentCount: undefined;
    commentsById: {};
    commentsByTacticId: {};
    steps: undefined;
    tacticIds: "";
    gameplan: {
        main: undefined;
        success: undefined;
        setback: undefined;
    };
    tactics: {};
    suggestedTacticIds: "";
    isUpdatingSuggestions: undefined;
    supportGroupSuggestedTacticIds: {
        impulse: {};
        success: {};
        setback: {};
        all: {};
    };
    tacticUsage: {};
    tacticData: {};
    sharedWithSupportGroupIds: "";
    type: undefined;
    locationId: undefined;
    isDisplayable: undefined;
    locationName: undefined;
    locationMode: undefined;
}, "">;
export type TimeLogValue = yup.InferType<typeof timeLogValueSchema>;
export declare function logIsTimeLog(log: LogValue): log is TimeLogValue;
declare const timeLogValueSchema: yup.ObjectSchema<{
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
    locationFormatted: yup.Maybe<string | undefined>;
    allTacticIds: (string | undefined)[];
    commentCount: yup.Maybe<number | undefined>;
    commentsById: {} | null | undefined;
    commentsByTacticId: {} | null | undefined;
    steps: yup.Maybe<number | undefined>;
    tacticIds: (string | undefined)[];
    gameplan: {
        success?: yup.Maybe<{} | undefined>;
        setback?: yup.Maybe<{} | undefined>;
        main: {};
    };
    tactics: {};
    suggestedTacticIds: yup.Maybe<(string | undefined)[] | undefined>;
    isUpdatingSuggestions: yup.Maybe<boolean | undefined>;
    supportGroupSuggestedTacticIds: {
        success: {};
        setback: {};
        impulse: {};
        all: {};
    } | null | undefined;
    tacticUsage: {} | null | undefined;
    tacticData: {} | null | undefined;
    sharedWithSupportGroupIds: yup.Maybe<(string | undefined)[] | undefined>;
} & {
    type: {};
    isDisplayable: NonNullable<boolean | undefined>;
    gameplanId: string;
}, yup.AnyObject, {
    uid: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    startTime: undefined;
    timezone: undefined;
    location: {
        latitude: undefined;
        longitude: undefined;
        altitude: undefined;
        accuracy: undefined;
        altitudeAccuracy: undefined;
        heading: undefined;
        speed: undefined;
    };
    locationIsFetching: undefined;
    locationFormatted: undefined;
    allTacticIds: "";
    commentCount: undefined;
    commentsById: {};
    commentsByTacticId: {};
    steps: undefined;
    tacticIds: "";
    gameplan: {
        main: undefined;
        success: undefined;
        setback: undefined;
    };
    tactics: {};
    suggestedTacticIds: "";
    isUpdatingSuggestions: undefined;
    supportGroupSuggestedTacticIds: {
        impulse: {};
        success: {};
        setback: {};
        all: {};
    };
    tacticUsage: {};
    tacticData: {};
    sharedWithSupportGroupIds: "";
    type: undefined;
    isDisplayable: undefined;
    gameplanId: undefined;
}, "">;
export type DebriefLogValue = yup.InferType<typeof debriefLogValueSchema>;
export declare function logIsDebriefLog(log: LogValue): log is DebriefLogValue;
declare const debriefLogValueSchema: yup.ObjectSchema<{
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
    locationFormatted: yup.Maybe<string | undefined>;
    allTacticIds: (string | undefined)[];
    commentCount: yup.Maybe<number | undefined>;
    commentsById: {} | null | undefined;
    commentsByTacticId: {} | null | undefined;
    steps: yup.Maybe<number | undefined>;
    tacticIds: (string | undefined)[];
    gameplan: {
        success?: yup.Maybe<{} | undefined>;
        setback?: yup.Maybe<{} | undefined>;
        main: {};
    };
    tactics: {};
    suggestedTacticIds: yup.Maybe<(string | undefined)[] | undefined>;
    isUpdatingSuggestions: yup.Maybe<boolean | undefined>;
    supportGroupSuggestedTacticIds: {
        success: {};
        setback: {};
        impulse: {};
        all: {};
    } | null | undefined;
    tacticUsage: {} | null | undefined;
    tacticData: {} | null | undefined;
    sharedWithSupportGroupIds: yup.Maybe<(string | undefined)[] | undefined>;
} & {
    type: {};
    outcome: {};
    patterns: {
        [x: string]: {
            customUnit?: string | undefined;
            supportGroupIds?: yup.Maybe<(string | undefined)[] | undefined>;
            notification?: {
                title: string;
                body: string;
            } | null | undefined;
            issueId?: yup.Maybe<string | undefined>;
            gameplanId?: yup.Maybe<string | undefined>;
            successGameplanId?: yup.Maybe<string | undefined>;
            setbackGameplanId?: yup.Maybe<string | undefined>;
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
            supportGroupIds?: yup.Maybe<(string | undefined)[] | undefined>;
            notification?: {
                title: string;
                body: string;
            } | null | undefined;
            issueId?: yup.Maybe<string | undefined>;
            gameplanId?: yup.Maybe<string | undefined>;
            successGameplanId?: yup.Maybe<string | undefined>;
            setbackGameplanId?: yup.Maybe<string | undefined>;
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
    isDisplayable: NonNullable<boolean | undefined>;
    gameplanId: string;
    patternIds: (string | undefined)[];
    patternUsage: {};
    patternUsageEntries: {};
}, yup.AnyObject, {
    uid: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    startTime: undefined;
    timezone: undefined;
    location: {
        latitude: undefined;
        longitude: undefined;
        altitude: undefined;
        accuracy: undefined;
        altitudeAccuracy: undefined;
        heading: undefined;
        speed: undefined;
    };
    locationIsFetching: undefined;
    locationFormatted: undefined;
    allTacticIds: "";
    commentCount: undefined;
    commentsById: {};
    commentsByTacticId: {};
    steps: undefined;
    tacticIds: "";
    gameplan: {
        main: undefined;
        success: undefined;
        setback: undefined;
    };
    tactics: {};
    suggestedTacticIds: "";
    isUpdatingSuggestions: undefined;
    supportGroupSuggestedTacticIds: {
        impulse: {};
        success: {};
        setback: {};
        all: {};
    };
    tacticUsage: {};
    tacticData: {};
    sharedWithSupportGroupIds: "";
    type: undefined;
    outcome: undefined;
    patterns: {
        [x: string]: {
            uid: undefined;
            createdAt: undefined;
            updatedAt: undefined;
            name: undefined;
            ordinal: undefined;
            unit: undefined;
            customUnit: undefined;
            supportGroupIds: "";
            notification: {
                title: undefined;
                body: undefined;
            };
            issueId: undefined;
            sendWeeklyReports: undefined;
            setbackThreshold: undefined;
            gameplanId: undefined;
            successGameplanId: undefined;
            setbackGameplanId: undefined;
        };
    };
    isDisplayable: undefined;
    gameplanId: undefined;
    patternIds: "";
    patternUsage: {};
    patternUsageEntries: {};
}, "">;
export type MotionLogValue = yup.InferType<typeof motionLogValueSchema>;
export declare function logIsMotionLog(log: LogValue): log is MotionLogValue;
declare const motionLogValueSchema: yup.ObjectSchema<{
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
    locationFormatted: yup.Maybe<string | undefined>;
    allTacticIds: (string | undefined)[];
    commentCount: yup.Maybe<number | undefined>;
    commentsById: {} | null | undefined;
    commentsByTacticId: {} | null | undefined;
    steps: yup.Maybe<number | undefined>;
    tacticIds: (string | undefined)[];
    gameplan: {
        success?: yup.Maybe<{} | undefined>;
        setback?: yup.Maybe<{} | undefined>;
        main: {};
    };
    tactics: {};
    suggestedTacticIds: yup.Maybe<(string | undefined)[] | undefined>;
    isUpdatingSuggestions: yup.Maybe<boolean | undefined>;
    supportGroupSuggestedTacticIds: {
        success: {};
        setback: {};
        impulse: {};
        all: {};
    } | null | undefined;
    tacticUsage: {} | null | undefined;
    tacticData: {} | null | undefined;
    sharedWithSupportGroupIds: yup.Maybe<(string | undefined)[] | undefined>;
} & {
    type: {};
    isDisplayable: NonNullable<boolean | undefined>;
}, yup.AnyObject, {
    uid: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    startTime: undefined;
    timezone: undefined;
    location: {
        latitude: undefined;
        longitude: undefined;
        altitude: undefined;
        accuracy: undefined;
        altitudeAccuracy: undefined;
        heading: undefined;
        speed: undefined;
    };
    locationIsFetching: undefined;
    locationFormatted: undefined;
    allTacticIds: "";
    commentCount: undefined;
    commentsById: {};
    commentsByTacticId: {};
    steps: undefined;
    tacticIds: "";
    gameplan: {
        main: undefined;
        success: undefined;
        setback: undefined;
    };
    tactics: {};
    suggestedTacticIds: "";
    isUpdatingSuggestions: undefined;
    supportGroupSuggestedTacticIds: {
        impulse: {};
        success: {};
        setback: {};
        all: {};
    };
    tacticUsage: {};
    tacticData: {};
    sharedWithSupportGroupIds: "";
    type: undefined;
    isDisplayable: undefined;
}, "">;
export type ButtonLogValue = yup.InferType<typeof buttonLogValueSchema>;
export declare function logIsButtonLog(log: LogValue): log is ButtonLogValue;
declare const buttonLogValueSchema: yup.ObjectSchema<{
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
    locationFormatted: yup.Maybe<string | undefined>;
    allTacticIds: (string | undefined)[];
    commentCount: yup.Maybe<number | undefined>;
    commentsById: {} | null | undefined;
    commentsByTacticId: {} | null | undefined;
    steps: yup.Maybe<number | undefined>;
    tacticIds: (string | undefined)[];
    gameplan: {
        success?: yup.Maybe<{} | undefined>;
        setback?: yup.Maybe<{} | undefined>;
        main: {};
    };
    tactics: {};
    suggestedTacticIds: yup.Maybe<(string | undefined)[] | undefined>;
    isUpdatingSuggestions: yup.Maybe<boolean | undefined>;
    supportGroupSuggestedTacticIds: {
        success: {};
        setback: {};
        impulse: {};
        all: {};
    } | null | undefined;
    tacticUsage: {} | null | undefined;
    tacticData: {} | null | undefined;
    sharedWithSupportGroupIds: yup.Maybe<(string | undefined)[] | undefined>;
} & {
    type: {};
    isDisplayable: NonNullable<boolean | undefined>;
    isDeviceConnected: NonNullable<boolean | undefined>;
    characteristics: {};
}, yup.AnyObject, {
    uid: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    startTime: undefined;
    timezone: undefined;
    location: {
        latitude: undefined;
        longitude: undefined;
        altitude: undefined;
        accuracy: undefined;
        altitudeAccuracy: undefined;
        heading: undefined;
        speed: undefined;
    };
    locationIsFetching: undefined;
    locationFormatted: undefined;
    allTacticIds: "";
    commentCount: undefined;
    commentsById: {};
    commentsByTacticId: {};
    steps: undefined;
    tacticIds: "";
    gameplan: {
        main: undefined;
        success: undefined;
        setback: undefined;
    };
    tactics: {};
    suggestedTacticIds: "";
    isUpdatingSuggestions: undefined;
    supportGroupSuggestedTacticIds: {
        impulse: {};
        success: {};
        setback: {};
        all: {};
    };
    tacticUsage: {};
    tacticData: {};
    sharedWithSupportGroupIds: "";
    type: undefined;
    isDisplayable: undefined;
    isDeviceConnected: undefined;
    characteristics: {};
}, "">;
declare const LogValueSchema: yup.Lazy<{
    locationFormatted?: yup.Maybe<string | undefined>;
    commentCount?: yup.Maybe<number | undefined>;
    commentsById?: {} | null | undefined;
    commentsByTacticId?: {} | null | undefined;
    steps?: yup.Maybe<number | undefined>;
    suggestedTacticIds?: yup.Maybe<(string | undefined)[] | undefined>;
    isUpdatingSuggestions?: yup.Maybe<boolean | undefined>;
    supportGroupSuggestedTacticIds?: {
        success: {};
        setback: {};
        impulse: {};
        all: {};
    } | null | undefined;
    tacticUsage?: {} | null | undefined;
    tacticData?: {} | null | undefined;
    sharedWithSupportGroupIds?: yup.Maybe<(string | undefined)[] | undefined>;
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
        success?: yup.Maybe<{} | undefined>;
        setback?: yup.Maybe<{} | undefined>;
        main: {};
    };
    tactics: {};
    type: {};
    isDisplayable: NonNullable<boolean | undefined>;
}, yup.AnyObject, any>;
export type LogValue = yup.InferType<typeof LogValueSchema>;
export {};
