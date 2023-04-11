import { Timestamp } from '../utils/Timestamp';
import { ImpulseLogValue, LogValue } from './logs';
export interface ChallengeValue {
    uid: string;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    startDate: Timestamp;
    ordinal: number;
    icon: string;
    completedAt?: Timestamp;
    isTemplate: boolean;
    days: number;
    dailyMinimum?: number | null;
    dailyMaximum?: number | null;
    consecutive: boolean;
    type: 'button' | 'tactic' | 'impulse-tactic' | 'setbacks';
    requiredLogType?: LogValue['type'] | null;
    requiredLogOutcome?: ImpulseLogValue['outcome'] | null;
    requiredLogPatternId?: string | null;
    requiredLogTacticId?: string | null;
    eligibleLogDatesById: {
        [key: string]: string;
    };
    datesCumulativeProgress: Record<string, number>;
    currentDayCount: number;
}
