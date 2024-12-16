import * as yup from 'yup';
import { tacticSchema } from '../../tactic';
import { timestampSchema } from '../../utils/timestamp';

// In future, we may extend this schema to include stuff like time spent
export const tacticDataSchema = yup.object({
  isCompleted: yup.boolean().required(),
  setAt: timestampSchema,
});

export type TacticDataValue = yup.InferType<typeof tacticDataSchema>;

export const tacticAndTacticDataSchema = yup.object({
  tactic: tacticSchema,
  data: tacticDataSchema.required(),
});
export type TacticAndTacticDataValue = yup.InferType<
  typeof tacticAndTacticDataSchema
>;
