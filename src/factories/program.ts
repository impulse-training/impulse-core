import * as Factory from 'factory.ts';
import { ProgramValue } from '../schema';
import { TimestampLike } from '../utils/TimestampLike';

export const makeProgramFactory = (TimestampKlass: typeof TimestampLike) =>
  Factory.makeFactory<ProgramValue>({
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    uid: Factory.each(i => `impulse-recommendation-rule-${i}`),
    forIssueIds: [],
    issueNames: {},
    impulse: {
      tacticIds: [],
    },
    tacticsById: {},
    impulseDebrief: {
      tacticIds: [],
    },
    issueNamesSummary: '',
  });
