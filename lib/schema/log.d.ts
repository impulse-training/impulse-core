import * as yup from 'yup';
import { TimestampLike } from '../utils/firestore/TimestampLike';
import { TacticsByIdWithStrategy } from './tactic';
export declare const tacticDataSchema: yup.ObjectSchema<{
    value: number | undefined;
    unit: NonNullable<"time" | "custom" | undefined>;
    customUnit: string | undefined;
    optionId: string | null | undefined;
    optionLabel: string | undefined;
    optionColor: string | undefined;
    optionTextColor: string | undefined;
    isCompleted: boolean | undefined;
    nextStrategiesPath: string | undefined;
    formattedValue: string;
    lowEmoji: yup.Maybe<string | undefined>;
    highEmoji: yup.Maybe<string | undefined>;
}, yup.AnyObject, {
    value: undefined;
    unit: undefined;
    customUnit: undefined;
    optionId: undefined;
    optionLabel: undefined;
    optionColor: undefined;
    optionTextColor: undefined;
    isCompleted: undefined;
    nextStrategiesPath: undefined;
    formattedValue: undefined;
    lowEmoji: undefined;
    highEmoji: undefined;
}, "">;
export type TacticData = yup.InferType<typeof tacticDataSchema>;
export type BaseLogValue = WithTypes<typeof baseLogSchema>;
declare const baseLogSchema: yup.ObjectSchema<{
    profileId: string;
    createdAt: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    updatedAt: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
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
    commentsById: {
        [x: string]: {
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
            tacticTitle?: string | null | undefined;
            text?: string | undefined;
            recording?: {
                localFilePath?: string | undefined;
                waveform?: string | null | undefined;
                remoteFilePath: string;
            } | undefined;
            isEdited?: boolean | undefined;
            avatar?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | undefined;
            profileId: string;
        };
    };
    commentsByTacticId: {
        [x: string]: {
            tacticTitle: string;
            commentsById: {
                [x: string]: {
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
                    tacticTitle?: string | null | undefined;
                    text?: string | undefined;
                    recording?: {
                        localFilePath?: string | undefined;
                        waveform?: string | null | undefined;
                        remoteFilePath: string;
                    } | undefined;
                    isEdited?: boolean | undefined;
                    avatar?: {
                        localFilePath?: yup.Maybe<string | undefined>;
                        storagePath?: yup.Maybe<string | undefined>;
                        uri?: yup.Maybe<string | undefined>;
                    } | undefined;
                    profileId: string;
                };
            };
        };
    } | null | undefined;
    tacticIds: string[];
    tacticsById: {
        tactic?: any;
        path: string;
        id: string;
        strategyId: string;
    };
    tacticLikes: {
        [x: string]: NonNullable<boolean | undefined>;
    } | null | undefined;
    tacticData: {
        [x: string]: {
            value?: number | undefined;
            customUnit?: string | undefined;
            optionId?: string | null | undefined;
            optionLabel?: string | undefined;
            optionColor?: string | undefined;
            optionTextColor?: string | undefined;
            isCompleted?: boolean | undefined;
            nextStrategiesPath?: string | undefined;
            lowEmoji?: yup.Maybe<string | undefined>;
            highEmoji?: yup.Maybe<string | undefined>;
            unit: NonNullable<"time" | "custom" | undefined>;
            formattedValue: string;
        };
    };
    supportGroups: import("./utils/firestore").DocumentReferenceLike<unknown>[];
}, yup.AnyObject, {
    profileId: undefined;
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
    commentsById: undefined;
    commentsByTacticId: undefined;
    tacticIds: "";
    tacticsById: {
        id: undefined;
        path: undefined;
        tactic: any;
        strategyId: undefined;
    };
    tacticLikes: undefined;
    tacticData: undefined;
    supportGroups: "";
}, "">;
type WithTypes<T extends yup.ISchema<unknown>> = Omit<yup.InferType<T>, 'createdAt' | 'updatedAt' | 'startTime' | 'tacticsById'> & {
    createdAt: TimestampLike;
    updatedAt: TimestampLike;
    startTime: TimestampLike;
    tacticsById: TacticsByIdWithStrategy;
};
export type ImpulseLogValue = WithTypes<typeof impulseLogSchema>;
export declare function logIsImpulseLog(log: LogValue): log is ImpulseLogValue;
declare const impulseLogSchema: yup.ObjectSchema<{
    profileId: string;
    createdAt: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    updatedAt: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
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
    commentsById: {
        [x: string]: {
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
            tacticTitle?: string | null | undefined;
            text?: string | undefined;
            recording?: {
                localFilePath?: string | undefined;
                waveform?: string | null | undefined;
                remoteFilePath: string;
            } | undefined;
            isEdited?: boolean | undefined;
            avatar?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | undefined;
            profileId: string;
        };
    };
    commentsByTacticId: {
        [x: string]: {
            tacticTitle: string;
            commentsById: {
                [x: string]: {
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
                    tacticTitle?: string | null | undefined;
                    text?: string | undefined;
                    recording?: {
                        localFilePath?: string | undefined;
                        waveform?: string | null | undefined;
                        remoteFilePath: string;
                    } | undefined;
                    isEdited?: boolean | undefined;
                    avatar?: {
                        localFilePath?: yup.Maybe<string | undefined>;
                        storagePath?: yup.Maybe<string | undefined>;
                        uri?: yup.Maybe<string | undefined>;
                    } | undefined;
                    profileId: string;
                };
            };
        };
    } | null | undefined;
    tacticIds: string[];
    tacticsById: {
        tactic?: any;
        path: string;
        id: string;
        strategyId: string;
    };
    tacticLikes: {
        [x: string]: NonNullable<boolean | undefined>;
    } | null | undefined;
    tacticData: {
        [x: string]: {
            value?: number | undefined;
            customUnit?: string | undefined;
            optionId?: string | null | undefined;
            optionLabel?: string | undefined;
            optionColor?: string | undefined;
            optionTextColor?: string | undefined;
            isCompleted?: boolean | undefined;
            nextStrategiesPath?: string | undefined;
            lowEmoji?: yup.Maybe<string | undefined>;
            highEmoji?: yup.Maybe<string | undefined>;
            unit: NonNullable<"time" | "custom" | undefined>;
            formattedValue: string;
        };
    };
    supportGroups: import("./utils/firestore").DocumentReferenceLike<unknown>[];
} & {
    type: "impulse";
    setAsActiveImpulse: yup.Maybe<boolean | undefined>;
    isDisplayable: NonNullable<boolean | undefined>;
    debriefTactic: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
    debriefAfter: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    debriefReminderSentAt: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    debriefedAt: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
}, yup.AnyObject, {
    profileId: undefined;
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
    commentsById: undefined;
    commentsByTacticId: undefined;
    tacticIds: "";
    tacticsById: {
        id: undefined;
        path: undefined;
        tactic: any;
        strategyId: undefined;
    };
    tacticLikes: undefined;
    tacticData: undefined;
    supportGroups: "";
    type: undefined;
    setAsActiveImpulse: undefined;
    isDisplayable: undefined;
    debriefTactic: undefined;
    debriefAfter: undefined;
    debriefReminderSentAt: undefined;
    debriefedAt: undefined;
}, "">;
export type LocationLogValue = WithTypes<typeof locationLogSchema>;
export declare function logIsLocationLog(log: LogValue): log is LocationLogValue;
declare const locationLogSchema: yup.ObjectSchema<{
    profileId: string;
    createdAt: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    updatedAt: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
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
    commentsById: {
        [x: string]: {
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
            tacticTitle?: string | null | undefined;
            text?: string | undefined;
            recording?: {
                localFilePath?: string | undefined;
                waveform?: string | null | undefined;
                remoteFilePath: string;
            } | undefined;
            isEdited?: boolean | undefined;
            avatar?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | undefined;
            profileId: string;
        };
    };
    commentsByTacticId: {
        [x: string]: {
            tacticTitle: string;
            commentsById: {
                [x: string]: {
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
                    tacticTitle?: string | null | undefined;
                    text?: string | undefined;
                    recording?: {
                        localFilePath?: string | undefined;
                        waveform?: string | null | undefined;
                        remoteFilePath: string;
                    } | undefined;
                    isEdited?: boolean | undefined;
                    avatar?: {
                        localFilePath?: yup.Maybe<string | undefined>;
                        storagePath?: yup.Maybe<string | undefined>;
                        uri?: yup.Maybe<string | undefined>;
                    } | undefined;
                    profileId: string;
                };
            };
        };
    } | null | undefined;
    tacticIds: string[];
    tacticsById: {
        tactic?: any;
        path: string;
        id: string;
        strategyId: string;
    };
    tacticLikes: {
        [x: string]: NonNullable<boolean | undefined>;
    } | null | undefined;
    tacticData: {
        [x: string]: {
            value?: number | undefined;
            customUnit?: string | undefined;
            optionId?: string | null | undefined;
            optionLabel?: string | undefined;
            optionColor?: string | undefined;
            optionTextColor?: string | undefined;
            isCompleted?: boolean | undefined;
            nextStrategiesPath?: string | undefined;
            lowEmoji?: yup.Maybe<string | undefined>;
            highEmoji?: yup.Maybe<string | undefined>;
            unit: NonNullable<"time" | "custom" | undefined>;
            formattedValue: string;
        };
    };
    supportGroups: import("./utils/firestore").DocumentReferenceLike<unknown>[];
} & {
    type: "location";
    locationId: string;
    isDisplayable: NonNullable<boolean | undefined>;
    locationName: string;
    locationMode: {};
}, yup.AnyObject, {
    profileId: undefined;
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
    commentsById: undefined;
    commentsByTacticId: undefined;
    tacticIds: "";
    tacticsById: {
        id: undefined;
        path: undefined;
        tactic: any;
        strategyId: undefined;
    };
    tacticLikes: undefined;
    tacticData: undefined;
    supportGroups: "";
    type: undefined;
    locationId: undefined;
    isDisplayable: undefined;
    locationName: undefined;
    locationMode: undefined;
}, "">;
export type TimeLogValue = WithTypes<typeof timeLogSchema>;
export declare function logIsTimeLog(log: LogValue): log is TimeLogValue;
declare const timeLogSchema: yup.ObjectSchema<{
    profileId: string;
    createdAt: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    updatedAt: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
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
    commentsById: {
        [x: string]: {
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
            tacticTitle?: string | null | undefined;
            text?: string | undefined;
            recording?: {
                localFilePath?: string | undefined;
                waveform?: string | null | undefined;
                remoteFilePath: string;
            } | undefined;
            isEdited?: boolean | undefined;
            avatar?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | undefined;
            profileId: string;
        };
    };
    commentsByTacticId: {
        [x: string]: {
            tacticTitle: string;
            commentsById: {
                [x: string]: {
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
                    tacticTitle?: string | null | undefined;
                    text?: string | undefined;
                    recording?: {
                        localFilePath?: string | undefined;
                        waveform?: string | null | undefined;
                        remoteFilePath: string;
                    } | undefined;
                    isEdited?: boolean | undefined;
                    avatar?: {
                        localFilePath?: yup.Maybe<string | undefined>;
                        storagePath?: yup.Maybe<string | undefined>;
                        uri?: yup.Maybe<string | undefined>;
                    } | undefined;
                    profileId: string;
                };
            };
        };
    } | null | undefined;
    tacticIds: string[];
    tacticsById: {
        tactic?: any;
        path: string;
        id: string;
        strategyId: string;
    };
    tacticLikes: {
        [x: string]: NonNullable<boolean | undefined>;
    } | null | undefined;
    tacticData: {
        [x: string]: {
            value?: number | undefined;
            customUnit?: string | undefined;
            optionId?: string | null | undefined;
            optionLabel?: string | undefined;
            optionColor?: string | undefined;
            optionTextColor?: string | undefined;
            isCompleted?: boolean | undefined;
            nextStrategiesPath?: string | undefined;
            lowEmoji?: yup.Maybe<string | undefined>;
            highEmoji?: yup.Maybe<string | undefined>;
            unit: NonNullable<"time" | "custom" | undefined>;
            formattedValue: string;
        };
    };
    supportGroups: import("./utils/firestore").DocumentReferenceLike<unknown>[];
} & {
    type: "time";
    isDisplayable: NonNullable<boolean | undefined>;
}, yup.AnyObject, {
    profileId: undefined;
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
    commentsById: undefined;
    commentsByTacticId: undefined;
    tacticIds: "";
    tacticsById: {
        id: undefined;
        path: undefined;
        tactic: any;
        strategyId: undefined;
    };
    tacticLikes: undefined;
    tacticData: undefined;
    supportGroups: "";
    type: undefined;
    isDisplayable: undefined;
}, "">;
export declare const logSchema: yup.Lazy<{
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
    locationFormatted?: yup.Maybe<string | undefined>;
    commentCount?: yup.Maybe<number | undefined>;
    commentsByTacticId?: {
        [x: string]: {
            tacticTitle: string;
            commentsById: {
                [x: string]: {
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
                    tacticTitle?: string | null | undefined;
                    text?: string | undefined;
                    recording?: {
                        localFilePath?: string | undefined;
                        waveform?: string | null | undefined;
                        remoteFilePath: string;
                    } | undefined;
                    isEdited?: boolean | undefined;
                    avatar?: {
                        localFilePath?: yup.Maybe<string | undefined>;
                        storagePath?: yup.Maybe<string | undefined>;
                        uri?: yup.Maybe<string | undefined>;
                    } | undefined;
                    profileId: string;
                };
            };
        };
    } | null | undefined;
    tacticLikes?: {
        [x: string]: NonNullable<boolean | undefined>;
    } | null | undefined;
    setAsActiveImpulse?: yup.Maybe<boolean | undefined>;
    debriefTactic?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
    debriefAfter?: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    debriefReminderSentAt?: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    debriefedAt?: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    profileId: string;
    type: "impulse";
    tacticsById: {
        tactic?: any;
        path: string;
        id: string;
        strategyId: string;
    };
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
    commentsById: {
        [x: string]: {
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
            tacticTitle?: string | null | undefined;
            text?: string | undefined;
            recording?: {
                localFilePath?: string | undefined;
                waveform?: string | null | undefined;
                remoteFilePath: string;
            } | undefined;
            isEdited?: boolean | undefined;
            avatar?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | undefined;
            profileId: string;
        };
    };
    tacticIds: string[];
    tacticData: {
        [x: string]: {
            value?: number | undefined;
            customUnit?: string | undefined;
            optionId?: string | null | undefined;
            optionLabel?: string | undefined;
            optionColor?: string | undefined;
            optionTextColor?: string | undefined;
            isCompleted?: boolean | undefined;
            nextStrategiesPath?: string | undefined;
            lowEmoji?: yup.Maybe<string | undefined>;
            highEmoji?: yup.Maybe<string | undefined>;
            unit: NonNullable<"time" | "custom" | undefined>;
            formattedValue: string;
        };
    };
    supportGroups: import("./utils/firestore").DocumentReferenceLike<unknown>[];
    isDisplayable: NonNullable<boolean | undefined>;
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
    locationFormatted?: yup.Maybe<string | undefined>;
    commentCount?: yup.Maybe<number | undefined>;
    commentsByTacticId?: {
        [x: string]: {
            tacticTitle: string;
            commentsById: {
                [x: string]: {
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
                    tacticTitle?: string | null | undefined;
                    text?: string | undefined;
                    recording?: {
                        localFilePath?: string | undefined;
                        waveform?: string | null | undefined;
                        remoteFilePath: string;
                    } | undefined;
                    isEdited?: boolean | undefined;
                    avatar?: {
                        localFilePath?: yup.Maybe<string | undefined>;
                        storagePath?: yup.Maybe<string | undefined>;
                        uri?: yup.Maybe<string | undefined>;
                    } | undefined;
                    profileId: string;
                };
            };
        };
    } | null | undefined;
    tacticLikes?: {
        [x: string]: NonNullable<boolean | undefined>;
    } | null | undefined;
    profileId: string;
    type: "location";
    tacticsById: {
        tactic?: any;
        path: string;
        id: string;
        strategyId: string;
    };
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
    commentsById: {
        [x: string]: {
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
            tacticTitle?: string | null | undefined;
            text?: string | undefined;
            recording?: {
                localFilePath?: string | undefined;
                waveform?: string | null | undefined;
                remoteFilePath: string;
            } | undefined;
            isEdited?: boolean | undefined;
            avatar?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | undefined;
            profileId: string;
        };
    };
    tacticIds: string[];
    tacticData: {
        [x: string]: {
            value?: number | undefined;
            customUnit?: string | undefined;
            optionId?: string | null | undefined;
            optionLabel?: string | undefined;
            optionColor?: string | undefined;
            optionTextColor?: string | undefined;
            isCompleted?: boolean | undefined;
            nextStrategiesPath?: string | undefined;
            lowEmoji?: yup.Maybe<string | undefined>;
            highEmoji?: yup.Maybe<string | undefined>;
            unit: NonNullable<"time" | "custom" | undefined>;
            formattedValue: string;
        };
    };
    supportGroups: import("./utils/firestore").DocumentReferenceLike<unknown>[];
    isDisplayable: NonNullable<boolean | undefined>;
    locationId: string;
    locationName: string;
    locationMode: {};
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
    locationFormatted?: yup.Maybe<string | undefined>;
    commentCount?: yup.Maybe<number | undefined>;
    commentsByTacticId?: {
        [x: string]: {
            tacticTitle: string;
            commentsById: {
                [x: string]: {
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
                    tacticTitle?: string | null | undefined;
                    text?: string | undefined;
                    recording?: {
                        localFilePath?: string | undefined;
                        waveform?: string | null | undefined;
                        remoteFilePath: string;
                    } | undefined;
                    isEdited?: boolean | undefined;
                    avatar?: {
                        localFilePath?: yup.Maybe<string | undefined>;
                        storagePath?: yup.Maybe<string | undefined>;
                        uri?: yup.Maybe<string | undefined>;
                    } | undefined;
                    profileId: string;
                };
            };
        };
    } | null | undefined;
    tacticLikes?: {
        [x: string]: NonNullable<boolean | undefined>;
    } | null | undefined;
    profileId: string;
    type: "time";
    tacticsById: {
        tactic?: any;
        path: string;
        id: string;
        strategyId: string;
    };
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
    commentsById: {
        [x: string]: {
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
            tacticTitle?: string | null | undefined;
            text?: string | undefined;
            recording?: {
                localFilePath?: string | undefined;
                waveform?: string | null | undefined;
                remoteFilePath: string;
            } | undefined;
            isEdited?: boolean | undefined;
            avatar?: {
                localFilePath?: yup.Maybe<string | undefined>;
                storagePath?: yup.Maybe<string | undefined>;
                uri?: yup.Maybe<string | undefined>;
            } | undefined;
            profileId: string;
        };
    };
    tacticIds: string[];
    tacticData: {
        [x: string]: {
            value?: number | undefined;
            customUnit?: string | undefined;
            optionId?: string | null | undefined;
            optionLabel?: string | undefined;
            optionColor?: string | undefined;
            optionTextColor?: string | undefined;
            isCompleted?: boolean | undefined;
            nextStrategiesPath?: string | undefined;
            lowEmoji?: yup.Maybe<string | undefined>;
            highEmoji?: yup.Maybe<string | undefined>;
            unit: NonNullable<"time" | "custom" | undefined>;
            formattedValue: string;
        };
    };
    supportGroups: import("./utils/firestore").DocumentReferenceLike<unknown>[];
    isDisplayable: NonNullable<boolean | undefined>;
}, yup.AnyObject, any>;
export type LogValue = ImpulseLogValue | LocationLogValue | TimeLogValue;
export {};
