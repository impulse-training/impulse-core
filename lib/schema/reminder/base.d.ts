import * as yup from 'yup';
import { reminderSchema } from '.';
import { WithTacticsById } from '../tactic';
export declare function reminderBaseSchema<K extends string>(type: K): yup.ObjectSchema<{
    type: yup.Defined<K>;
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
    name: undefined;
    createdAt: undefined;
    updatedAt: undefined;
}, "">;
export type ReminderValue = WithTacticsById<yup.InferType<typeof reminderSchema>>;
