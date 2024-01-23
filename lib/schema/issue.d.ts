import { TimestampLike } from '../utils/TimestampLike';
export interface IssueValue {
    createdAt: TimestampLike;
    updatedAt: TimestampLike;
    parentId?: string;
    name: string;
    synonyms: Array<string>;
    unit: 'time' | 'custom';
    customUnit?: string;
    path?: string;
    parentIds: Array<string>;
    parentNames: Array<string>;
    recommendationsCount?: number;
    profileCount?: number;
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
