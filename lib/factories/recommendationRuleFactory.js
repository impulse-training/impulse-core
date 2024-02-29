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
exports.makeNewRoutineRecommendationRuleFactory = exports.makeRecommendationRuleFactory = void 0;
const Factory = __importStar(require("factory.ts"));
const makeRecommendationRuleFactory = (TimestampKlass) => Factory.makeFactory({
    uid: Factory.each(i => i.toString()),
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    // For now, we need to specify recommendation properties manually, instead of deferring to the
    // existing factory. That's because we're not actually exporting factories here, we're exporting
    // 'builder' functions that take a timestamp class and return a factory. So we can't use the
    // factory here directly. It just means that when we update the recommendation factory, we also
    // need to update this factory... But at least typescript should keep us in check, more or less
    // :)
    recommendation: {
        title: "Let's start with a distraction",
        routineExplanation: 'Choose a time of day to review',
        tacticIds: [],
        tacticsById: {},
        patternIds: [],
        recommenderName: 'Michael',
        recommenderUid: 'abc123',
        property: 'impulseDebrief',
    },
    forIssueIds: [],
    ordinal: 0,
});
exports.makeRecommendationRuleFactory = makeRecommendationRuleFactory;
const makeNewRoutineRecommendationRuleFactory = (TimestampKlass) => Factory.makeFactory({
    uid: Factory.each(i => i.toString()),
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    // For now, we need to specify recommendation properties manually, instead of deferring to the
    // existing factory. That's because we're not actually exporting factories here, we're exporting
    // 'builder' functions that take a timestamp class and return a factory. So we can't use the
    // factory here directly. It just means that when we update the recommendation factory, we also
    // need to update this factory... But at least typescript should keep us in check, more or less
    // :)
    recommendation: {
        title: "Let's start with a distraction",
        tacticIds: [],
        tacticsById: {},
        property: 'routine',
        routine: {
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
    },
    forIssueIds: [],
    ordinal: 0,
});
exports.makeNewRoutineRecommendationRuleFactory = makeNewRoutineRecommendationRuleFactory;
