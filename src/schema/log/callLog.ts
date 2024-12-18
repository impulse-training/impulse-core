import * as yup from 'yup';
import { logBaseSchema } from './base';

export const callLogSchema = logBaseSchema('call').shape({});
export type CallLogValue = yup.InferType<typeof callLogSchema>;
