import * as Factory from 'factory.ts';
import { TimestampLike } from '../utils/firestore/TimestampLike';
export declare const makeBehaviorFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<{
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
    dailyLimit?: number | undefined;
    gameplanId?: string | undefined;
    name: string;
    ordinal: number;
    trackingType: NonNullable<"time" | "counter" | undefined>;
    isHelpful: boolean | null;
}, "name" | "ordinal" | "trackingType" | "isHelpful" | ("createdAt" | "updatedAt" | "dailyLimit" | "gameplanId")>;
