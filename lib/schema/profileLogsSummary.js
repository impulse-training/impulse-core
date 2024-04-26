"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.profileLogsSummarySchema = void 0;
const log_1 = require("./log");
const objectOf_1 = require("./utils/objectOf");
// A tactic day summary is an object of tactic data, keyed by tactic id. Think of it as:
// {
//   howManyCigarettes: { data: 2, formattedValue: "2 cigarettes" }
// }
const tacticTotalDataByIdSchema = (0, objectOf_1.objectOf)(log_1.tacticDataSchema);
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
exports.profileLogsSummarySchema = (0, objectOf_1.objectOf)(tacticTotalDataByIdSchema);
