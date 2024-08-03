import * as yup from 'yup';
import { fileSchema } from '../../utils/file';
import { tacticValueBaseSchema } from './base';

export const audioTacticSchema = tacticValueBaseSchema('audio').shape({
  recording: fileSchema.required(),
  waveForm: yup.string().nullable(),
  prompt: yup.string(), // Audio tactics don't require a prompt
});
export type AudioTacticValue = yup.InferType<typeof audioTacticSchema>;
