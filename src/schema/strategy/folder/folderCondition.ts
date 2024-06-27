import * as yup from 'yup';
import { requiredStringArray } from '../../utils/array';

export const folderConditionSchema = yup.object({
  questionId: yup.string().required(),
  greaterThan: yup.number(),
  lessThanOrEqualTo: yup.number(),
  strategyIds: requiredStringArray,
  description: yup.string(),
  label: yup.string(),
  color: yup.string(),
});

export type FolderConditionValue = yup.InferType<typeof folderConditionSchema>;
