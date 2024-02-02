import * as Yup from 'yup';
import { timestampSchema } from './utils/timestamp';

export const patternSchema = Yup.object().shape({
  uid: Yup.string().required(),
  createdAt: timestampSchema.required(), // You should define a more specific validation based on what TimestampLike is
  updatedAt: timestampSchema.required(), // Same as above for TimestampLike
  name: Yup.string().required(),
  ordinal: Yup.number().required(),
  unit: Yup.mixed<'time' | 'custom'>().oneOf(['time', 'custom']).required(),
  customUnit: Yup.string().when('unit', (unit, schema) => {
    return (unit as unknown as string) === 'custom'
      ? schema.required('customUnit is required when unit is custom')
      : schema.notRequired();
  }),
  supportGroupIds: Yup.array().of(Yup.string()).notRequired(),
  notification: Yup.object({
    title: Yup.string().required(),
    body: Yup.string().required(),
  }).notRequired(),
  issueId: Yup.string().notRequired(),
  sendWeeklyReports: Yup.boolean().required(),
  setbackThreshold: Yup.number().required(),
  gameplanId: Yup.string().notRequired(),
  debriefGameplanId: Yup.string().notRequired(),
});

export type PatternValue = Yup.InferType<typeof patternSchema>;

export const patternUsageSchema = Yup.object().shape({
  unit: Yup.mixed<'time' | 'custom'>().oneOf(['time', 'custom']).required(),
  customUnit: Yup.string().when('unit', (unit, schema) => {
    return (unit as unknown as string) === 'custom'
      ? schema.required('customUnit is required when unit is custom')
      : schema.notRequired();
  }),
  formattedValue: Yup.string().required(),
  value: Yup.number().required(),
});
export type PatternUsage = Yup.InferType<typeof patternUsageSchema>;
