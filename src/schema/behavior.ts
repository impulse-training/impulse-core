import * as yup from 'yup';
import { optionalTimestampSchema } from './utils/timestamp';

export const behaviorSchema = yup.object({
  name: yup.string().required(),
  ordinal: yup.number().required(),
  trackingType: yup
    .mixed<'time' | 'counter'>()
    .oneOf(['time', 'counter'])
    .required(),
  dailyLimit: yup.number(),
  isHelpful: yup.boolean().nullable().defined(),
  skipGameplanAutoCreation: yup.boolean(),
  createdAt: optionalTimestampSchema,
  updatedAt: optionalTimestampSchema,
});

export type BehaviorValue = yup.InferType<typeof behaviorSchema>;
