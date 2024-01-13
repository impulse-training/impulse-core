import { FakeTimestamp } from '../utils/FakeTimestamp';

// An 'issue' is a shared problem that we can all relate to. It's a way of preparing tactics
export interface IssueValue {
  createdAt: FakeTimestamp;
  updatedAt: FakeTimestamp;
  parentId?: string;
  name: string;
  // synonyms should also include name
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
