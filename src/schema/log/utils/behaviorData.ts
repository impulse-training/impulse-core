import * as yup from 'yup';
import { behaviorSchema } from '../../behavior';
import { timestampSchema } from '../../utils/timestamp';

export const behaviorDataSchema = yup.object({
  idValue: yup.string(), // This is if the answer is an id
  numericValue: yup.number(), // ... or a number
  stringValue: yup.string().required(), // This is a string representation of the value
  label: yup.string(),
  unit: yup.string().required(),
  setAt: timestampSchema,
});

export const behaviorAndBehaviorDataSchema = yup.object({
  behavior: behaviorSchema,
  data: behaviorDataSchema,
  color: yup.string(),
});

export type BehaviorDataValue = yup.InferType<typeof behaviorDataSchema>;
export type BehaviorAndBehaviorDataValue = yup.InferType<
  typeof behaviorAndBehaviorDataSchema
>;
