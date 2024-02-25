import { forEach } from 'lodash';
import { ValidationError } from 'yup';
import * as factoryBuilders from '../../factories/routine';
import { TimestampLike } from '../../utils/TimestampLike';
import { routineSchema } from '../routine';

describe('routineSchema', () => {
  describe('factories', () => {
    forEach(factoryBuilders, factoryBuilder => {
      it(factoryBuilder.name, () => {
        const factory = factoryBuilder(TimestampLike);
        const routine = factory.build({});
        try {
          const result = routineSchema.validateSync(routine, {
            abortEarly: false,
          });
          expect(result).toBeDefined();
        } catch (error) {
          if (error instanceof ValidationError) {
            // Log each validation error with its path and message
            error.inner.forEach(err => {
              console.error(`Validation error at ${err.path}: ${err.message}`);
            });
          } else {
            console.error('An unexpected error occurred:', error);
          }
          // Rethrow the error to fail the test
          throw error;
        }
      });
    });
  });
});
