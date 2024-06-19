import { forEach } from 'lodash';
import { Lazy, Schema, ValidationError } from 'yup';
import { makeFactories } from '../../factories';
import {
  commentSchema,
  daySchema,
  folderSchema,
  logSchema,
  profileLogsSummarySchema,
  tacticSchema,
  timeRoutineSchema,
} from '../../schema';
import { questionTimeSchema } from '../../schema/question';
import { TimestampLike } from '../../utils/firestore/TimestampLike';

const factories = makeFactories(TimestampLike);

describe('factories', () => {
  forEach(factories, (factory, name) => {
    it(name, () => {
      const document = factory.build({});
      const snap = { id: 'abc123', data: () => document };
      const schema = schemaMap[name as keyof typeof factories];

      if (!schema)
        return console.log(
          'No schema exists for ' + name + ' factory - exiting'
        );

      try {
        const result = schema.validateSync(snap.data(), {
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

const schemaMap: Record<keyof typeof factories, null | Schema | Lazy<unknown>> =
  {
    profileLogsSummaryFactory: profileLogsSummarySchema,
    dayFactory: daySchema,
    applicationFactory: null,
    commentFactory: commentSchema,
    impulseFactory: logSchema,
    locationFactory: null,
    profileFactory: null,
    issueFactory: null,
    folderFactory: folderSchema,
    tacticFactory: tacticSchema,
    questionTimeFactory: questionTimeSchema,
    timeRoutineFactory: timeRoutineSchema,
  };
