import * as yup from 'yup';
import { fileSchema } from '../utils/file';
import { tacticBaseSchema } from './base';

export const basicTacticSchema = tacticBaseSchema('basic').shape({
  prompt: yup.string().required('is required'),
  audio: fileSchema.optional().nullable().default(undefined),
});

export type BasicTacticValue = yup.InferType<typeof basicTacticSchema>;
