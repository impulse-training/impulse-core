import * as Factory from 'factory.ts';
import { TimestampLike } from '../utils/firestore/TimestampLike';
export declare const makeBehaviorFactories: (TimestampKlass: typeof TimestampLike) => {
    counterBehaviorFactory: Factory.Sync.Factory<{
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
        setbackThreshold?: number | undefined;
        name: string;
        ordinal: number;
        trackingType: NonNullable<"time" | "counter" | undefined>;
        isHelpful: boolean | null;
    }, "name" | "ordinal" | "trackingType" | "isHelpful" | ("createdAt" | "updatedAt" | "setbackThreshold")>;
    timeBehaviorFactory: Factory.Sync.Factory<{
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
        setbackThreshold?: number | undefined;
        name: string;
        ordinal: number;
        trackingType: NonNullable<"time" | "counter" | undefined>;
        isHelpful: boolean | null;
    }, "name" | "ordinal" | "trackingType" | "isHelpful" | ("createdAt" | "updatedAt" | "setbackThreshold")>;
};
