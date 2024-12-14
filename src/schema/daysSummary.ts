import * as yup from 'yup';
import { behaviorDataSchema } from './log';
import { objectOf } from './utils/objectOf';

// A tactic day summary is an object of tactic data, keyed by tactic id. Think of it as:
// {
//   howManyCigarettes: { data: 2, formattedValue: "2 cigarettes" }
// }
const behaviorTotalDataByIdSchema = objectOf(behaviorDataSchema);

// A days summary document is an object of tactic day summaries, keyed by date. Think of it
// as:
// {
//   "2024-01-30": {
//     howManyCigarettes: { data: 2, formattedValue: "2 cigarettes" }
//   },
//   "2024-01-31": {
//     howManyCigarettes: { data: 3, formattedValue: "3 cigarettes" }
//   }
// }
export const daysSummarySchema = objectOf(behaviorTotalDataByIdSchema);

export type DaysSummaryValue = yup.InferType<typeof daysSummarySchema>;
