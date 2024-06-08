import * as yup from 'yup';
import { FolderStrategyValue, folderStrategySchema } from './folderStrategy';
import { TacticStrategyValue, tacticStrategySchema } from './tacticStrategy';

export * from './folderStrategy';
export * from './tacticStrategy';

export type StrategyValue = TacticStrategyValue | FolderStrategyValue;

// Utility to dynamically select the correct schema based on the strategy type
export const strategySchemas: Record<
  StrategyValue['type'],
  yup.ObjectSchema<StrategyValue>
> = {
  folder: folderStrategySchema,
  tactic: tacticStrategySchema,
} as any;
// We do highly value static typing, but the problem is that yup's generated types are bloated and
// cause problems. Instead of exporting generated types for top-level types like strategySchemas, we
// use any to bypass complex type generation, and use type assertions to ensure that the types are
// used correctly.

// The strategySchema is what's used to validate strategies in our database. We set an explicit return
// type to ensure that the conditional validation of only type doesn't infer that a strategy may only
// be an object with only the "type" field specified. Instead, we say that it always returns a
// validator for the known strategy types.
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
