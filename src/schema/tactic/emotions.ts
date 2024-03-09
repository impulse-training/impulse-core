import * as yup from 'yup';
import { tacticValueBaseSchema } from './base';

export const emotionsTacticSchema = tacticValueBaseSchema('emotions');
export type EmotionsTacticValue = yup.InferType<typeof emotionsTacticSchema>;
