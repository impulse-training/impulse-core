import * as yup from 'yup';

export const messageSchema = yup.object({
  content: yup.string().required(),
  senderProfileId: yup.string(),
  role: yup
    .mixed<'user' | 'assistant'>()
    .oneOf(['assistant', 'user'])
    .required(),
});
export type MessageValue = yup.InferType<typeof messageSchema>;
