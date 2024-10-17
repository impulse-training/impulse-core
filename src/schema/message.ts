import * as yup from 'yup';

export const messageSchema = yup.object({
  content: yup.string().required(),
  role: yup
    .mixed<'user' | 'assistant'>()
    .oneOf(['assistant', 'user'])
    .required(),
});
export type MessageValue = yup.InferType<typeof messageSchema>;
