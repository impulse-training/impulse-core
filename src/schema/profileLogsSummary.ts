import * as yup from 'yup';
import { questionDataSchema } from './log';
import { objectOf } from './utils/objectOf';

// A tactic day summary is an object of tactic data, keyed by tactic id. Think of it as:
// {
//   howManyCigarettes: { data: 2, formattedValue: "2 cigarettes" }
// }
const tacticTotalDataByIdSchema = objectOf(questionDataSchema);

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
export const profileLogsSummarySchema = objectOf(tacticTotalDataByIdSchema);

export type ProfileLogsSummaryValue = yup.InferType<
  typeof profileLogsSummarySchema
>;
