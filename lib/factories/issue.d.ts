import * as Factory from 'factory.ts';
import { TimestampLike } from '../utils/firestore/TimestampLike';
export declare const makeIssueFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<{
    path?: string | null | undefined;
    createdAt?: {
        isEqual?: any;
        toMillis?: any;
        toJSON?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    updatedAt?: {
        isEqual?: any;
        toMillis?: any;
        toJSON?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    parentIds?: string[] | undefined;
    parentId?: string | null | undefined;
    parentName?: string | null | undefined;
    hasDebriefQuestion?: boolean | undefined;
    synonyms?: string[] | undefined;
    parentNames?: string[] | undefined;
    profileCount?: number | null | undefined;
    isFeatured?: boolean | null | undefined;
    supportGroups?: import("../schema/utils/firestore").DocumentReferenceLike<unknown>[] | undefined;
    gameplanTactics?: import("../schema/utils/firestore").DocumentReferenceLike<unknown>[] | undefined;
    name: string;
}, "name" | ("path" | "createdAt" | "updatedAt" | "parentIds" | "parentId" | "parentName" | "hasDebriefQuestion" | "synonyms" | "parentNames" | "profileCount" | "isFeatured" | "supportGroups" | "gameplanTactics")>;
