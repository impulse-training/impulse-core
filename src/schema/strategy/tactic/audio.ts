import * as yup from 'yup';
import { recordingSchema } from '../../recording';
import { tacticValueBaseSchema } from './base';

export const audioTacticSchema = tacticValueBaseSchema('audio').shape({
  recording: recordingSchema.required(),
  prompt: yup.string(), // Audio tactics don't require a prompt
});
export type AudioTacticValue = yup.InferType<typeof audioTacticSchema>;
