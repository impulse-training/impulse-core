import * as yup from 'yup';
import { followUpBaseSchema } from './base';

export const followUpQuestionSchema = followUpBaseSchema('question').shape({
  questionId: yup.string().required(),
});

export type FollowUpQuestionValue = yup.InferType<
  typeof followUpQuestionSchema
>;
