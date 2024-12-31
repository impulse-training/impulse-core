import * as yup from 'yup';
import { gameplanSchema } from '../gameplan';
import { documentReferenceSchema } from '../utils/firestore';
import { logBaseSchema } from './base';

export const gameplanLogSchema = logBaseSchema('gameplan').shape({
  role: yup.mixed<'user'>().oneOf(['user']).required(),
  gameplanDoc: documentReferenceSchema,
  gameplan: gameplanSchema,
});
export type GameplanLogValue = yup.InferType<typeof gameplanLogSchema>;
