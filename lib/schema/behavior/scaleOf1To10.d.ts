import * as yup from 'yup';
export declare const scaleOf1To10BehaviorSchema: yup.ObjectSchema<{
    prompt: string;
    type: "scaleOf1To10";
    ordinal: number;
    templateFor: "onboarding" | "afterSuccess" | "afterSetback" | undefined;
    recommendedForIssueIds: string[] | undefined;
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
    setbackThreshold: number | undefined;
    lowEmoji: yup.Maybe<string | undefined>;
    highEmoji: yup.Maybe<string | undefined>;
}, yup.AnyObject, {
    prompt: undefined;
    type: undefined;
    ordinal: undefined;
    templateFor: undefined;
    recommendedForIssueIds: "";
    createdAt: undefined;
    updatedAt: undefined;
    setbackThreshold: undefined;
    lowEmoji: undefined;
    highEmoji: undefined;
}, "">;
export type ScaleOf1To10BehaviorValue = yup.InferType<typeof scaleOf1To10BehaviorSchema>;
