import * as yup from 'yup';
import { tacticsById } from './log';
import { optionalTimestampSchema } from './utils/timestamp';

export const behaviorSchema = yup.object({
  name: yup.string().required(),
  ordinal: yup.number().required(),
  trackingType: yup
    .mixed<'time' | 'counter'>()
    .oneOf(['time', 'counter'])
    .required(),
  unit: yup.string().when('trackingType', (trackingType, schema) => {
    if ((trackingType as unknown as string) === 'counter') {
      return schema.required(
        'Unit is required when trackingType is "counter".'
      );
    }
    return schema.notRequired();
  }),
  tacticsById,
  dailyLimit: yup.number(),
  isHelpful: yup.boolean().nullable().defined(),
  skipReminderAutoCreation: yup.boolean(),
  createdAt: optionalTimestampSchema,
  updatedAt: optionalTimestampSchema,
});

export type BehaviorValue = yup.InferType<typeof behaviorSchema>;
