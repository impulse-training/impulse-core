import { FakeTimestamp } from '../utils/FakeTimestamp';

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
  impulseTacticIds?: Array<string>;
}
