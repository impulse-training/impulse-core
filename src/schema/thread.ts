import * as yup from 'yup';
import { LogsById, logsById } from './day';
import { tacticSchema } from './tactic';
import { optionalTimestampSchema, timestampSchema } from './utils/timestamp';

export enum AgentType {
  GENERAL = 'general',
  ONBOARDING = 'onboarding',
  DEBRIEFING = 'debriefing',
  IMPULSE = 'impulse',
}

export const outcome = yup
  .mixed<'success' | 'setback'>()
  .oneOf(['success', 'setback']);

export const agentType = yup.mixed<AgentType>().oneOf(Object.values(AgentType));

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
  // Instead of a boolean, this is a timestamp of when a message was sent to ZARA. This allows us to
  // have a simple timeout on showing a processing spinner without a scheduled callback.
  zaraResponseStartedProcessingAt: optionalTimestampSchema,
  createdAt: optionalTimestampSchema,
  updatedAt: optionalTimestampSchema,
});

export type ThreadValue = Omit<
  yup.InferType<typeof threadSchema>,
  'logsById'
> & {
  logsById: LogsById;
};
