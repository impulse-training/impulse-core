import * as yup from 'yup';
import { TimestampLike } from '../utils/firestore/TimestampLike';
import { TacticsByIdWithStrategy } from './tactic';
export declare const questionSchema: yup.ObjectSchema<{
    prompt: string | undefined;
    type: NonNullable<"time" | "slider" | "counter" | undefined>;
    response: number | undefined;
}, yup.AnyObject, {
    prompt: undefined;
    type: undefined;
    response: undefined;
}, "">;
export type QuestionValue = yup.InferType<typeof questionSchema>;
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
    tacticLikes?: {
        [x: string]: NonNullable<boolean | undefined>;
    } | null | undefined;
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
    locationId: string;
    isDisplayable: NonNullable<boolean | undefined>;
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
}, yup.AnyObject, any>;
export type LogValue = ImpulseLogValue | LocationLogValue | TimeLogValue;
export {};
