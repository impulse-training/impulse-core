"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.strategiesLogSchema = void 0;
const strategy_1 = require("../strategy");
const array_1 = require("../utils/array");
const objectOf_1 = require("../utils/objectOf");
const base_1 = require("./base");
const gpt_1 = require("./utils/gpt");
exports.strategiesLogSchema = (0, base_1.logBaseSchema)('strategies').shape(Object.assign({ 
    // A strategies log can have a list of suggested strategies, or it can just be a record of
    // completed strategies
    suggestedStrategyDocPaths: array_1.optionalStringArray, strategiesById: (0, objectOf_1.objectOf)(strategy_1.strategySchema), 
    // These are the tactics that the user has completed
    completedTacticIds: array_1.requiredStringArray, 
    // ... and these are the tactics that Zara has followed up on with the user
    followedUpTacticIds: array_1.requiredStringArray }, gpt_1.gptResponseMixin));
