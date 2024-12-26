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
  gameplanId: yup.string(),
  isHelpful: yup.boolean().nullable().defined(),
  createdAt: optionalTimestampSchema,
  updatedAt: optionalTimestampSchema,
});

export type BehaviorValue = yup.InferType<typeof behaviorSchema>;
