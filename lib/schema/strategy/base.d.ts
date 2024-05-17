import * as yup from 'yup';
export declare function strategyBaseSchema<K extends string>(type: K): yup.ObjectSchema<{
    ordinal: yup.Maybe<number | undefined>;
    name: string;
    type: yup.Defined<K>;
    recommendedFor: "time" | "impulse" | undefined;
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
    recommendedFor: undefined;
    recommendedForIssueIds: "";
    recommendedForIssueOrdinals: undefined;
    tacticIds: "";
    tacticsById: undefined;
    profileId: undefined;
    supportGroup: undefined;
    createdAt: undefined;
    updatedAt: undefined;
}, "">;
