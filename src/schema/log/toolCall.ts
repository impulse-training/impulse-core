import * as yup from 'yup';
import { logBaseSchema } from './base';

// TODO: remove - we'll now add these to the log that requested them
export const toolCallLogSchema = logBaseSchema('toolCall').shape({
  role: yup.mixed<'tool'>().oneOf(['tool']).required(),
  toolCallId: yup.string().required(),
});
export type ToolCallLogValue = yup.InferType<typeof toolCallLogSchema>;
