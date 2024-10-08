"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reminderLogId = void 0;
const md5_1 = __importDefault(require("crypto-js/md5"));
const date_fns_1 = require("date-fns");
function reminderLogId(reminderId, date) {
    return (0, md5_1.default)(JSON.stringify({
        reminderId,
        date: (0, date_fns_1.format)(date, 'yyyy-MM-dd'),
    })).toString();
}
exports.reminderLogId = reminderLogId;
