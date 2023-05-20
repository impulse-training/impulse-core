import { FakeTimestamp } from '../utils/FakeTimestamp';
import { TacticValue } from './tactic';
export interface PatternValue {
    uid: string;
    createdAt: FakeTimestamp;
    updatedAt: FakeTimestamp;
    name: string;
    ordinal: number;
    unit: 'time' | 'custom';
    customUnit?: string;
    setbackDefinition?: string;
    setbackUnitMaximum?: number;
    supportGroupIds?: Array<string>;
    notification?: {
        title: string;
        body: string;
    };
    allTacticById: Record<string, TacticValue>;
    impulseTacticIds?: Array<string>;
}
