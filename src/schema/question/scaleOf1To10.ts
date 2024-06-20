import * as yup from 'yup';
import { questionBaseSchema } from './base';
import { setbackThresholdMixin } from './utils/setbackThreshold';

export const questionScaleOf1To10Schema = questionBaseSchema(
  'scaleOf1To10'
).shape({
  lowEmoji: yup.string().notRequired(),
  highEmoji: yup.string().notRequired(),
  ...setbackThresholdMixin,
});

export type QuestionScaleOf1To10Value = yup.InferType<
  typeof questionScaleOf1To10Schema
>;
