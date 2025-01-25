import * as yup from 'yup';
import { behaviorSchema } from './behavior';
import { LogsById, logsById } from './day';
import { tacticSchema } from './tactic';
import { optionalObjectOf } from './utils/objectOf';
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
  behaviorsById: optionalObjectOf(behaviorSchema),
  suggestedTactics: yup.array().of(tacticSchema),
  debriefedAt: optionalTimestampSchema,
  debriefAfter: optionalTimestampSchema,
  debriefRoutineSentAt: optionalTimestampSchema,
  agentType: agentType.nonNullable().required(),
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
