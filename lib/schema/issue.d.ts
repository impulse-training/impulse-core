import * as yup from 'yup';
export declare const issueSchema: yup.ObjectSchema<{
    createdAt: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    updatedAt: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    name: string;
    parentId: string | null | undefined;
    parentName: string | null | undefined;
    hasDebriefQuestion: boolean | undefined;
    ordinal: number | undefined;
    synonyms: string[] | undefined;
    path: string | null | undefined;
    parentIds: string[] | undefined;
    parentNames: string[] | undefined;
    profileCount: number | null | undefined;
    isFeatured: boolean | null | undefined;
    blandContext: string | undefined;
    recommendedStrategies: import("./utils/firestore").DocumentReferenceLike<unknown>[] | undefined;
    strategyOrdinals: {
        [x: string]: number;
    } | null | undefined;
    gameplanTactics: import("./utils/firestore").DocumentReferenceLike<unknown>[] | undefined;
}, yup.AnyObject, {
    createdAt: undefined;
    updatedAt: undefined;
    name: undefined;
    parentId: undefined;
    parentName: undefined;
    hasDebriefQuestion: undefined;
    ordinal: undefined;
    synonyms: "";
    path: undefined;
    parentIds: "";
    parentNames: "";
    profileCount: undefined;
    isFeatured: undefined;
    blandContext: undefined;
    recommendedStrategies: "";
    strategyOrdinals: undefined;
    gameplanTactics: "";
}, "">;
export type IssueValue = yup.InferType<typeof issueSchema>;
