import { TimestampLike } from '../utils/TimestampLike';

// An 'issue' is a shared problem that we can all relate to. It's a way of preparing tactics
export interface IssueValue {
  createdAt: TimestampLike;
  updatedAt: TimestampLike;
  parentId?: string;
  name: string;
  // synonyms should also include name
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
  debrief?: {
    llmPrompt: string;
    suggestedTacticIds: Array<string>;
  };
}
