"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.folderTacticSchema = void 0;
// These tactics can contain other tactics. We need to exclude this from the NonRecursiveTactic
const yup = __importStar(require("yup"));
const array_1 = require("../utils/array");
const base_1 = require("./base");
exports.folderTacticSchema = (0, base_1.tacticValueBaseSchema)('folder').shape({
    tacticIds: array_1.requiredStringArray,
    suggestedTacticIds: array_1.optionalStringArray,
    // We can simply keep incrementing this number to show different tactics
    currentTacticIndex: yup.number().required(),
    // For now, we don't specify the tactic schema here, as it would lead to recursion
    tacticsById: yup.object().required(),
    autogenerate: yup.boolean(),
});
