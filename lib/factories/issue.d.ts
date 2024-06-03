import * as Factory from 'factory.ts';
import { TimestampLike } from '../utils/firestore/TimestampLike';
export declare const makeIssueFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<{
    path?: string | null | undefined;
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
    parentId?: string | null | undefined;
    profileCount?: number | null | undefined;
    isFeatured?: boolean | null | undefined;
    name: string;
    ordinal: number;
    synonyms: string[];
    parentIds: string[];
    parentNames: string[];
    therapistProfileIds: string[];
}, "name" | "ordinal" | "synonyms" | "parentIds" | "parentNames" | "therapistProfileIds" | ("path" | "createdAt" | "updatedAt" | "parentId" | "profileCount" | "isFeatured")>;
