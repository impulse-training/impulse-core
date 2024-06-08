import { InferType } from 'yup';
import { tacticSchema } from '../tactic';
import { strategyValueBaseSchema } from './base';

export const tacticStrategySchema = strategyValueBaseSchema(
  'tactic',
  tacticSchema
);

export type TacticStrategyValue = InferType<typeof tacticStrategySchema>;
