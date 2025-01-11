import * as yup from 'yup';
import { logSchema } from './log';
import { objectOf } from './utils/objectOf';
import { optionalTimestampSchema, timestampSchema } from './utils/timestamp';

export const threadSchema = yup.object({
  dateString: yup.string().required(),
  date: timestampSchema,
  title: yup.string(),
  summary: yup.string(),
  logsById: objectOf(logSchema),
  debriefedAt: optionalTimestampSchema,
  debriefAfter: optionalTimestampSchema,
  debriefRoutineSentAt: optionalTimestampSchema,
  outcome: yup.mixed<'success' | 'setback'>().oneOf(['success', 'setback']),
  createdAt: optionalTimestampSchema,
  updatedAt: optionalTimestampSchema,
});

export type ThreadValue = yup.InferType<typeof threadSchema>;
