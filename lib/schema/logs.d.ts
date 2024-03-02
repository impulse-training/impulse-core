import * as yup from 'yup';
import { TimestampLike } from '../utils/TimestampLike';
import { TacticValue, WithTacticsById } from './tactic';
type Outcome = 'success' | 'setback' | 'indeterminate';
export declare const tacticDataSchema: yup.ObjectSchema<{
    value: number;
    unit: string;
    formattedValue: string;
    isTotal: yup.Maybe<boolean | undefined>;
    lowEmoji: yup.Maybe<string | undefined>;
    highEmoji: yup.Maybe<string | undefined>;
}, yup.AnyObject, {
    value: undefined;
    unit: undefined;
    formattedValue: undefined;
    isTotal: undefined;
    lowEmoji: undefined;
    highEmoji: undefined;
}, "">;
export type TacticData = yup.InferType<typeof tacticDataSchema>;
export type BaseLogValue = WithTypes<typeof baseLogSchema>;
declare const baseLogSchema: yup.ObjectSchema<{
    uid: string;
    createdAt: yup.Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt: yup.Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    startTime: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
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
    commentCount: yup.Maybe<number | undefined>;
    commentsById: {} | null | undefined;
    commentsByTacticId: {
        [x: string]: {
            tacticTitle: string;
            comments: any[];
        };
    } | null | undefined;
    steps: yup.Maybe<number | undefined>;
    strategy: {
        impulseDebrief?: {
            conditionalTacticIds?: {
                [x: string]: any[];
            } | null | undefined;
            tacticIds: any[];
            suggestedTacticIds: any[];
        } | null | undefined;
        main: {
            conditionalTacticIds?: {
                [x: string]: any[];
            } | null | undefined;
            tacticIds: any[];
            suggestedTacticIds: any[];
        };
    };
    tacticsById: any;
    seenTacticIds: any[];
    completedTacticIds: any[];
    tacticLikes: {
        [x: string]: NonNullable<boolean | undefined>;
    } | null | undefined;
    tacticData: {
        [x: string]: {
            lowEmoji?: yup.Maybe<string | undefined>;
            highEmoji?: yup.Maybe<string | undefined>;
            isTotal?: yup.Maybe<boolean | undefined>;
            value: number;
            unit: string;
            formattedValue: string;
        };
    } | null | undefined;
    sharedWithSupportGroupIds: string[] | undefined;
}, yup.AnyObject, {
    uid: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    startTime: {
        seconds: undefined;
        nanoseconds: undefined;
        toDate: undefined;
    };
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
    commentCount: undefined;
    commentsById: {};
    commentsByTacticId: undefined;
    steps: undefined;
    strategy: {
        main: {
            tacticIds: "";
            suggestedTacticIds: "";
            conditionalTacticIds: undefined;
        };
        impulseDebrief: {
            tacticIds: "";
            suggestedTacticIds: "";
            conditionalTacticIds: undefined;
        };
    };
    tacticsById: any;
    seenTacticIds: "";
    completedTacticIds: "";
    tacticLikes: undefined;
    tacticData: undefined;
    sharedWithSupportGroupIds: "";
}, "">;
type WithTypes<T extends yup.ISchema<unknown>> = WithTacticsById<yup.InferType<T>> & {
    createdAt: TimestampLike;
    updatedAt: TimestampLike;
    startTime: TimestampLike;
    tacticsById: Record<string, TacticValue>;
};
export type ImpulseLogValue = WithTypes<typeof impulseLogSchema>;
export declare function logIsImpulseLog(log: LogValue): log is ImpulseLogValue;
declare const impulseLogSchema: yup.ObjectSchema<{
    uid: string;
    createdAt: yup.Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt: yup.Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    startTime: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
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
    commentCount: yup.Maybe<number | undefined>;
    commentsById: {} | null | undefined;
    commentsByTacticId: {
        [x: string]: {
            tacticTitle: string;
            comments: any[];
        };
    } | null | undefined;
    steps: yup.Maybe<number | undefined>;
    strategy: {
        impulseDebrief?: {
            conditionalTacticIds?: {
                [x: string]: any[];
            } | null | undefined;
            tacticIds: any[];
            suggestedTacticIds: any[];
        } | null | undefined;
        main: {
            conditionalTacticIds?: {
                [x: string]: any[];
            } | null | undefined;
            tacticIds: any[];
            suggestedTacticIds: any[];
        };
    };
    tacticsById: any;
    seenTacticIds: any[];
    completedTacticIds: any[];
    tacticLikes: {
        [x: string]: NonNullable<boolean | undefined>;
    } | null | undefined;
    tacticData: {
        [x: string]: {
            lowEmoji?: yup.Maybe<string | undefined>;
            highEmoji?: yup.Maybe<string | undefined>;
            isTotal?: yup.Maybe<boolean | undefined>;
            value: number;
            unit: string;
            formattedValue: string;
        };
    } | null | undefined;
    sharedWithSupportGroupIds: string[] | undefined;
} & {
    type: "impulse";
    setAsActiveImpulse: yup.Maybe<boolean | undefined>;
    pressCount: yup.Maybe<number | undefined>;
    isDisplayable: NonNullable<boolean | undefined>;
    buttonPressSecondsSinceEpoch: yup.Maybe<number | undefined>;
    gameplan: {
        createdAt?: yup.Maybe<{} | undefined> | {
            seconds: number;
            nanoseconds: number;
            toDate: {};
        };
        updatedAt?: yup.Maybe<{} | undefined> | {
            seconds: number;
            nanoseconds: number;
            toDate: {};
        };
        parentIssueIds?: string[] | undefined;
        tacticsById?: any;
        recommendationsCount?: number | undefined;
        dayDebrief?: {
            title: string;
            weekdays: any[];
            hour: number;
            minute: number;
            strategy: {
                conditionalTacticIds?: {
                    [x: string]: any[];
                } | null | undefined;
                tacticIds: any[];
                suggestedTacticIds: any[];
            };
        } | undefined;
        scheduledNotificationIds?: string[] | undefined;
        uid: string;
        impulse: {
            [x: string]: {
                conditionalTacticIds?: {
                    [x: string]: any[];
                } | null | undefined;
                tacticIds: any[];
                suggestedTacticIds: any[];
            };
        };
        impulseDebrief: {
            [x: string]: {
                conditionalTacticIds?: {
                    [x: string]: any[];
                } | null | undefined;
                tacticIds: any[];
                suggestedTacticIds: any[];
            };
        };
        time: any[];
        locations: any[];
        patternsById: {
            [x: string]: {
                createdAt?: yup.Maybe<{} | undefined> | {
                    seconds: number;
                    nanoseconds: number;
                    toDate: {};
                };
                updatedAt?: yup.Maybe<{} | undefined> | {
                    seconds: number;
                    nanoseconds: number;
                    toDate: {};
                };
                supportGroupIds?: string[] | undefined;
                notification?: {
                    title: string;
                    body: string;
                } | null | undefined;
                setbackTacticId?: yup.Maybe<string | undefined>;
                issueId?: yup.Maybe<string | undefined>;
                parentIssueIds?: string[] | undefined;
                uid: string;
                name: string;
                ordinal: number;
                setbackThreshold: number;
                sendWeeklyReports: NonNullable<boolean | undefined>;
            };
        };
    };
    outcome: Outcome | undefined;
    patternId: string;
    patternsById: {
        [x: string]: {
            createdAt?: yup.Maybe<{} | undefined> | {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt?: yup.Maybe<{} | undefined> | {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            supportGroupIds?: string[] | undefined;
            notification?: {
                title: string;
                body: string;
            } | null | undefined;
            setbackTacticId?: yup.Maybe<string | undefined>;
            issueId?: yup.Maybe<string | undefined>;
            parentIssueIds?: string[] | undefined;
            uid: string;
            name: string;
            ordinal: number;
            setbackThreshold: number;
            sendWeeklyReports: NonNullable<boolean | undefined>;
        };
    };
    debriefNotes: yup.Maybe<string | undefined>;
    debriefReminderSentAt: yup.Maybe<{} | undefined>;
    debriefedAt: yup.Maybe<{} | undefined>;
}, yup.AnyObject, {
    uid: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    startTime: {
        seconds: undefined;
        nanoseconds: undefined;
        toDate: undefined;
    };
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
    commentCount: undefined;
    commentsById: {};
    commentsByTacticId: undefined;
    steps: undefined;
    strategy: {
        main: {
            tacticIds: "";
            suggestedTacticIds: "";
            conditionalTacticIds: undefined;
        };
        impulseDebrief: {
            tacticIds: "";
            suggestedTacticIds: "";
            conditionalTacticIds: undefined;
        };
    };
    tacticsById: any;
    seenTacticIds: "";
    completedTacticIds: "";
    tacticLikes: undefined;
    tacticData: undefined;
    sharedWithSupportGroupIds: "";
    type: undefined;
    setAsActiveImpulse: undefined;
    pressCount: undefined;
    isDisplayable: undefined;
    buttonPressSecondsSinceEpoch: undefined;
    gameplan: {
        uid: undefined;
        createdAt: undefined;
        updatedAt: undefined;
        parentIssueIds: "";
        recommendationsCount: undefined;
        impulse: undefined;
        impulseDebrief: undefined;
        dayDebrief: {
            weekdays: "";
            hour: undefined;
            minute: undefined;
            title: undefined;
            strategy: {
                tacticIds: "";
                suggestedTacticIds: "";
                conditionalTacticIds: undefined;
            };
        };
        time: "";
        locations: "";
        tacticsById: any;
        patternsById: undefined;
        scheduledNotificationIds: "";
    };
    outcome: undefined;
    patternId: undefined;
    patternsById: undefined;
    debriefNotes: undefined;
    debriefReminderSentAt: undefined;
    debriefedAt: undefined;
}, "">;
export type LocationLogValue = WithTypes<typeof locationLogSchema>;
export declare function logIsLocationLog(log: LogValue): log is LocationLogValue;
declare const locationLogSchema: yup.ObjectSchema<{
    uid: string;
    createdAt: yup.Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt: yup.Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    startTime: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
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
    commentCount: yup.Maybe<number | undefined>;
    commentsById: {} | null | undefined;
    commentsByTacticId: {
        [x: string]: {
            tacticTitle: string;
            comments: any[];
        };
    } | null | undefined;
    steps: yup.Maybe<number | undefined>;
    strategy: {
        impulseDebrief?: {
            conditionalTacticIds?: {
                [x: string]: any[];
            } | null | undefined;
            tacticIds: any[];
            suggestedTacticIds: any[];
        } | null | undefined;
        main: {
            conditionalTacticIds?: {
                [x: string]: any[];
            } | null | undefined;
            tacticIds: any[];
            suggestedTacticIds: any[];
        };
    };
    tacticsById: any;
    seenTacticIds: any[];
    completedTacticIds: any[];
    tacticLikes: {
        [x: string]: NonNullable<boolean | undefined>;
    } | null | undefined;
    tacticData: {
        [x: string]: {
            lowEmoji?: yup.Maybe<string | undefined>;
            highEmoji?: yup.Maybe<string | undefined>;
            isTotal?: yup.Maybe<boolean | undefined>;
            value: number;
            unit: string;
            formattedValue: string;
        };
    } | null | undefined;
    sharedWithSupportGroupIds: string[] | undefined;
} & {
    type: "location";
    locationId: string;
    isDisplayable: NonNullable<boolean | undefined>;
    locationName: string;
    locationMode: {};
}, yup.AnyObject, {
    uid: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    startTime: {
        seconds: undefined;
        nanoseconds: undefined;
        toDate: undefined;
    };
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
    commentCount: undefined;
    commentsById: {};
    commentsByTacticId: undefined;
    steps: undefined;
    strategy: {
        main: {
            tacticIds: "";
            suggestedTacticIds: "";
            conditionalTacticIds: undefined;
        };
        impulseDebrief: {
            tacticIds: "";
            suggestedTacticIds: "";
            conditionalTacticIds: undefined;
        };
    };
    tacticsById: any;
    seenTacticIds: "";
    completedTacticIds: "";
    tacticLikes: undefined;
    tacticData: undefined;
    sharedWithSupportGroupIds: "";
    type: undefined;
    locationId: undefined;
    isDisplayable: undefined;
    locationName: undefined;
    locationMode: undefined;
}, "">;
export type TimeLogValue = WithTypes<typeof timeLogSchema>;
export declare function logIsTimeLog(log: LogValue): log is TimeLogValue;
declare const timeLogSchema: yup.ObjectSchema<{
    uid: string;
    createdAt: yup.Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt: yup.Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    startTime: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
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
    commentCount: yup.Maybe<number | undefined>;
    commentsById: {} | null | undefined;
    commentsByTacticId: {
        [x: string]: {
            tacticTitle: string;
            comments: any[];
        };
    } | null | undefined;
    steps: yup.Maybe<number | undefined>;
    strategy: {
        impulseDebrief?: {
            conditionalTacticIds?: {
                [x: string]: any[];
            } | null | undefined;
            tacticIds: any[];
            suggestedTacticIds: any[];
        } | null | undefined;
        main: {
            conditionalTacticIds?: {
                [x: string]: any[];
            } | null | undefined;
            tacticIds: any[];
            suggestedTacticIds: any[];
        };
    };
    tacticsById: any;
    seenTacticIds: any[];
    completedTacticIds: any[];
    tacticLikes: {
        [x: string]: NonNullable<boolean | undefined>;
    } | null | undefined;
    tacticData: {
        [x: string]: {
            lowEmoji?: yup.Maybe<string | undefined>;
            highEmoji?: yup.Maybe<string | undefined>;
            isTotal?: yup.Maybe<boolean | undefined>;
            value: number;
            unit: string;
            formattedValue: string;
        };
    } | null | undefined;
    sharedWithSupportGroupIds: string[] | undefined;
} & {
    type: "time";
    isDisplayable: NonNullable<boolean | undefined>;
    routineId: string;
}, yup.AnyObject, {
    uid: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    startTime: {
        seconds: undefined;
        nanoseconds: undefined;
        toDate: undefined;
    };
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
    commentCount: undefined;
    commentsById: {};
    commentsByTacticId: undefined;
    steps: undefined;
    strategy: {
        main: {
            tacticIds: "";
            suggestedTacticIds: "";
            conditionalTacticIds: undefined;
        };
        impulseDebrief: {
            tacticIds: "";
            suggestedTacticIds: "";
            conditionalTacticIds: undefined;
        };
    };
    tacticsById: any;
    seenTacticIds: "";
    completedTacticIds: "";
    tacticLikes: undefined;
    tacticData: undefined;
    sharedWithSupportGroupIds: "";
    type: undefined;
    isDisplayable: undefined;
    routineId: undefined;
}, "">;
export type DebriefLogValue = WithTypes<typeof dayDebriefLogSchema>;
export declare function logIsDebriefLog(log: LogValue): log is DebriefLogValue;
declare const dayDebriefLogSchema: yup.ObjectSchema<{
    uid: string;
    createdAt: yup.Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt: yup.Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    startTime: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
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
    commentCount: yup.Maybe<number | undefined>;
    commentsById: {} | null | undefined;
    commentsByTacticId: {
        [x: string]: {
            tacticTitle: string;
            comments: any[];
        };
    } | null | undefined;
    steps: yup.Maybe<number | undefined>;
    strategy: {
        impulseDebrief?: {
            conditionalTacticIds?: {
                [x: string]: any[];
            } | null | undefined;
            tacticIds: any[];
            suggestedTacticIds: any[];
        } | null | undefined;
        main: {
            conditionalTacticIds?: {
                [x: string]: any[];
            } | null | undefined;
            tacticIds: any[];
            suggestedTacticIds: any[];
        };
    };
    tacticsById: any;
    seenTacticIds: any[];
    completedTacticIds: any[];
    tacticLikes: {
        [x: string]: NonNullable<boolean | undefined>;
    } | null | undefined;
    tacticData: {
        [x: string]: {
            lowEmoji?: yup.Maybe<string | undefined>;
            highEmoji?: yup.Maybe<string | undefined>;
            isTotal?: yup.Maybe<boolean | undefined>;
            value: number;
            unit: string;
            formattedValue: string;
        };
    } | null | undefined;
    sharedWithSupportGroupIds: string[] | undefined;
} & {
    type: "dayDebrief";
    patternsById: {
        [x: string]: {
            createdAt?: yup.Maybe<{} | undefined> | {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt?: yup.Maybe<{} | undefined> | {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            supportGroupIds?: string[] | undefined;
            notification?: {
                title: string;
                body: string;
            } | null | undefined;
            setbackTacticId?: yup.Maybe<string | undefined>;
            issueId?: yup.Maybe<string | undefined>;
            parentIssueIds?: string[] | undefined;
            uid: string;
            name: string;
            ordinal: number;
            setbackThreshold: number;
            sendWeeklyReports: NonNullable<boolean | undefined>;
        };
    };
    isDisplayable: NonNullable<boolean | undefined>;
    routineId: string;
    tacticDataEntries: {
        [x: string]: {} | undefined;
    };
}, yup.AnyObject, {
    uid: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    startTime: {
        seconds: undefined;
        nanoseconds: undefined;
        toDate: undefined;
    };
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
    commentCount: undefined;
    commentsById: {};
    commentsByTacticId: undefined;
    steps: undefined;
    strategy: {
        main: {
            tacticIds: "";
            suggestedTacticIds: "";
            conditionalTacticIds: undefined;
        };
        impulseDebrief: {
            tacticIds: "";
            suggestedTacticIds: "";
            conditionalTacticIds: undefined;
        };
    };
    tacticsById: any;
    seenTacticIds: "";
    completedTacticIds: "";
    tacticLikes: undefined;
    tacticData: undefined;
    sharedWithSupportGroupIds: "";
    type: undefined;
    patternsById: undefined;
    isDisplayable: undefined;
    routineId: undefined;
    tacticDataEntries: undefined;
}, "">;
export type MotionLogValue = WithTypes<typeof motionLogSchema>;
export declare function logIsMotionLog(log: LogValue): log is MotionLogValue;
declare const motionLogSchema: yup.ObjectSchema<{
    uid: string;
    createdAt: yup.Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt: yup.Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    startTime: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
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
    commentCount: yup.Maybe<number | undefined>;
    commentsById: {} | null | undefined;
    commentsByTacticId: {
        [x: string]: {
            tacticTitle: string;
            comments: any[];
        };
    } | null | undefined;
    steps: yup.Maybe<number | undefined>;
    strategy: {
        impulseDebrief?: {
            conditionalTacticIds?: {
                [x: string]: any[];
            } | null | undefined;
            tacticIds: any[];
            suggestedTacticIds: any[];
        } | null | undefined;
        main: {
            conditionalTacticIds?: {
                [x: string]: any[];
            } | null | undefined;
            tacticIds: any[];
            suggestedTacticIds: any[];
        };
    };
    tacticsById: any;
    seenTacticIds: any[];
    completedTacticIds: any[];
    tacticLikes: {
        [x: string]: NonNullable<boolean | undefined>;
    } | null | undefined;
    tacticData: {
        [x: string]: {
            lowEmoji?: yup.Maybe<string | undefined>;
            highEmoji?: yup.Maybe<string | undefined>;
            isTotal?: yup.Maybe<boolean | undefined>;
            value: number;
            unit: string;
            formattedValue: string;
        };
    } | null | undefined;
    sharedWithSupportGroupIds: string[] | undefined;
} & {
    type: "motion";
    isDisplayable: NonNullable<boolean | undefined>;
}, yup.AnyObject, {
    uid: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    startTime: {
        seconds: undefined;
        nanoseconds: undefined;
        toDate: undefined;
    };
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
    commentCount: undefined;
    commentsById: {};
    commentsByTacticId: undefined;
    steps: undefined;
    strategy: {
        main: {
            tacticIds: "";
            suggestedTacticIds: "";
            conditionalTacticIds: undefined;
        };
        impulseDebrief: {
            tacticIds: "";
            suggestedTacticIds: "";
            conditionalTacticIds: undefined;
        };
    };
    tacticsById: any;
    seenTacticIds: "";
    completedTacticIds: "";
    tacticLikes: undefined;
    tacticData: undefined;
    sharedWithSupportGroupIds: "";
    type: undefined;
    isDisplayable: undefined;
}, "">;
export type ButtonLogValue = WithTypes<typeof buttonLogSchema>;
export declare function logIsButtonLog(log: LogValue): log is ButtonLogValue;
declare const buttonLogSchema: yup.ObjectSchema<{
    uid: string;
    createdAt: yup.Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt: yup.Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    startTime: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
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
    commentCount: yup.Maybe<number | undefined>;
    commentsById: {} | null | undefined;
    commentsByTacticId: {
        [x: string]: {
            tacticTitle: string;
            comments: any[];
        };
    } | null | undefined;
    steps: yup.Maybe<number | undefined>;
    strategy: {
        impulseDebrief?: {
            conditionalTacticIds?: {
                [x: string]: any[];
            } | null | undefined;
            tacticIds: any[];
            suggestedTacticIds: any[];
        } | null | undefined;
        main: {
            conditionalTacticIds?: {
                [x: string]: any[];
            } | null | undefined;
            tacticIds: any[];
            suggestedTacticIds: any[];
        };
    };
    tacticsById: any;
    seenTacticIds: any[];
    completedTacticIds: any[];
    tacticLikes: {
        [x: string]: NonNullable<boolean | undefined>;
    } | null | undefined;
    tacticData: {
        [x: string]: {
            lowEmoji?: yup.Maybe<string | undefined>;
            highEmoji?: yup.Maybe<string | undefined>;
            isTotal?: yup.Maybe<boolean | undefined>;
            value: number;
            unit: string;
            formattedValue: string;
        };
    } | null | undefined;
    sharedWithSupportGroupIds: string[] | undefined;
} & {
    type: "button";
    isDisplayable: NonNullable<boolean | undefined>;
    isDeviceConnected: NonNullable<boolean | undefined>;
    characteristics: {};
}, yup.AnyObject, {
    uid: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    startTime: {
        seconds: undefined;
        nanoseconds: undefined;
        toDate: undefined;
    };
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
    commentCount: undefined;
    commentsById: {};
    commentsByTacticId: undefined;
    steps: undefined;
    strategy: {
        main: {
            tacticIds: "";
            suggestedTacticIds: "";
            conditionalTacticIds: undefined;
        };
        impulseDebrief: {
            tacticIds: "";
            suggestedTacticIds: "";
            conditionalTacticIds: undefined;
        };
    };
    tacticsById: any;
    seenTacticIds: "";
    completedTacticIds: "";
    tacticLikes: undefined;
    tacticData: undefined;
    sharedWithSupportGroupIds: "";
    type: undefined;
    isDisplayable: undefined;
    isDeviceConnected: undefined;
    characteristics: {};
}, "">;
export declare const logSchema: yup.Lazy<{
    createdAt?: yup.Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt?: yup.Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    tacticsById?: any;
    steps?: yup.Maybe<number | undefined>;
    locationFormatted?: yup.Maybe<string | undefined>;
    commentCount?: yup.Maybe<number | undefined>;
    commentsById?: {} | null | undefined;
    commentsByTacticId?: {
        [x: string]: {
            tacticTitle: string;
            comments: any[];
        };
    } | null | undefined;
    tacticLikes?: {
        [x: string]: NonNullable<boolean | undefined>;
    } | null | undefined;
    tacticData?: {
        [x: string]: {
            lowEmoji?: yup.Maybe<string | undefined>;
            highEmoji?: yup.Maybe<string | undefined>;
            isTotal?: yup.Maybe<boolean | undefined>;
            value: number;
            unit: string;
            formattedValue: string;
        };
    } | null | undefined;
    sharedWithSupportGroupIds?: string[] | undefined;
    setAsActiveImpulse?: yup.Maybe<boolean | undefined>;
    pressCount?: yup.Maybe<number | undefined>;
    buttonPressSecondsSinceEpoch?: yup.Maybe<number | undefined>;
    outcome?: Outcome | undefined;
    debriefNotes?: yup.Maybe<string | undefined>;
    debriefReminderSentAt?: yup.Maybe<{} | undefined>;
    debriefedAt?: yup.Maybe<{} | undefined>;
    uid: string;
    type: "impulse";
    strategy: {
        impulseDebrief?: {
            conditionalTacticIds?: {
                [x: string]: any[];
            } | null | undefined;
            tacticIds: any[];
            suggestedTacticIds: any[];
        } | null | undefined;
        main: {
            conditionalTacticIds?: {
                [x: string]: any[];
            } | null | undefined;
            tacticIds: any[];
            suggestedTacticIds: any[];
        };
    };
    patternsById: {
        [x: string]: {
            createdAt?: yup.Maybe<{} | undefined> | {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt?: yup.Maybe<{} | undefined> | {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            supportGroupIds?: string[] | undefined;
            notification?: {
                title: string;
                body: string;
            } | null | undefined;
            setbackTacticId?: yup.Maybe<string | undefined>;
            issueId?: yup.Maybe<string | undefined>;
            parentIssueIds?: string[] | undefined;
            uid: string;
            name: string;
            ordinal: number;
            setbackThreshold: number;
            sendWeeklyReports: NonNullable<boolean | undefined>;
        };
    };
    startTime: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
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
    seenTacticIds: any[];
    completedTacticIds: any[];
    isDisplayable: NonNullable<boolean | undefined>;
    gameplan: {
        createdAt?: yup.Maybe<{} | undefined> | {
            seconds: number;
            nanoseconds: number;
            toDate: {};
        };
        updatedAt?: yup.Maybe<{} | undefined> | {
            seconds: number;
            nanoseconds: number;
            toDate: {};
        };
        parentIssueIds?: string[] | undefined;
        tacticsById?: any;
        recommendationsCount?: number | undefined;
        dayDebrief?: {
            title: string;
            weekdays: any[];
            hour: number;
            minute: number;
            strategy: {
                conditionalTacticIds?: {
                    [x: string]: any[];
                } | null | undefined;
                tacticIds: any[];
                suggestedTacticIds: any[];
            };
        } | undefined;
        scheduledNotificationIds?: string[] | undefined;
        uid: string;
        impulse: {
            [x: string]: {
                conditionalTacticIds?: {
                    [x: string]: any[];
                } | null | undefined;
                tacticIds: any[];
                suggestedTacticIds: any[];
            };
        };
        impulseDebrief: {
            [x: string]: {
                conditionalTacticIds?: {
                    [x: string]: any[];
                } | null | undefined;
                tacticIds: any[];
                suggestedTacticIds: any[];
            };
        };
        time: any[];
        locations: any[];
        patternsById: {
            [x: string]: {
                createdAt?: yup.Maybe<{} | undefined> | {
                    seconds: number;
                    nanoseconds: number;
                    toDate: {};
                };
                updatedAt?: yup.Maybe<{} | undefined> | {
                    seconds: number;
                    nanoseconds: number;
                    toDate: {};
                };
                supportGroupIds?: string[] | undefined;
                notification?: {
                    title: string;
                    body: string;
                } | null | undefined;
                setbackTacticId?: yup.Maybe<string | undefined>;
                issueId?: yup.Maybe<string | undefined>;
                parentIssueIds?: string[] | undefined;
                uid: string;
                name: string;
                ordinal: number;
                setbackThreshold: number;
                sendWeeklyReports: NonNullable<boolean | undefined>;
            };
        };
    };
    patternId: string;
} | {
    createdAt?: yup.Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt?: yup.Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    tacticsById?: any;
    steps?: yup.Maybe<number | undefined>;
    locationFormatted?: yup.Maybe<string | undefined>;
    commentCount?: yup.Maybe<number | undefined>;
    commentsById?: {} | null | undefined;
    commentsByTacticId?: {
        [x: string]: {
            tacticTitle: string;
            comments: any[];
        };
    } | null | undefined;
    tacticLikes?: {
        [x: string]: NonNullable<boolean | undefined>;
    } | null | undefined;
    tacticData?: {
        [x: string]: {
            lowEmoji?: yup.Maybe<string | undefined>;
            highEmoji?: yup.Maybe<string | undefined>;
            isTotal?: yup.Maybe<boolean | undefined>;
            value: number;
            unit: string;
            formattedValue: string;
        };
    } | null | undefined;
    sharedWithSupportGroupIds?: string[] | undefined;
    uid: string;
    type: "location";
    strategy: {
        impulseDebrief?: {
            conditionalTacticIds?: {
                [x: string]: any[];
            } | null | undefined;
            tacticIds: any[];
            suggestedTacticIds: any[];
        } | null | undefined;
        main: {
            conditionalTacticIds?: {
                [x: string]: any[];
            } | null | undefined;
            tacticIds: any[];
            suggestedTacticIds: any[];
        };
    };
    startTime: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
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
    seenTacticIds: any[];
    completedTacticIds: any[];
    isDisplayable: NonNullable<boolean | undefined>;
    locationId: string;
    locationName: string;
    locationMode: {};
} | {
    createdAt?: yup.Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt?: yup.Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    tacticsById?: any;
    steps?: yup.Maybe<number | undefined>;
    locationFormatted?: yup.Maybe<string | undefined>;
    commentCount?: yup.Maybe<number | undefined>;
    commentsById?: {} | null | undefined;
    commentsByTacticId?: {
        [x: string]: {
            tacticTitle: string;
            comments: any[];
        };
    } | null | undefined;
    tacticLikes?: {
        [x: string]: NonNullable<boolean | undefined>;
    } | null | undefined;
    tacticData?: {
        [x: string]: {
            lowEmoji?: yup.Maybe<string | undefined>;
            highEmoji?: yup.Maybe<string | undefined>;
            isTotal?: yup.Maybe<boolean | undefined>;
            value: number;
            unit: string;
            formattedValue: string;
        };
    } | null | undefined;
    sharedWithSupportGroupIds?: string[] | undefined;
    uid: string;
    type: "time";
    strategy: {
        impulseDebrief?: {
            conditionalTacticIds?: {
                [x: string]: any[];
            } | null | undefined;
            tacticIds: any[];
            suggestedTacticIds: any[];
        } | null | undefined;
        main: {
            conditionalTacticIds?: {
                [x: string]: any[];
            } | null | undefined;
            tacticIds: any[];
            suggestedTacticIds: any[];
        };
    };
    startTime: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
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
    seenTacticIds: any[];
    completedTacticIds: any[];
    isDisplayable: NonNullable<boolean | undefined>;
    routineId: string;
} | {
    createdAt?: yup.Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt?: yup.Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    tacticsById?: any;
    steps?: yup.Maybe<number | undefined>;
    locationFormatted?: yup.Maybe<string | undefined>;
    commentCount?: yup.Maybe<number | undefined>;
    commentsById?: {} | null | undefined;
    commentsByTacticId?: {
        [x: string]: {
            tacticTitle: string;
            comments: any[];
        };
    } | null | undefined;
    tacticLikes?: {
        [x: string]: NonNullable<boolean | undefined>;
    } | null | undefined;
    tacticData?: {
        [x: string]: {
            lowEmoji?: yup.Maybe<string | undefined>;
            highEmoji?: yup.Maybe<string | undefined>;
            isTotal?: yup.Maybe<boolean | undefined>;
            value: number;
            unit: string;
            formattedValue: string;
        };
    } | null | undefined;
    sharedWithSupportGroupIds?: string[] | undefined;
    uid: string;
    type: "dayDebrief";
    strategy: {
        impulseDebrief?: {
            conditionalTacticIds?: {
                [x: string]: any[];
            } | null | undefined;
            tacticIds: any[];
            suggestedTacticIds: any[];
        } | null | undefined;
        main: {
            conditionalTacticIds?: {
                [x: string]: any[];
            } | null | undefined;
            tacticIds: any[];
            suggestedTacticIds: any[];
        };
    };
    patternsById: {
        [x: string]: {
            createdAt?: yup.Maybe<{} | undefined> | {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            updatedAt?: yup.Maybe<{} | undefined> | {
                seconds: number;
                nanoseconds: number;
                toDate: {};
            };
            supportGroupIds?: string[] | undefined;
            notification?: {
                title: string;
                body: string;
            } | null | undefined;
            setbackTacticId?: yup.Maybe<string | undefined>;
            issueId?: yup.Maybe<string | undefined>;
            parentIssueIds?: string[] | undefined;
            uid: string;
            name: string;
            ordinal: number;
            setbackThreshold: number;
            sendWeeklyReports: NonNullable<boolean | undefined>;
        };
    };
    startTime: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
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
    seenTacticIds: any[];
    completedTacticIds: any[];
    isDisplayable: NonNullable<boolean | undefined>;
    routineId: string;
    tacticDataEntries: {
        [x: string]: {} | undefined;
    };
} | {
    createdAt?: yup.Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt?: yup.Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    tacticsById?: any;
    steps?: yup.Maybe<number | undefined>;
    locationFormatted?: yup.Maybe<string | undefined>;
    commentCount?: yup.Maybe<number | undefined>;
    commentsById?: {} | null | undefined;
    commentsByTacticId?: {
        [x: string]: {
            tacticTitle: string;
            comments: any[];
        };
    } | null | undefined;
    tacticLikes?: {
        [x: string]: NonNullable<boolean | undefined>;
    } | null | undefined;
    tacticData?: {
        [x: string]: {
            lowEmoji?: yup.Maybe<string | undefined>;
            highEmoji?: yup.Maybe<string | undefined>;
            isTotal?: yup.Maybe<boolean | undefined>;
            value: number;
            unit: string;
            formattedValue: string;
        };
    } | null | undefined;
    sharedWithSupportGroupIds?: string[] | undefined;
    uid: string;
    type: "motion";
    strategy: {
        impulseDebrief?: {
            conditionalTacticIds?: {
                [x: string]: any[];
            } | null | undefined;
            tacticIds: any[];
            suggestedTacticIds: any[];
        } | null | undefined;
        main: {
            conditionalTacticIds?: {
                [x: string]: any[];
            } | null | undefined;
            tacticIds: any[];
            suggestedTacticIds: any[];
        };
    };
    startTime: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
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
    seenTacticIds: any[];
    completedTacticIds: any[];
    isDisplayable: NonNullable<boolean | undefined>;
} | {
    createdAt?: yup.Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt?: yup.Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    tacticsById?: any;
    steps?: yup.Maybe<number | undefined>;
    locationFormatted?: yup.Maybe<string | undefined>;
    commentCount?: yup.Maybe<number | undefined>;
    commentsById?: {} | null | undefined;
    commentsByTacticId?: {
        [x: string]: {
            tacticTitle: string;
            comments: any[];
        };
    } | null | undefined;
    tacticLikes?: {
        [x: string]: NonNullable<boolean | undefined>;
    } | null | undefined;
    tacticData?: {
        [x: string]: {
            lowEmoji?: yup.Maybe<string | undefined>;
            highEmoji?: yup.Maybe<string | undefined>;
            isTotal?: yup.Maybe<boolean | undefined>;
            value: number;
            unit: string;
            formattedValue: string;
        };
    } | null | undefined;
    sharedWithSupportGroupIds?: string[] | undefined;
    uid: string;
    type: "button";
    strategy: {
        impulseDebrief?: {
            conditionalTacticIds?: {
                [x: string]: any[];
            } | null | undefined;
            tacticIds: any[];
            suggestedTacticIds: any[];
        } | null | undefined;
        main: {
            conditionalTacticIds?: {
                [x: string]: any[];
            } | null | undefined;
            tacticIds: any[];
            suggestedTacticIds: any[];
        };
    };
    startTime: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
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
    seenTacticIds: any[];
    completedTacticIds: any[];
    isDisplayable: NonNullable<boolean | undefined>;
    isDeviceConnected: NonNullable<boolean | undefined>;
    characteristics: {};
}, yup.AnyObject, any>;
export type LogValue = ImpulseLogValue | LocationLogValue | TimeLogValue | DebriefLogValue | MotionLogValue | ButtonLogValue;
export {};
