import * as Factory from 'factory.ts';
import { DaysSummaryValue, MetricIcons } from '../schema';
import { TimestampLike } from '../utils';

export const makeDaysSummaryFactory = (TimestampKlass: typeof TimestampLike) =>
  Factory.makeFactory<DaysSummaryValue>({
    dates: {
      '2024-01-01': {
        metrics: {
          'happy-sad': {
            attribute: {
              key: 'happy',
              name: 'Happy',
              icon: MetricIcons.Happy,
            },
            data: {
              absoluteAttributeValue: 4,
              metricInputValue: 4,
              label: 'Really happy',
            },
          },
        },
        behaviors: {
          behavior1: {
            behavior: {
              tacticsById: {},
              ordinal: 0,
              name: 'Watching youtube',
              trackingType: 'time',
              isHelpful: null,
            },
            data: {
              timeSeconds: 60,
              formattedValue: '1 minute',
            },
            // optionId: 'tactic1',
            // optionColor: 'blue',
            // optionLabel: 'Tactic 1',
            // optionTextColor: 'white',
          },
        },
      },
    },
  });
