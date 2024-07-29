import * as yup from 'yup';
import { questionBaseSchema } from './base';
import { setbackThresholdMixin } from './utils/setbackThreshold';

export const timeQuestionSchema = questionBaseSchema('time').shape({
  ...setbackThresholdMixin,
});
export type TimeQuestionValue = yup.InferType<typeof timeQuestionSchema>;
