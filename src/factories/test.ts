// We also directly export all factories, using our "TimestampLike" class, for unit testing in this
import { makeFactories } from '.';
import { TimestampLike } from '../utils/TimestampLike';

export const {
  applicationFactory,
  commentFactory,
  impulseFactory,
  timeLogFactory,
  motionLogFactory,
  recapLogFactory,
  profileFactory,
  supportGroupFactory,
  tacticFactory,
  programFactory,
} = makeFactories(TimestampLike);
