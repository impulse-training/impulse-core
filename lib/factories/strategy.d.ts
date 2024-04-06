import * as Factory from 'factory.ts';
import { TimestampLike } from '../utils/TimestampLike';
export declare const makeImpulseStrategyFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<{
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
    ordinal?: import("yup").Maybe<number | undefined>;
    type: "impulse";
    tacticIds: string[];
    name: string;
}, "type" | "tacticIds" | "name" | ("createdAt" | "updatedAt" | "ordinal")>;
export declare const makeTimeStrategyFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<{
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
    ordinal?: import("yup").Maybe<number | undefined>;
    type: "time";
    tacticIds: string[];
    name: string;
    weekdays: number[];
    hour: number;
    minute: number;
}, "type" | "tacticIds" | "name" | "weekdays" | "hour" | "minute" | ("createdAt" | "updatedAt" | "ordinal")>;
