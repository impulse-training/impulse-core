import * as yup from 'yup';
import { TimestampLike } from '../utils/TimestampLike';
import { TacticValue, WithTacticsById } from './tactic';
export declare const strategy: yup.ObjectSchema<{
    tacticIds: any[];
    suggestedTacticIds: any[];
    conditionalTacticIds: {
        [x: string]: any[];
    } | null | undefined;
}, yup.AnyObject, {
    tacticIds: "";
    suggestedTacticIds: "";
    conditionalTacticIds: undefined;
}, "">;
export declare const timeStrategy: yup.ObjectSchema<{
    weekdays: any[];
    hour: number;
    minute: number;
    title: string;
    strategy: {
        conditionalTacticIds?: {
            [x: string]: any[];
        } | null | undefined;
        tacticIds: any[];
        suggestedTacticIds: any[];
    };
}, yup.AnyObject, {
    weekdays: "";
    hour: undefined;
    minute: undefined;
    title: undefined;
    strategy: {
        tacticIds: "";
        suggestedTacticIds: "";
        conditionalTacticIds: undefined;
    };
}, "">;
export declare const locationStrategy: yup.ObjectSchema<{
    locationKey: string;
    mode: NonNullable<"enter" | "exit" | undefined>;
    title: string;
    strategy: {
        conditionalTacticIds?: {
            [x: string]: any[];
        } | null | undefined;
        tacticIds: any[];
        suggestedTacticIds: any[];
    };
}, yup.AnyObject, {
    locationKey: undefined;
    mode: undefined;
    title: undefined;
    strategy: {
        tacticIds: "";
        suggestedTacticIds: "";
        conditionalTacticIds: undefined;
    };
}, "">;
export type Strategy = yup.InferType<typeof strategy>;
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
    dayDebrief: {
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
    time: any[];
    locations: any[];
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
}, "">;
type WithTypes<T extends yup.ISchema<unknown>> = WithTacticsById<yup.InferType<T>> & {
    createdAt: TimestampLike;
    updatedAt: TimestampLike;
    tacticsById: Record<string, TacticValue>;
};
export {};
