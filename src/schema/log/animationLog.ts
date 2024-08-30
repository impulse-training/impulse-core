import * as yup from 'yup';
import { logBaseSchema } from './base';

export const animationLogSchema = logBaseSchema('animation').shape({
  source: yup.string().required(),
});

export type AnimationLogValue = yup.InferType<typeof animationLogSchema>;
