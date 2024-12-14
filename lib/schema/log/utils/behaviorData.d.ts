import * as yup from 'yup';
export declare const behaviorDataSchema: yup.ObjectSchema<{
    setbackThreshold: number | undefined;
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
    setbackThreshold: undefined;
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
        type: "counter";
        ordinal: number;
    } | {
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
    };
    data: {
        setbackThreshold?: number | undefined;
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
    behavior: undefined;
    data: {
        setbackThreshold: undefined;
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
