import * as yup from 'yup';
import { logBaseSchema } from './base';

export const gptLogSchema = logBaseSchema('gpt').shape({
  role: yup.mixed<'assistant'>().oneOf(['assistant']).required(),
});
export type GptLogValue = yup.InferType<typeof gptLogSchema>;
