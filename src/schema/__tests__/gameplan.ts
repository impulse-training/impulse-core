import { ValidationError } from 'yup';
import { gameplanSchema } from '../gameplan';

describe('gameplan', () => {
  it("isn't valid with a time routine with no weekdays", () => {
    const gameplan = {
      time: {
        start: '10:00',
        end: '12:00',
        duration: 30,
        weekdays: [],
      },
    };

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
