import * as yup from 'yup';
import { requiredStringArray } from '../utils/array';
import { logBaseSchema } from './base';

export const impulseLogSchema = logBaseSchema('impulse').shape({
  issueName: yup.string().required(),
  parentIssueIds: requiredStringArray,
});
export type ImpulseLogValue = yup.InferType<typeof impulseLogSchema>;
