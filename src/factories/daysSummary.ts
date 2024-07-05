import * as Factory from 'factory.ts';
import { DaysSummaryValue } from '../schema';
import { TimestampLike } from '../utils';

export const makeDaysSummaryFactory = (TimestampKlass: typeof TimestampLike) =>
  Factory.makeFactory<DaysSummaryValue>({
    '2024-01-01': {
      question1: {
        unit: 'time',
        numericValue: 1,
        setAt: TimestampKlass.now(),
        stringValue: '1 minute',
        // optionId: 'tactic1',
        // optionColor: 'blue',
        // optionLabel: 'Tactic 1',
        // optionTextColor: 'white',
      },
    },
  });
