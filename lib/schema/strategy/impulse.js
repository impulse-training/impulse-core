"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.impulseStrategySchema = void 0;
const array_1 = require("../utils/array");
const base_1 = require("./base");
exports.impulseStrategySchema = (0, base_1.strategyBaseSchema)('impulse').shape({
    forIssueIds: array_1.requiredStringArray,
});
