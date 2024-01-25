import * as Yup from 'yup';
export declare const patternValueSchema: Yup.ObjectSchema<{
    uid: string;
    createdAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    updatedAt: {
        seconds: number;
        nanoseconds: number;
        toDate: {};
    };
    name: string;
    ordinal: number;
    unit: NonNullable<"time" | "custom" | undefined>;
    customUnit: string | undefined;
    supportGroupIds: Yup.Maybe<(string | undefined)[] | undefined>;
    notification: {
        title: string;
        body: string;
    } | null | undefined;
    issueId: Yup.Maybe<string | undefined>;
    sendWeeklyReports: NonNullable<boolean | undefined>;
    setbackThreshold: number;
    gameplanId: Yup.Maybe<string | undefined>;
    successGameplanId: Yup.Maybe<string | undefined>;
    setbackGameplanId: Yup.Maybe<string | undefined>;
}, Yup.AnyObject, {
    uid: undefined;
    createdAt: {
        seconds: undefined;
        nanoseconds: undefined;
        toDate: undefined;
    };
    updatedAt: {
        seconds: undefined;
        nanoseconds: undefined;
        toDate: undefined;
    };
    name: undefined;
    ordinal: undefined;
    unit: undefined;
    customUnit: undefined;
    supportGroupIds: "";
    notification: {
        title: undefined;
        body: undefined;
    };
    issueId: undefined;
    sendWeeklyReports: undefined;
    setbackThreshold: undefined;
    gameplanId: undefined;
    successGameplanId: undefined;
    setbackGameplanId: undefined;
}, "">;
export type PatternValue = Yup.InferType<typeof patternValueSchema>;
export declare const patternUsageSchema: Yup.ObjectSchema<{
    unit: NonNullable<"time" | "custom" | undefined>;
    customUnit: string | undefined;
    formattedValue: string;
    value: number;
}, Yup.AnyObject, {
    unit: undefined;
    customUnit: undefined;
    formattedValue: undefined;
    value: undefined;
}, "">;
export type PatternUsage = Yup.InferType<typeof patternUsageSchema>;
