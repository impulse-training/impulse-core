import * as yup from 'yup';
import { recordingSchema } from '../../recording';
import { tacticValueBaseSchema } from './base';

export const audioTacticSchema = tacticValueBaseSchema('audio').shape({
  recording: recordingSchema.required(),
});
export type AudioTacticValue = yup.InferType<typeof audioTacticSchema>;
