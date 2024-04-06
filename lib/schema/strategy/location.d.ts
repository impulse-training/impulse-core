import * as yup from 'yup';
export declare const locationStrategySchema: yup.ObjectSchema<{
    ordinal: yup.Maybe<number | undefined>;
    type: "location";
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
    locationId: string;
    mode: NonNullable<"enter" | "exit" | undefined>;
}, yup.AnyObject, {
    ordinal: undefined;
    type: undefined;
    name: undefined;
    tacticIds: "";
    createdAt: undefined;
    updatedAt: undefined;
    locationId: undefined;
    mode: undefined;
}, "">;
export type LocationStrategyValue = yup.InferType<typeof locationStrategySchema>;
