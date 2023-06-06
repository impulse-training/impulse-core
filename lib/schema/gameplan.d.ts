import { FakeTimestamp } from '../utils/FakeTimestamp';
export interface GameplanValue {
    uid: string;
    name: string;
    isFeatured: boolean;
    createdAt: FakeTimestamp;
    updatedAt: FakeTimestamp;
}
export type GameplanByPatternId = Record<string, Record<'impulse' | 'success' | 'setback', {
    tacticIds: Array<string>;
    suggestedTacticIds: Array<string>;
}>>;
