import * as yup from 'yup';
import { tacticDataSchema } from './log';
import { tacticSchema } from './strategy/tactic';
import { timestampSchema } from './utils/timestamp';

export const log2Schema = yup.object({
  createdAt: timestampSchema,
  profileId: yup.string().required(),
  role: yup
    .mixed<'user' | 'assistant' | 'system'>()
    .oneOf(['user', 'system', 'assistant'])
    .required(),
  tactic: tacticSchema.optional(),
  text: yup.string(),
  openAiChoiceResponse: yup.mixed().default(undefined),
  // using yup.lazy, data should be defined as optional tacticDataSchema
  data: tacticDataSchema.optional().default(undefined),
});

export type Log2Value = yup.InferType<typeof log2Schema>;
