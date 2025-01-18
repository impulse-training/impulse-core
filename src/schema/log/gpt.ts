import * as yup from 'yup';
import { logBaseSchema } from './base';

export const gptLogSchema = logBaseSchema('gpt').shape({
  role: yup.mixed<'assistant'>().oneOf(['assistant']).required(),
  suggestedResponses: yup.array().of(yup.string().required()),
});
export type GptLogValue = yup.InferType<typeof gptLogSchema>;
