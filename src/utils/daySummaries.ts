import { forEach, merge } from 'lodash';
import {
  DaysSummaryValue,
  DayValue,
  formatSecondsInWords,
  MetricAndMetricDataValue,
} from '../schema';

const pluralize = require('pluralize');

export function dayAverageMetricData(logsById: DayValue['logsById']) {
  // Loop over the day and average all happy-sad metrics
  const result: DaysSummaryValue['dates']['string']['metrics'] = {};

  forEach(logsById, ({ log }) => {
    forEach(log.metricData || {}, (metric, metricKey) => {
      if (shouldSetMetric(metric, result[metricKey])) {
        result[metricKey] = metric;
      }
    });
  });

  return result;
}

function shouldSetMetric(
  newData: MetricAndMetricDataValue,
  existingData: MetricAndMetricDataValue
) {
  // If this is the first metric for this day, set it
  if (!existingData) return true;

  if (newData.data.absoluteAttributeValue === undefined) return false;

  const existingAbsoluteIntensity = Math.abs(
    existingData.data.absoluteAttributeValue || 0
  );
  const newAbsoluteIntensity = Math.abs(newData.data.absoluteAttributeValue);
  return newAbsoluteIntensity > existingAbsoluteIntensity;
}

export function dayTotalBehaviorData(logsById: DayValue['logsById']) {
  // The "result" is a memo for the current day. We accumulate data on each behavior.
  const result: DaysSummaryValue['dates'][string]['behaviors'] = {};

  // Traverse each log
  forEach(logsById, ({ log }) => {
    if (!log.behaviorData) return;

    // Traverse each behavior in the log
    forEach(log.behaviorData, ({ data, behavior }, behaviorId) => {
      if (!data) return;

      // First, we initialize the behavior if necessary
      if (!result[behaviorId]) {
        // We don't want to copy the entire gameplan for the behavior into every day summary entry
        const behaviorWithoutTacticsById = merge(behavior, { tacticsById: {} });
        result[behaviorId] = {
          behavior: behaviorWithoutTacticsById,
          data: { formattedValue: '' },
        };
      }
      // Then, we add the data
      if (data.counterValue) {
        result[behaviorId].data.counterValue =
          data.counterValue + (result[behaviorId].data.counterValue || 0);
      }
      if (data.timeSeconds) {
        result[behaviorId].data.timeSeconds =
          data.timeSeconds + (result[behaviorId].data.timeSeconds || 0);
      }
    });
  });

  // Now, we summarize each behavior, adding back labels if necessary based on total value
  for (const behaviorId in result) {
    const { data, behavior } = result[behaviorId];
    const { dailyLimit } = behavior;

    if (data.counterValue) {
      // Add the formatted value, which is the counter value plus the pluralized behavior unit
      result[behaviorId].data.formattedValue = pluralize(
        behavior.trackingUnit,
        data.counterValue,
        true
      );
    }

    if (data.timeSeconds) {
      result[behaviorId].data.formattedValue = formatSecondsInWords(
        data.timeSeconds
      );
    }

    // Finally, add a label if necessary
    if (dailyLimit !== undefined && data.counterValue !== undefined) {
      if (data.counterValue! >= dailyLimit!) {
        result[behaviorId].data.label = { text: 'Setback', color: 'red' };
      } else {
        result[behaviorId].data.label = { text: 'Success', color: 'green' };
      }
    }
  }

  return result;
}
