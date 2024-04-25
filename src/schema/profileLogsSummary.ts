import * as yup from 'yup';
import { requiredStringArray } from './utils/array';
import { objectOf } from './utils/objectOf';

const tacticDaySummarySchema = yup.object({
  dataUnit: yup.mixed<'time' | 'custom'>().oneOf(['time', 'custom']).required(),
  dataCustomUnit: yup.string(),
  totalDataValue: yup.number().required(),
  formattedTotalDataValue: yup.string().required(),
});

const daySummarySchema = yup.object({
  optionColors: requiredStringArray,
  tactics: objectOf(tacticDaySummarySchema),
});

export const profileLogsSummarySchema = objectOf(daySummarySchema);

export type ProfileLogsSummaryValue = yup.InferType<
  typeof profileLogsSummarySchema
>;
