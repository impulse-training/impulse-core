import * as Factory from 'factory.ts';
import { TimestampLike } from '../utils/TimestampLike';
export declare const makePatternFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<{
    issueId?: import("yup").Maybe<string | undefined>;
    customUnit?: string | undefined;
    supportGroupIds?: import("yup").Maybe<(string | undefined)[] | undefined>;
    notification?: {
        title: string;
        body: string;
    } | null | undefined;
    gameplanId?: import("yup").Maybe<string | undefined>;
    successGameplanId?: import("yup").Maybe<string | undefined>;
    setbackGameplanId?: import("yup").Maybe<string | undefined>;
    uid: string;
    ordinal: number;
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
    unit: NonNullable<"time" | "custom" | undefined>;
    sendWeeklyReports: NonNullable<boolean | undefined>;
    setbackThreshold: number;
}, "uid" | "ordinal" | "createdAt" | "updatedAt" | "name" | "unit" | "sendWeeklyReports" | "setbackThreshold" | ("issueId" | "customUnit" | "supportGroupIds" | "notification" | "gameplanId" | "successGameplanId" | "setbackGameplanId")>;
