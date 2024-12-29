import * as yup from 'yup';
import { tacticValueBaseSchema } from './base';

export const breathingExerciseTacticSchema = tacticValueBaseSchema(
  'breathingExercise'
).shape({
  inFor: yup.number().positive().required(),
  holdFor: yup.number().positive().required(),
  outFor: yup.number().positive().required(),
  repeat: yup.number().positive().notRequired(),
});

export type BreathingExerciseTacticValue = yup.InferType<
  typeof breathingExerciseTacticSchema
>;
