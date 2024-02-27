import * as Yup from 'yup';
import { optionalTimestampSchema } from './utils/timestamp';

export const patternSchema = Yup.object().shape({
  uid: Yup.string().required(),
  updatedAt: optionalTimestampSchema, // Same as above for TimestampLike
  createdAt: optionalTimestampSchema, // You should define a more specific validation based on what TimestampLike is
  name: Yup.string().required(),
  ordinal: Yup.number().required(),
  supportGroupIds: Yup.array().of(Yup.string()).notRequired(),
  notification: Yup.object({
    title: Yup.string().required(),
    body: Yup.string().required(),
  }).notRequired(),
  setbackTacticId: Yup.string().notRequired(),
  setbackThreshold: Yup.number().required(),
  issueId: Yup.string().notRequired(),
  sendWeeklyReports: Yup.boolean().required(),
});

export type PatternValue = Yup.InferType<typeof patternSchema>;
