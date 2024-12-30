import * as yup from 'yup';
import { gameplanBaseSchema } from './base';

export const emotionsGameplanSchema = gameplanBaseSchema('emotions').shape({
  emotions: yup.array().of(yup.string()).required().min(1),
});
export type EmotionsGameplanValue = yup.InferType<
  typeof emotionsGameplanSchema
>;
