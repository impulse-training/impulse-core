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
exports.makeTimeReminderFactory = exports.makeLocationReminderFactory = void 0;
const Factory = __importStar(require("factory.ts"));
const makeLocationReminderFactory = (TimestampKlass) => Factory.makeFactory({
    uid: Factory.each(i => i.toString()),
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    tacticId: 'abc123',
    type: 'location',
    locationId: '1',
    mode: 'enter',
});
exports.makeLocationReminderFactory = makeLocationReminderFactory;
const makeTimeReminderFactory = (TimestampKlass) => Factory.makeFactory({
    uid: Factory.each(i => i.toString()),
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    timezone: 'America/Los_Angeles',
    tacticId: 'abc123',
    type: 'time',
    weekdays: [1, 2, 3, 4, 5, 6, 7],
    hour: 12,
    minute: 0,
});
exports.makeTimeReminderFactory = makeTimeReminderFactory;
