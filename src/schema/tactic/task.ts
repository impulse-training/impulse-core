import * as yup from 'yup';
import { tacticValueBaseSchema } from './base';
export const taskTacticSchema = tacticValueBaseSchema('task').shape({
  prompt: yup.string().required('is required'),
});
export type TaskTacticValue = yup.InferType<typeof taskTacticSchema>;
