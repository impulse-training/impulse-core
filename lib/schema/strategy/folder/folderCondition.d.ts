import * as yup from 'yup';
export declare const folderConditionSchema: yup.ObjectSchema<{
    questionId: string;
    greaterThan: number | undefined;
    lessThanOrEqualTo: number | undefined;
    strategyIds: string[];
    description: string | undefined;
    label: string | undefined;
    color: string | undefined;
}, yup.AnyObject, {
    questionId: undefined;
    greaterThan: undefined;
    lessThanOrEqualTo: undefined;
    strategyIds: "";
    description: undefined;
    label: undefined;
    color: undefined;
}, "">;
export type FolderConditionValue = yup.InferType<typeof folderConditionSchema>;
