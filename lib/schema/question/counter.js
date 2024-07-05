"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.questionCounterSchema = void 0;
const base_1 = require("./base");
const setbackThreshold_1 = require("./utils/setbackThreshold");
exports.questionCounterSchema = (0, base_1.questionBaseSchema)('counter').shape(Object.assign({}, setbackThreshold_1.setbackThresholdMixin));
