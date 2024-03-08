import * as Factory from 'factory.ts';
import { TimestampLike } from '../utils/TimestampLike';
export declare const makePatternFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<{
    createdAt?: TimestampLike | import("yup").Maybe<null>;
    updatedAt?: TimestampLike | import("yup").Maybe<null>;
    parentIssueIds?: string[] | undefined;
    supportGroupIds?: string[] | undefined;
    notification?: import("yup").Maybe<{} | undefined> | {
        title: string;
        body: string;
    };
    setbackTacticId?: import("yup").Maybe<string | undefined>;
    setbackThreshold?: import("yup").Maybe<number | undefined>;
    issueId?: import("yup").Maybe<string | undefined>;
    sendWeeklyReports?: import("yup").Maybe<boolean | undefined>;
    uid: string;
    name: string;
    ordinal: number;
}, "uid" | "name" | "ordinal" | ("createdAt" | "updatedAt" | "parentIssueIds" | "supportGroupIds" | "notification" | "setbackTacticId" | "setbackThreshold" | "issueId" | "sendWeeklyReports")>;
