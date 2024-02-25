import * as Factory from 'factory.ts';
import { TimestampLike } from '../utils/TimestampLike';
export declare const makePatternFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<{
    supportGroupIds?: import("yup").Maybe<(string | undefined)[] | undefined>;
    notification?: {
        title: string;
        body: string;
    } | null | undefined;
    setbackTacticId?: import("yup").Maybe<string | undefined>;
    issueId?: import("yup").Maybe<string | undefined>;
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
    setbackThreshold: number;
    sendWeeklyReports: NonNullable<boolean | undefined>;
}, "uid" | "createdAt" | "updatedAt" | "name" | "ordinal" | "setbackThreshold" | "sendWeeklyReports" | ("supportGroupIds" | "notification" | "setbackTacticId" | "issueId")>;
