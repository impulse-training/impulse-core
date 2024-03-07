import * as yup from 'yup';
export declare const issueSchema: yup.ObjectSchema<{
    createdAt: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    };
    updatedAt: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    };
    parentId: string | null | undefined;
    name: string;
    synonyms: (string | undefined)[];
    unit: NonNullable<"time" | "custom" | undefined>;
    customUnit: string | undefined;
    path: string | null | undefined;
    parentIds: (string | undefined)[];
    parentNames: (string | undefined)[];
    programsCount: number | null | undefined;
    profileCount: number | null | undefined;
    isFeatured: boolean | null | undefined;
    impulse: {
        suggestedTacticIds: (string | undefined)[];
        llmPrompt: string;
    } | null;
    impulseDebrief: {
        suggestedTacticIds: (string | undefined)[];
        llmPrompt: string;
    } | null;
}, yup.AnyObject, {
    createdAt: {
        seconds: undefined;
        nanoseconds: undefined;
        toDate: undefined;
    };
    updatedAt: {
        seconds: undefined;
        nanoseconds: undefined;
        toDate: undefined;
    };
    parentId: undefined;
    name: undefined;
    synonyms: "";
    unit: undefined;
    customUnit: undefined;
    path: undefined;
    parentIds: "";
    parentNames: "";
    programsCount: undefined;
    profileCount: undefined;
    isFeatured: undefined;
    impulse: {
        llmPrompt: undefined;
        suggestedTacticIds: "";
    };
    impulseDebrief: {
        llmPrompt: undefined;
        suggestedTacticIds: "";
    };
}, "">;
export type IssueValue = yup.InferType<typeof issueSchema>;
