import * as yup from 'yup';
import { WithTacticsById } from '../tactic';
import { strategyBaseSchema } from './base';
export const locationStrategySchema = strategyBaseSchema('location').shape({
  locationId: yup.string().required(),
  mode: yup.mixed<'enter' | 'exit'>().oneOf(['enter', 'exit']).required(),
});

export type LocationStrategyValue = WithTacticsById<
  yup.InferType<typeof locationStrategySchema>
>;
