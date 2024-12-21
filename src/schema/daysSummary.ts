import * as yup from 'yup';
import { behaviorAndBehaviorDataSchema, emotionDataSchema } from './log';
import { objectOf } from './utils/objectOf';

// A day summary is an object of behavior and emotion
// {
//   behaviors: {
//     smokingBehaviorId: { behavior, data: { numericValue: 2, formattedValue: "2 cigarettes" } }
//   },
//   emotions: {
//     label: "Really sad",
//     name: "Sad",
//     key: "happy-sad",
//     intensity: 4,
//   }
// }
const behaviorTotalDataByIdSchema = yup.object({
  behaviors: objectOf(behaviorAndBehaviorDataSchema),
  emotions: objectOf(emotionDataSchema),
});

// A days summary document is an object of tactic day summaries, keyed by date. Think of it
// as:
// {
//   "2024-01-30": {
//     smokingBehaviorId: { behavior, data: { numericValue: 2, formattedValue: "2 cigarettes" } }
//   },
//   "2024-01-31": {
//     smokingBehaviorId: { behavior, data: { numericValue: 2, formattedValue: "3 cigarettes" } }
//   }
// }
export const daysSummarySchema = objectOf(behaviorTotalDataByIdSchema);

export type DaysSummaryValue = yup.InferType<typeof daysSummarySchema>;
