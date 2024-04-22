import * as yup from 'yup';
import { WithTacticsById } from '.';
export declare const strategySchema: yup.ObjectSchema<{
    ordinal: yup.Maybe<number | undefined>;
    name: string;
    type: NonNullable<"impulse" | "time" | "debrief" | undefined>;
    tacticIds: string[];
    tacticsById: any;
    profileId: string | undefined;
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
    name: undefined;
    type: undefined;
    tacticIds: "";
    tacticsById: any;
    profileId: undefined;
    createdAt: undefined;
    updatedAt: undefined;
}, "">;
export type StrategyValue = WithTacticsById<yup.InferType<typeof strategySchema>>;
