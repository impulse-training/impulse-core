// We also directly export all factories, using our "TimestampLike" class, for unit testing in this
import { makeFactories } from '.';
import { TimestampLike } from '../utils/firestore/TimestampLike';

export const {
  applicationFactory,
  commentFactory,
  impulseLogFactory,
  profileFactory,
  folderFactory,
  tacticFactory,
} = makeFactories(TimestampLike);
