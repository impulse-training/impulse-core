import * as yup from 'yup';
import { tacticValueBaseSchema } from '../base';

export const questionSliderTacticSchema = tacticValueBaseSchema(
  'question-slider'
).shape({
  lowEmoji: yup.string().notRequired(),
  highEmoji: yup.string().notRequired(),
});

export type QuestionSliderTacticValue = yup.InferType<
  typeof questionSliderTacticSchema
>;
