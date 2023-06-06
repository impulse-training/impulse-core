import { FakeTimestamp } from '../utils/FakeTimestamp';

// We serialize the entire tactic collection into the gameplan document for now
export interface GameplanValue {
  uid: string;
  name: string;
  isFeatured: boolean;
  createdAt: FakeTimestamp;
  updatedAt: FakeTimestamp;
}

export type GameplanByPatternId = Record<
  string,
  Record<
    'impulse' | 'success' | 'setback',
    {
      tacticIds: Array<string>;
      // Some pre-prepared suggested tactics that can be pushed into the tactics array
      suggestedTacticIds: Array<string>;
    }
  >
>;
