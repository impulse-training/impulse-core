import * as yup from 'yup';
export declare const gameplanSchema: yup.ObjectSchema<{
    createdAt: {
        isEqual?: any;
        toMillis?: any;
        toJSON?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    updatedAt: {
        isEqual?: any;
        toMillis?: any;
        toJSON?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    blandPathwayId: string | undefined;
    issuesById: {
        [x: string]: {
            path?: string | null | undefined;
            createdAt?: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            updatedAt?: {
                isEqual?: any;
                toMillis?: any;
                toJSON?: any;
                seconds: number;
                nanoseconds: number;
                toDate: Function;
            } | null | undefined;
            ordinal?: number | undefined;
            parentIds?: string[] | undefined;
            parentId?: string | null | undefined;
            parentName?: string | null | undefined;
            hasDebriefQuestion?: boolean | undefined;
            synonyms?: string[] | undefined;
            parentNames?: string[] | undefined;
            profileCount?: number | null | undefined;
            isFeatured?: boolean | null | undefined;
            blandContext?: string | undefined;
            recommendedStrategies?: import("./utils/firestore").DocumentReferenceLike<unknown>[] | undefined;
            strategyOrdinals?: {
                [x: string]: number;
            } | null | undefined;
            gameplanTactics?: import("./utils/firestore").DocumentReferenceLike<unknown>[] | undefined;
            name: string;
        };
    } | null | undefined;
}, yup.AnyObject, {
    createdAt: undefined;
    updatedAt: undefined;
    blandPathwayId: undefined;
    issuesById: undefined;
}, "">;
export type GameplanValue = yup.InferType<typeof gameplanSchema>;
