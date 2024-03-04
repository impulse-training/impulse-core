import { forEach } from 'lodash';
import { Lazy, Schema, ValidationError } from 'yup';
import { makeFactories } from '../../factories';
import {
  commentSchema,
  gameplanSchema,
  impulseDebriefRecommendationRuleSchema,
  impulseRecommendationRuleSchema,
  logSchema,
  patternSchema,
  recommendationSchema,
  supportGroupSchema,
  tacticSchema,
  timeRecommendationRuleSchema,
} from '../../schema';
import { TimestampLike } from '../../utils/TimestampLike';

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
    applicationFactory: null,
    commentFactory: commentSchema,
    impulseFactory: logSchema,
    timeLogFactory: logSchema,
    motionLogFactory: logSchema,
    locationLogFactory: logSchema,
    recapLogFactory: logSchema,
    locationFactory: null,
    profileFactory: null,
    gameplanFactory: gameplanSchema,
    issueFactory: null,
    adminProfileFactory: null,
    supportGroupFactory: supportGroupSchema,
    messageFactory: null,
    patternFactory: patternSchema,
    impulseRecommendationFactory: recommendationSchema,
    impulseRecommendationRuleFactory: impulseRecommendationRuleSchema,
    impulseDebriefRecommendationRuleFactory:
      impulseDebriefRecommendationRuleSchema,
    timeRecommendationRuleFactory: timeRecommendationRuleSchema,
    tacticFactory: tacticSchema,
    measureTimeTacticFactory: tacticSchema,
    folderTacticFactory: tacticSchema,
  };
