import * as yup from 'yup';
export declare const issueSchema: yup.ObjectSchema<{
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
    parentId: string | null | undefined;
    name: string;
    hasDebriefQuestion: boolean | undefined;
    synonyms: string[] | undefined;
    path: string | null | undefined;
    parentIds: string[] | undefined;
    parentNames: string[] | undefined;
    profileCount: number | null | undefined;
    isFeatured: boolean | null | undefined;
    supportGroups: import("./utils/firestore").DocumentReferenceLike<unknown>[] | undefined;
    gameplanTactics: import("./utils/firestore").DocumentReferenceLike<unknown>[] | undefined;
}, yup.AnyObject, {
    createdAt: undefined;
    updatedAt: undefined;
    parentId: undefined;
    name: undefined;
    hasDebriefQuestion: undefined;
    synonyms: "";
    path: undefined;
    parentIds: "";
    parentNames: "";
    profileCount: undefined;
    isFeatured: undefined;
    supportGroups: "";
    gameplanTactics: "";
}, "">;
export type IssueValue = yup.InferType<typeof issueSchema>;
