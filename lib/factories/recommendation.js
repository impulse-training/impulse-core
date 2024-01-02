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
exports.makeNewGameplanRecommendationFactory = exports.makeExistingGameplanRecommendationFactory = exports.makeRecommendationFactory = void 0;
const Factory = __importStar(require("factory.ts"));
const makeRecommendationFactory = (TimestampKlass) => Factory.makeFactory({
    uid: Factory.each(i => i.toString()),
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    title: "Let's start with a distraction",
    explanation: 'You should try this!',
    tacticIds: [],
    tacticsById: {},
    recommenderName: 'Michael',
    recommenderUid: 'abc123',
    ordinal: 0,
    appliedAt: null,
    dismissedAt: null,
});
exports.makeRecommendationFactory = makeRecommendationFactory;
const makeExistingGameplanRecommendationFactory = (TimestampKlass) => Factory.makeFactory({
    uid: Factory.each(i => i.toString()),
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    title: "Let's start with a distraction",
    explanation: 'You should try this!',
    gameplanExplanation: 'Choose a time of day to review',
    tacticIds: [],
    tacticsById: {},
    gameplanId: 'abc123',
    recommenderName: 'Michael',
    recommenderUid: 'abc123',
    ordinal: 0,
    appliedAt: null,
    dismissedAt: null,
});
exports.makeExistingGameplanRecommendationFactory = makeExistingGameplanRecommendationFactory;
const makeNewGameplanRecommendationFactory = (TimestampKlass) => Factory.makeFactory({
    uid: Factory.each(i => i.toString()),
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    title: "Let's start with a distraction",
    explanation: 'You should try this!',
    tacticIds: [],
    tacticsById: {},
    gameplan: {
        uid: 'abc',
        createdAt: TimestampKlass.now(),
        updatedAt: TimestampKlass.now(),
        hour: 8,
        minute: 0,
        timezone: 'America/Chihuahua',
        weekdays: [1, 2, 3, 4, 5],
        type: 'time',
        tacticIds: [],
        suggestedTacticIds: [],
        tacticsById: {},
    },
    recommenderName: 'Michael',
    recommenderUid: 'abc123',
    ordinal: 0,
    appliedAt: null,
    dismissedAt: null,
});
exports.makeNewGameplanRecommendationFactory = makeNewGameplanRecommendationFactory;
