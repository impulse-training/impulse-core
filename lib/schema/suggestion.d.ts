import * as yup from 'yup';
export declare const suggestionSchema: yup.ObjectSchema<{
    createdAt: {
        isEqual?: any;
        toMillis?: any;
        toJSON?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    updatedAt: {
        isEqual?: any;
        toMillis?: any;
        toJSON?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    name: string;
    gptContext: string;
    strategyDocs: (import("./utils/firestore").DocumentReferenceLike<unknown> | undefined)[] | undefined;
    stages: number[] | undefined;
}, yup.AnyObject, {
    createdAt: undefined;
    updatedAt: undefined;
    name: undefined;
    gptContext: undefined;
    strategyDocs: "";
    stages: "";
}, "">;
export type SuggestionValue = yup.InferType<typeof suggestionSchema>;
