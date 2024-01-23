import { FakeTimestamp } from '../utils/FakeTimestamp';

export interface PatternValue {
  uid: string;
  createdAt: FakeTimestamp;
  updatedAt: FakeTimestamp;
  name: string;
  ordinal: number;
  unit: 'time' | 'custom';
  customUnit?: string;
  supportGroupIds?: Array<string>;
  notification?: {
    title: string;
    body: string;
  };
  issueId?: string;
  sendWeeklyReports: boolean;
  setbackThreshold: number;

  // TODO: move these into an object structure
  gameplanId?: string;
  successGameplanId?: string;
  setbackGameplanId?: string;
}

export interface PatternUsage {
  unit: 'time' | 'custom';
  customUnit?: string;
  formattedValue: string;
  value: number;
}
