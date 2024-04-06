import * as yup from 'yup';
export declare const timeStrategySchema: yup.ObjectSchema<{
    ordinal: yup.Maybe<number | undefined>;
    type: "time";
    name: string;
    tacticIds: string[];
    createdAt: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    updatedAt: {
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    weekdays: number[];
    hour: number;
    minute: number;
}, yup.AnyObject, {
    ordinal: undefined;
    type: undefined;
    name: undefined;
    tacticIds: "";
    createdAt: undefined;
    updatedAt: undefined;
    weekdays: "";
    hour: undefined;
    minute: undefined;
}, "">;
export type TimeStrategyValue = yup.InferType<typeof timeStrategySchema>;
