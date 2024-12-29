"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notifySupportGroupSchema = void 0;
const firestore_1 = require("../utils/firestore");
const base_1 = require("./base");
exports.notifySupportGroupSchema = (0, base_1.tacticBaseSchema)('notifySupportGroup').shape({
    supportGroup: firestore_1.documentReferenceSchema.required(),
});
