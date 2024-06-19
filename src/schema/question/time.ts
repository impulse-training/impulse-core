import * as yup from 'yup';
import { questionBaseSchema } from './base';
import { setbackThresholdMixin } from './utils/setbackThreshold';

export const questionTimeSchema = questionBaseSchema('time').shape({
  ...setbackThresholdMixin,
});
export type QuestionTimeValue = yup.InferType<typeof questionTimeSchema>;
