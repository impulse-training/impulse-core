import * as yup from 'yup';
import { WithTacticsById } from '../tactic';
export declare const dailyStrategySchema: yup.ObjectSchema<{
    ordinal: yup.Maybe<number | undefined>;
    name: string;
    type: "daily";
    recommendedFor: "impulse" | "time" | undefined;
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
    subscribeToAllTactics: boolean | undefined;
    stream: {
        name: string;
        id: string;
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
    currentTacticId: string | undefined;
    image: {
        localFilePath?: yup.Maybe<string | undefined>;
        storagePath?: yup.Maybe<string | undefined>;
        uri?: yup.Maybe<string | undefined>;
    } | undefined;
    description: string;
}, yup.AnyObject, {
    ordinal: undefined;
    name: undefined;
    type: undefined;
    recommendedFor: undefined;
    recommendedForIssueIds: "";
    recommendedForIssueOrdinals: undefined;
    tacticIds: "";
    tacticsById: undefined;
    profileId: undefined;
    subscribeToAllTactics: undefined;
    stream: undefined;
    createdAt: undefined;
    updatedAt: undefined;
    currentTacticId: undefined;
    image: {
        localFilePath: undefined;
        storagePath: undefined;
        uri: undefined;
    };
    description: undefined;
}, "">;
export type DailyStrategyValue = WithTacticsById<yup.InferType<typeof dailyStrategySchema>>;
