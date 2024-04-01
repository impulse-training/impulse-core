import * as yup from 'yup';
import { ImpulseStrategyValue } from './impulse';
import { LocationStrategyValue } from './location';
import { TimeStrategyValue } from './time';
export type StrategyValue = ImpulseStrategyValue | TimeStrategyValue | LocationStrategyValue;
export declare const strategySchemas: Record<StrategyValue['type'], yup.ObjectSchema<StrategyValue>>;
export declare const strategySchema: yup.Lazy<StrategyValue, yup.AnyObject, any>;
