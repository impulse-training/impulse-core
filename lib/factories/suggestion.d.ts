import * as Factory from 'factory.ts';
import { TimestampLike } from '../utils';
export declare const makeSuggestionFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<{
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
    stages?: number[] | undefined;
    strategyDocs?: (import("../schema/utils/firestore").DocumentReferenceLike<unknown> | undefined)[] | undefined;
    name: string;
    gptContext: string;
}, "name" | "gptContext" | ("createdAt" | "updatedAt" | "stages" | "strategyDocs")>;
