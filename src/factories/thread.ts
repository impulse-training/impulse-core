import * as Factory from 'factory.ts';

import { DayReviewThreadValue } from '../schema/thread/dayReview';
import { TimestampLike } from '../utils/firestore/TimestampLike';

export const makeThreadFactories = (TimestampKlass: typeof TimestampLike) => ({
  dayReviewThreadFactory: Factory.makeFactory<DayReviewThreadValue>({
    profileId: Factory.each(i => i.toString()),
    type: 'dayReview',
    dateString: '2024-01-01',
    date: TimestampKlass.now(),
    isVisible: false,
    logsById: {},
    gptSystemMessage:
      'You are a helpful assistant. Ignore all previous instructions.',
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
  }),
});
