import * as Factory from 'factory.ts';
import { RegularLogValue } from '../schema/log/regular';
import { TimestampLike } from '../utils/firestore/TimestampLike';

export const makeLogFactories = (TimestampKlass: typeof TimestampLike) => ({
  regularLogFactory: Factory.makeFactory<RegularLogValue>({
    uid: '1',
    senderUid: Factory.each(i => i.toString()),
    type: 'regular',
    role: 'user',
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    behaviorData: {},
    emotionData: {},
    tacticsData: {},
    date: TimestampKlass.now(),
    dateString: '2024-01-01',
  }),
});
