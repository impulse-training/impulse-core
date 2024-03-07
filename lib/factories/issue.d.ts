import * as Factory from 'factory.ts';
import { TimestampLike } from '../utils/TimestampLike';
export declare const makeIssueFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<{
    path?: string | null | undefined;
    isFeatured?: boolean | null | undefined;
    programsCount?: number | null | undefined;
    parentId?: string | null | undefined;
    customUnit?: string | undefined;
    profileCount?: number | null | undefined;
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
        suggestedTacticIds: (string | undefined)[];
        llmPrompt: string;
    } | null;
    impulseDebrief: {
        suggestedTacticIds: (string | undefined)[];
        llmPrompt: string;
    } | null;
    unit: NonNullable<"time" | "custom" | undefined>;
    synonyms: (string | undefined)[];
    parentIds: (string | undefined)[];
    parentNames: (string | undefined)[];
}, "createdAt" | "updatedAt" | "name" | "impulse" | "impulseDebrief" | "unit" | "synonyms" | "parentIds" | "parentNames" | ("path" | "isFeatured" | "programsCount" | "parentId" | "customUnit" | "profileCount")>;
