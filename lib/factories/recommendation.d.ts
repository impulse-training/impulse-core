import * as Factory from 'factory.ts';
import { NewGameplanRecommendationValue, RecommendationValue } from '../schema';
import { FakeTimestamp } from '../utils/FakeTimestamp';
export declare const makeRecommendationFactory: (TimestampKlass: typeof FakeTimestamp) => Factory.Sync.Factory<RecommendationValue, "uid" | "ordinal" | "createdAt" | "updatedAt" | "title" | "tacticIds" | "tacticsById" | "appliedAt" | "dismissedAt" | "explanation" | "gameplanExplanation" | "recommenderUid" | "recommenderName" | "ruleId" | "gameplanIds" | "defaultSelected">;
export declare const makeExistingGameplanRecommendationFactory: (TimestampKlass: typeof FakeTimestamp) => Factory.Sync.Factory<RecommendationValue, "uid" | "ordinal" | "createdAt" | "updatedAt" | "title" | "tacticIds" | "tacticsById" | "appliedAt" | "dismissedAt" | "explanation" | "gameplanExplanation" | "recommenderUid" | "recommenderName" | "ruleId" | "gameplanIds" | "defaultSelected">;
export declare const makeNewGameplanRecommendationFactory: (TimestampKlass: typeof FakeTimestamp) => Factory.Sync.Factory<NewGameplanRecommendationValue, keyof import("../schema").RecommendationValueBase | "gameplan">;
