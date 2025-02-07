import * as yup from 'yup';
import { optionalTimestampSchema } from '../utils/timestamp';
import { logBaseSchema } from './base';

export const callLogSchema = logBaseSchema('call').shape({
  agentContext: yup.string().required(),
  agentConnectedAt: optionalTimestampSchema,
  endedAt: optionalTimestampSchema,
  transcript: yup.string(),
});
export type CallLogValue = yup.InferType<typeof callLogSchema>;
