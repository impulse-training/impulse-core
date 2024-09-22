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
    tacticDocs?: import("../schema/utils/firestore").DocumentReferenceLike<unknown>[] | undefined;
    title: string;
    gptContext: string;
}, "title" | "gptContext" | ("createdAt" | "updatedAt" | "stages" | "tacticDocs")>;
