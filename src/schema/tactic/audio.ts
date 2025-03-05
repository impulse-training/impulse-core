import * as yup from 'yup';
import { fileSchema } from '../utils/file';
import { tacticBaseSchema } from './base';

export const audioTacticSchema = tacticBaseSchema('audio').shape({
  audio: fileSchema.optional().nullable().default(undefined),
});

export type AudioTacticValue = yup.InferType<typeof audioTacticSchema>;
