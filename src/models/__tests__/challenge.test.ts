import { impulseFactory } from '../../factories';
import { challengeFactory } from '../../factories/challenge';
import { tacticsLogFactory } from '../../factories/logs';
import { ImpulseLogValue } from '../../schema';
import { LogValue } from '../../schema/logs';
import { Timestamp } from '../../utils/Timestamp';
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
      startDate: date,
      ordinal: 0,
      icon: 'test',
      days: 4,
      requiredLogType: 'impulse',
      eligibleLogDatesById: {},
      datesCumulativeProgress: {},
      currentDayCount: 0,
      isTemplate: false,
      consecutive: true,
    });

    describe('with an eligible log', () => {
      const log: ImpulseLogValue = impulseFactory.build({
        uid,
        createdAt: date,
        startTime: date,
        timezone: 'America/Bogota',
        patternIds: [],
        type: 'impulse',
        outcome: 'indeterminate',
      });

      it('returns the log date to the challenge', () => {
        const result = challenge.processLog('def456', log);
        expect(result).toEqual({
          eligibleLogDatesById: { def456: '2023-03-27' },
        });
      });
    });

    describe('with an ineligible log', () => {
      const log: LogValue = tacticsLogFactory.build({
        uid,
        createdAt: date,
        startTime: date,
      });

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
        startDate: date,
        ordinal: 0,
        icon: 'test',
        days: 3,
        requiredLogType: 'impulse',
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
          countsByDate: {
            '2023-03-24': 0,
            '2023-03-25': 1,
            '2023-03-26': 1,
            '2023-03-27': 1,
          },
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

  describe('name', () => {
    it('returns the right name for a button challenge with multiple days', () => {
      const date = Timestamp.fromDate(new Date('2023-03-28'));
      const challenge = new Challenge('id', {
        uid: 'abc123',
        type: 'button',
        createdAt: date,
        startDate: date,
        ordinal: 0,
        icon: 'test',
        days: 4,
        requiredLogType: 'impulse',
        eligibleLogDatesById: {},
        datesCumulativeProgress: {},
        currentDayCount: 0,
        isTemplate: false,
        consecutive: true,
      });

      expect(challenge.name).toEqual('Wear the impulse button for 4 days');
    });

    it('returns the right name for a button challenge for a single day', () => {
      const date = Timestamp.fromDate(new Date('2023-03-28'));
      const challenge = new Challenge('id', {
        uid: 'abc123',
        type: 'button',
        createdAt: date,
        startDate: date,
        ordinal: 0,
        icon: 'test',
        days: 1,
        requiredLogType: 'impulse',
        eligibleLogDatesById: {},
        datesCumulativeProgress: {},
        currentDayCount: 0,
        isTemplate: false,
        consecutive: true,
      });

      expect(challenge.name).toEqual('Wear the impulse button for 1 day');
    });
  });
});
