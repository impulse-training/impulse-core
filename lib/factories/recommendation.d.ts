import * as Factory from 'factory.ts';
import { NewGameplanRecommendationValue, RecommendationValue } from '../schema';
import { FakeTimestamp } from '../utils/FakeTimestamp';
export declare const makeRecommendationFactory: (TimestampKlass: typeof FakeTimestamp) => Factory.Sync.Factory<RecommendationValue, "uid" | "ordinal" | "createdAt" | "updatedAt" | "appliedAt" | "dismissedAt" | "title" | "explanation" | "gameplanExplanation" | "recommenderUid" | "recommenderName" | "tacticIds" | "tacticsById" | "ruleId" | "gameplanId" | "selectAllByDefault">;
export declare const makeExistingGameplanRecommendationFactory: (TimestampKlass: typeof FakeTimestamp) => Factory.Sync.Factory<RecommendationValue, "uid" | "ordinal" | "createdAt" | "updatedAt" | "appliedAt" | "dismissedAt" | "title" | "explanation" | "gameplanExplanation" | "recommenderUid" | "recommenderName" | "tacticIds" | "tacticsById" | "ruleId" | "gameplanId" | "selectAllByDefault">;
export declare const makeNewGameplanRecommendationFactory: (TimestampKlass: typeof FakeTimestamp) => Factory.Sync.Factory<NewGameplanRecommendationValue, keyof import("../schema").RecommendationValueBase | "gameplan">;
