import * as yup from 'yup';
import { logBaseSchema } from './base';

export const callLogSchema = logBaseSchema('call').shape({
  agentContext: yup.string().required(),
  durationSeconds: yup.number(),
  transcript: yup.string(),
});
export type CallLogValue = yup.InferType<typeof callLogSchema>;
