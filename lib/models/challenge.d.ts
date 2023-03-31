import { ChallengeValue } from '../schema';
import { LogValue } from '../schema/logs';
export declare class Challenge {
    private id;
    private data;
    private tacticName?;
    constructor(id: string, data: ChallengeValue, tacticName?: string | undefined);
    get name(): string;
    processLog(logId: string, log: LogValue): {
        eligibleLogDatesById: {
            [key: string]: string;
        };
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
