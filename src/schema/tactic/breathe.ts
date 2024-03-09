import * as yup from 'yup';
import { tacticValueBaseSchema } from './base';

export const breatheTacticSchema = tacticValueBaseSchema('breathe').shape({
  inFor: yup.number().positive().required(),
  holdFor: yup.number().positive().required(),
  outFor: yup.number().positive().required(),
  repeat: yup.number().positive().notRequired(),
});
export type BreatheTacticValue = yup.InferType<typeof breatheTacticSchema>;
