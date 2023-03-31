import { Timestamp } from '@google-cloud/firestore';
import { ImpulseLogValue, LogValue } from './logs';
export interface ChallengeValue {
    uid: string;
    createdAt: Timestamp;
    ordinal: number;
    description: string;
    icon: string;
    completedAt?: Timestamp;
    isTemplate: boolean;
    days: number;
    dailyMinimum?: number;
    dailyMaximum?: number;
    consecutive: boolean;
    type: 'button' | 'tactic' | 'impulse-tactic' | 'setbacks';
    requiredLogType?: LogValue['type'];
    requiredLogOutcome?: ImpulseLogValue['outcome'];
    requiredLogPatternId?: string;
    requiredLogTacticId?: string;
    eligibleLogDatesById: {
        [key: string]: string;
    };
    datesCumulativeProgress: Record<string, number>;
    currentDayCount: number;
}
