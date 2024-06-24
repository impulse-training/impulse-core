import * as yup from 'yup';
export default function strategyBase(): yup.ObjectSchema<{
    recommendedForIssueIds: string[] | undefined;
    recommendedForIssueOrdinals: {
        [x: string]: number;
    } | null | undefined;
    ordinal: number;
    prompt: string;
}, yup.AnyObject, {
    recommendedForIssueIds: "";
    recommendedForIssueOrdinals: undefined;
    ordinal: undefined;
    prompt: undefined;
}, "">;
