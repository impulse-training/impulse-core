import * as yup from 'yup';
import { strategySchema } from '.';
import { WithTacticsById } from '../tactic';
export declare function strategyBaseSchema<K extends string>(type: K): yup.ObjectSchema<{
    ordinal: yup.Maybe<number | undefined>;
    type: yup.Defined<K>;
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
export type StrategyValue = WithTacticsById<yup.InferType<typeof strategySchema>>;
