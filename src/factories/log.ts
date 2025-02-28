import * as Factory from 'factory.ts';
import { UserLogValue } from '../schema/log/user';
import { TimestampLike } from '../utils/firestore/TimestampLike';

export const makeLogFactories = (TimestampKlass: typeof TimestampLike) => ({
  regularLogFactory: Factory.makeFactory<UserLogValue>({
    uid: '1',
    senderUid: Factory.each(i => i.toString()),
    type: 'user',
    role: 'user',
    isDisplayable: true,
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    behaviorData: {},
    metricData: {},
    tacticsData: {},
    date: TimestampKlass.now(),
    dateString: '2024-01-01',
  }),
});
