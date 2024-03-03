import * as yup from 'yup';
export declare const patternSchema: yup.ObjectSchema<{
    uid: string;
    updatedAt: import("..").TimestampLike | yup.Maybe<null>;
    createdAt: import("..").TimestampLike | yup.Maybe<null>;
    name: string;
    ordinal: number;
    supportGroupIds: string[] | undefined;
    notification: {
        title: string;
        body: string;
    } | null | undefined;
    setbackTacticId: yup.Maybe<string | undefined>;
    setbackThreshold: number;
    issueId: yup.Maybe<string | undefined>;
    parentIssueIds: string[] | undefined;
    sendWeeklyReports: NonNullable<boolean | undefined>;
}, yup.AnyObject, {
    uid: undefined;
    updatedAt: undefined;
    createdAt: undefined;
    name: undefined;
    ordinal: undefined;
    supportGroupIds: "";
    notification: {
        title: undefined;
        body: undefined;
    };
    setbackTacticId: undefined;
    setbackThreshold: undefined;
    issueId: undefined;
    parentIssueIds: "";
    sendWeeklyReports: undefined;
}, "">;
export type PatternValue = yup.InferType<typeof patternSchema>;
