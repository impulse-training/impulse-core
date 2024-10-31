import * as yup from 'yup';
import { profileStrategyBaseSchema } from './base';

// These are strategies where tactics are sourced from other sources
export const derivedProfileStrategySchema = profileStrategyBaseSchema(
  'derived'
).shape({
  parentIssueIds: yup.array().of(yup.string()).required().max(10),
  // Keywords or other metadata to filter results
});

export type DerivedProfileStrategyValue = yup.InferType<
  typeof derivedProfileStrategySchema
>;
