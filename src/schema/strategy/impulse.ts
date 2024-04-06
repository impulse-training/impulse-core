import * as yup from 'yup';
import { strategyBaseSchema } from './base';
export const impulseStrategySchema = strategyBaseSchema('impulse');

export type ImpulseStrategyValue = yup.InferType<typeof impulseStrategySchema>;
