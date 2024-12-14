import * as yup from 'yup';
import { behaviorBaseSchema } from './base';
import { setbackThresholdMixin } from './utils/setbackThreshold';

export const counterBehaviorSchema = behaviorBaseSchema('counter').shape({
  ...setbackThresholdMixin,
});
export type CounterBehaviorValue = yup.InferType<typeof counterBehaviorSchema>;
