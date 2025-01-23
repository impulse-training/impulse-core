import * as yup from 'yup';
import { behaviorSchema } from './behavior';
import { LogsById, logsById } from './day';
import { tacticSchema } from './tactic';
import { objectOf } from './utils/objectOf';
import { optionalTimestampSchema, timestampSchema } from './utils/timestamp';

export const outcome = yup
  .mixed<'success' | 'setback'>()
  .oneOf(['success', 'setback']);

export const threadSchema = yup.object({
  dateString: yup.string().required(),
  date: timestampSchema,
  title: yup.string(),
  summary: yup.string(),
  logsById,
  behaviorsById: objectOf(behaviorSchema),
  suggestedTactics: yup.array().of(tacticSchema),
  debriefedAt: optionalTimestampSchema,
  debriefAfter: optionalTimestampSchema,
  debriefRoutineSentAt: optionalTimestampSchema,
  agentType: yup
    .mixed<'impulse' | 'general' | 'onboarding'>()
    .oneOf(['impulse', 'general', 'onboarding'])
    .required(),
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
