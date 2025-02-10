import * as yup from 'yup';
export declare const insightSchema: yup.ObjectSchema<{
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
    summary: string;
    threads: {
        threadDoc?: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
        explanation: string;
    }[] | undefined;
}, yup.AnyObject, {
    createdAt: undefined;
    updatedAt: undefined;
    summary: undefined;
    threads: "";
}, "">;
export type InsightValue = yup.InferType<typeof insightSchema>;
