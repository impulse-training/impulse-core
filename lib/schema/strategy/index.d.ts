import * as yup from 'yup';
import { DailyStrategyValue } from './daily';
import { FolderStrategyValue } from './folder';
export declare const strategySchemas: Record<StrategyValue['type'], yup.ObjectSchema<StrategyValue>>;
export declare const strategySchema: yup.Lazy<StrategyValue, yup.AnyObject, any>;
export type StrategyValue = FolderStrategyValue | DailyStrategyValue;
