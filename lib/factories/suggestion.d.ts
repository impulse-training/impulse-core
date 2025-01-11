import * as Factory from 'factory.ts';
import { TimestampLike } from '../utils';
export declare const makeSuggestionFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<{
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
    tacticDocs?: import("../schema/utils/firestore").DocumentReferenceLike<unknown>[] | undefined;
    stages?: number[] | undefined;
    title: string;
    gptContext: string;
}, "title" | "gptContext" | ("createdAt" | "updatedAt" | "tacticDocs" | "stages")>;
