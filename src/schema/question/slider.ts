import * as yup from 'yup';
import { questionBaseSchema } from './base';

export const questionScaleOfOneToTenSchema = questionBaseSchema(
  'scaleOf1To10'
).shape({
  lowEmoji: yup.string().notRequired(),
  highEmoji: yup.string().notRequired(),
});

export type QuestionSliderValue = yup.InferType<
  typeof questionScaleOfOneToTenSchema
>;
