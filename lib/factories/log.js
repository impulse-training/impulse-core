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
exports.makeLocationLogFactory = exports.makeTimeLogFactory = exports.makeImpulseLogFactory = void 0;
const Factory = __importStar(require("factory.ts"));
const makeImpulseLogFactory = (TimestampKlass) => Factory.makeFactory({
    profileId: Factory.each(i => i.toString()),
    type: 'impulse',
    setAsActiveImpulse: true,
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    startTime: TimestampKlass.now(),
    timezone: 'America/Bogota',
    isDisplayable: true,
    location: {},
    locationIsFetching: false,
    tacticIds: [],
    tacticsById: {},
    tacticData: {},
    strategiesPath: 'patterns/abc123/strategies',
});
exports.makeImpulseLogFactory = makeImpulseLogFactory;
const makeTimeLogFactory = (TimestampKlass) => Factory.makeFactory({
    profileId: Factory.each(i => i.toString()),
    type: 'time',
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    startTime: TimestampKlass.now(),
    timezone: 'America/Bogota',
    isDisplayable: true,
    strategiesPath: 'routines/abc123/strategies',
    location: {},
    locationIsFetching: false,
    tacticIds: [],
    tacticsById: {},
    tacticData: {},
});
exports.makeTimeLogFactory = makeTimeLogFactory;
const makeLocationLogFactory = (TimestampKlass) => Factory.makeFactory({
    profileId: Factory.each(i => i.toString()),
    type: 'location',
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    startTime: TimestampKlass.now(),
    timezone: 'America/Bogota',
    isDisplayable: true,
    locationId: 'abc123',
    locationMode: 'enter',
    locationName: 'Home',
    strategiesPath: 'routines/abc123/strategies',
    location: {},
    locationIsFetching: false,
    tacticIds: [],
    tacticsById: {},
    tacticData: {},
});
exports.makeLocationLogFactory = makeLocationLogFactory;
