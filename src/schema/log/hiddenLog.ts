import * as yup from 'yup';
import { logBaseSchema } from './base';

export const hiddenLogSchema = logBaseSchema('hidden');
export type HiddenLogValue = yup.InferType<typeof hiddenLogSchema>;
