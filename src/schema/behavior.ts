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
  trackingUnit: yup.string().when('trackingType', {
    is: 'counter',
    then: schema =>
      schema.required('Unit is required when tracking type is "counter".'),
    otherwise: schema => schema.notRequired(),
  }),
  tacticsById,
  dailyLimit: yup.number(),
  isHelpful: yup.boolean().nullable().defined(),
  createdAt: optionalTimestampSchema,
  updatedAt: optionalTimestampSchema,
});

export type BehaviorValue = yup.InferType<typeof behaviorSchema>;
