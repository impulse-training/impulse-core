import * as yup from 'yup';
import { WithTacticsById } from '../tactic';
import { imageSchema } from '../utils/image';
import { strategyBaseSchema } from './base';

export const dailyStrategySchema = strategyBaseSchema('daily').shape({
  currentTacticId: yup.string(),
  image: imageSchema.optional(),
  description: yup.string().required(),
});

export type DailyStrategyValue = WithTacticsById<
  yup.InferType<typeof dailyStrategySchema>
>;
