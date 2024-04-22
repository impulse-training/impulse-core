import * as Factory from 'factory.ts';
import { TimestampLike } from '../utils/firestore/TimestampLike';
export declare const makePatternFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<{
    createdAt?: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    updatedAt?: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    supportGroupIds?: string[] | undefined;
    notification?: {
        title: string;
        body: string;
    } | import("yup").Maybe<{} | undefined>;
    measureTacticId?: import("yup").Maybe<string | undefined>;
    measureCallToAction?: import("yup").Maybe<string | undefined>;
    issueId?: import("yup").Maybe<string | undefined>;
    parentIssueIds?: string[] | undefined;
    sendWeeklyReports?: import("yup").Maybe<boolean | undefined>;
    profileId: string;
    name: string;
    ordinal: number;
}, "profileId" | "name" | "ordinal" | ("createdAt" | "updatedAt" | "supportGroupIds" | "notification" | "measureTacticId" | "measureCallToAction" | "issueId" | "parentIssueIds" | "sendWeeklyReports")>;
