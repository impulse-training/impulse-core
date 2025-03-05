"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.audioTacticSchema = void 0;
const file_1 = require("../utils/file");
const base_1 = require("./base");
exports.audioTacticSchema = (0, base_1.tacticBaseSchema)('audio').shape({
    audio: file_1.fileSchema.optional().nullable().default(undefined),
});
