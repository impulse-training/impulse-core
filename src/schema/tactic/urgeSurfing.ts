import * as yup from 'yup';
import { tacticValueBaseSchema } from './base';

export const urgeSurfingTacticSchema = tacticValueBaseSchema(
  'urge-surfing'
).shape({});
export type UrgeSurfingTacticValue = yup.InferType<
  typeof urgeSurfingTacticSchema
>;
