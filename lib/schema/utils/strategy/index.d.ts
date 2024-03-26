import * as yup from 'yup';
declare const impulseStrategySchema: yup.ObjectSchema<{
    type: "impulse";
    title: string;
    prompt: yup.Maybe<string | undefined>;
    tacticIds: string[];
    suggestedTacticIds: string[] | undefined;
}, yup.AnyObject, {
    type: undefined;
    title: undefined;
    prompt: undefined;
    tacticIds: "";
    suggestedTacticIds: "";
}, "">;
export type ImpulseStrategySchema = yup.InferType<typeof impulseStrategySchema>;
export declare const timeStrategySchema: yup.ObjectSchema<{
    type: "time";
    title: string;
    prompt: yup.Maybe<string | undefined>;
    tacticIds: string[];
    suggestedTacticIds: string[] | undefined;
    weekdays: number[];
    hour: number;
    minute: number;
}, yup.AnyObject, {
    type: undefined;
    title: undefined;
    prompt: undefined;
    tacticIds: "";
    suggestedTacticIds: "";
    weekdays: "";
    hour: undefined;
    minute: undefined;
}, "">;
export type TimeStrategy = yup.InferType<typeof timeStrategySchema>;
export declare const locationStrategySchema: yup.ObjectSchema<{
    type: "location";
    title: string;
    prompt: yup.Maybe<string | undefined>;
    tacticIds: string[];
    suggestedTacticIds: string[] | undefined;
    locationId: string;
    mode: NonNullable<"enter" | "exit" | undefined>;
}, yup.AnyObject, {
    type: undefined;
    title: undefined;
    prompt: undefined;
    tacticIds: "";
    suggestedTacticIds: "";
    locationId: undefined;
    mode: undefined;
}, "">;
export type LocationStrategy = yup.InferType<typeof locationStrategySchema>;
export type Strategy = ImpulseStrategySchema | TimeStrategy | LocationStrategy;
export declare const strategySchemas: Record<Strategy['type'], yup.ObjectSchema<Strategy>>;
export declare const strategySchema: yup.Lazy<Strategy, yup.AnyObject, any>;
export {};
