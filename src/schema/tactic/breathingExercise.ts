import * as yup from 'yup';
import { tacticBaseSchema } from './base';

export const breathingExerciseTacticSchema = tacticBaseSchema(
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
