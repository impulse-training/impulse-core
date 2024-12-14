import * as yup from 'yup';
export declare const behaviorSchema: yup.ObjectSchema<{
    name: string;
    ordinal: number;
    trackingType: NonNullable<"time" | "counter" | undefined>;
    setbackThreshold: number | undefined;
    isHelpful: boolean | null;
    createdAt: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    updatedAt: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
}, yup.AnyObject, {
    name: undefined;
    ordinal: undefined;
    trackingType: undefined;
    setbackThreshold: undefined;
    isHelpful: undefined;
    createdAt: undefined;
    updatedAt: undefined;
}, "">;
export type BehaviorValue = yup.InferType<typeof behaviorSchema>;
