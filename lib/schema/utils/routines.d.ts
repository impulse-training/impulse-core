import * as yup from 'yup';
export type TimeStrategy = yup.InferType<typeof timeStrategySchema>;
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
export type LocationStrategy = yup.InferType<typeof locationStrategySchema>;
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
