import * as yup from 'yup';
import { outcome } from '../thread';
import { logBaseSchema } from './base';

export const outcomeLogSchema = logBaseSchema('outcome').shape({
  role: yup.mixed<'user'>().oneOf(['user']).required(),
  outcome: outcome.required(),
});
export type OutcomeLogValue = yup.InferType<typeof outcomeLogSchema>;
