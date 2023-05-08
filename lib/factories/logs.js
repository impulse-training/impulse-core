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
exports.makeMotionLogFactory = exports.makeTimeLogFactory = exports.makeTacticsLogFactory = exports.makeImpulseFactory = void 0;
const Factory = __importStar(require("factory.ts"));
const makeImpulseFactory = (TimestampKlass) => Factory.makeFactory({
    uid: Factory.each(i => i.toString()),
    isShared: false,
    type: 'impulse',
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    startTime: TimestampKlass.now(),
    timezone: 'America/Botota',
    outcome: 'indeterminate',
    isDisplayable: true,
    debriefNotes: '',
    patternIds: [],
    tactics: {},
    location: {},
    tagsByTacticId: {},
    locationIsFetching: false,
    tacticIds: [],
    tacticResponses: {},
    tagIds: [],
    tagValues: {},
    patterns: {},
    patternUsage: {},
});
exports.makeImpulseFactory = makeImpulseFactory;
const makeTacticsLogFactory = (TimestampKlass) => Factory.makeFactory({
    uid: Factory.each(i => i.toString()),
    type: 'tactics',
    isShared: false,
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    startTime: TimestampKlass.now(),
    isDisplayable: true,
    timezone: 'America/Botota',
    tactics: {},
    location: {},
    tagsByTacticId: {},
    locationIsFetching: false,
    tacticIds: [],
    tacticResponses: {},
    tagIds: [],
    tagValues: {},
});
exports.makeTacticsLogFactory = makeTacticsLogFactory;
const makeTimeLogFactory = (TimestampKlass) => Factory.makeFactory({
    uid: Factory.each(i => i.toString()),
    type: 'time',
    isShared: false,
    reminderId: 'reminder1',
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    startTime: TimestampKlass.now(),
    timezone: 'America/Botota',
    tagIds: [],
    isDisplayable: true,
    tactics: {},
    tagsByTacticId: {},
    location: {},
    locationIsFetching: false,
    tacticIds: [],
    tacticResponses: {},
    tagValues: {},
});
exports.makeTimeLogFactory = makeTimeLogFactory;
const makeMotionLogFactory = (TimestampKlass) => Factory.makeFactory({
    uid: Factory.each(i => i.toString()),
    type: 'motion',
    isShared: false,
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    startTime: TimestampKlass.now(),
    timezone: 'America/Botota',
    tagIds: [],
    isDisplayable: false,
    tactics: {},
    tagsByTacticId: {},
    location: {},
    locationIsFetching: false,
    tacticIds: [],
    tacticResponses: {},
    tagValues: {},
});
exports.makeMotionLogFactory = makeMotionLogFactory;
