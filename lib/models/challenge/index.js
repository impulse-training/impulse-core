"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Challenge = void 0;
const date_fns_1 = require("date-fns");
const lodash_1 = require("lodash");
const schema_1 = require("../schema");
const pluralize = require('pluralize');
// A challenge is for a user to track a certain number of eligible logs over a certain time period.
// Logs may be eligible based on the outcome, type, or both. For example, a user might have a
// challenge to wear the impulse button for 5 days. Or, they might have a challenge to go 30 days
// with no setbacks.
class Challenge {
    constructor(id, data) {
        this.id = id;
        this.data = data;
    }
    get name() {
        switch (this.data.type) {
            case 'button':
                return `Wear the impulse button for ${pluralize('day', this.data.days, true)}`;
            case 'setbacks':
                return `Go without setbacks for ${pluralize('day', this.data.days, true)}`;
            case 'tactic':
            case 'impulse-tactic':
                return `Use tactic for ${this.data.days} days`;
            default:
                return 'Unknown challenge';
        }
    }
    // Challenges are updated when log entries are added. With every log entry, we call this method,
    // and have new properties for the challenge returned. If the log was not eligible for the
    // challenge, then the existing eligibleLogDatesById are returned unchanged. Otherwise, we return
    // a new object of dates, with the log's date added to it.
    processLog(logId, log) {
        const { eligibleLogDatesById } = this.data;
        return this.isLogEligible(log)
            ? this.addlogDate(eligibleLogDatesById, logId, log)
            : this.removelogDate(eligibleLogDatesById, logId);
    }
    // This is run after every update to the quest that changes the dates by Id
    recalculateProgress() {
        const { startDate, consecutive, days } = this.data;
        const countsByDate = this.countsByDate();
        let endDate = new Date();
        let dayCount = 0;
        const datesCumulativeProgress = {};
        for (let i = startDate.toDate(); (0, date_fns_1.isBefore)(i, endDate); i = (0, date_fns_1.addDays)(i, 1)) {
            const dateString = (0, date_fns_1.format)(i, schema_1.DATE_FORMAT);
            if (typeof countsByDate[dateString] !== 'number')
                countsByDate[dateString] = 0;
            const eligibile = this.isDayLogCountEligible(countsByDate[dateString]);
            // If we're eligible, then increment the day count. If we're not eligible, reset the current
            // day count if there's a requirement for consecutiveness. Otherwise, keep the count the same.
            dayCount = eligibile ? dayCount + 1 : consecutive ? 0 : dayCount;
            datesCumulativeProgress[dateString] = dayCount;
            if (dayCount >= days)
                break;
        }
        const currentDayCount = Math.min(days, dayCount);
        return { datesCumulativeProgress, currentDayCount, countsByDate };
    }
    isLogEligible(log) {
        var _a, _b;
        const { requiredLogOutcome, requiredLogType, requiredLogPatternId, requiredLogTacticId, } = this.data;
        if (requiredLogType && requiredLogType !== log.type)
            return false;
        if (requiredLogOutcome &&
            requiredLogOutcome !== log.outcome)
            return false;
        if (requiredLogPatternId &&
            !((_a = log.patternIds) === null || _a === void 0 ? void 0 : _a.includes(requiredLogPatternId)))
            return false;
        if (requiredLogTacticId &&
            !((_b = log.tacticIds) === null || _b === void 0 ? void 0 : _b.includes(requiredLogTacticId)))
            return false;
        return true;
    }
    // Add the log date to the object, indexed by its id
    addlogDate(eligibleLogDatesById, logId, log) {
        return Object.assign(Object.assign({}, eligibleLogDatesById), { [logId]: (0, date_fns_1.format)(log.startTime.toDate(), schema_1.DATE_FORMAT) });
    }
    // Remove the property of the object for this log's id
    removelogDate(eligibleLogDatesById, logId) {
        (0, lodash_1.unset)(eligibleLogDatesById, logId);
        return eligibleLogDatesById;
    }
    isDayLogCountEligible(count) {
        const { dailyMaximum, dailyMinimum } = this.data;
        if (typeof dailyMaximum === 'number' && count > dailyMaximum)
            return false;
        if (typeof dailyMinimum === 'number' && count < dailyMinimum)
            return false;
        return true;
    }
    // Get an object of counts of records by date
    countsByDate() {
        const { eligibleLogDatesById } = this.data;
        return (0, lodash_1.mapValues)((0, lodash_1.groupBy)((0, lodash_1.values)(eligibleLogDatesById), lodash_1.identity), ary => ary.length);
    }
}
exports.Challenge = Challenge;