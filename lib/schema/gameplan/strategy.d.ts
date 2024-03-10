import * as yup from 'yup';
export declare const strategySchema: yup.ObjectSchema<{
    tacticIds: string[];
    suggestedTacticIds: string[] | undefined;
}, yup.AnyObject, {
    tacticIds: "";
    suggestedTacticIds: "";
}, "">;
export type Strategy = yup.InferType<typeof strategySchema>;
