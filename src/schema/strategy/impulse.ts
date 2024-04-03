import * as yup from 'yup';
import { WithTacticsById } from '../tactic';
import { strategyBaseSchema } from './base';
export const impulseStrategySchema = strategyBaseSchema('impulse');

export type ImpulseStrategyValue = WithTacticsById<
  yup.InferType<typeof impulseStrategySchema>
>;
