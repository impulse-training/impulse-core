import * as Factory from 'factory.ts';
import { TimestampLike } from '../utils/firestore/TimestampLike';
export declare const makeIssueFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<{
    path?: string | null | undefined;
    parentId?: string | null | undefined;
    profileCount?: number | null | undefined;
    isFeatured?: boolean | null | undefined;
    createdAt: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    };
    updatedAt: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    };
    name: string;
    ordinal: number;
    synonyms: string[];
    parentIds: string[];
    parentNames: string[];
    therapistProfileIds: string[];
}, "createdAt" | "updatedAt" | "name" | "ordinal" | "synonyms" | "parentIds" | "parentNames" | "therapistProfileIds" | ("path" | "parentId" | "profileCount" | "isFeatured")>;
