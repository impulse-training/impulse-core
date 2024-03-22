import * as Factory from 'factory.ts';
import { ProgramValue } from '../schema';
import { TimestampLike } from '../utils/TimestampLike';

export const makeProgramFactory = (TimestampKlass: typeof TimestampLike) =>
  Factory.makeFactory<ProgramValue>({
    title: 'Default',
    createdAt: TimestampKlass.now(),
    updatedAt: TimestampKlass.now(),
    forIssueIds: [],
    issueNamesSummary: '',
    issueNames: {},
    main: {
      tacticIds: [],
    },
    tacticsById: {},
  });
