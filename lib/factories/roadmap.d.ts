import * as Factory from 'factory.ts';
import { TimestampLike } from '../utils';
export declare const makeRoadmapFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<{
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
    recommendedForIssueIds?: string[] | undefined;
    recommendedForIssueOrdinals?: {
        [x: string]: number;
    } | null | undefined;
    name: string;
    stages: {
        name: string;
        graduationCriteria: {
            requiredWinRate: number;
            requiredWinRateDays: number;
        };
    }[];
}, "name" | "stages" | ("createdAt" | "updatedAt" | "recommendedForIssueIds" | "recommendedForIssueOrdinals")>;
