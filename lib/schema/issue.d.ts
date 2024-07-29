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
    ordinal: number;
    debriefQuestionPrompt: string;
    synonyms: string[];
    shouldGenerateStrategies: boolean | undefined;
    path: string | null | undefined;
    parentIds: string[];
    parentNames: string[];
    profileCount: number | null | undefined;
    isFeatured: boolean | null | undefined;
}, yup.AnyObject, {
    createdAt: undefined;
    updatedAt: undefined;
    parentId: undefined;
    name: undefined;
    ordinal: undefined;
    debriefQuestionPrompt: undefined;
    synonyms: "";
    shouldGenerateStrategies: undefined;
    path: undefined;
    parentIds: "";
    parentNames: "";
    profileCount: undefined;
    isFeatured: undefined;
}, "">;
export type IssueValue = yup.InferType<typeof issueSchema>;
