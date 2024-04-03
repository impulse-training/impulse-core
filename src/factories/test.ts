// We also directly export all factories, using our "TimestampLike" class, for unit testing in this
import { makeFactories } from '.';
import { TimestampLike } from '../utils/TimestampLike';

export const {
  applicationFactory,
  commentFactory,
  impulseFactory,
  timeLogFactory,
  profileFactory,
  supportGroupFactory,
  tacticFactory,
} = makeFactories(TimestampLike);
