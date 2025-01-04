import * as yup from 'yup';
import { documentReferenceSchema } from '../utils/firestore';
import { logBaseSchema } from './base';

export const gameplanLogSchema = logBaseSchema('gameplan').shape({
  role: yup.mixed<'user'>().oneOf(['user']).required(),
  triggerDoc: documentReferenceSchema,
  outcome: yup.mixed<'success' | 'setback'>().oneOf(['success', 'setback']),
});

export type GameplanLogValue = yup.InferType<typeof gameplanLogSchema>;
