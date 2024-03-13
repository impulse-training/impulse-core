import { factories } from '../../__tests__/factories';
import { getErrors } from '../../__tests__/utils';
import { tacticFactory } from '../../factories/test';
import { gameplanSchema } from '../gameplan';

describe('gameplan', () => {
  it("isn't valid with a time routine with no weekdays", () => {
    const gameplan = factories.gameplanFactory.build({
      time: {
        foobar: {
          hour: 20,
          minute: 0,
          weekdays: [],
          tacticIds: [],
          suggestedTacticIds: [],
          title: 'At 8pm',
        },
      },
    });

    const errors = getErrors(gameplan, gameplanSchema);
    expect(errors.length).toEqual(1);
  });

  it.only('is valid with an urge surfing tactic in tacticsById', () => {
    const gameplan = factories.gameplanFactory.build({
      tacticsById: {
        abc: tacticFactory.build({ type: 'urge-surfing' }),
      },
    });

    const errors = getErrors(gameplan, gameplanSchema);
    console.log({ errors });
    expect(errors.length).toEqual(0);
  });
});
