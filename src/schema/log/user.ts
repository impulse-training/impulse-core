import * as yup from 'yup';
import { logBaseSchema } from './base';

export const userLogSchema = logBaseSchema('user').shape({
  role: yup.mixed<'user'>().oneOf(['user']).required(),
});
export type UserLogValue = yup.InferType<typeof userLogSchema>;
