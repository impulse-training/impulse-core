import * as yup from 'yup';
import { behaviorBaseSchema } from './base';
import { setbackThresholdMixin } from './utils/setbackThreshold';

export const scaleOf1To10BehaviorSchema = behaviorBaseSchema(
  'scaleOf1To10'
).shape({
  lowEmoji: yup.string().notRequired(),
  highEmoji: yup.string().notRequired(),
  ...setbackThresholdMixin,
});

export type ScaleOf1To10BehaviorValue = yup.InferType<
  typeof scaleOf1To10BehaviorSchema
>;
