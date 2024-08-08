import * as Factory from 'factory.ts';
import { TimestampLike } from '../utils';
export declare const makeRoadmapFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<{
    recommendedForIssueIds?: string[] | undefined;
    recommendedForIssueOrdinals?: {
        [x: string]: number;
    } | null | undefined;
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
    name: string;
    stages: {
        name: string;
        graduationCriteria: {
            requiredWinRate: number;
            requiredWinRateDays: number;
        };
    }[];
}, "name" | "stages" | ("recommendedForIssueIds" | "recommendedForIssueOrdinals" | "createdAt" | "updatedAt")>;
