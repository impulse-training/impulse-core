import * as yup from 'yup';
export type TimeRoutine = yup.InferType<typeof timeRoutineSchema>;
export declare const timeRoutineSchema: yup.ObjectSchema<{
    tacticIds: string[];
    suggestedTacticIds: string[] | undefined;
    conditionalTacticIds: {
        ids: string[];
        condition: NonNullable<"eq" | "gt" | "lt" | "keyword" | undefined>;
        value: {};
    }[] | undefined;
    weekdays: number[];
    hour: number;
    minute: number;
    title: string;
}, yup.AnyObject, {
    tacticIds: "";
    suggestedTacticIds: "";
    conditionalTacticIds: "";
    weekdays: "";
    hour: undefined;
    minute: undefined;
    title: undefined;
}, "">;
export type LocationRoutine = yup.InferType<typeof locationRoutineSchema>;
export declare const locationRoutineSchema: yup.ObjectSchema<{
    tacticIds: string[];
    suggestedTacticIds: string[] | undefined;
    conditionalTacticIds: {
        ids: string[];
        condition: NonNullable<"eq" | "gt" | "lt" | "keyword" | undefined>;
        value: {};
    }[] | undefined;
    locationId: string;
    mode: NonNullable<"enter" | "exit" | undefined>;
    title: string;
}, yup.AnyObject, {
    tacticIds: "";
    suggestedTacticIds: "";
    conditionalTacticIds: "";
    locationId: undefined;
    mode: undefined;
    title: undefined;
}, "">;
