import * as yup from 'yup';
import { behaviorSchema } from './behavior';
import { logSchema } from './log';
import { objectOf } from './utils/objectOf';
import { optionalTimestampSchema, timestampSchema } from './utils/timestamp';

export const threadSchema = yup.object({
  dateString: yup.string().required(),
  date: timestampSchema,
  title: yup.string(),
  summary: yup.string(),
  logsById: objectOf(logSchema),
  behaviorsById: objectOf(behaviorSchema),
  debriefedAt: optionalTimestampSchema,
  debriefAfter: optionalTimestampSchema,
  debriefRoutineSentAt: optionalTimestampSchema,
  type: yup.mixed<'impulse' | 'general'>().oneOf(['impulse', 'general']),
  outcome: yup.mixed<'success' | 'setback'>().oneOf(['success', 'setback']),
  createdAt: optionalTimestampSchema,
  updatedAt: optionalTimestampSchema,
});

export type ThreadValue = yup.InferType<typeof threadSchema>;
