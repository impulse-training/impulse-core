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
    title: string;
    gptContext: string;
    tacticDocs: import("./utils/firestore").DocumentReferenceLike<unknown>[] | undefined;
    stages: number[] | undefined;
}, yup.AnyObject, {
    createdAt: undefined;
    updatedAt: undefined;
    title: undefined;
    gptContext: undefined;
    tacticDocs: "";
    stages: "";
}, "">;
export type SuggestionValue = yup.InferType<typeof suggestionSchema>;
