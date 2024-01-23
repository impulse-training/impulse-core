import * as Factory from 'factory.ts';
import { FakeTimestamp } from '../utils/FakeTimestamp';
export declare const makePatternFactory: (TimestampKlass: typeof FakeTimestamp) => Factory.Sync.Factory<{
    customUnit?: string | undefined;
    supportGroupIds?: import("yup").Maybe<(string | undefined)[] | undefined>;
    notification?: {
        title: string;
        body: string;
    } | null | undefined;
    issueId?: import("yup").Maybe<string | undefined>;
    gameplanId?: import("yup").Maybe<string | undefined>;
    successGameplanId?: import("yup").Maybe<string | undefined>;
    setbackGameplanId?: import("yup").Maybe<string | undefined>;
    uid: string;
    createdAt: {};
    updatedAt: {};
    name: string;
    ordinal: number;
    unit: NonNullable<"time" | "custom" | undefined>;
    sendWeeklyReports: NonNullable<boolean | undefined>;
    setbackThreshold: number;
}, "uid" | "createdAt" | "updatedAt" | "name" | "ordinal" | "unit" | "sendWeeklyReports" | "setbackThreshold" | ("customUnit" | "supportGroupIds" | "notification" | "issueId" | "gameplanId" | "successGameplanId" | "setbackGameplanId")>;
