import * as Factory from 'factory.ts';
import { TimestampLike } from '../utils';
export declare const makeTimeRoutineFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<{
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
    profileId: string;
    type: "time";
    name: string;
    weekdays: number[];
    hour: number;
    minute: number;
}, "profileId" | "type" | "name" | "weekdays" | "hour" | "minute" | ("createdAt" | "updatedAt")>;
