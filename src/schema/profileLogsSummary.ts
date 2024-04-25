import * as yup from 'yup';
import { requiredStringArray } from './utils/array';
import { objectOf } from './utils/objectOf';
import { optionalTimestampSchema } from './utils/timestamp';

const tacticDaySummarySchema = yup.object({
  totalDataValue: yup.number().required(),
  formattedTotalDataValue: yup.string().required(),
});

const daySummarySchema = yup.object({
  optionColors: requiredStringArray,
  tacticDaySummaries: objectOf(tacticDaySummarySchema),
});

export const profileLogsSummarySchema = yup.object({
  createdAt: optionalTimestampSchema,
  updatedAt: optionalTimestampSchema,
  profileId: yup.string().required(),
  daySummaries: objectOf(daySummarySchema),
});

export type ProfileLogsSummaryValue = yup.InferType<
  typeof profileLogsSummarySchema
>;
