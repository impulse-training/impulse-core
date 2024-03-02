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
export type TimeRoutine = yup.InferType<typeof timeRoutine>;
export declare const timeRoutine: yup.ObjectSchema<{
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
export type LocationRoutine = yup.InferType<typeof locationRoutine>;
export declare const locationRoutine: yup.ObjectSchema<{
    tacticIds: string[];
    suggestedTacticIds: string[];
    conditionalTacticIds: {
        [x: string]: {
            ids: string[];
            condition: NonNullable<"eq" | "gt" | "lt" | "keyword" | undefined>;
            value: {};
        }[];
    } | null | undefined;
    locationKey: string;
    mode: NonNullable<"enter" | "exit" | undefined>;
    title: string;
}, yup.AnyObject, {
    tacticIds: "";
    suggestedTacticIds: "";
    conditionalTacticIds: undefined;
    locationKey: undefined;
    mode: undefined;
    title: undefined;
}, "">;
export type GameplanValue = WithTypes<typeof gameplanSchema>;
export declare const gameplanSchema: yup.ObjectSchema<{
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
    dayDebrief: {
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
    } | undefined;
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
            locationKey: string;
            mode: NonNullable<"enter" | "exit" | undefined>;
        };
    } | null | undefined;
    tacticsById: any;
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
    scheduledNotificationIds: string[] | undefined;
}, yup.AnyObject, {
    uid: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    parentIssueIds: "";
    recommendationsCount: undefined;
    timezone: undefined;
    impulse: undefined;
    impulseDebrief: undefined;
    dayDebrief: {
        tacticIds: "";
        suggestedTacticIds: "";
        conditionalTacticIds: undefined;
        weekdays: "";
        hour: undefined;
        minute: undefined;
        title: undefined;
    };
    time: undefined;
    location: undefined;
    tacticsById: any;
    patternsById: undefined;
    scheduledNotificationIds: "";
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
