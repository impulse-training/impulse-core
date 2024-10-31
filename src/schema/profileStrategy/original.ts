import * as yup from 'yup';
import { strategySchema } from '../strategy';
import { documentReferenceSchema } from '../utils/firestore';
import { profileStrategyBaseSchema } from './base';

// These are strategies that the user owns
export const originalProfileStrategySchema = profileStrategyBaseSchema(
  'original'
).shape({
  strategyDoc: documentReferenceSchema,
  strategy: strategySchema.required(),
});
export type OriginalProfileStrategyValue = yup.InferType<
  typeof originalProfileStrategySchema
>;
