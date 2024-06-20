"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.strategiesLogSchema = void 0;
const tactic_1 = require("../strategy/tactic");
const array_1 = require("../utils/array");
const objectOf_1 = require("../utils/objectOf");
const base_1 = require("./base");
const gpt_1 = require("./utils/gpt");
exports.strategiesLogSchema = (0, base_1.logBaseSchema)('strategies').shape(Object.assign({ strategyIds: array_1.requiredStringArray, strategiesById: (0, objectOf_1.objectOf)(tactic_1.tacticSchema), completedTacticIds: array_1.requiredStringArray }, gpt_1.gptResponseMixin));
