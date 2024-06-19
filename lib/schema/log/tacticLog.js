"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tacticLogSchema = void 0;
const tactic_1 = require("../strategy/tactic");
const base_1 = require("./base");
const generated_1 = require("./utils/generated");
exports.tacticLogSchema = (0, base_1.logBaseSchema)('tactic').shape(Object.assign({ tactic: tactic_1.tacticSchema.optional() }, generated_1.generatedMixin));
