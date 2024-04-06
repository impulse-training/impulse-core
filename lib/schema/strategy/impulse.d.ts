import * as yup from 'yup';
export declare const impulseStrategySchema: yup.ObjectSchema<{
    ordinal: yup.Maybe<number | undefined>;
    type: "impulse";
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
}, yup.AnyObject, {
    ordinal: undefined;
    type: undefined;
    name: undefined;
    tacticIds: "";
    createdAt: undefined;
    updatedAt: undefined;
}, "">;
export type ImpulseStrategyValue = yup.InferType<typeof impulseStrategySchema>;
