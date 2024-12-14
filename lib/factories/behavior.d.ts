import * as Factory from 'factory.ts';
import { TimestampLike } from '../utils/firestore/TimestampLike';
export declare const makeBehaviorFactories: (TimestampKlass: typeof TimestampLike) => {
    counterBehaviorFactory: Factory.Sync.Factory<{
        recommendedForIssueIds?: string[] | undefined;
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
        templateFor?: "onboarding" | "afterSuccess" | "afterSetback" | undefined;
        setbackThreshold?: number | undefined;
        prompt: string;
        type: "time";
        ordinal: number;
    }, "prompt" | "type" | "ordinal" | ("recommendedForIssueIds" | "createdAt" | "updatedAt" | "templateFor" | "setbackThreshold")>;
    timeBehaviorFactory: Factory.Sync.Factory<{
        recommendedForIssueIds?: string[] | undefined;
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
        templateFor?: "onboarding" | "afterSuccess" | "afterSetback" | undefined;
        setbackThreshold?: number | undefined;
        prompt: string;
        type: "time";
        ordinal: number;
    }, "prompt" | "type" | "ordinal" | ("recommendedForIssueIds" | "createdAt" | "updatedAt" | "templateFor" | "setbackThreshold")>;
};
