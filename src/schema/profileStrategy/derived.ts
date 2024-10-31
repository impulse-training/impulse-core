import * as yup from 'yup';
import { profileStrategyBaseSchema } from './base';

// These are strategies where tactics are sourced from other sources
export const derivedProfileStrategySchema = profileStrategyBaseSchema(
  'derived'
).shape({
  // Keywords or other metadata to filter results
});

export type DerivedProfileStrategyValue = yup.InferType<
  typeof derivedProfileStrategySchema
>;
