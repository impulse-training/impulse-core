import * as Factory from 'factory.ts';
import { NewRoutineRecommendationValue, RecommendationValue } from '../schema';
import { TimestampLike } from '../utils/TimestampLike';
export declare const makeRecommendationFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<RecommendationValue, "uid" | "createdAt" | "updatedAt" | "ordinal" | "title" | "tacticIds" | "tacticsById" | "appliedAt" | "dismissedAt" | "explanation" | "gameplanExplanation" | "recommenderUid" | "recommenderName" | "ruleId" | "gameplanIds" | "defaultSelected">;
export declare const makeExistingRoutineRecommendationFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<RecommendationValue, "uid" | "createdAt" | "updatedAt" | "ordinal" | "title" | "tacticIds" | "tacticsById" | "appliedAt" | "dismissedAt" | "explanation" | "gameplanExplanation" | "recommenderUid" | "recommenderName" | "ruleId" | "gameplanIds" | "defaultSelected">;
export declare const makeNewRoutineRecommendationFactory: (TimestampKlass: typeof TimestampLike) => Factory.Sync.Factory<NewRoutineRecommendationValue, "gameplan" | keyof import("../schema").RecommendationValueBase>;
