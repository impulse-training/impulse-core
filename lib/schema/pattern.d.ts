import * as Yup from 'yup';
export declare const patternSchema: Yup.ObjectSchema<{
    uid: string;
    updatedAt: Yup.Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    createdAt: Yup.Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    name: string;
    ordinal: number;
    supportGroupIds: Yup.Maybe<(string | undefined)[] | undefined>;
    notification: {
        title: string;
        body: string;
    } | null | undefined;
    setbackTacticId: Yup.Maybe<string | undefined>;
    setbackThreshold: number;
    issueId: Yup.Maybe<string | undefined>;
    sendWeeklyReports: NonNullable<boolean | undefined>;
}, Yup.AnyObject, {
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
    sendWeeklyReports: undefined;
}, "">;
export type PatternValue = Yup.InferType<typeof patternSchema>;
