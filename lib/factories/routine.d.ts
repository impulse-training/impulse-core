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
    folders: import("../schema/utils/firestore").DocumentReferenceLike<unknown>[];
    hour: number;
    minute: number;
    weekdays: number[];
}, "profileId" | "type" | "name" | "folders" | "hour" | "minute" | "weekdays" | ("createdAt" | "updatedAt")>;
