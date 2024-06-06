import * as Factory from 'factory.ts';
import { ProfileLogsSummaryValue } from '../schema';
import { TimestampLike } from '../utils';

export const makeProfileLogsSummaryFactory = (
  TimestampKlass: typeof TimestampLike
) =>
  Factory.makeFactory<ProfileLogsSummaryValue>({
    '2024-01-01': {
      tactic1: {
        unit: 'time',
        value: 1,
        formattedValue: '1 minute',
        optionId: 'tactic1',
        optionColor: 'blue',
        optionLabel: 'Tactic 1',
        optionTextColor: 'white',
      },
    },
  });
