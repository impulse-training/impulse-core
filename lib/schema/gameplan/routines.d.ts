import * as yup from 'yup';
export type TimeRoutine = yup.InferType<typeof timeRoutineSchema>;
export declare const timeRoutineSchema: yup.ObjectSchema<{
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
export type LocationRoutine = yup.InferType<typeof locationRoutineSchema>;
export declare const locationRoutineSchema: yup.ObjectSchema<{
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
