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
  // This is an audit of how much time (or similar) they spend engaging in the behaviour
  initialUsage?: PatternUsage;
  sendWeeklyReports: boolean;
}

export interface PatternUsage {
  value: number;
  transformedValue: number;
  formattedValue: string;
}
