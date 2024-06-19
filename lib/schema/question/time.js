"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.questionTimeSchema = void 0;
const base_1 = require("./base");
const setbackThreshold_1 = require("./utils/setbackThreshold");
exports.questionTimeSchema = (0, base_1.questionBaseSchema)('time').shape(Object.assign({}, setbackThreshold_1.setbackThresholdMixin));
