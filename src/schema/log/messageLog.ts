import * as yup from 'yup';
import { recordingSchema } from '../recording';
import { logBaseSchema } from './base';

export const messageLogSchema = logBaseSchema('message').shape({
  text: yup.string().required(),
  recording: recordingSchema.notRequired(),
});

export type MessageLogValue = yup.InferType<typeof messageLogSchema>;
