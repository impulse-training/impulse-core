"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tacticsLogSchema = void 0;
const tactic_1 = require("../strategy/tactic");
const array_1 = require("../utils/array");
const objectOf_1 = require("../utils/objectOf");
const base_1 = require("./base");
const generated_1 = require("./utils/generated");
exports.tacticsLogSchema = (0, base_1.logBaseSchema)('tactics').shape(Object.assign({ tacticsById: (0, objectOf_1.objectOf)(tactic_1.tacticSchema), completedTacticIds: array_1.requiredStringArray }, generated_1.gptGeneratedMixin));
