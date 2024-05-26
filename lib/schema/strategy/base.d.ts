import * as yup from 'yup';
export declare function strategyBaseSchema<K extends string>(type: K): yup.ObjectSchema<{
    ordinal: yup.Maybe<number | undefined>;
    name: string;
    type: yup.Defined<K>;
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
    supportGroup: {
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
    supportGroup: undefined;
    createdAt: undefined;
    updatedAt: undefined;
}, "">;
