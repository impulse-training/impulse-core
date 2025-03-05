import * as yup from 'yup';
import { LogsById, logsById } from './day';
import { TacticValue, tacticSchema } from './tactic';
import { documentReferenceSchema } from './utils/firestore';
import { optionalObjectOf } from './utils/objectOf';
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

// Define a schema for AI suggested tactics
export const aiSuggestionsById = optionalObjectOf(
  yup.object({
    tactic: tacticSchema,
    targetDoc: documentReferenceSchema.optional(),
  })
);

export type AiSuggestionsById = Record<
  string,
  {
    tactic: TacticValue;
    targetDoc?: any; // DocumentReferenceLike<TacticValue>
  }
>;

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
  suggestedTactics: yup.array().of(tacticSchema),
  aiSuggestionsById: aiSuggestionsById,
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
  aiSuggestionsById?: AiSuggestionsById;
};
