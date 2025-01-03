import * as yup from 'yup';
export declare const experimentSchema: yup.ObjectSchema<{
    behaviorIds: string[];
    metricDoc: import("./utils/firestore").DocumentReferenceLike<unknown> | undefined;
    minimumDays: number;
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
    behaviorIds: "";
    metricDoc: undefined;
    minimumDays: undefined;
    createdAt: undefined;
    updatedAt: undefined;
}, "">;
