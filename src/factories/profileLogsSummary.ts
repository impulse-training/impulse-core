import * as Factory from 'factory.ts';
import { ProfileLogsSummaryValue } from '../schema';

export const profileLogsSummaryFactory =
  Factory.makeFactory<ProfileLogsSummaryValue>({
    '2024-01-01': {
      tactic1: {
        dataUnit: 'time',
        totalDataValue: 1,
        formattedTotalDataValue: '1 minute',
        optionId: 'tactic1',
        optionColor: 'blue',
        optionLabel: 'Tactic 1',
        optionTextColor: 'white',
      },
    },
  });
