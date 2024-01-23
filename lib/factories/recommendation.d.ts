import * as Factory from 'factory.ts';
import { NewGameplanRecommendationValue, RecommendationValue } from '../schema';
import { TimestampLike } from '../utils/TimestampLike';
export declare const makeRecommendationFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<RecommendationValue, "uid" | "ordinal" | "createdAt" | "updatedAt" | "title" | "tacticIds" | "tacticsById" | "appliedAt" | "dismissedAt" | "explanation" | "gameplanExplanation" | "recommenderUid" | "recommenderName" | "ruleId" | "gameplanIds" | "defaultSelected">;
export declare const makeExistingGameplanRecommendationFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<RecommendationValue, "uid" | "ordinal" | "createdAt" | "updatedAt" | "title" | "tacticIds" | "tacticsById" | "appliedAt" | "dismissedAt" | "explanation" | "gameplanExplanation" | "recommenderUid" | "recommenderName" | "ruleId" | "gameplanIds" | "defaultSelected">;
export declare const makeNewGameplanRecommendationFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<NewGameplanRecommendationValue, "gameplan" | keyof import("../schema").RecommendationValueBase>;
