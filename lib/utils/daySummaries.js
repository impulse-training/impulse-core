"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dayTotalBehaviorData = exports.dayAverageMetricData = void 0;
const lodash_1 = require("lodash");
const schema_1 = require("../schema");
const pluralize = require('pluralize');
function dayAverageMetricData(logsById) {
    // Loop over the day and average all happy-sad metrics
    const result = {};
    (0, lodash_1.forEach)(logsById, ({ log }) => {
        (0, lodash_1.forEach)(log.metricData || {}, (metric, metricKey) => {
            if (shouldSetMetric(metric, result[metricKey])) {
                result[metricKey] = metric;
            }
        });
    });
    return result;
}
exports.dayAverageMetricData = dayAverageMetricData;
function shouldSetMetric(newData, existingData) {
    // If this is the first metric for this day, set it
    if (!existingData)
        return true;
    if (newData.data.absoluteAttributeValue === undefined)
        return false;
    const existingAbsoluteIntensity = Math.abs(existingData.data.absoluteAttributeValue || 0);
    const newAbsoluteIntensity = Math.abs(newData.data.absoluteAttributeValue);
    return newAbsoluteIntensity > existingAbsoluteIntensity;
}
function dayTotalBehaviorData(logsById) {
    // The "result" is a memo for the current day. We accumulate data on each behavior.
    const result = {};
    // Traverse each log
    (0, lodash_1.forEach)(logsById, ({ log }) => {
        if (!log.behaviorData)
            return;
        // Traverse each behavior in the log
        (0, lodash_1.forEach)(log.behaviorData, ({ data, behavior }, behaviorId) => {
            if (!data)
                return;
            // First, we initialize the behavior if necessary
            if (!result[behaviorId]) {
                // We don't want to copy the entire gameplan for the behavior into every day summary entry
                const behaviorWithoutTacticsById = (0, lodash_1.merge)(behavior, { tacticsById: {} });
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
            result[behaviorId].data.formattedValue = pluralize(behavior.trackingUnit, data.counterValue, true);
        }
        if (data.timeSeconds) {
            result[behaviorId].data.formattedValue = (0, schema_1.formatSecondsInWords)(data.timeSeconds);
        }
        // Finally, add a label if necessary
        if (dailyLimit !== undefined && data.counterValue !== undefined) {
            if (data.counterValue >= dailyLimit) {
                result[behaviorId].data.label = { text: 'Setback', color: 'red' };
            }
            else {
                result[behaviorId].data.label = { text: 'Success', color: 'green' };
            }
        }
    }
    return result;
}
exports.dayTotalBehaviorData = dayTotalBehaviorData;
