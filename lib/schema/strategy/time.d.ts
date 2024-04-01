import * as yup from 'yup';
export declare const timeStrategySchema: yup.ObjectSchema<{
    type: "time";
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
    weekdays: number[];
    hour: number;
    minute: number;
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
    weekdays: "";
    hour: undefined;
    minute: undefined;
}, "">;
export type TimeStrategyValue = yup.InferType<typeof timeStrategySchema>;
