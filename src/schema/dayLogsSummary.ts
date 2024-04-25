import * as yup from 'yup';
import { objectOf } from './utils/objectOf';
import { optionalTimestampSchema } from './utils/timestamp';

// This is a summary of an individual tactic data entry
const tacticSummarySchema = yup.object({
  title: yup.string().required(),
  dataValue: yup.number(),
  formattedDataValue: yup.string(),
  optionId: yup.string().nullable(),
  optionLabel: yup.string(),
  optionColor: yup.string(),
});
export type TacticSummaryValue = yup.InferType<typeof tacticSummarySchema>;

// And this is a summary of all the tactics for a given log entry
const logSummarySchema = yup.object({
  hour: yup.number().required(),
  minute: yup.number().required(),
  tacticSummariesById: objectOf(tacticSummarySchema),
});
export type LogSummaryValue = yup.InferType<typeof logSummarySchema>;

// Which is combined into a daily summary
export const dayLogsSummarySchema = yup.object({
  createdAt: optionalTimestampSchema,
  updatedAt: optionalTimestampSchema,
  profileId: yup.string().required(),
  dateString: yup.string().required(),
  logSummariesById: objectOf(logSummarySchema),
});

export type DayLogsSummaryValue = yup.InferType<typeof dayLogsSummarySchema>;
