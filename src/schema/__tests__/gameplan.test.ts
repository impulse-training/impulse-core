import { ValidationError } from 'yup';
import { factories } from '../../__tests__/factories';
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

    let errors: Array<Error> = [];

    try {
      gameplanSchema.validateSync(gameplan, { abortEarly: false });
    } catch (error) {
      if (error instanceof ValidationError) {
        error.inner.forEach(err => errors.push(err));
      } else {
        // Error is unexpected
        throw error;
      }
    }

    expect(errors.length).toEqual(1);
  });
});
