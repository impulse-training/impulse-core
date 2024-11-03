import * as Factory from 'factory.ts';
import { RegularLogValue } from '../schema/log/regular';
import { TimestampLike } from '../utils/firestore/TimestampLike';

export const makeLogFactories = (TimestampKlass: typeof TimestampLike) => ({
  regularLogFactory: Factory.makeFactory<RegularLogValue>({
    uid: '1',
    senderUid: Factory.each(i => i.toString()),
    type: 'regular',
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    date: TimestampKlass.now(),
    dateString: '2024-01-01',
    issueName: 'YouTube',
    completedTacticIds: [],
    tacticsById: {},
  }),
});
