import { StrategyValue } from '../schema';
export declare function sortStrategys(strategies: Array<{
    _data: StrategyValue;
    id: string;
}>, parentIssueIds: Array<string>): {
    _data: StrategyValue;
    id: string;
}[];
