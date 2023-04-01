import { ChallengeValue } from '../schema';
import { LogValue } from '../schema/logs';
export declare class Challenge {
    private id;
    private data;
    constructor(id: string, data: ChallengeValue);
    get name(): string;
    processLog(logId: string, log: LogValue): {
        [key: string]: string;
    };
    recalculateProgress(): {
        datesCumulativeProgress: Record<string, number>;
        currentDayCount: number;
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
