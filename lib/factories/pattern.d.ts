import * as Factory from 'factory.ts';
import { TimestampLike } from '../utils/TimestampLike';
export declare const makePatternFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<{
    updatedAt?: import("yup").Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    createdAt?: import("yup").Maybe<{} | undefined> | {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    supportGroupIds?: import("yup").Maybe<(string | undefined)[] | undefined>;
    notification?: {
        title: string;
        body: string;
    } | null | undefined;
    setbackTacticId?: import("yup").Maybe<string | undefined>;
    issueId?: import("yup").Maybe<string | undefined>;
    parentIssueIds?: string[] | undefined;
    uid: string;
    name: string;
    ordinal: number;
    setbackThreshold: number;
    sendWeeklyReports: NonNullable<boolean | undefined>;
}, "uid" | "name" | "ordinal" | "setbackThreshold" | "sendWeeklyReports" | ("updatedAt" | "createdAt" | "supportGroupIds" | "notification" | "setbackTacticId" | "issueId" | "parentIssueIds")>;
