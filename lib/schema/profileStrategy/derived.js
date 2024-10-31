"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.derivedProfileStrategySchema = void 0;
const base_1 = require("./base");
// These are strategies where tactics are sourced from other sources
exports.derivedProfileStrategySchema = (0, base_1.profileStrategyBaseSchema)('derived').shape({
// Keywords or other metadata to filter results
});
