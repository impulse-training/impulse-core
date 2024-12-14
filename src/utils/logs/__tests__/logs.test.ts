import { logTextForGpt } from '..';
import { makeFactories } from '../../../factories';
import { TimestampLike } from '../../firestore/TimestampLike';

const { regularLogFactory } = makeFactories(TimestampLike);

describe(logTextForGpt, () => {
  describe('for a log that has answers to behaviors', () => {
    it('returns the correct payload', () => {
      const log = regularLogFactory.build({
        text: 'I messed up!',
        behaviorData: {
          behavior1: {
            behavior: {
              name: 'Time spent watching',
            },
            data: {
              stringValue: '3 hrs',
            },
          },
        },
      });
      const gptPayload = logTextForGpt(log);
      expect(gptPayload).toEqual('I messed up! Time spent watching: 3 hrs');
    });
  });
});
