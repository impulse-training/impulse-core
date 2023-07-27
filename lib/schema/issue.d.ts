import { FakeTimestamp } from '../utils/FakeTimestamp';
export interface IssueValue {
    createdAt: FakeTimestamp;
    updatedAt: FakeTimestamp;
    name: string;
    suggestedTacticIds?: Array<string>;
}
