import * as yup from 'yup';
import { strategyValueBaseSchema } from './base';
export const impulseStrategySchema = strategyValueBaseSchema('impulse');
export type ImpulseStrategyValue = yup.InferType<typeof impulseStrategySchema>;
