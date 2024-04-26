import * as yup from 'yup';
import { objectOf } from './utils/objectOf';

// A summary of total tactic data, similar to our tacticData schema
// but with totalDataValue and formattedTotalDataValue instead of dataValue and formattedDataValue
const tacticTotalDataSchema = yup.object({
  dataUnit: yup.mixed<'time' | 'custom'>().oneOf(['time', 'custom']).required(),
  dataCustomUnit: yup.string(),
  totalDataValue: yup.number().required(),
  formattedTotalDataValue: yup.string().required(),
  optionId: yup.string(),
  optionColor: yup.string(),
  optionLabel: yup.string(),
  optionTextColor: yup.string(),
});
export type TacticTotalData = yup.InferType<typeof tacticTotalDataSchema>;

// A tactic day summary is an object of tactic data, keyed by tactic id. Think of it as:
// {
//   howManyCigarettes: { data: 2, formattedValue: "2 cigarettes" }
// }
const tacticDayTotalDataSchema = objectOf(tacticTotalDataSchema);

// A profile logs summary document is an object of tactic day summaries, keyed by date. Think of it
// as:
// {
//   "2024-01-30": {
//     howManyCigarettes: { data: 2, formattedValue: "2 cigarettes" }
//   },
//   "2024-01-31": {
//     howManyCigarettes: { data: 3, formattedValue: "3 cigarettes" }
//   }
// }
export const profileLogsSummarySchema = objectOf(tacticDayTotalDataSchema);

export type ProfileLogsSummaryValue = yup.InferType<
  typeof profileLogsSummarySchema
>;
