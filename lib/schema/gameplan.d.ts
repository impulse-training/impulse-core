import * as yup from 'yup';
import { TimestampLike } from '../utils/TimestampLike';
import { TacticValue, WithTacticsById } from './tactic';
export declare const strategy: yup.ObjectSchema<{
    tacticIds: string[];
    suggestedTacticIds: string[];
    conditionalTacticIds: {
        [x: string]: {
            ids: string[];
            condition: NonNullable<"eq" | "gt" | "lt" | "keyword" | undefined>;
            value: {};
        }[];
    } | null | undefined;
}, yup.AnyObject, {
    tacticIds: "";
    suggestedTacticIds: "";
    conditionalTacticIds: undefined;
}, "">;
export type Strategy = yup.InferType<typeof strategy>;
export type TimeRoutine = yup.InferType<typeof timeRoutineSchema>;
export declare const timeRoutineSchema: yup.ObjectSchema<{
    tacticIds: string[];
    suggestedTacticIds: string[];
    conditionalTacticIds: {
        [x: string]: {
            ids: string[];
            condition: NonNullable<"eq" | "gt" | "lt" | "keyword" | undefined>;
            value: {};
        }[];
    } | null | undefined;
    weekdays: number[];
    hour: number;
    minute: number;
    title: string;
}, yup.AnyObject, {
    tacticIds: "";
    suggestedTacticIds: "";
    conditionalTacticIds: undefined;
    weekdays: "";
    hour: undefined;
    minute: undefined;
    title: undefined;
}, "">;
export type LocationRoutine = yup.InferType<typeof locationRoutineSchema>;
export declare const locationRoutineSchema: yup.ObjectSchema<{
    tacticIds: string[];
    suggestedTacticIds: string[];
    conditionalTacticIds: {
        [x: string]: {
            ids: string[];
            condition: NonNullable<"eq" | "gt" | "lt" | "keyword" | undefined>;
            value: {};
        }[];
    } | null | undefined;
    locationId: string;
    mode: NonNullable<"enter" | "exit" | undefined>;
    title: string;
}, yup.AnyObject, {
    tacticIds: "";
    suggestedTacticIds: "";
    conditionalTacticIds: undefined;
    locationId: undefined;
    mode: undefined;
    title: undefined;
}, "">;
export type GameplanValue = WithTypes<typeof gameplanSchema>;
export declare const gameplanSchema: yup.ObjectSchema<{
    uid: string;
    createdAt: TimestampLike | yup.Maybe<null>;
    updatedAt: TimestampLike | yup.Maybe<null>;
    parentIssueIds: string[] | undefined;
    recommendationsCount: number | undefined;
    timezone: string;
    impulse: {
        [x: string]: {
            conditionalTacticIds?: {
                [x: string]: {
                    ids: string[];
                    condition: NonNullable<"eq" | "gt" | "lt" | "keyword" | undefined>;
                    value: {};
                }[];
            } | null | undefined;
            tacticIds: string[];
            suggestedTacticIds: string[];
        };
    };
    impulseDebrief: {
        [x: string]: {
            conditionalTacticIds?: {
                [x: string]: {
                    ids: string[];
                    condition: NonNullable<"eq" | "gt" | "lt" | "keyword" | undefined>;
                    value: {};
                }[];
            } | null | undefined;
            tacticIds: string[];
            suggestedTacticIds: string[];
        };
    };
    recap: {
        [x: string]: {
            conditionalTacticIds?: {
                [x: string]: {
                    ids: string[];
                    condition: NonNullable<"eq" | "gt" | "lt" | "keyword" | undefined>;
                    value: {};
                }[];
            } | null | undefined;
            title: string;
            tacticIds: string[];
            suggestedTacticIds: string[];
            weekdays: number[];
            hour: number;
            minute: number;
        };
    };
    time: {
        [x: string]: {
            conditionalTacticIds?: {
                [x: string]: {
                    ids: string[];
                    condition: NonNullable<"eq" | "gt" | "lt" | "keyword" | undefined>;
                    value: {};
                }[];
            } | null | undefined;
            title: string;
            tacticIds: string[];
            suggestedTacticIds: string[];
            weekdays: number[];
            hour: number;
            minute: number;
        };
    } | null | undefined;
    location: {
        [x: string]: {
            conditionalTacticIds?: {
                [x: string]: {
                    ids: string[];
                    condition: NonNullable<"eq" | "gt" | "lt" | "keyword" | undefined>;
                    value: {};
                }[];
            } | null | undefined;
            title: string;
            tacticIds: string[];
            suggestedTacticIds: string[];
            locationId: string;
            mode: NonNullable<"enter" | "exit" | undefined>;
        };
    } | null | undefined;
    tacticsById: any;
    patternsById: {
        [x: string]: {
            createdAt?: TimestampLike | yup.Maybe<null>;
            updatedAt?: TimestampLike | yup.Maybe<null>;
            supportGroupIds?: string[] | undefined;
            notification?: yup.Maybe<{} | undefined> | {
                title: string;
                body: string;
            };
            setbackTacticId?: yup.Maybe<string | undefined>;
            setbackThreshold?: yup.Maybe<number | undefined>;
            issueId?: yup.Maybe<string | undefined>;
            parentIssueIds?: string[] | undefined;
            sendWeeklyReports?: yup.Maybe<boolean | undefined>;
            uid: string;
            name: string;
            ordinal: number;
        };
    };
    scheduledNotificationIds: string[] | undefined;
    dontGenerateRecapTacticsForTacticIds: string[] | undefined;
}, yup.AnyObject, {
    uid: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    parentIssueIds: "";
    recommendationsCount: undefined;
    timezone: undefined;
    impulse: undefined;
    impulseDebrief: undefined;
    recap: undefined;
    time: undefined;
    location: undefined;
    tacticsById: any;
    patternsById: undefined;
    scheduledNotificationIds: "";
    dontGenerateRecapTacticsForTacticIds: "";
}, "">;
type WithTypes<T extends yup.ISchema<unknown>> = WithTacticsById<yup.InferType<T>> & {
    createdAt: TimestampLike;
    updatedAt: TimestampLike;
    tacticsById: Record<string, TacticValue>;
};
export declare const SHORT_DAYS: {
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
    6: string;
    7: string;
};
export declare const LONG_DAYS: string[];
export {};
