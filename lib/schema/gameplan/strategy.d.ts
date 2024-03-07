import * as yup from 'yup';
export declare const strategySchema: yup.ObjectSchema<{
    tacticIds: string[];
    suggestedTacticIds: string[] | undefined;
    conditionalTacticIds: {
        ids: string[];
        condition: NonNullable<"eq" | "gt" | "lt" | "keyword" | undefined>;
        value: {};
    }[] | undefined;
}, yup.AnyObject, {
    tacticIds: "";
    suggestedTacticIds: "";
    conditionalTacticIds: "";
}, "">;
export type Strategy = yup.InferType<typeof strategySchema>;
