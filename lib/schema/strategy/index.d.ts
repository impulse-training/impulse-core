import * as yup from 'yup';
import { FolderStrategyValue } from './folderStrategy';
import { TacticStrategyValue } from './tacticStrategy';
export * from './folderStrategy';
export * from './tacticStrategy';
export type StrategyValue = TacticStrategyValue | FolderStrategyValue;
export declare const strategySchemas: Record<StrategyValue['type'], yup.ObjectSchema<StrategyValue>>;
export declare const strategySchema: yup.Lazy<StrategyValue, yup.AnyObject, any>;
