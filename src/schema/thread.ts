import * as yup from 'yup';
import { LogsById, logsById } from './day';
import { tacticSchema } from './tactic';
import { optionalTimestampSchema, timestampSchema } from './utils/timestamp';

export const outcome = yup
  .mixed<'success' | 'setback'>()
  .oneOf(['success', 'setback']);

export const agentType = yup
  .mixed<'impulse' | 'general' | 'onboarding'>()
  .oneOf(['impulse', 'general', 'onboarding']);

export const threadSchema = yup.object({
  dateString: yup.string().required(),
  date: timestampSchema,
  title: yup.string(),
  summary: yup.string(),
  logsById,
  suggestedTactics: yup.array().of(tacticSchema),
  debriefedAt: optionalTimestampSchema,
  debriefAfter: optionalTimestampSchema,
  debriefRoutineSentAt: optionalTimestampSchema,
  agentType: agentType.nonNullable().required(),
  hasImpulse: yup.boolean(),
  outcome,
  createdAt: optionalTimestampSchema,
  updatedAt: optionalTimestampSchema,
});

export type ThreadValue = Omit<
  yup.InferType<typeof threadSchema>,
  'logsById'
> & {
  logsById: LogsById;
};
