import * as Factory from 'factory.ts';
import { TimestampLike } from '../utils/TimestampLike';
export declare const makeIssueFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<{
    path?: string | null | undefined;
    parentId?: string | null | undefined;
    customUnit?: string | undefined;
    programsCount?: number | null | undefined;
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
    impulse: {
        suggestedTacticIds: string[];
        llmPrompt: string;
    } | null;
    impulseDebrief: {
        suggestedTacticIds: string[];
        llmPrompt: string;
    } | null;
    unit: NonNullable<"time" | "custom" | undefined>;
    synonyms: (string | undefined)[];
    parentIds: (string | undefined)[];
    parentNames: (string | undefined)[];
}, "createdAt" | "updatedAt" | "name" | "impulse" | "impulseDebrief" | "unit" | "synonyms" | "parentIds" | "parentNames" | ("path" | "parentId" | "customUnit" | "programsCount" | "profileCount" | "isFeatured")>;
