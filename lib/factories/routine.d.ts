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
    hour: number;
    minute: number;
    name: string;
    type: "time";
    weekdays: number[];
}, "profileId" | "hour" | "minute" | "name" | "type" | "weekdays" | ("createdAt" | "updatedAt")>;
