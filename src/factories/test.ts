// We also directly export all factories, using our "FakeTimestamp" class, for unit testing in this

import { makeFactories } from '.';
import { FakeTimestamp } from '../utils/FakeTimestamp';

// library
export const {
  applicationFactory,
  commentFactory,
  impulseFactory,
  timeLogFactory,
  motionLogFactory,
  recommendationFactory,
  debriefLogFactory,
  logSummaryFactory,
  successGameplanFactory,
  setbackGameplanFactory,
  profileFactory,
  supportGroupFactory,
  tacticFactory,
  recommendationRuleFactory,
} = makeFactories(FakeTimestamp);
