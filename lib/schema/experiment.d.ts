import * as yup from 'yup';
export declare const experimentSchema: yup.ObjectSchema<{
    behaviorDocs: import("./utils/firestore").DocumentReferenceLike<unknown>[] | undefined;
    metricDoc: import("./utils/firestore").DocumentReferenceLike<unknown>;
    minimumDays: number;
    hypothesis: string | undefined;
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
    behaviorDocs: "";
    metricDoc: undefined;
    minimumDays: undefined;
    hypothesis: undefined;
    createdAt: undefined;
    updatedAt: undefined;
}, "">;
export type ExperimentValue = yup.InferType<typeof experimentSchema>;
