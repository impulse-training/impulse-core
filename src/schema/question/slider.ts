import * as yup from 'yup';
import { questionBaseSchema } from './base';
import { setbackThresholdMixin } from './utils/setbackThreshold';

export const questionScaleOfOneToTenSchema = questionBaseSchema(
  'scaleOf1To10'
).shape({
  lowEmoji: yup.string().notRequired(),
  highEmoji: yup.string().notRequired(),
  ...setbackThresholdMixin,
});

export type QuestionSliderValue = yup.InferType<
  typeof questionScaleOfOneToTenSchema
>;
