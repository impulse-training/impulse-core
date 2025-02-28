import { ChatCompletionMessageToolCall } from 'openai/resources';
import * as yup from 'yup';
import { logBaseSchema } from './base';

export const gptLogSchema = logBaseSchema('gpt').shape({
  role: yup.mixed<'assistant'>().oneOf(['assistant']).required(),
  suggestedResponses: yup.array().of(yup.string().required()),
  message: yup.object({
    role: yup.mixed<'assistant' | 'tool'>().oneOf(['assistant', 'tool']),
    tool_calls: yup.array().of(yup.mixed<ChatCompletionMessageToolCall>()),
  }),
});

export type GptLogValue = yup.InferType<typeof gptLogSchema>;
