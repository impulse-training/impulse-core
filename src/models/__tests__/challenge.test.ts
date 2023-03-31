import { Timestamp } from '@google-cloud/firestore';
import { challengeFactory } from '../../factories/challenge';
import { ImpulseLogValue } from '../../schema';
import { LogValue } from '../../schema/logs';
import { Challenge } from '../challenge';

describe('Challenge', () => {
  describe('processLog', () => {
    // Given a new log, update the dates of the challenge if applicable.
    const uid = 'abc123';
    const date = Timestamp.fromDate(new Date('2023-03-28'));
    const challenge = new Challenge('id', {
      uid: 'abc123',
      type: 'setbacks',
      createdAt: date,
      ordinal: 0,
      description: 'Do it',
      icon: 'test',
      days: 4,
      logEligibilityRequirements: {
        type: 'impulse',
      },
      eligibleLogDatesById: {},
      datesCumulativeProgress: {},
      currentDayCount: 0,
      isTemplate: false,
      consecutive: true,
    });
    describe('with an eligible log', () => {
      const log: ImpulseLogValue = {
        uid,
        createdAt: date,
        isDisplayable: true,
        startTime: date,
        timezone: 'America/Bogota',
        location: {
          latitude: 1,
          longitude: 1,
        },
        patternIds: [],
        locationIsFetching: false,
        type: 'impulse',
        outcome: 'indeterminate',
      };

      it('returns the log date to the challenge', () => {
        const result = challenge.processLog('def456', log);
        expect(result).toEqual({
          eligibleLogDatesById: { def456: '2023-03-27' },
        });
      });
    });

    describe('with an ineligible log', () => {
      const log: LogValue = {
        uid,
        createdAt: date,
        isDisplayable: true,
        startTime: date,
        timezone: 'America/Bogota',
        location: {
          latitude: 1,
          longitude: 1,
        },
        locationIsFetching: false,
        type: 'tactic',
        tactic: {} as any,
      };

      it('returns the eligibleLogDatesById object, unchanged', () => {
        const result = challenge.processLog('def456', log);
        expect(result).toEqual({
          eligibleLogDatesById: {},
        });
      });
    });
  });

  describe('recalculateProgress', () => {
    describe('with a set of dates', () => {
      const date = Timestamp.fromDate(new Date('2023-03-25'));
      const challenge = new Challenge('id', {
        type: 'button',
        uid: 'abc123',
        createdAt: date,
        ordinal: 0,
        description: 'Do it',
        icon: 'test',
        days: 3,
        logEligibilityRequirements: {
          type: 'impulse',
        },
        dailyMinimum: 1,
        eligibleLogDatesById: {
          abc123: '2023-03-25',
          def456: '2023-03-26',
          ghi789: '2023-03-27',
        },
        datesCumulativeProgress: {},
        currentDayCount: 0,
        consecutive: true,
        isTemplate: false,
      });

      it('writes the datesCumulativeProgress and currentDayCount properties', () => {
        const result = challenge.recalculateProgress();
        expect(result).toEqual({
          datesCumulativeProgress: {
            '2023-03-24': 0,
            '2023-03-25': 1,
            '2023-03-26': 2,
            '2023-03-27': 3,
          },
          currentDayCount: 3,
        });
      });
    });
  });

  describe('days', () => {
    describe('with a button challenge', () => {
      const challenge = new Challenge(
        'abc',
        challengeFactory.build({
          type: 'button',
        })
      );
      it('returns the right name', () => {
        expect(challenge.name).toEqual('Wear the impulse button for 5 days');
      });
    });

    describe('with a tactic challenge', () => {
      const challenge = new Challenge(
        'abc',
        challengeFactory.build({
          type: 'setbacks',
        })
      );
      it('returns the right name', () => {
        expect(challenge.name).toEqual('Go without setbacks for 5 days');
      });
    });
  });
});
