import { ValidationError } from 'yup';
import { factories } from '../../__tests__/factories';
import { patternSchema } from '../pattern';

describe('pattern', () => {
  it("isn't valid without a question", () => {
    const pattern = factories.patternFactory.build({
      questionTactic: undefined,
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
    expect(errors[0].message).toEqual('questionTactic is a required field');
  });

  it("doesn't blow up when validating an empty object", () => {
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

    const errorMessages = errors.map(error => error.message);
    expect(errors.length).toBeGreaterThan(0);
    expect(errorMessages).toContain('questionTactic is a required field');
  });

  it('ensures that the question tactic has a type of question-time or question-counter', () => {
    const pattern = {
      questionTactic: { type: 'question?' },
    };

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

    const errorMessages = errors.map(error => error.message);
    expect(errors.length).toBeGreaterThan(0);
    expect(errorMessages).toContain(
      'questionTactic.type must be one of the following values: question-time, question-counter'
    );
  });
});
