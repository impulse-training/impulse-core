import * as yup from 'yup';
export declare const behaviorDataSchema: yup.ObjectSchema<{
    counterValue: number | undefined;
    timeSeconds: number | undefined;
    formattedValue: string;
    label: {
        color?: string | undefined;
        text: string;
    } | null | undefined;
}, yup.AnyObject, {
    counterValue: undefined;
    timeSeconds: undefined;
    formattedValue: undefined;
    label: undefined;
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
        unit?: string | undefined;
        dailyLimit?: number | undefined;
        skipGameplanAutoCreation?: boolean | undefined;
        name: string;
        ordinal: number;
        trackingType: NonNullable<"time" | "counter" | undefined>;
        isHelpful: boolean | null;
    };
    data: {
        label?: {
            color?: string | undefined;
            text: string;
        } | null | undefined;
        counterValue?: number | undefined;
        timeSeconds?: number | undefined;
        formattedValue: string;
    };
    color: string | undefined;
}, yup.AnyObject, {
    behavior: {
        name: undefined;
        ordinal: undefined;
        trackingType: undefined;
        unit: undefined;
        dailyLimit: undefined;
        isHelpful: undefined;
        skipGameplanAutoCreation: undefined;
        createdAt: undefined;
        updatedAt: undefined;
    };
    data: {
        counterValue: undefined;
        timeSeconds: undefined;
        formattedValue: undefined;
        label: undefined;
    };
    color: undefined;
}, "">;
export type BehaviorDataValue = yup.InferType<typeof behaviorDataSchema>;
export type BehaviorAndBehaviorDataValue = yup.InferType<typeof behaviorAndBehaviorDataSchema>;
