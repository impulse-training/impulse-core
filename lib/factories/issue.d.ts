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
    parentId?: string | null | undefined;
    hasDebriefQuestion?: boolean | undefined;
    profileCount?: number | null | undefined;
    isFeatured?: boolean | null | undefined;
    supportGroups?: import("../schema/utils/firestore").DocumentReferenceLike<unknown>[] | undefined;
    gameplanTactics?: import("../schema/utils/firestore").DocumentReferenceLike<unknown>[] | undefined;
    name: string;
    synonyms: string[];
    parentIds: string[];
    parentNames: string[];
}, "name" | "synonyms" | "parentIds" | "parentNames" | ("path" | "createdAt" | "updatedAt" | "parentId" | "hasDebriefQuestion" | "profileCount" | "isFeatured" | "supportGroups" | "gameplanTactics")>;
