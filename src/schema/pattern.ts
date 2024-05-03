import * as yup from 'yup';
import { optionalStringArray } from './utils/array';
import { optionalTimestampSchema } from './utils/timestamp';

export const patternSchema = yup.object().shape({
  profileId: yup.string().required(),
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
  debriefAfterMinutes: yup.number().notRequired(),
  measureTacticId: yup.string().notRequired(),
  measureCallToAction: yup.string().notRequired(),
  issueId: yup.string().notRequired(),
  parentIssueIds: optionalStringArray,
  sendWeeklyReports: yup.boolean().notRequired(),
});

export type PatternValue = yup.InferType<typeof patternSchema>;
