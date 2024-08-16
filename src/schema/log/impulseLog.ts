import * as yup from 'yup';
import { requiredStringArray } from '../utils/array';
import { optionalTimestampSchema } from '../utils/timestamp';
import { logBaseSchema } from './base';

export const impulseLogSchema = logBaseSchema('impulse').shape({
  issueName: yup.string(),
  debriefedAt: optionalTimestampSchema,
  debriefAfter: optionalTimestampSchema,
  debriefReminderSentAt: optionalTimestampSchema,
  submittedAt: optionalTimestampSchema,
  parentIssueIds: requiredStringArray,
});

export type ImpulseLogValue = yup.InferType<typeof impulseLogSchema>;
