import * as Factory from 'factory.ts';
import { TimestampLike } from '../utils/firestore/TimestampLike';
export declare const makeIssueFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<{
    path?: string | null | undefined;
    createdAt?: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    updatedAt?: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    ordinal?: number | undefined;
    parentId?: string | null | undefined;
    parentName?: string | null | undefined;
    hasDebriefBehavior?: boolean | undefined;
    synonyms?: string[] | undefined;
    parentIds?: string[] | undefined;
    parentNames?: string[] | undefined;
    profileCount?: number | null | undefined;
    isFeatured?: boolean | null | undefined;
    blandContext?: string | undefined;
    recommendedStrategies?: import("../schema/utils/firestore").DocumentReferenceLike<unknown>[] | undefined;
    gameplanTactics?: import("../schema/utils/firestore").DocumentReferenceLike<unknown>[] | undefined;
    name: string;
}, "name" | ("path" | "createdAt" | "updatedAt" | "ordinal" | "parentId" | "parentName" | "hasDebriefBehavior" | "synonyms" | "parentIds" | "parentNames" | "profileCount" | "isFeatured" | "blandContext" | "recommendedStrategies" | "gameplanTactics")>;
