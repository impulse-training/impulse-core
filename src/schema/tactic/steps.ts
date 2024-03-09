import * as yup from 'yup';
import { tacticValueBaseSchema } from './base';

export const stepsTacticSchema = tacticValueBaseSchema('steps').shape({
  steps: yup.number().required(),
});
export type StepsTacticValue = yup.InferType<typeof stepsTacticSchema>;
