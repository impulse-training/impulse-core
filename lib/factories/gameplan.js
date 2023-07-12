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
exports.makeDebriefGameplanFactory = exports.makeTimeGameplanFactory = exports.makeLocationGameplanFactory = exports.makePatternGameplanFactory = void 0;
const Factory = __importStar(require("factory.ts"));
const makePatternGameplanFactory = (TimestampKlass) => Factory.makeFactory({
    uid: Factory.each(i => i.toString()),
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    tacticIds: [],
    patternId: 'abc123',
    type: 'pattern',
    for: 'impulse',
    suggestedTacticIds: [],
    tacticsById: {},
});
exports.makePatternGameplanFactory = makePatternGameplanFactory;
const makeLocationGameplanFactory = (TimestampKlass) => Factory.makeFactory({
    uid: Factory.each(i => i.toString()),
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    tacticIds: [],
    type: 'location',
    mode: 'enter',
    suggestedTacticIds: [],
    tacticsById: {},
});
exports.makeLocationGameplanFactory = makeLocationGameplanFactory;
const makeTimeGameplanFactory = (TimestampKlass) => Factory.makeFactory({
    uid: Factory.each(i => i.toString()),
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    timezone: 'America/Los_Angeles',
    tacticIds: [],
    type: 'time',
    weekdays: [1, 2, 3, 4, 5, 6, 7],
    hour: 12,
    minute: 0,
    suggestedTacticIds: [],
    tacticsById: {},
});
exports.makeTimeGameplanFactory = makeTimeGameplanFactory;
const makeDebriefGameplanFactory = (TimestampKlass) => Factory.makeFactory({
    uid: Factory.each(i => i.toString()),
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    timezone: 'America/Los_Angeles',
    tacticIds: [],
    type: 'debrief',
    weekdays: [1, 2, 3, 4, 5, 6, 7],
    hour: 12,
    minute: 0,
    suggestedTacticIds: [],
    tacticsById: {},
});
exports.makeDebriefGameplanFactory = makeDebriefGameplanFactory;
