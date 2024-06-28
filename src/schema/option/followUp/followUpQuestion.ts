import * as yup from 'yup';

export const followUpQuestionSchema = yup.object({
  type: yup.mixed<'question'>().oneOf(['question']).defined(),
  questionId: yup.string().required(),
});
export type FollowUpQuestionValue = yup.InferType<
  typeof followUpQuestionSchema
>;
