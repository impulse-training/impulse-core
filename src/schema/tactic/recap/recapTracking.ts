import * as yup from 'yup';
import { recapTacticValueBaseSchema } from './base';

export const recapTrackingTacticSchema =
  recapTacticValueBaseSchema('recap-tracking');

export type RecapTrackingTacticValue = yup.InferType<
  typeof recapTrackingTacticSchema
>;
