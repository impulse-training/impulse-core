import * as yup from 'yup';
import {
  behaviorAndBehaviorDataSchema,
  metricAttributeAndDataSchema,
} from './log';
import { objectOf } from './utils/objectOf';
import { optionalTimestampSchema } from './utils/timestamp';

// A day summary is an object of behavior and metric
// {
//   behaviors: {
//     smokingBehaviorId: { behavior, data: { numericValue: 2, formattedValue: "2 cigarettes" } }
//   },
//   metrics: {
//     label: "Really sad",
//     name: "Sad",
//     key: "happy-sad",
//     value: 4,
//   }
// }
const behaviorTotalDataByIdSchema = yup.object({
  behaviors: objectOf(behaviorAndBehaviorDataSchema),
  metrics: objectOf(metricAttributeAndDataSchema),
});

// A days summary document is an object of tactic day summaries, keyed by date. Think of it as:
// {
//   "2024-01-30": {
//     behaviors: {
//       smokingBehaviorId: { behavior, data: { numericValue: 2, formattedValue: "2 cigarettes" } }
//     }
//   },
//   "2024-01-31": {
//     behaviors: {
//       smokingBehaviorId: { behavior, data: { numericValue: 2, formattedValue: "3 cigarettes" } }
//     }
//   }
// }
export const daysSummarySchema = yup.object({
  dates: objectOf(behaviorTotalDataByIdSchema),
  createdAt: optionalTimestampSchema,
  updatedAt: optionalTimestampSchema,
});

export type DaysSummaryValue = yup.InferType<typeof daysSummarySchema>;
