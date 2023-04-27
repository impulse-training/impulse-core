"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IMPULSE_NUMBER = void 0;
const twilio_1 = __importDefault(require("twilio"));
exports.IMPULSE_NUMBER = '+18783488606';
const twilioClient = (0, twilio_1.default)('AC0f765cfed103663265bfc6d1ca85a5f4', //process.env.TWILIO_ACCOUNT_SID,
'cdcc50d0dab19eb3d80e88f44cc8cb6f' //process.env.TWILIO_AUTH_TOKEN
);
exports.default = twilioClient;
