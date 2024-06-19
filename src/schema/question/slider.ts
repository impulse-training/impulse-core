import * as yup from 'yup';
import { questionValueBaseSchema } from './base';

export const questionSliderSchema = questionValueBaseSchema(
  'question-slider'
).shape({
  lowEmoji: yup.string().notRequired(),
  highEmoji: yup.string().notRequired(),
});

export type QuestionSliderValue = yup.InferType<typeof questionSliderSchema>;
