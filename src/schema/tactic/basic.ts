import * as yup from 'yup';
import { fileSchema } from '../utils/file';
import { tacticValueBaseSchema } from './base';

export const basicTacticSchema = tacticValueBaseSchema('basic').shape({
  prompt: yup.string().required('is required'),
  recording: fileSchema.optional(),
});

export type BasicTacticValue = yup.InferType<typeof basicTacticSchema>;
