import * as yup from 'yup';
export declare const timeBehaviorSchema: yup.ObjectSchema<{
    prompt: string;
    type: "time";
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
}, yup.AnyObject, {
    prompt: undefined;
    type: undefined;
    ordinal: undefined;
    templateFor: undefined;
    recommendedForIssueIds: "";
    createdAt: undefined;
    updatedAt: undefined;
    setbackThreshold: undefined;
}, "">;
export type TimeBehaviorValue = yup.InferType<typeof timeBehaviorSchema>;
