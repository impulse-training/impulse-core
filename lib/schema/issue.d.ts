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
    isFeatured?: boolean;
    impulse?: {
        llmPrompt: string;
        suggestedTacticIds: Array<string>;
    };
    impulseDebrief?: {
        llmPrompt: string;
        suggestedTacticIds: Array<string>;
    };
}
