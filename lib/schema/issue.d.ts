import { FakeTimestamp } from '../utils/FakeTimestamp';
export interface IssueValue {
    createdAt: FakeTimestamp;
    updatedAt: FakeTimestamp;
    parentId?: string;
    name: string;
    synonyms: Array<string>;
    unit: 'time' | 'custom';
    customUnit?: string;
    parentIds: Array<string>;
    parentNames: Array<string>;
    recommendationsCount?: number;
    impulse?: {
        llmPrompt: string;
        suggestedTacticIds: Array<string>;
    };
    success?: {
        llmPrompt: string;
        suggestedTacticIds: Array<string>;
    };
    setback?: {
        llmPrompt: string;
        suggestedTacticIds: Array<string>;
    };
}
