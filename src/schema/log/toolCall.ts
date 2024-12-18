import * as yup from 'yup';
import { logBaseSchema } from './base';

export const toolCallLogSchema = logBaseSchema('toolCall').shape({
  role: yup.mixed<'tool'>().oneOf(['tool']).required(),
  toolCallId: yup.string().required(),
});
export type ToolCallLogValue = yup.InferType<typeof toolCallLogSchema>;
