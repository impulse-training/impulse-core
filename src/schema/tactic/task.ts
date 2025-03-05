import * as yup from 'yup';
import { tacticBaseSchema } from './base';

export const taskTacticSchema = tacticBaseSchema('task').shape({
  prompt: yup.string().required('is required'),
});

export type TaskTacticValue = yup.InferType<typeof taskTacticSchema>;
