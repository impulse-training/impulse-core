import * as yup from 'yup';
import { FolderValue } from './folder';
import { TacticValue } from './tactic';
export * from './folder';
export * from './tactic';
export type StrategyValue = TacticValue | FolderValue;
export declare const strategySchemas: Record<StrategyValue['type'], yup.ObjectSchema<StrategyValue>>;
export declare const strategySchema: yup.Lazy<ValidatedStrategy, yup.AnyObject, any>;
type ValidatedStrategy = {
    [K in StrategyValue['type']]: yup.InferType<(typeof strategySchemas)[K]>;
}[StrategyValue['type']];
