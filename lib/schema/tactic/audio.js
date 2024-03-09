"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.audioTacticSchema = void 0;
const recording_1 = require("../recording");
const base_1 = require("./base");
exports.audioTacticSchema = (0, base_1.tacticValueBaseSchema)('audio').shape({
    recording: recording_1.recordingSchema.required(),
});
