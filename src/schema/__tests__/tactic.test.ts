import { tacticSchema, TacticValue } from '../tactic';

describe('tacticSchema', () => {
  it('is valid without a source file', () => {
    const tactic: TacticValue = {
      type: 'basic',
      prompt: 'Tactic 1',
      description: 'This is a tactic',
    };
    const result = tacticSchema.validate(tactic);
    expect(result).toBeDefined();
  });
});
