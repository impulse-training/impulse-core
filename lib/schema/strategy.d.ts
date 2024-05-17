import * as yup from 'yup';
import { WithTacticsById } from '.';
export declare const strategySchema: yup.ObjectSchema<{
    ordinal: yup.Maybe<number | undefined>;
    name: string;
    type: NonNullable<"time" | "impulse" | "debrief" | "daily" | undefined>;
    recommendedForIssueIds: string[] | undefined;
    recommendedForIssueOrdinals: {
        [x: string]: number;
    } | null | undefined;
    tacticIds: string[];
    tacticsById: {
        [x: string]: {
            tactic?: any;
            path: string;
            id: string;
        };
    };
    profileId: string | undefined;
    supportGroup: {
        id: string;
        name: string;
        avatarUrl: string;
    } | null | undefined;
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
}, yup.AnyObject, {
    ordinal: undefined;
    name: undefined;
    type: undefined;
    recommendedForIssueIds: "";
    recommendedForIssueOrdinals: undefined;
    tacticIds: "";
    tacticsById: undefined;
    profileId: undefined;
    supportGroup: undefined;
    createdAt: undefined;
    updatedAt: undefined;
}, "">;
export type StrategyValue = WithTacticsById<yup.InferType<typeof strategySchema>>;
