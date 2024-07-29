import * as yup from 'yup';
import { questionBaseSchema } from './base';
import { setbackThresholdMixin } from './utils/setbackThreshold';

export const scaleOf1To10QuestionSchema = questionBaseSchema(
  'scaleOf1To10'
).shape({
  lowEmoji: yup.string().notRequired(),
  highEmoji: yup.string().notRequired(),
  ...setbackThresholdMixin,
});

export type ScaleOf1To10QuestionValue = yup.InferType<
  typeof scaleOf1To10QuestionSchema
>;
