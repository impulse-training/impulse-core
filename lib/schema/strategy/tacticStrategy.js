"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tacticStrategySchema = void 0;
const tactic_1 = require("../tactic");
const base_1 = require("./base");
exports.tacticStrategySchema = (0, base_1.strategyValueBaseSchema)('tactic', tactic_1.tacticSchema);
