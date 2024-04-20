import * as yup from 'yup';
import { questionTacticValueBaseSchema } from './base';

export const questionSliderTacticSchema = questionTacticValueBaseSchema(
  'question-slider'
).shape({
  lowEmoji: yup.string().notRequired(),
  highEmoji: yup.string().notRequired(),
});

export type QuestionSliderTacticValue = yup.InferType<
  typeof questionSliderTacticSchema
>;
