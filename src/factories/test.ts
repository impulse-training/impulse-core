// We also directly export all factories, using our "TimestampLike" class, for unit testing in this

import { makeFactories } from '.';
import { TimestampLike } from '../utils/TimestampLike';

// library
export const {
  applicationFactory,
  commentFactory,
  impulseFactory,
  timeLogFactory,
  motionLogFactory,
  impulseRecommendationFactory,
  recapLogFactory,
  profileFactory,
  supportGroupFactory,
  tacticFactory,
  impulseRecommendationRuleFactory,
} = makeFactories(TimestampLike);
