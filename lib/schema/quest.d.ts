import { Timestamp } from '../utils/Timestamp';
import { ImpulseLogValue } from './logs';
export interface ChallengeValue {
  uid: string;
  createdAt: Timestamp;
  name: string;
  ordinal: number;
  description: string;
  isGoal?: boolean;
  icon: string;
  completedAt?: Timestamp;
  patternId: string;
  measure: 'impulses' | 'motionLogs';
  dailyMinimum?: number;
  dailyMaximum?: number;
  days: number;
  datesById: {
    [key: string]: string;
  };
  eligibleDates: Array<string>;
  currentDayCount: number;
  requirements: {
    outcome: ImpulseLogValue['outcome'];
  };
}
