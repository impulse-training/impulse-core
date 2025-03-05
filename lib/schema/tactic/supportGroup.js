"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.supportGroupTacticSchema = void 0;
const firestore_1 = require("../utils/firestore");
const base_1 = require("./base");
exports.supportGroupTacticSchema = (0, base_1.tacticBaseSchema)('supportGroup').shape({
    supportGroup: firestore_1.documentReferenceSchema.required(),
});
