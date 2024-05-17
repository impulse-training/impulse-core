import * as yup from 'yup';
import { DailyStrategyValue, dailyStrategySchema } from './daily';
import { FolderStrategyValue, folderStrategySchema } from './folder';

// Utility to dynamically select the correct schema based on the strategy type
export const strategySchemas: Record<
  StrategyValue['type'],
  yup.ObjectSchema<StrategyValue>
> = {
  folder: folderStrategySchema,
  daily: dailyStrategySchema,
} as any;

export const strategySchema = yup.lazy(value => {
  if (typeof value.type === 'string' && value.type in strategySchemas) {
    return strategySchemas[value.type as StrategyValue['type']];
  }

  return yup.object({
    type: yup
      .mixed<StrategyValue['type']>()
      .oneOf(Object.keys(strategySchemas) as StrategyValue['type'][])
      .required(),
  });
}) as yup.Lazy<StrategyValue>;

export type StrategyValue = FolderStrategyValue | DailyStrategyValue;
