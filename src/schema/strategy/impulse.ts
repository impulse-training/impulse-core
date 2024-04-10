import * as yup from 'yup';
import { requiredStringArray } from '../utils/array';
import { strategyBaseSchema } from './base';

export const impulseStrategySchema = strategyBaseSchema('impulse').shape({
  forIssueIds: requiredStringArray,
});

export type ImpulseStrategyValue = yup.InferType<typeof impulseStrategySchema>;
