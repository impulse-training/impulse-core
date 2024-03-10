import * as yup from 'yup';
import { TimestampLike } from '../utils/TimestampLike';
import { TacticValue, WithTacticsById } from './tactic';
type Outcome = 'success' | 'setback';
export declare const tacticDataSchema: yup.ObjectSchema<{
    value: number;
    formattedValue: string;
    isTotal: yup.Maybe<boolean | undefined>;
    lowEmoji: yup.Maybe<string | undefined>;
    highEmoji: yup.Maybe<string | undefined>;
}, yup.AnyObject, {
    value: undefined;
    formattedValue: undefined;
    isTotal: undefined;
    lowEmoji: undefined;
    highEmoji: undefined;
}, "">;
export type TacticData = yup.InferType<typeof tacticDataSchema>;
export type BaseLogValue = WithTypes<typeof baseLogSchema>;
declare const baseLogSchema: yup.ObjectSchema<{
    uid: string;
    createdAt: TimestampLike | yup.Maybe<null>;
    updatedAt: TimestampLike | yup.Maybe<null>;
    startTime: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
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
            commentsById: {
                [x: string]: {
                    createdAt?: TimestampLike | yup.Maybe<null>;
                    updatedAt?: TimestampLike | yup.Maybe<null>;
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
                        localFilePath?: yup.Maybe<string | undefined>;
                        storagePath?: yup.Maybe<string | undefined>;
                        uri?: yup.Maybe<string | undefined>;
                    } | undefined;
                    uid: string;
                    authorName: string;
                };
            };
            tacticTitle: string;
        };
    } | null | undefined;
    steps: yup.Maybe<number | undefined>;
    strategy: {
        success?: {
            suggestedTacticIds?: string[] | undefined;
            tacticIds: string[];
        } | null | undefined;
        setback?: {
            suggestedTacticIds?: string[] | undefined;
            tacticIds: string[];
        } | null | undefined;
        measureTacticId?: yup.Maybe<string | undefined>;
        main: {
            suggestedTacticIds?: string[] | undefined;
            tacticIds: string[];
        };
    };
    seenStrategy: {
        [x: string]: string[];
    };
    tacticsById: any;
    completedTacticIds: string[];
    tacticLikes: {
        [x: string]: NonNullable<boolean | undefined>;
    } | null | undefined;
    tacticData: {
        [x: string]: {
            lowEmoji?: yup.Maybe<string | undefined>;
            highEmoji?: yup.Maybe<string | undefined>;
            isTotal?: yup.Maybe<boolean | undefined>;
            value: number;
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
        };
        success: {
            tacticIds: "";
            suggestedTacticIds: "";
        };
        setback: {
            tacticIds: "";
            suggestedTacticIds: "";
        };
        measureTacticId: undefined;
    };
    seenStrategy: undefined;
    tacticsById: any;
    completedTacticIds: "";
    tacticLikes: undefined;
    tacticData: undefined;
    sharedWithSupportGroupIds: "";
}, "">;
type WithTypes<T extends yup.ISchema<unknown>> = WithTacticsById<Omit<yup.InferType<T>, 'createdAt' | 'updatedAt' | 'startTime' | 'tacticsById'>> & {
    createdAt: TimestampLike;
    updatedAt: TimestampLike;
    startTime: TimestampLike;
    tacticsById: Record<string, TacticValue>;
};
export type ImpulseLogValue = WithTypes<typeof impulseLogSchema>;
export declare function logIsImpulseLog(log: LogValue): log is ImpulseLogValue;
declare const impulseLogSchema: yup.ObjectSchema<{
    uid: string;
    createdAt: TimestampLike | yup.Maybe<null>;
    updatedAt: TimestampLike | yup.Maybe<null>;
    startTime: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
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
            commentsById: {
                [x: string]: {
                    createdAt?: TimestampLike | yup.Maybe<null>;
                    updatedAt?: TimestampLike | yup.Maybe<null>;
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
                        localFilePath?: yup.Maybe<string | undefined>;
                        storagePath?: yup.Maybe<string | undefined>;
                        uri?: yup.Maybe<string | undefined>;
                    } | undefined;
                    uid: string;
                    authorName: string;
                };
            };
            tacticTitle: string;
        };
    } | null | undefined;
    steps: yup.Maybe<number | undefined>;
    strategy: {
        success?: {
            suggestedTacticIds?: string[] | undefined;
            tacticIds: string[];
        } | null | undefined;
        setback?: {
            suggestedTacticIds?: string[] | undefined;
            tacticIds: string[];
        } | null | undefined;
        measureTacticId?: yup.Maybe<string | undefined>;
        main: {
            suggestedTacticIds?: string[] | undefined;
            tacticIds: string[];
        };
    };
    seenStrategy: {
        [x: string]: string[];
    };
    tacticsById: any;
    completedTacticIds: string[];
    tacticLikes: {
        [x: string]: NonNullable<boolean | undefined>;
    } | null | undefined;
    tacticData: {
        [x: string]: {
            lowEmoji?: yup.Maybe<string | undefined>;
            highEmoji?: yup.Maybe<string | undefined>;
            isTotal?: yup.Maybe<boolean | undefined>;
            value: number;
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
        createdAt?: TimestampLike | yup.Maybe<null>;
        updatedAt?: TimestampLike | yup.Maybe<null>;
        tacticsById?: any;
        name?: yup.Maybe<string | undefined>;
        programId?: yup.Maybe<string | undefined>;
        parentIssueIds?: string[] | undefined;
        time?: {
            [x: string]: {
                suggestedTacticIds?: string[] | undefined;
                title: string;
                tacticIds: string[];
                weekdays: number[];
                hour: number;
                minute: number;
            };
        } | null | undefined;
        location?: {
            [x: string]: {
                suggestedTacticIds?: string[] | undefined;
                title: string;
                tacticIds: string[];
                locationId: string;
                mode: NonNullable<"enter" | "exit" | undefined>;
            };
        } | null | undefined;
        scheduledNotificationIds?: string[] | undefined;
        uid: string;
        main: {
            [x: string]: {
                suggestedTacticIds?: string[] | undefined;
                tacticIds: string[];
            };
        };
        success: {
            [x: string]: {
                suggestedTacticIds?: string[] | undefined;
                tacticIds: string[];
            };
        };
        setback: {
            [x: string]: {
                suggestedTacticIds?: string[] | undefined;
                tacticIds: string[];
            };
        };
        measureTacticIds: {
            [x: string]: string;
        };
    };
    outcome: Outcome | undefined;
    patternId: string;
    patternsById: {
        [x: string]: {
            createdAt?: TimestampLike | yup.Maybe<null>;
            updatedAt?: TimestampLike | yup.Maybe<null>;
            parentIssueIds?: string[] | undefined;
            supportGroupIds?: string[] | undefined;
            notification?: yup.Maybe<{} | undefined> | {
                title: string;
                body: string;
            };
            dailySetbackThreshold?: yup.Maybe<number | undefined>;
            setbackThreshold?: yup.Maybe<number | undefined>;
            issueId?: yup.Maybe<string | undefined>;
            sendWeeklyReports?: yup.Maybe<boolean | undefined>;
            uid: string;
            name: string;
            ordinal: number;
            measureTactic: {
                createdAt?: TimestampLike | yup.Maybe<null>;
                updatedAt?: TimestampLike | yup.Maybe<null>;
                uid?: string | null | undefined;
                sourceId?: string | undefined;
                subtitle?: yup.Maybe<string | undefined>;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    storagePath?: yup.Maybe<string | undefined>;
                    uri?: yup.Maybe<string | undefined>;
                } | null | undefined;
                isTemplate?: boolean | null | undefined;
                language?: string | null | undefined;
                href?: string | null | undefined;
                categoryIds?: (string | undefined)[] | null | undefined;
                isShared?: boolean | null | undefined;
                isResponseRequired?: boolean | null | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
                isAvailableForRecommendation?: boolean | null | undefined;
                numberOfLikes?: number | null | undefined;
                isSuggested?: boolean | undefined;
                lowEmoji?: yup.Maybe<string | undefined>;
                highEmoji?: yup.Maybe<string | undefined>;
                type: "measure-slider";
                title: string;
                backgroundColor: string;
            } | {
                createdAt?: TimestampLike | yup.Maybe<null>;
                updatedAt?: TimestampLike | yup.Maybe<null>;
                uid?: string | null | undefined;
                sourceId?: string | undefined;
                subtitle?: yup.Maybe<string | undefined>;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    storagePath?: yup.Maybe<string | undefined>;
                    uri?: yup.Maybe<string | undefined>;
                } | null | undefined;
                isTemplate?: boolean | null | undefined;
                language?: string | null | undefined;
                href?: string | null | undefined;
                categoryIds?: (string | undefined)[] | null | undefined;
                isShared?: boolean | null | undefined;
                isResponseRequired?: boolean | null | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
                isAvailableForRecommendation?: boolean | null | undefined;
                numberOfLikes?: number | null | undefined;
                isSuggested?: boolean | undefined;
                type: "measure-time";
                title: string;
                backgroundColor: string;
            } | {
                createdAt?: TimestampLike | yup.Maybe<null>;
                updatedAt?: TimestampLike | yup.Maybe<null>;
                uid?: string | null | undefined;
                sourceId?: string | undefined;
                subtitle?: yup.Maybe<string | undefined>;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    storagePath?: yup.Maybe<string | undefined>;
                    uri?: yup.Maybe<string | undefined>;
                } | null | undefined;
                isTemplate?: boolean | null | undefined;
                language?: string | null | undefined;
                href?: string | null | undefined;
                categoryIds?: (string | undefined)[] | null | undefined;
                isShared?: boolean | null | undefined;
                isResponseRequired?: boolean | null | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
                isAvailableForRecommendation?: boolean | null | undefined;
                numberOfLikes?: number | null | undefined;
                isSuggested?: boolean | undefined;
                type: "measure-counter";
                title: string;
                backgroundColor: string;
            };
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
        };
        success: {
            tacticIds: "";
            suggestedTacticIds: "";
        };
        setback: {
            tacticIds: "";
            suggestedTacticIds: "";
        };
        measureTacticId: undefined;
    };
    seenStrategy: undefined;
    tacticsById: any;
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
        name: undefined;
        programId: undefined;
        createdAt: undefined;
        updatedAt: undefined;
        parentIssueIds: "";
        main: undefined;
        setback: undefined;
        success: undefined;
        measureTacticIds: undefined;
        time: undefined;
        location: undefined;
        tacticsById: any;
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
    createdAt: TimestampLike | yup.Maybe<null>;
    updatedAt: TimestampLike | yup.Maybe<null>;
    startTime: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
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
            commentsById: {
                [x: string]: {
                    createdAt?: TimestampLike | yup.Maybe<null>;
                    updatedAt?: TimestampLike | yup.Maybe<null>;
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
                        localFilePath?: yup.Maybe<string | undefined>;
                        storagePath?: yup.Maybe<string | undefined>;
                        uri?: yup.Maybe<string | undefined>;
                    } | undefined;
                    uid: string;
                    authorName: string;
                };
            };
            tacticTitle: string;
        };
    } | null | undefined;
    steps: yup.Maybe<number | undefined>;
    strategy: {
        success?: {
            suggestedTacticIds?: string[] | undefined;
            tacticIds: string[];
        } | null | undefined;
        setback?: {
            suggestedTacticIds?: string[] | undefined;
            tacticIds: string[];
        } | null | undefined;
        measureTacticId?: yup.Maybe<string | undefined>;
        main: {
            suggestedTacticIds?: string[] | undefined;
            tacticIds: string[];
        };
    };
    seenStrategy: {
        [x: string]: string[];
    };
    tacticsById: any;
    completedTacticIds: string[];
    tacticLikes: {
        [x: string]: NonNullable<boolean | undefined>;
    } | null | undefined;
    tacticData: {
        [x: string]: {
            lowEmoji?: yup.Maybe<string | undefined>;
            highEmoji?: yup.Maybe<string | undefined>;
            isTotal?: yup.Maybe<boolean | undefined>;
            value: number;
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
        };
        success: {
            tacticIds: "";
            suggestedTacticIds: "";
        };
        setback: {
            tacticIds: "";
            suggestedTacticIds: "";
        };
        measureTacticId: undefined;
    };
    seenStrategy: undefined;
    tacticsById: any;
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
    createdAt: TimestampLike | yup.Maybe<null>;
    updatedAt: TimestampLike | yup.Maybe<null>;
    startTime: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
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
            commentsById: {
                [x: string]: {
                    createdAt?: TimestampLike | yup.Maybe<null>;
                    updatedAt?: TimestampLike | yup.Maybe<null>;
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
                        localFilePath?: yup.Maybe<string | undefined>;
                        storagePath?: yup.Maybe<string | undefined>;
                        uri?: yup.Maybe<string | undefined>;
                    } | undefined;
                    uid: string;
                    authorName: string;
                };
            };
            tacticTitle: string;
        };
    } | null | undefined;
    steps: yup.Maybe<number | undefined>;
    strategy: {
        success?: {
            suggestedTacticIds?: string[] | undefined;
            tacticIds: string[];
        } | null | undefined;
        setback?: {
            suggestedTacticIds?: string[] | undefined;
            tacticIds: string[];
        } | null | undefined;
        measureTacticId?: yup.Maybe<string | undefined>;
        main: {
            suggestedTacticIds?: string[] | undefined;
            tacticIds: string[];
        };
    };
    seenStrategy: {
        [x: string]: string[];
    };
    tacticsById: any;
    completedTacticIds: string[];
    tacticLikes: {
        [x: string]: NonNullable<boolean | undefined>;
    } | null | undefined;
    tacticData: {
        [x: string]: {
            lowEmoji?: yup.Maybe<string | undefined>;
            highEmoji?: yup.Maybe<string | undefined>;
            isTotal?: yup.Maybe<boolean | undefined>;
            value: number;
            formattedValue: string;
        };
    } | null | undefined;
    sharedWithSupportGroupIds: string[] | undefined;
} & {
    type: "time";
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
        };
        success: {
            tacticIds: "";
            suggestedTacticIds: "";
        };
        setback: {
            tacticIds: "";
            suggestedTacticIds: "";
        };
        measureTacticId: undefined;
    };
    seenStrategy: undefined;
    tacticsById: any;
    completedTacticIds: "";
    tacticLikes: undefined;
    tacticData: undefined;
    sharedWithSupportGroupIds: "";
    type: undefined;
    isDisplayable: undefined;
}, "">;
export type MotionLogValue = WithTypes<typeof motionLogSchema>;
export declare function logIsMotionLog(log: LogValue): log is MotionLogValue;
declare const motionLogSchema: yup.ObjectSchema<{
    uid: string;
    createdAt: TimestampLike | yup.Maybe<null>;
    updatedAt: TimestampLike | yup.Maybe<null>;
    startTime: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
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
            commentsById: {
                [x: string]: {
                    createdAt?: TimestampLike | yup.Maybe<null>;
                    updatedAt?: TimestampLike | yup.Maybe<null>;
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
                        localFilePath?: yup.Maybe<string | undefined>;
                        storagePath?: yup.Maybe<string | undefined>;
                        uri?: yup.Maybe<string | undefined>;
                    } | undefined;
                    uid: string;
                    authorName: string;
                };
            };
            tacticTitle: string;
        };
    } | null | undefined;
    steps: yup.Maybe<number | undefined>;
    strategy: {
        success?: {
            suggestedTacticIds?: string[] | undefined;
            tacticIds: string[];
        } | null | undefined;
        setback?: {
            suggestedTacticIds?: string[] | undefined;
            tacticIds: string[];
        } | null | undefined;
        measureTacticId?: yup.Maybe<string | undefined>;
        main: {
            suggestedTacticIds?: string[] | undefined;
            tacticIds: string[];
        };
    };
    seenStrategy: {
        [x: string]: string[];
    };
    tacticsById: any;
    completedTacticIds: string[];
    tacticLikes: {
        [x: string]: NonNullable<boolean | undefined>;
    } | null | undefined;
    tacticData: {
        [x: string]: {
            lowEmoji?: yup.Maybe<string | undefined>;
            highEmoji?: yup.Maybe<string | undefined>;
            isTotal?: yup.Maybe<boolean | undefined>;
            value: number;
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
        };
        success: {
            tacticIds: "";
            suggestedTacticIds: "";
        };
        setback: {
            tacticIds: "";
            suggestedTacticIds: "";
        };
        measureTacticId: undefined;
    };
    seenStrategy: undefined;
    tacticsById: any;
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
    createdAt: TimestampLike | yup.Maybe<null>;
    updatedAt: TimestampLike | yup.Maybe<null>;
    startTime: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
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
            commentsById: {
                [x: string]: {
                    createdAt?: TimestampLike | yup.Maybe<null>;
                    updatedAt?: TimestampLike | yup.Maybe<null>;
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
                        localFilePath?: yup.Maybe<string | undefined>;
                        storagePath?: yup.Maybe<string | undefined>;
                        uri?: yup.Maybe<string | undefined>;
                    } | undefined;
                    uid: string;
                    authorName: string;
                };
            };
            tacticTitle: string;
        };
    } | null | undefined;
    steps: yup.Maybe<number | undefined>;
    strategy: {
        success?: {
            suggestedTacticIds?: string[] | undefined;
            tacticIds: string[];
        } | null | undefined;
        setback?: {
            suggestedTacticIds?: string[] | undefined;
            tacticIds: string[];
        } | null | undefined;
        measureTacticId?: yup.Maybe<string | undefined>;
        main: {
            suggestedTacticIds?: string[] | undefined;
            tacticIds: string[];
        };
    };
    seenStrategy: {
        [x: string]: string[];
    };
    tacticsById: any;
    completedTacticIds: string[];
    tacticLikes: {
        [x: string]: NonNullable<boolean | undefined>;
    } | null | undefined;
    tacticData: {
        [x: string]: {
            lowEmoji?: yup.Maybe<string | undefined>;
            highEmoji?: yup.Maybe<string | undefined>;
            isTotal?: yup.Maybe<boolean | undefined>;
            value: number;
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
        };
        success: {
            tacticIds: "";
            suggestedTacticIds: "";
        };
        setback: {
            tacticIds: "";
            suggestedTacticIds: "";
        };
        measureTacticId: undefined;
    };
    seenStrategy: undefined;
    tacticsById: any;
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
    createdAt?: TimestampLike | yup.Maybe<null>;
    updatedAt?: TimestampLike | yup.Maybe<null>;
    tacticsById?: any;
    steps?: yup.Maybe<number | undefined>;
    locationFormatted?: yup.Maybe<string | undefined>;
    commentCount?: yup.Maybe<number | undefined>;
    commentsById?: {} | null | undefined;
    commentsByTacticId?: {
        [x: string]: {
            commentsById: {
                [x: string]: {
                    createdAt?: TimestampLike | yup.Maybe<null>;
                    updatedAt?: TimestampLike | yup.Maybe<null>;
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
                        localFilePath?: yup.Maybe<string | undefined>;
                        storagePath?: yup.Maybe<string | undefined>;
                        uri?: yup.Maybe<string | undefined>;
                    } | undefined;
                    uid: string;
                    authorName: string;
                };
            };
            tacticTitle: string;
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
    location: {
        latitude?: number | undefined;
        longitude?: number | undefined;
        altitude?: number | undefined;
        accuracy?: number | undefined;
        altitudeAccuracy?: number | undefined;
        heading?: number | undefined;
        speed?: number | undefined;
    };
    startTime: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    };
    timezone: string;
    locationIsFetching: NonNullable<boolean | undefined>;
    strategy: {
        success?: {
            suggestedTacticIds?: string[] | undefined;
            tacticIds: string[];
        } | null | undefined;
        setback?: {
            suggestedTacticIds?: string[] | undefined;
            tacticIds: string[];
        } | null | undefined;
        measureTacticId?: yup.Maybe<string | undefined>;
        main: {
            suggestedTacticIds?: string[] | undefined;
            tacticIds: string[];
        };
    };
    seenStrategy: {
        [x: string]: string[];
    };
    completedTacticIds: string[];
    isDisplayable: NonNullable<boolean | undefined>;
    gameplan: {
        createdAt?: TimestampLike | yup.Maybe<null>;
        updatedAt?: TimestampLike | yup.Maybe<null>;
        tacticsById?: any;
        name?: yup.Maybe<string | undefined>;
        programId?: yup.Maybe<string | undefined>;
        parentIssueIds?: string[] | undefined;
        time?: {
            [x: string]: {
                suggestedTacticIds?: string[] | undefined;
                title: string;
                tacticIds: string[];
                weekdays: number[];
                hour: number;
                minute: number;
            };
        } | null | undefined;
        location?: {
            [x: string]: {
                suggestedTacticIds?: string[] | undefined;
                title: string;
                tacticIds: string[];
                locationId: string;
                mode: NonNullable<"enter" | "exit" | undefined>;
            };
        } | null | undefined;
        scheduledNotificationIds?: string[] | undefined;
        uid: string;
        main: {
            [x: string]: {
                suggestedTacticIds?: string[] | undefined;
                tacticIds: string[];
            };
        };
        success: {
            [x: string]: {
                suggestedTacticIds?: string[] | undefined;
                tacticIds: string[];
            };
        };
        setback: {
            [x: string]: {
                suggestedTacticIds?: string[] | undefined;
                tacticIds: string[];
            };
        };
        measureTacticIds: {
            [x: string]: string;
        };
    };
    patternId: string;
    patternsById: {
        [x: string]: {
            createdAt?: TimestampLike | yup.Maybe<null>;
            updatedAt?: TimestampLike | yup.Maybe<null>;
            parentIssueIds?: string[] | undefined;
            supportGroupIds?: string[] | undefined;
            notification?: yup.Maybe<{} | undefined> | {
                title: string;
                body: string;
            };
            dailySetbackThreshold?: yup.Maybe<number | undefined>;
            setbackThreshold?: yup.Maybe<number | undefined>;
            issueId?: yup.Maybe<string | undefined>;
            sendWeeklyReports?: yup.Maybe<boolean | undefined>;
            uid: string;
            name: string;
            ordinal: number;
            measureTactic: {
                createdAt?: TimestampLike | yup.Maybe<null>;
                updatedAt?: TimestampLike | yup.Maybe<null>;
                uid?: string | null | undefined;
                sourceId?: string | undefined;
                subtitle?: yup.Maybe<string | undefined>;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    storagePath?: yup.Maybe<string | undefined>;
                    uri?: yup.Maybe<string | undefined>;
                } | null | undefined;
                isTemplate?: boolean | null | undefined;
                language?: string | null | undefined;
                href?: string | null | undefined;
                categoryIds?: (string | undefined)[] | null | undefined;
                isShared?: boolean | null | undefined;
                isResponseRequired?: boolean | null | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
                isAvailableForRecommendation?: boolean | null | undefined;
                numberOfLikes?: number | null | undefined;
                isSuggested?: boolean | undefined;
                lowEmoji?: yup.Maybe<string | undefined>;
                highEmoji?: yup.Maybe<string | undefined>;
                type: "measure-slider";
                title: string;
                backgroundColor: string;
            } | {
                createdAt?: TimestampLike | yup.Maybe<null>;
                updatedAt?: TimestampLike | yup.Maybe<null>;
                uid?: string | null | undefined;
                sourceId?: string | undefined;
                subtitle?: yup.Maybe<string | undefined>;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    storagePath?: yup.Maybe<string | undefined>;
                    uri?: yup.Maybe<string | undefined>;
                } | null | undefined;
                isTemplate?: boolean | null | undefined;
                language?: string | null | undefined;
                href?: string | null | undefined;
                categoryIds?: (string | undefined)[] | null | undefined;
                isShared?: boolean | null | undefined;
                isResponseRequired?: boolean | null | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
                isAvailableForRecommendation?: boolean | null | undefined;
                numberOfLikes?: number | null | undefined;
                isSuggested?: boolean | undefined;
                type: "measure-time";
                title: string;
                backgroundColor: string;
            } | {
                createdAt?: TimestampLike | yup.Maybe<null>;
                updatedAt?: TimestampLike | yup.Maybe<null>;
                uid?: string | null | undefined;
                sourceId?: string | undefined;
                subtitle?: yup.Maybe<string | undefined>;
                description?: string | null | undefined;
                image?: {
                    localFilePath?: yup.Maybe<string | undefined>;
                    storagePath?: yup.Maybe<string | undefined>;
                    uri?: yup.Maybe<string | undefined>;
                } | null | undefined;
                isTemplate?: boolean | null | undefined;
                language?: string | null | undefined;
                href?: string | null | undefined;
                categoryIds?: (string | undefined)[] | null | undefined;
                isShared?: boolean | null | undefined;
                isResponseRequired?: boolean | null | undefined;
                timerSeconds?: yup.Maybe<number | undefined>;
                isAvailableForRecommendation?: boolean | null | undefined;
                numberOfLikes?: number | null | undefined;
                isSuggested?: boolean | undefined;
                type: "measure-counter";
                title: string;
                backgroundColor: string;
            };
        };
    };
} | {
    createdAt?: TimestampLike | yup.Maybe<null>;
    updatedAt?: TimestampLike | yup.Maybe<null>;
    tacticsById?: any;
    steps?: yup.Maybe<number | undefined>;
    locationFormatted?: yup.Maybe<string | undefined>;
    commentCount?: yup.Maybe<number | undefined>;
    commentsById?: {} | null | undefined;
    commentsByTacticId?: {
        [x: string]: {
            commentsById: {
                [x: string]: {
                    createdAt?: TimestampLike | yup.Maybe<null>;
                    updatedAt?: TimestampLike | yup.Maybe<null>;
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
                        localFilePath?: yup.Maybe<string | undefined>;
                        storagePath?: yup.Maybe<string | undefined>;
                        uri?: yup.Maybe<string | undefined>;
                    } | undefined;
                    uid: string;
                    authorName: string;
                };
            };
            tacticTitle: string;
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
            formattedValue: string;
        };
    } | null | undefined;
    sharedWithSupportGroupIds?: string[] | undefined;
    uid: string;
    type: "location";
    locationId: string;
    location: {
        latitude?: number | undefined;
        longitude?: number | undefined;
        altitude?: number | undefined;
        accuracy?: number | undefined;
        altitudeAccuracy?: number | undefined;
        heading?: number | undefined;
        speed?: number | undefined;
    };
    startTime: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    };
    timezone: string;
    locationIsFetching: NonNullable<boolean | undefined>;
    strategy: {
        success?: {
            suggestedTacticIds?: string[] | undefined;
            tacticIds: string[];
        } | null | undefined;
        setback?: {
            suggestedTacticIds?: string[] | undefined;
            tacticIds: string[];
        } | null | undefined;
        measureTacticId?: yup.Maybe<string | undefined>;
        main: {
            suggestedTacticIds?: string[] | undefined;
            tacticIds: string[];
        };
    };
    seenStrategy: {
        [x: string]: string[];
    };
    completedTacticIds: string[];
    isDisplayable: NonNullable<boolean | undefined>;
    locationName: string;
    locationMode: {};
} | {
    createdAt?: TimestampLike | yup.Maybe<null>;
    updatedAt?: TimestampLike | yup.Maybe<null>;
    tacticsById?: any;
    steps?: yup.Maybe<number | undefined>;
    locationFormatted?: yup.Maybe<string | undefined>;
    commentCount?: yup.Maybe<number | undefined>;
    commentsById?: {} | null | undefined;
    commentsByTacticId?: {
        [x: string]: {
            commentsById: {
                [x: string]: {
                    createdAt?: TimestampLike | yup.Maybe<null>;
                    updatedAt?: TimestampLike | yup.Maybe<null>;
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
                        localFilePath?: yup.Maybe<string | undefined>;
                        storagePath?: yup.Maybe<string | undefined>;
                        uri?: yup.Maybe<string | undefined>;
                    } | undefined;
                    uid: string;
                    authorName: string;
                };
            };
            tacticTitle: string;
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
            formattedValue: string;
        };
    } | null | undefined;
    sharedWithSupportGroupIds?: string[] | undefined;
    uid: string;
    type: "time";
    location: {
        latitude?: number | undefined;
        longitude?: number | undefined;
        altitude?: number | undefined;
        accuracy?: number | undefined;
        altitudeAccuracy?: number | undefined;
        heading?: number | undefined;
        speed?: number | undefined;
    };
    startTime: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    };
    timezone: string;
    locationIsFetching: NonNullable<boolean | undefined>;
    strategy: {
        success?: {
            suggestedTacticIds?: string[] | undefined;
            tacticIds: string[];
        } | null | undefined;
        setback?: {
            suggestedTacticIds?: string[] | undefined;
            tacticIds: string[];
        } | null | undefined;
        measureTacticId?: yup.Maybe<string | undefined>;
        main: {
            suggestedTacticIds?: string[] | undefined;
            tacticIds: string[];
        };
    };
    seenStrategy: {
        [x: string]: string[];
    };
    completedTacticIds: string[];
    isDisplayable: NonNullable<boolean | undefined>;
} | {
    createdAt?: TimestampLike | yup.Maybe<null>;
    updatedAt?: TimestampLike | yup.Maybe<null>;
    tacticsById?: any;
    steps?: yup.Maybe<number | undefined>;
    locationFormatted?: yup.Maybe<string | undefined>;
    commentCount?: yup.Maybe<number | undefined>;
    commentsById?: {} | null | undefined;
    commentsByTacticId?: {
        [x: string]: {
            commentsById: {
                [x: string]: {
                    createdAt?: TimestampLike | yup.Maybe<null>;
                    updatedAt?: TimestampLike | yup.Maybe<null>;
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
                        localFilePath?: yup.Maybe<string | undefined>;
                        storagePath?: yup.Maybe<string | undefined>;
                        uri?: yup.Maybe<string | undefined>;
                    } | undefined;
                    uid: string;
                    authorName: string;
                };
            };
            tacticTitle: string;
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
            formattedValue: string;
        };
    } | null | undefined;
    sharedWithSupportGroupIds?: string[] | undefined;
    uid: string;
    type: "motion";
    location: {
        latitude?: number | undefined;
        longitude?: number | undefined;
        altitude?: number | undefined;
        accuracy?: number | undefined;
        altitudeAccuracy?: number | undefined;
        heading?: number | undefined;
        speed?: number | undefined;
    };
    startTime: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    };
    timezone: string;
    locationIsFetching: NonNullable<boolean | undefined>;
    strategy: {
        success?: {
            suggestedTacticIds?: string[] | undefined;
            tacticIds: string[];
        } | null | undefined;
        setback?: {
            suggestedTacticIds?: string[] | undefined;
            tacticIds: string[];
        } | null | undefined;
        measureTacticId?: yup.Maybe<string | undefined>;
        main: {
            suggestedTacticIds?: string[] | undefined;
            tacticIds: string[];
        };
    };
    seenStrategy: {
        [x: string]: string[];
    };
    completedTacticIds: string[];
    isDisplayable: NonNullable<boolean | undefined>;
} | {
    createdAt?: TimestampLike | yup.Maybe<null>;
    updatedAt?: TimestampLike | yup.Maybe<null>;
    tacticsById?: any;
    steps?: yup.Maybe<number | undefined>;
    locationFormatted?: yup.Maybe<string | undefined>;
    commentCount?: yup.Maybe<number | undefined>;
    commentsById?: {} | null | undefined;
    commentsByTacticId?: {
        [x: string]: {
            commentsById: {
                [x: string]: {
                    createdAt?: TimestampLike | yup.Maybe<null>;
                    updatedAt?: TimestampLike | yup.Maybe<null>;
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
                        localFilePath?: yup.Maybe<string | undefined>;
                        storagePath?: yup.Maybe<string | undefined>;
                        uri?: yup.Maybe<string | undefined>;
                    } | undefined;
                    uid: string;
                    authorName: string;
                };
            };
            tacticTitle: string;
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
            formattedValue: string;
        };
    } | null | undefined;
    sharedWithSupportGroupIds?: string[] | undefined;
    uid: string;
    type: "button";
    location: {
        latitude?: number | undefined;
        longitude?: number | undefined;
        altitude?: number | undefined;
        accuracy?: number | undefined;
        altitudeAccuracy?: number | undefined;
        heading?: number | undefined;
        speed?: number | undefined;
    };
    startTime: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    };
    timezone: string;
    locationIsFetching: NonNullable<boolean | undefined>;
    strategy: {
        success?: {
            suggestedTacticIds?: string[] | undefined;
            tacticIds: string[];
        } | null | undefined;
        setback?: {
            suggestedTacticIds?: string[] | undefined;
            tacticIds: string[];
        } | null | undefined;
        measureTacticId?: yup.Maybe<string | undefined>;
        main: {
            suggestedTacticIds?: string[] | undefined;
            tacticIds: string[];
        };
    };
    seenStrategy: {
        [x: string]: string[];
    };
    completedTacticIds: string[];
    isDisplayable: NonNullable<boolean | undefined>;
    isDeviceConnected: NonNullable<boolean | undefined>;
    characteristics: {};
}, yup.AnyObject, any>;
export type LogValue = ImpulseLogValue | LocationLogValue | TimeLogValue | MotionLogValue | ButtonLogValue;
export {};
