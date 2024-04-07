import { impulseFactory, tacticFactory } from '../../factories/test';

describe('Log', () => {
  describe('strategies', () => {
    describe('with a multiple choice question tactic with a selected choice', () => {
      const questionTactic = tacticFactory.build({
        type: 'question-multiple-choice',
        title: 'How are you?',
        choices: {
          abc: {
            text: 'Sad',
            strategies: {
              strategy1: {
                ordinal: 1,
                type: 'impulse',
                name: 'Get moving',
                tacticIds: ['tactic2'],
              },
            },
          },
        },
      });
      const walkTactic = tacticFactory.build({
        title: 'Go for a walk',
      });
      const log = impulseFactory.build({
        tacticsById: {
          tactic1: questionTactic,
          tactic2: walkTactic,
        },
        tacticData: {
          tactic1: {
            value: 'strategy1',
          },
        },
      });
    });
  });
});
