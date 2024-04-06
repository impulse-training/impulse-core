import * as yup from 'yup';
import { strategyBaseSchema } from './base';
export const locationStrategySchema = strategyBaseSchema('location').shape({
  locationId: yup.string().required(),
  mode: yup.mixed<'enter' | 'exit'>().oneOf(['enter', 'exit']).required(),
});

export type LocationStrategyValue = yup.InferType<
  typeof locationStrategySchema
>;
