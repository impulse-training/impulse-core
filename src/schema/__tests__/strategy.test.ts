import { ValidationError } from 'yup';
import { factories } from '../../__tests__/factories';
import { strategySchema } from '../strategy';

describe('strategy', () => {
  it('is valid without timestamps', () => {
    const strategy = factories.strategyFactory.build({
      createdAt: undefined,
      updatedAt: undefined,
    });

    let errors: Array<Error> = [];

    try {
      strategySchema.validateSync(strategy, { abortEarly: false });
    } catch (error) {
      if (error instanceof ValidationError) {
        error.inner.forEach(err => errors.push(err));
      } else {
        // Error is unexpected
        throw error;
      }
    }

    expect(errors.length).toEqual(0);
  });
});
