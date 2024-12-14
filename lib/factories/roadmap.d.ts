import * as Factory from 'factory.ts';
import { TimestampLike } from '../utils';
export declare const makeRoadmapFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<{
    recommendedForIssueIds?: string[] | undefined;
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
}, "name" | "stages" | ("recommendedForIssueIds" | "createdAt" | "updatedAt" | "recommendedForIssueOrdinals")>;
