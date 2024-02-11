import * as Factory from 'factory.ts';
import { TimestampLike } from '../utils/TimestampLike';
export declare const makePatternFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<{
    issueId?: import("yup").Maybe<string | undefined>;
    supportGroupIds?: import("yup").Maybe<(string | undefined)[] | undefined>;
    notification?: {
        title: string;
        body: string;
    } | null | undefined;
    setbackTacticId?: import("yup").Maybe<string | undefined>;
    gameplanId?: import("yup").Maybe<string | undefined>;
    debriefGameplanId?: import("yup").Maybe<string | undefined>;
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
    setbackThreshold: number;
    sendWeeklyReports: NonNullable<boolean | undefined>;
}, "uid" | "ordinal" | "createdAt" | "updatedAt" | "name" | "setbackThreshold" | "sendWeeklyReports" | ("issueId" | "supportGroupIds" | "notification" | "setbackTacticId" | "gameplanId" | "debriefGameplanId")>;
