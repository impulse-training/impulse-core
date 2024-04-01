import * as yup from 'yup';
export declare const impulseStrategySchema: yup.ObjectSchema<{
    type: "impulse";
    title: string;
    forIssueIds: string[];
    issueNames: {
        [x: string]: string | undefined;
    } | null | undefined;
    issueNamesSummary: string | null | undefined;
    recommendationSummary: string | null | undefined;
    tacticIds: string[];
    tacticsById: any;
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
    type: undefined;
    title: undefined;
    forIssueIds: "";
    issueNames: undefined;
    issueNamesSummary: undefined;
    recommendationSummary: undefined;
    tacticIds: "";
    tacticsById: any;
    createdAt: undefined;
    updatedAt: undefined;
}, "">;
export type ImpulseStrategyValue = yup.InferType<typeof impulseStrategySchema>;
