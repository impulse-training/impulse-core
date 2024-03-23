import * as yup from 'yup';
export declare const strategySchema: yup.ObjectSchema<{
    tacticIds: string[];
    suggestedTacticIds: string[] | undefined;
}, yup.AnyObject, {
    tacticIds: "";
    suggestedTacticIds: "";
}, "">;
export type Strategy = yup.InferType<typeof strategySchema>;
export declare const timeStrategySchema: yup.ObjectSchema<{
    tacticIds: string[];
    suggestedTacticIds: string[] | undefined;
    weekdays: number[];
    hour: number;
    minute: number;
    title: string;
}, yup.AnyObject, {
    tacticIds: "";
    suggestedTacticIds: "";
    weekdays: "";
    hour: undefined;
    minute: undefined;
    title: undefined;
}, "">;
export type TimeStrategy = yup.InferType<typeof timeStrategySchema>;
export declare const locationStrategySchema: yup.ObjectSchema<{
    tacticIds: string[];
    suggestedTacticIds: string[] | undefined;
    locationId: string;
    mode: NonNullable<"enter" | "exit" | undefined>;
    title: string;
}, yup.AnyObject, {
    tacticIds: "";
    suggestedTacticIds: "";
    locationId: undefined;
    mode: undefined;
    title: undefined;
}, "">;
export type LocationStrategy = yup.InferType<typeof locationStrategySchema>;
