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
    supportGroups: import("../schema/utils/firestore").DocumentReferenceLike<unknown>[];
    hour: number;
    minute: number;
    name: string;
    weekdays: number[];
}, "profileId" | "type" | "supportGroups" | "hour" | "minute" | "name" | "weekdays" | ("createdAt" | "updatedAt")>;
