import * as yup from 'yup';
import { tacticBaseSchema } from './base';

export const affirmationTacticSchema = tacticBaseSchema('affirmation').shape({
  prompt: yup.string().required('is required'),
});

export type AffirmationTacticValue = yup.InferType<
  typeof affirmationTacticSchema
>;
