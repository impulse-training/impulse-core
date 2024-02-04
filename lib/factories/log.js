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
exports.makeLocationLogFactory = exports.makeMotionLogFactory = exports.makeDebriefLogFactory = exports.makeTimeLogFactory = exports.makeImpulseFactory = void 0;
const Factory = __importStar(require("factory.ts"));
const gameplan = {
    main: { tacticIds: [], suggestedTacticIds: [], tacticsById: {} },
    impulseDebrief: { tacticIds: [], suggestedTacticIds: [], tacticsById: {} },
};
const makeImpulseFactory = (TimestampKlass) => Factory.makeFactory({
    uid: Factory.each(i => i.toString()),
    type: 'impulse',
    setAsActiveImpulse: true,
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    startTime: TimestampKlass.now(),
    timezone: 'America/Botota',
    isDisplayable: true,
    debriefNotes: '',
    patternId: 'abc123',
    patternIds: [],
    tactics: {},
    location: {},
    locationIsFetching: false,
    tacticIds: [],
    allTacticIds: [],
    patterns: {},
    patternUsage: {},
    gameplans: {},
    gameplan: gameplan,
});
exports.makeImpulseFactory = makeImpulseFactory;
const makeTimeLogFactory = (TimestampKlass) => Factory.makeFactory({
    uid: Factory.each(i => i.toString()),
    type: 'time',
    gameplanId: 'reminder1',
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    startTime: TimestampKlass.now(),
    timezone: 'America/Botota',
    isDisplayable: true,
    tactics: {},
    location: {},
    locationIsFetching: false,
    tacticIds: [],
    allTacticIds: [],
    gameplan: gameplan,
});
exports.makeTimeLogFactory = makeTimeLogFactory;
const makeDebriefLogFactory = (TimestampKlass) => Factory.makeFactory({
    uid: Factory.each(i => i.toString()),
    type: 'debrief',
    gameplanId: 'reminder1',
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    startTime: TimestampKlass.now(),
    timezone: 'America/Botota',
    isDisplayable: true,
    tactics: {},
    location: {},
    locationIsFetching: false,
    tacticIds: [],
    allTacticIds: [],
    gameplan: gameplan,
    patterns: {},
    patternIds: [],
    patternUsage: {},
    patternUsageEntries: {},
});
exports.makeDebriefLogFactory = makeDebriefLogFactory;
const makeMotionLogFactory = (TimestampKlass) => Factory.makeFactory({
    uid: Factory.each(i => i.toString()),
    type: 'motion',
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    startTime: TimestampKlass.now(),
    timezone: 'America/Botota',
    isDisplayable: false,
    tactics: {},
    location: {},
    locationIsFetching: false,
    tacticIds: [],
    allTacticIds: [],
    gameplan: gameplan,
});
exports.makeMotionLogFactory = makeMotionLogFactory;
const makeLocationLogFactory = (TimestampKlass) => Factory.makeFactory({
    uid: Factory.each(i => i.toString()),
    type: 'location',
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    startTime: TimestampKlass.now(),
    timezone: 'America/Botota',
    isDisplayable: true,
    locationId: 'abc123',
    locationMode: 'enter',
    locationName: 'Home',
    tactics: {},
    location: {},
    locationIsFetching: false,
    tacticIds: [],
    allTacticIds: [],
    gameplan: gameplan,
});
exports.makeLocationLogFactory = makeLocationLogFactory;
