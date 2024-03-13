import { ValidationError } from 'yup';
import { factories } from '../../__tests__/factories';
import { programSchema } from '../program';

describe('program', () => {
  it('is valid without timestamps', () => {
    const program = factories.programFactory.build({
      createdAt: undefined,
      updatedAt: undefined,
    });

    let errors: Array<Error> = [];

    try {
      programSchema.validateSync(program, { abortEarly: false });
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
