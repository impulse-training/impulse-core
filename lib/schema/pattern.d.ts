import { FakeTimestamp } from '../utils/FakeTimestamp';
export interface PatternValue {
    uid: string;
    createdAt: FakeTimestamp;
    updatedAt: FakeTimestamp;
    name: string;
    ordinal: number;
    unit: 'time' | 'custom';
    customUnit?: string;
    supportGroupIds?: Array<string>;
    notification?: {
        title: string;
        body: string;
    };
    issueId?: string;
    sendWeeklyReports: boolean;
    gameplanId?: string;
    successGameplanId?: string;
    setbackGameplanId?: string;
    pastGameplanIds?: Array<string>;
}
export interface Usage {
    sliderValue: number;
    value: number;
    formattedValue: string;
}
