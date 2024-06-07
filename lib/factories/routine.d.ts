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
    name: string;
    type: "time";
    folders: import("../schema/utils/firestore").DocumentReferenceLike<unknown>[];
    hour: number;
    minute: number;
    weekdays: number[];
}, "profileId" | "name" | "type" | "folders" | "hour" | "minute" | "weekdays" | ("createdAt" | "updatedAt")>;
