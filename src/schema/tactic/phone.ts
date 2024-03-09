import * as yup from 'yup';
import { tacticValueBaseSchema } from './base';

export const phoneTacticSchema = tacticValueBaseSchema('phone').shape({
  supportGroupId: yup.string().required(),
  trigger: yup.mixed().oneOf(['automatic', 'manual']).required(),
});
export type PhoneTacticValue = yup.InferType<typeof phoneTacticSchema>;
