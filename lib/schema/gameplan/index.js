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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gameplanSchema = exports.GameplanSchemas = void 0;
const yup = __importStar(require("yup"));
const craving_1 = require("./craving");
const location_1 = require("./location");
const scheduled_1 = require("./scheduled");
__exportStar(require("./craving"), exports);
__exportStar(require("./emotions"), exports);
__exportStar(require("./location"), exports);
__exportStar(require("./scheduled"), exports);
// Utility to dynamically select the correct schema based on the Gameplan type
exports.GameplanSchemas = {
    craving: craving_1.cravingGameplanSchema,
    scheduled: scheduled_1.scheduledGameplanSchema,
    location: location_1.locationGameplanSchema,
};
exports.gameplanSchema = yup.lazy(value => {
    if (typeof value.type === 'string' && value.type in exports.GameplanSchemas) {
        return exports.GameplanSchemas[value.type];
    }
    return yup.object({
        type: yup
            .mixed()
            .oneOf(Object.keys(exports.GameplanSchemas))
            .required(),
    });
});