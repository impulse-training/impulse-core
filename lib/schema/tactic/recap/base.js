"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recapTacticValueBaseSchema = void 0;
const timestamp_1 = require("../../utils/timestamp");
const base_1 = require("../base");
function recapTacticValueBaseSchema(type) {
    return (0, base_1.tacticValueBaseSchema)(type).shape({
        confirmedAt: timestamp_1.optionalTimestampSchema,
    });
}
exports.recapTacticValueBaseSchema = recapTacticValueBaseSchema;
