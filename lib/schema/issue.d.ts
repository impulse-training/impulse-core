import { FakeTimestamp } from '../utils/FakeTimestamp';
export interface IssueValue {
    createdAt: FakeTimestamp;
    updatedAt: FakeTimestamp;
    name: string;
    synonyms: Array<string>;
    impulse: {
        llmPrompt: string;
        suggestedTacticIds: Array<string>;
    };
    success: {
        llmPrompt: string;
        suggestedTacticIds: Array<string>;
    };
    setback: {
        llmPrompt: string;
        suggestedTacticIds: Array<string>;
    };
}
