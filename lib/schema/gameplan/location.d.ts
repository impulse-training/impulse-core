import * as yup from 'yup';
export declare const locationGameplanSchema: yup.ObjectSchema<{
    name: string;
    type: NonNullable<"arrival" | "departure" | "both" | undefined>;
}, yup.AnyObject, {
    name: undefined;
    type: undefined;
}, "">;
export type LocationGameplanValue = yup.InferType<typeof locationGameplanSchema>;
