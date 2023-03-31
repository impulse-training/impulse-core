import { Timestamp } from '@google-cloud/firestore';
import { ImpulseLogValue, LogValue } from './logs';
export interface ChallengeValue {
    uid: string;
    createdAt: Timestamp;
    type: 'button' | 'tactic' | 'impulse-tactic' | 'setbacks';
    ordinal: number;
    description: string;
    icon: string;
    completedAt?: Timestamp;
    isTemplate: boolean;
    days: number;
    dailyMinimum?: number;
    dailyMaximum?: number;
    consecutive: boolean;
    logEligibilityRequirements: {
        type?: LogValue['type'];
        outcome?: ImpulseLogValue['outcome'];
        tacticId?: string;
    };
    eligibleLogDatesById: {
        [key: string]: string;
    };
    datesCumulativeProgress: Record<string, number>;
    currentDayCount: number;
}
