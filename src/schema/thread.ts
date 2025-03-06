import * as yup from 'yup';
import { LogsById, logsById } from './day';
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
  isDisplayable: yup.boolean().required(),
  dateString: yup.string().required(),
  date: timestampSchema,
  // This is shown inside the thread component - it's optional
  title: yup.string(),
  // This is shown when navigating to a thread - it must always be set
  navigationTitle: yup.string().required(),
  summary: yup.string(),
  logsById,
  debriefedAt: optionalTimestampSchema,
  debriefAfter: optionalTimestampSchema,
  debriefRoutineSentAt: optionalTimestampSchema,
  agentType: agentType.nonNullable().required(),
  hasImpulse: yup.boolean(),
  outcome,

  // We maintain the count of suggested tactics here, and also write to a boolean here. We do both
  // because a calling function that's adding a tactic may also immediately write hasTactics=true,
  // but we still maintain a server-side count of tactics (which may have a lag due to cold starts)
  tacticsCount: yup.number(),
  hasTactics: yup.boolean(),

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
