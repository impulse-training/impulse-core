import * as yup from 'yup';
import { TimestampLike } from '../../utils/TimestampLike';
import { TacticValue, WithTacticsById } from '../tactic';
export * from './routines';
export * from './strategy';
export type StrategyKey = 'main' | 'success' | 'setback';
export type GameplanValue = WithTypes<typeof gameplanSchema>;
export declare const gameplanSchema: yup.ObjectSchema<{
    uid: string;
    name: yup.Maybe<string | undefined>;
    programId: yup.Maybe<string | undefined>;
    createdAt: TimestampLike | yup.Maybe<null>;
    updatedAt: TimestampLike | yup.Maybe<null>;
    parentIssueIds: string[] | undefined;
    main: {
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
    success: {
        [x: string]: {
            suggestedTacticIds?: string[] | undefined;
            tacticIds: string[];
        };
    };
    measure: {
        [x: string]: {
            suggestedTacticIds?: string[] | undefined;
            tacticIds: string[];
        };
    };
    time: {
        [x: string]: {
            suggestedTacticIds?: string[] | undefined;
            title: string;
            tacticIds: string[];
            weekdays: number[];
            hour: number;
            minute: number;
        };
    } | null | undefined;
    location: {
        [x: string]: {
            suggestedTacticIds?: string[] | undefined;
            title: string;
            tacticIds: string[];
            locationId: string;
            mode: NonNullable<"enter" | "exit" | undefined>;
        };
    } | null | undefined;
    tacticsById: any;
    scheduledNotificationIds: string[] | undefined;
}, yup.AnyObject, {
    uid: undefined;
    name: undefined;
    programId: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    parentIssueIds: "";
    main: undefined;
    setback: undefined;
    success: undefined;
    measure: undefined;
    time: undefined;
    location: undefined;
    tacticsById: any;
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
