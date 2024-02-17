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
  isFeatured?: boolean;
  impulse?: {
    llmPrompt: string;
    suggestedTacticIds: Array<string>;
  };
  debrief?: {
    llmPrompt: string;
    suggestedTacticIds: Array<string>;
  };
}

// TODO: for validation
// unit: Yup.mixed<'time' | 'custom'>().oneOf(['time', 'custom']).required(),
// customUnit: Yup.string().when('unit', (unit, schema) => {
//   return (unit as unknown as string) === 'custom'
//     ? schema.required('customUnit is required when unit is custom')
//     : schema.notRequired();
// }),
