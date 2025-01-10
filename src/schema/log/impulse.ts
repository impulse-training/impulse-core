import * as yup from 'yup';
import { documentReferenceSchema } from '../utils/firestore';
import { logBaseSchema } from './base';

export const impulseLogSchema = logBaseSchema('impulse').shape({
  role: yup.mixed<'user'>().oneOf(['user']).required(),
  triggerDoc: documentReferenceSchema,
});

export type ImpulseLogValue = yup.InferType<typeof impulseLogSchema>;
