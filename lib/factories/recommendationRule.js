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
exports.makeImpulseDebriefRecommendationRuleFactory = exports.makeImpulseRecommendationRuleFactory = void 0;
const Factory = __importStar(require("factory.ts"));
const recommendation_1 = require("./recommendation");
const makeImpulseRecommendationRuleFactory = (TimestampKlass) => Factory.makeFactory({
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    type: 'impulse',
    uid: Factory.each(i => `impulse-recommendation-rule-${i}`),
    recommendation: (0, recommendation_1.makeImpulseRecommendationFactory)(TimestampKlass).build(),
    forIssueIds: [],
    ordinal: 0,
});
exports.makeImpulseRecommendationRuleFactory = makeImpulseRecommendationRuleFactory;
const makeImpulseDebriefRecommendationRuleFactory = (TimestampKlass) => Factory.makeFactory({
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    type: 'impulseDebrief',
    uid: Factory.each(i => `impulse-debrief-recommendation-rule-${i}`),
    recommendation: (0, recommendation_1.makeImpulseDebriefRecommendationFactory)(TimestampKlass).build(),
    forIssueIds: [],
    ordinal: 0,
});
exports.makeImpulseDebriefRecommendationRuleFactory = makeImpulseDebriefRecommendationRuleFactory;
