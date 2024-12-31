import * as yup from 'yup';
import { documentReferenceSchema } from '../utils/firestore';
import { tacticsById } from '../utils/tacticsById';
import { logBaseSchema } from './base';

export const gameplanLogSchema = logBaseSchema('gameplan').shape({
  role: yup.mixed<'user'>().oneOf(['user']).required(),
  gameplanDoc: documentReferenceSchema,
  tacticsById,
});

export type GameplanLogValue = yup.InferType<typeof gameplanLogSchema>;
