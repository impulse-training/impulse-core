import * as yup from 'yup';
import { LocationRoutineValue } from './location';
import { TimeRoutineValue } from './time';
export * from './location';
export * from './time';
export type RoutineValue = TimeRoutineValue | LocationRoutineValue;
export declare const routineSchemas: Record<RoutineValue['type'], yup.ObjectSchema<RoutineValue>>;
export declare const routineSchema: yup.Lazy<RoutineValue, yup.AnyObject, any>;
