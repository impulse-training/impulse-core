import * as yup from 'yup';
import { FolderValue, folderSchema } from './strategy/folder';
import { TacticValue, tacticSchemas } from './strategy/tactic';

export type StrategyValue = TacticValue | FolderValue;
// A strategy is a tactic or a folder. We store them in the top-level strategies collection as well
// as profile-level strategies collections

// Utility to dynamically select the correct schema based on the tactic type
export const strategySchemas: Record<
  StrategyValue['type'],
  yup.ObjectSchema<StrategyValue>
> = {
  ...tacticSchemas,
  folder: folderSchema,
} as any;

// The tacticSchema is what's used to validate tactics in our database. We set an explicit return
// type to ensure that the conditional validation of only type doesn't infer that a tactic may only
// be an object with only the "type" field specified. Instead, we say that it always returns a
// validator for the known tactic types.
export const strategySchema = yup.lazy(value => {
  if (typeof value.type === 'string' && value.type in tacticSchemas) {
    return strategySchemas[value.type as StrategyValue['type']];
  }

  return yup.object({
    type: yup
      .mixed<TacticValue['type']>()
      .oneOf(Object.keys(tacticSchemas) as TacticValue['type'][])
      .required(),
  });
}) as yup.Lazy<ValidatedStrategy>;

// / This type represents the union of all possible validated tactic objects
type ValidatedStrategy = {
  [K in StrategyValue['type']]: yup.InferType<(typeof strategySchemas)[K]>;
}[StrategyValue['type']];
