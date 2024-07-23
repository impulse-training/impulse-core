"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dayReviewLogSchema = void 0;
const firestore_1 = require("../utils/firestore");
const base_1 = require("./base");
exports.dayReviewLogSchema = (0, base_1.logBaseSchema)('dayReview').shape({
    dayDoc: firestore_1.documentReferenceSchema.required(),
});
