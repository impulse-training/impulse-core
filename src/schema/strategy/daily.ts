import * as yup from 'yup';
import { WithTacticsById } from '../tactic';
import { strategyBaseSchema } from './base';

export const dailyStrategySchema = strategyBaseSchema('daily').shape({
  currentTacticIndex: yup.number(),
});

export type DailyStrategyValue = WithTacticsById<
  yup.InferType<typeof dailyStrategySchema>
>;
