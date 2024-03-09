import * as yup from 'yup';
import { tacticValueBaseSchema } from './base';
export const taskTacticSchema = tacticValueBaseSchema('task');
export type TaskTacticValue = yup.InferType<typeof taskTacticSchema>;
