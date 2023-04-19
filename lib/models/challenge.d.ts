import { ChallengeValue } from '../schema';
import { LogValue } from '../schema/logs';
import { FakeTimestamp } from '../utils/FakeTimestamp';
export declare class Challenge {
    private id;
    private data;
    private TimestampClass;
    constructor(id: string, data: ChallengeValue, TimestampClass: typeof FakeTimestamp);
    get name(): string;
    processLog(logId: string, log: LogValue): {
        [key: string]: string;
    };
    recalculateProgress(): {
        datesCumulativeProgress: Record<string, number>;
        currentDayCount: number;
        completedAt: FakeTimestamp | null;
        countsByDate: {
            [x: string]: number;
        };
    };
    private isLogEligible;
    private addlogDate;
    private removelogDate;
    private isDayLogCountEligible;
    private countsByDate;
}
