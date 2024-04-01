import * as yup from 'yup';
import { strategyValueBaseSchema } from './base';
export const locationStrategySchema = strategyValueBaseSchema('location').shape(
  {
    locationId: yup.string().required(),
    mode: yup.mixed<'enter' | 'exit'>().oneOf(['enter', 'exit']).required(),
  }
);
export type LocationStrategyValue = yup.InferType<
  typeof locationStrategySchema
>;
