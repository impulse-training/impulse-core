import * as Factory from 'factory.ts';
import { TimestampLike } from '../utils/TimestampLike';
export declare const makePatternFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<{
    createdAt?: TimestampLike | import("yup").Maybe<null>;
    updatedAt?: TimestampLike | import("yup").Maybe<null>;
    supportGroupIds?: string[] | undefined;
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
}, "uid" | "name" | "ordinal" | "setbackThreshold" | "sendWeeklyReports" | ("createdAt" | "updatedAt" | "supportGroupIds" | "notification" | "setbackTacticId" | "issueId" | "parentIssueIds")>;
