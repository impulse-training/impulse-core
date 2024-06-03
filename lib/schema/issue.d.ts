import * as yup from 'yup';
export declare const issueSchema: yup.ObjectSchema<{
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
    parentId: string | null | undefined;
    name: string;
    ordinal: number;
    synonyms: string[];
    path: string | null | undefined;
    parentIds: string[];
    parentNames: string[];
    profileCount: number | null | undefined;
    isFeatured: boolean | null | undefined;
    therapistProfileIds: string[];
}, yup.AnyObject, {
    createdAt: undefined;
    updatedAt: undefined;
    parentId: undefined;
    name: undefined;
    ordinal: undefined;
    synonyms: "";
    path: undefined;
    parentIds: "";
    parentNames: "";
    profileCount: undefined;
    isFeatured: undefined;
    therapistProfileIds: "";
}, "">;
export type IssueValue = yup.InferType<typeof issueSchema>;
