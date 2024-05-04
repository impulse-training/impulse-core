import * as Factory from 'factory.ts';
import { DayLogsSummaryValue } from '../schema';

export const dayLogsSummaryFactory = Factory.makeFactory<DayLogsSummaryValue>({
  '2024-01-01': {
    type: 'impulse',
    hour: 8,
    minute: 0,
    tacticDataById: {},
    optionsById: {},
  },
});
