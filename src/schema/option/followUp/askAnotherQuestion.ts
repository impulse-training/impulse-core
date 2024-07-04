import * as yup from 'yup';
import { followUpBaseSchema } from './base';

export const askAnotherQuestionSchema = followUpBaseSchema(
  'askAnotherQuestion'
).shape({
  questionId: yup.string().required(),
});

export type FollowUpQuestionValue = yup.InferType<
  typeof askAnotherQuestionSchema
>;
