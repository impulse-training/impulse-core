import * as yup from 'yup';
import { measureTacticSubsetSchema } from './tactic';
import { optionalStringArray, requiredStringArray } from './utils/array';
import { optionalTimestampSchema } from './utils/timestamp';

export const patternSchema = yup.object().shape({
  profileId: yup.string().required(),
  uids: requiredStringArray,
  updatedAt: optionalTimestampSchema, // Same as above for TimestampLike
  createdAt: optionalTimestampSchema, // You should define a more specific validation based on what TimestampLike is
  name: yup.string().required("can't be blank"),
  ordinal: yup.number().required(),
  supportGroupIds: optionalStringArray,
  notification: yup.lazy(value =>
    typeof value === 'object' && value !== null
      ? yup.object({
          title: yup.string().required(),
          body: yup.string().required(),
        })
      : yup.mixed().notRequired()
  ),
  measureTactic: measureTacticSubsetSchema,
  dailySetbackThreshold: yup.number().notRequired(),
  setbackThreshold: yup.number().notRequired(),
  issueId: yup.string().notRequired(),
  parentIssueIds: optionalStringArray,
  sendWeeklyReports: yup.boolean().notRequired(),
});

export type PatternValue = yup.InferType<typeof patternSchema>;
