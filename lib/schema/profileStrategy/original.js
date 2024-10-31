"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.originalProfileStrategySchema = void 0;
const strategy_1 = require("../strategy");
const firestore_1 = require("../utils/firestore");
const base_1 = require("./base");
// These are strategies that the user owns
exports.originalProfileStrategySchema = (0, base_1.profileStrategyBaseSchema)('original').shape({
    strategyDoc: firestore_1.documentReferenceSchema,
    strategy: strategy_1.strategySchema.required(),
});
