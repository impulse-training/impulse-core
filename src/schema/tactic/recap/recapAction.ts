import * as yup from 'yup';
import { recapTacticValueBaseSchema } from './base';

export const recapActionTacticSchema =
  recapTacticValueBaseSchema('recap-action');

export type RecapActionTacticValue = yup.InferType<
  typeof recapActionTacticSchema
>;
