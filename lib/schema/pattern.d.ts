import * as Yup from 'yup';
export declare const patternSchema: Yup.ObjectSchema<{
    uid: string;
    createdAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt: {
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
    issueId: Yup.Maybe<string | undefined>;
    sendWeeklyReports: NonNullable<boolean | undefined>;
    setbackThreshold: number;
    gameplanId: Yup.Maybe<string | undefined>;
    debriefGameplanId: Yup.Maybe<string | undefined>;
}, Yup.AnyObject, {
    uid: undefined;
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
    name: undefined;
    ordinal: undefined;
    supportGroupIds: "";
    notification: {
        title: undefined;
        body: undefined;
    };
    issueId: undefined;
    sendWeeklyReports: undefined;
    setbackThreshold: undefined;
    gameplanId: undefined;
    debriefGameplanId: undefined;
}, "">;
export type PatternValue = Yup.InferType<typeof patternSchema>;
