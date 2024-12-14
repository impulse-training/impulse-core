import * as yup from 'yup';
export declare const behaviorDataSchema: yup.ObjectSchema<{
    idValue: string | undefined;
    numericValue: number | undefined;
    stringValue: string;
    label: string | undefined;
    color: string | undefined;
    unit: string;
    setAt: {
        isEqual?: any;
        toMillis?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    };
}, yup.AnyObject, {
    idValue: undefined;
    numericValue: undefined;
    stringValue: undefined;
    label: undefined;
    color: undefined;
    unit: undefined;
    setAt: {
        seconds: undefined;
        nanoseconds: undefined;
        isEqual: undefined;
        toMillis: undefined;
        toDate: undefined;
    };
}, "">;
export declare const behaviorAndBehaviorDataSchema: yup.ObjectSchema<{
    behavior: {
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
    };
    data: {
        label?: string | undefined;
        idValue?: string | undefined;
        numericValue?: number | undefined;
        color?: string | undefined;
        setAt: {
            isEqual?: any;
            toMillis?: any;
            seconds: number;
            nanoseconds: number;
            toDate: Function;
        };
        stringValue: string;
        unit: string;
    };
}, yup.AnyObject, {
    behavior: {
        name: undefined;
        ordinal: undefined;
        trackingType: undefined;
        setbackThreshold: undefined;
        isHelpful: undefined;
        createdAt: undefined;
        updatedAt: undefined;
    };
    data: {
        idValue: undefined;
        numericValue: undefined;
        stringValue: undefined;
        label: undefined;
        color: undefined;
        unit: undefined;
        setAt: {
            seconds: undefined;
            nanoseconds: undefined;
            isEqual: undefined;
            toMillis: undefined;
            toDate: undefined;
        };
    };
}, "">;
export type BehaviorDataValue = yup.InferType<typeof behaviorDataSchema>;
export type BehaviorAndBehaviorDataValue = yup.InferType<typeof behaviorAndBehaviorDataSchema>;
