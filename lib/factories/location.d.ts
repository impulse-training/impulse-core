import * as Factory from 'factory.ts';
import { TimestampLike } from '../utils/TimestampLike';
export declare const makeLocationFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<{
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
    latitude?: number | undefined;
    longitude?: number | undefined;
    profileId: string;
    name: string;
    address: string;
}, "profileId" | "name" | "address" | ("createdAt" | "updatedAt" | "latitude" | "longitude")>;
