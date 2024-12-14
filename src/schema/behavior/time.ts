import * as yup from 'yup';
import { behaviorBaseSchema } from './base';
import { setbackThresholdMixin } from './utils/setbackThreshold';

export const timeBehaviorSchema = behaviorBaseSchema('time').shape({
  ...setbackThresholdMixin,
});
export type TimeBehaviorValue = yup.InferType<typeof timeBehaviorSchema>;
