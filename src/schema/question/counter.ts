import * as yup from 'yup';
import { questionBaseSchema } from './base';
import { setbackThresholdMixin } from './utils/setbackThreshold';

export const counterQuestionSchema = questionBaseSchema('counter').shape({
  ...setbackThresholdMixin,
});
export type CounterQuestionValue = yup.InferType<typeof counterQuestionSchema>;
