"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.daysSummarySchema = void 0;
const log_1 = require("./log");
const objectOf_1 = require("./utils/objectOf");
// A tactic day summary is an object of tactic data, keyed by tactic id. Think of it as:
// {
//   smokingBehaviorId: { behavior, data: { numericValue: 2, formattedValue: "2 cigarettes" } }
// }
const behaviorTotalDataByIdSchema = (0, objectOf_1.objectOf)(log_1.behaviorAndBehaviorDataSchema);
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
exports.daysSummarySchema = (0, objectOf_1.objectOf)(behaviorTotalDataByIdSchema);
