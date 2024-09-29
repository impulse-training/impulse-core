"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.whatsappThreadSchema = void 0;
const firestore_1 = require("../utils/firestore");
const base_1 = __importDefault(require("./base"));
exports.whatsappThreadSchema = (0, base_1.default)('whatsapp').shape({
    folderDoc: firestore_1.documentReferenceSchema,
});
