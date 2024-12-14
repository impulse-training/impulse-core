"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timeBehaviorSchema = void 0;
const base_1 = require("./base");
const setbackThreshold_1 = require("./utils/setbackThreshold");
exports.timeBehaviorSchema = (0, base_1.behaviorBaseSchema)('time').shape(Object.assign({}, setbackThreshold_1.setbackThresholdMixin));
