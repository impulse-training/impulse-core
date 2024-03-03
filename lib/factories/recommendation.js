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
exports.makeLocationRecommendationFactory = exports.makeTimeRecommendationFactory = exports.makeImpulseDebriefRecommendationFactory = exports.makeImpulseRecommendationFactory = void 0;
const Factory = __importStar(require("factory.ts"));
const makeImpulseRecommendationFactory = (TimestampKlass) => Factory.makeFactory({
    uid: Factory.each(i => i.toString()),
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    title: "Let's start with a distraction",
    tacticIds: [],
    tacticsById: {},
    recommenderName: 'Michael',
    recommenderUid: 'abc123',
    ordinal: 0,
    appliedAt: null,
    dismissedAt: null,
    patternIds: [],
    type: 'impulse',
});
exports.makeImpulseRecommendationFactory = makeImpulseRecommendationFactory;
const makeImpulseDebriefRecommendationFactory = (TimestampKlass) => Factory.makeFactory({
    uid: Factory.each(i => i.toString()),
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    title: "Let's start with a distraction",
    tacticIds: [],
    tacticsById: {},
    recommenderName: 'Michael',
    recommenderUid: 'abc123',
    ordinal: 0,
    appliedAt: null,
    dismissedAt: null,
    type: 'impulseDebrief',
    patternIds: [],
});
exports.makeImpulseDebriefRecommendationFactory = makeImpulseDebriefRecommendationFactory;
const makeTimeRecommendationFactory = (TimestampKlass) => Factory.makeFactory({
    uid: Factory.each(i => i.toString()),
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    title: "Let's start with a distraction",
    tacticIds: [],
    tacticsById: {},
    recommenderName: 'Michael',
    recommenderUid: 'abc123',
    ordinal: 0,
    appliedAt: null,
    dismissedAt: null,
    type: 'time',
    time: {
        hour: 0,
        minute: 0,
        weekdays: [],
    },
});
exports.makeTimeRecommendationFactory = makeTimeRecommendationFactory;
const makeLocationRecommendationFactory = (TimestampKlass) => Factory.makeFactory({
    uid: Factory.each(i => i.toString()),
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    title: "Let's start with a distraction",
    tacticIds: [],
    tacticsById: {},
    recommenderName: 'Michael',
    recommenderUid: 'abc123',
    ordinal: 0,
    appliedAt: null,
    dismissedAt: null,
    type: 'location',
    locationName: 'home',
});
exports.makeLocationRecommendationFactory = makeLocationRecommendationFactory;
