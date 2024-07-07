import * as yup from 'yup';
import { routineSchema } from '.';
import { WithTacticsById } from '../strategy/tactic';
export declare function routineBaseSchema<K extends string>(type: K): yup.ObjectSchema<{
    type: yup.Defined<K>;
    profileId: string;
    name: string;
    createdAt: {
        isEqual?: any;
        toMillis?: any;
        toJSON?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
    updatedAt: {
        isEqual?: any;
        toMillis?: any;
        toJSON?: any;
        seconds: number;
        nanoseconds: number;
        toDate: Function;
    } | null | undefined;
}, yup.AnyObject, {
    type: undefined;
    profileId: undefined;
    name: undefined;
    createdAt: undefined;
    updatedAt: undefined;
}, "">;
export type RoutineValue = WithTacticsById<yup.InferType<typeof routineSchema>>;
