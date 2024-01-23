import { TimestampLike } from '../utils/TimestampLike';
import { ImpulseLogValue, LogValue } from './logs';
export interface ChallengeValue {
    uid: string;
    createdAt: TimestampLike;
    updatedAt: TimestampLike;
    startDate: TimestampLike;
    ordinal: number;
    icon: string;
    completedAt?: TimestampLike;
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
