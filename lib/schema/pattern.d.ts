import * as yup from 'yup';
import { WithTacticsById } from './tactic';
export declare const patternSchema: yup.ObjectSchema<{
    profileId: string;
    updatedAt: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    createdAt: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    name: string;
    ordinal: number;
    supportGroupIds: string[] | undefined;
    notification: {
        title: string;
        body: string;
    } | yup.Maybe<{} | undefined>;
    issueId: yup.Maybe<string | undefined>;
    parentIssueIds: string[] | undefined;
    sendWeeklyReports: yup.Maybe<boolean | undefined>;
}, yup.AnyObject, {
    profileId: undefined;
    updatedAt: undefined;
    createdAt: undefined;
    name: undefined;
    ordinal: undefined;
    supportGroupIds: "";
    notification: undefined;
    issueId: undefined;
    parentIssueIds: "";
    sendWeeklyReports: undefined;
}, "">;
export type PatternValue = WithTacticsById<yup.InferType<typeof patternSchema>>;
