import * as yup from 'yup';
import { logBaseSchema } from './base';

export const impulseLogSchema = logBaseSchema('impulse').shape({
  role: yup.mixed<'user'>().oneOf(['user']).required(),
});
export type ImpulseLogValue = yup.InferType<typeof impulseLogSchema>;
