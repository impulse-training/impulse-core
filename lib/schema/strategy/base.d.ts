import * as yup from 'yup';
export default function strategyBase(): yup.ObjectSchema<{
    profileId: string | undefined;
    recommendedForIssueIds: string[] | undefined;
    recommendedForIssueOrdinals: {
        [x: string]: number;
    } | null | undefined;
    ordinal: number;
    prompt: string;
    description: string | null | undefined;
}, yup.AnyObject, {
    profileId: undefined;
    recommendedForIssueIds: "";
    recommendedForIssueOrdinals: undefined;
    ordinal: undefined;
    prompt: undefined;
    description: undefined;
}, "">;
