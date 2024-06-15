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
    hour: number;
    minute: number;
    name: string;
    folders: import("../schema/utils/firestore").DocumentReferenceLike<unknown>[];
    weekdays: number[];
}, "profileId" | "type" | "hour" | "minute" | "name" | "folders" | "weekdays" | ("createdAt" | "updatedAt")>;
