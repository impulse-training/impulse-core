import { logTextForGpt } from '..';
import { makeFactories } from '../../../factories';
import { TimestampLike } from '../../firestore/TimestampLike';

const { messageLogFactory } = makeFactories(TimestampLike);

describe(logTextForGpt, () => {
  describe('for a log that has answers to questions', () => {
    it('returns the correct payload', () => {
      const log = messageLogFactory.build({
        text: 'I messed up!',
        questionsById: {
          question1: {
            prompt: 'Time spent watching',
          },
        },
        questionData: {
          question1: {
            stringValue: '3 hrs',
          },
        },
      });
      const gptPayload = logTextForGpt(log);
      expect(gptPayload).toEqual('I messed up! Time spent watching: 3 hrs');
    });
  });
});
