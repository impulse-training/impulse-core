import { addDays, format, isBefore } from 'date-fns';
import { groupBy, identity, mapValues, unset, values } from 'lodash';
import { ChallengeValue, DATE_FORMAT } from '../schema';
import { ImpulseLogValue, LogValue } from '../schema/logs';
const pluralize = require('pluralize');

// A challenge is for a user to track a certain number of eligible logs over a certain time period.
// Logs may be eligible based on the outcome, type, or both. For example, a user might have a
// challenge to wear the impulse button for 5 days. Or, they might have a challenge to go 30 days
// with no setbacks.
export class Challenge {
  constructor(private id: string, private data: ChallengeValue) {}

  get name() {
    switch (this.data.type) {
      case 'button':
        return `Wear the impulse button for ${pluralize(
          'day',
          this.data.days,
          true
        )}`;
      case 'setbacks':
        return `Go without setbacks for ${pluralize(
          'day',
          this.data.days,
          true
        )}`;
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
  processLog(logId: string, log: LogValue) {
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
    const datesCumulativeProgress: Record<string, number> = {};

    for (let i = startDate.toDate(); isBefore(i, endDate); i = addDays(i, 1)) {
      const dateString = format(i, DATE_FORMAT);

      if (typeof countsByDate[dateString] !== 'number')
        countsByDate[dateString] = 0;

      const eligibile = this.isDayLogCountEligible(countsByDate[dateString]);

      // If we're eligible, then increment the day count. If we're not eligible, reset the current
      // day count if there's a requirement for consecutiveness. Otherwise, keep the count the same.
      dayCount = eligibile ? dayCount + 1 : consecutive ? 0 : dayCount;

      datesCumulativeProgress[dateString] = dayCount;
      if (dayCount >= days) break;
    }

    const currentDayCount = Math.min(days, dayCount);

    return { datesCumulativeProgress, currentDayCount, countsByDate };
  }

  private isLogEligible(log: LogValue) {
    const {
      requiredLogOutcome,
      requiredLogType,
      requiredLogPatternId,
      requiredLogTacticId,
    } = this.data;

    if (requiredLogType && requiredLogType !== log.type) return false;
    if (
      requiredLogOutcome &&
      requiredLogOutcome !== (log as ImpulseLogValue).outcome
    )
      return false;
    if (
      requiredLogPatternId &&
      !(log as ImpulseLogValue).patternIds?.includes(requiredLogPatternId)
    )
      return false;
    if (
      requiredLogTacticId &&
      !(log as ImpulseLogValue).tacticIds?.includes(requiredLogTacticId)
    )
      return false;

    return true;
  }

  // Add the log date to the object, indexed by its id
  private addlogDate(
    eligibleLogDatesById: ChallengeValue['eligibleLogDatesById'],
    logId: string,
    log: LogValue
  ) {
    return {
      ...eligibleLogDatesById,
      [logId]: format(log.startTime.toDate(), DATE_FORMAT),
    };
  }

  // Remove the property of the object for this log's id
  private removelogDate(
    eligibleLogDatesById: ChallengeValue['eligibleLogDatesById'],
    logId: string
  ) {
    unset(eligibleLogDatesById, logId);
    return eligibleLogDatesById;
  }

  private isDayLogCountEligible(count: number) {
    const { dailyMaximum, dailyMinimum } = this.data;

    if (typeof dailyMaximum === 'number' && count > dailyMaximum) return false;
    if (typeof dailyMinimum === 'number' && count < dailyMinimum) return false;
    return true;
  }

  // Get an object of counts of records by date
  private countsByDate() {
    const { eligibleLogDatesById } = this.data;

    return mapValues(
      groupBy(values(eligibleLogDatesById), identity),
      ary => ary.length
    );
  }
}