import * as Factory from 'factory.ts';
import { ExistingGameplanRecommendationValue } from '../schema';
import { FakeTimestamp } from '../utils/FakeTimestamp';
export declare const makeRecommendationFactory: (TimestampKlass: typeof FakeTimestamp) => Factory.Sync.Factory<ExistingGameplanRecommendationValue, "gameplanId" | keyof import("../schema").RecommendationValueBase>;
