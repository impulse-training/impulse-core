import { ValidationError } from 'yup';
import { factories } from '../../__tests__/factories';
import { patternSchema } from '../pattern';

describe('pattern', () => {
  it("isn't valid without a measure", () => {
    const pattern = factories.patternFactory.build({
      measureTactic: undefined,
    });

    let errors: Array<Error> = [];

    try {
      patternSchema.validateSync(pattern, { abortEarly: false });
    } catch (error) {
      if (error instanceof ValidationError) {
        error.inner.forEach(err => errors.push(err));
      } else {
        // Error is unexpected
        throw error;
      }
    }

    expect(errors.length).toEqual(1);
    expect(errors[0].message).toEqual('measureTactic is a required field');
  });

  it('derp', () => {
    const pattern = {};

    let errors: Array<Error> = [];

    try {
      patternSchema.validateSync(pattern, { abortEarly: false });
    } catch (error) {
      if (error instanceof ValidationError) {
        error.inner.forEach(err => errors.push(err));
      } else {
        // Error is unexpected
        throw error;
      }
    }

    expect(errors.length).toEqual(1);
    expect(errors[0].message).toEqual('measureTactic is a required field');
  });
});
