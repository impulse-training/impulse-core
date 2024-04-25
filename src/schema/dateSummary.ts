import * as yup from 'yup';
import { objectOf } from './utils/objectOf';
import { optionalTimestampSchema } from './utils/timestamp';

const tacticSummarySchema = yup.object({
  title: yup.string().required(),
  dataValue: yup.number(),
  formattedDataValue: yup.string(),
  optionId: yup.string().nullable(),
  optionLabel: yup.string(),
  optionColor: yup.string(),
});
export type TacticSummaryValue = yup.InferType<typeof tacticSummarySchema>;

const logSummarySchema = yup.object({
  hour: yup.number().required(),
  minute: yup.number().required(),
  tacticSummariesById: objectOf(tacticSummarySchema),
});
export type LogSummaryValue = yup.InferType<typeof logSummarySchema>;

export const dateSummarySchema = yup.object({
  createdAt: optionalTimestampSchema,
  updatedAt: optionalTimestampSchema,
  profileId: yup.string().required(),
  dateString: yup.string().required(),
  logSummariesById: objectOf(logSummarySchema),
});

export type DateSummaryValue = yup.InferType<typeof dateSummarySchema>;
