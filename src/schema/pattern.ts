import * as yup from 'yup';
import { optionalStringArray } from './utils/array';
import { optionalTimestampSchema } from './utils/timestamp';

export const patternSchema = yup.object().shape({
  uid: yup.string().required(),
  updatedAt: optionalTimestampSchema, // Same as above for TimestampLike
  createdAt: optionalTimestampSchema, // You should define a more specific validation based on what TimestampLike is
  name: yup.string().required(),
  ordinal: yup.number().required(),
  supportGroupIds: yup.array().of(yup.string()).notRequired(),
  notification: yup
    .object({
      title: yup.string().required(),
      body: yup.string().required(),
    })
    .notRequired(),
  setbackTacticId: yup.string().notRequired(),
  setbackThreshold: yup.number().required(),
  issueId: yup.string().notRequired(),
  parentIssueIds: optionalStringArray,
  sendWeeklyReports: yup.boolean().required(),
});

export type PatternValue = yup.InferType<typeof patternSchema>;
