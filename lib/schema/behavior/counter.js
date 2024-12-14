"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.counterBehaviorSchema = void 0;
const base_1 = require("./base");
const setbackThreshold_1 = require("./utils/setbackThreshold");
exports.counterBehaviorSchema = (0, base_1.behaviorBaseSchema)('counter').shape(Object.assign({}, setbackThreshold_1.setbackThresholdMixin));
