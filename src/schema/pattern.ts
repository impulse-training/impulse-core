import { Timestamp } from '../utils/Timestamp';

export interface PatternValue {
  uid: string;
  createdAt: Timestamp;
  name: string;
  ordinal: number;
  unit: 'time' | 'custom';
  customUnit?: string;
  setbackDefinition?: string;
  setbackUnitMaximum?: number;
  notification?: {
    title: string;
    body: string;
  };
}
