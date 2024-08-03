"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.audioLogSchema = void 0;
const file_1 = require("../utils/file");
const base_1 = require("./base");
exports.audioLogSchema = (0, base_1.logBaseSchema)('audio').shape({
    file: file_1.fileSchema.required(),
});
