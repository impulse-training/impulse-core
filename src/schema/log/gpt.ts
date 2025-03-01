import { ChatCompletionMessageToolCall } from 'openai/resources';
import * as yup from 'yup';
import { logBaseSchema } from './base';

export const gptLogSchema = logBaseSchema('gpt').shape({
  role: yup.mixed<'assistant'>().oneOf(['assistant']).required(),
  suggestedResponses: yup.array().of(yup.string().required()),
  message: yup.object({
    role: yup.mixed<'assistant'>().oneOf(['assistant']),
    tool_calls: yup.array().of(yup.mixed<ChatCompletionMessageToolCall>()),
  }),
  toolCallResponses: yup.array().of(
    yup.object({
      role: yup.mixed<'tool'>().oneOf(['tool']).required(),
      tool_call_id: yup.string().required(),
      content: yup.string().required(),
    })
  ),
});

export type GptLogValue = yup.InferType<typeof gptLogSchema>;
