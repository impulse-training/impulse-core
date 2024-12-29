import * as yup from 'yup';
import { tacticBaseSchema } from './base';

export const stepsTacticSchema = tacticBaseSchema('steps').shape({
  targetSteps: yup.number().required(),
});
export type StepsTacticValue = yup.InferType<typeof stepsTacticSchema>;
