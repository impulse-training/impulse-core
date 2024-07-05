import * as yup from 'yup';
import { questionBaseSchema } from './base';
import { setbackThresholdMixin } from './utils/setbackThreshold';

export const questionCounterSchema = questionBaseSchema('counter').shape({
  ...setbackThresholdMixin,
});
export type QuestionCounterValue = yup.InferType<typeof questionCounterSchema>;
