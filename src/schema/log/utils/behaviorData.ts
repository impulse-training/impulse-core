import * as yup from 'yup';
import { behaviorSchema } from '../../behavior';

export const behaviorDataSchema = yup
  .object({
    // Data can either be stored as a counter value...
    counterValue: yup.number(),
    // ... or a time value
    timeSeconds: yup.number(),

    // In either case, this is a string-formatted representation of the value
    formattedValue: yup.string().required(),

    // An optional label may be provided
    label: yup
      .object({
        text: yup.string().required(),
        color: yup.string(),
      })
      .optional()
      .nullable()
      .default(undefined),
  })
  .test(
    'counter-or-time-required',
    'Either counterValue or timeSeconds must be provided.',
    value => value.counterValue != null || value.timeSeconds != null
  );

export const behaviorAndBehaviorDataSchema = yup.object({
  behavior: behaviorSchema,
  data: behaviorDataSchema,
  color: yup.string(),
});

export type BehaviorDataValue = yup.InferType<typeof behaviorDataSchema>;
export type BehaviorAndBehaviorDataValue = yup.InferType<
  typeof behaviorAndBehaviorDataSchema
>;
